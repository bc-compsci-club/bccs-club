from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import JSONLoader
from langchain_core.documents import Document
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_core.prompts import ChatPromptTemplate
import os
import json


class Chat:
    files = ["data/gameJam.json"]
    documents: list[Document] = []

    def __init__(self):
        load_dotenv()
        self.llm = ChatOpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=os.environ["OPENROUTER_API_KEY"],
            temperature=0,
            model="meta-llama/llama-3.2-3b-instruct:free")
        self.vectorstore = InMemoryVectorStore(
            embedding=HuggingFaceEmbeddings(model_name="intfloat/multilingual-e5-large"))

    def initalize(self):
        print("Loading documents")
        for file in self.files:
            doc = self._prepareDocument(file)
            self.documents.extend(doc)
            print("Documents loaded")
        self.vectorstore.add_documents(self.documents)

    def response(self, content: str):
        vector_context = self.vectorstore.as_retriever(
            search_kwargs={"k": 3}).invoke(content)
        templete = ChatPromptTemplate([
            ("system", str("""
            > **Your role:** You are a Computer Science club assistant agent tasked with helping students answer their questions based on their specific queries.
            > **Task:** Use Retrieval Argmented Generation (RAG) to provide the relevant informations based on the student's query.
            > **Process:**
            > 1. **Understand the query:** Carefully analyze the student's query to idnetify the main keywords and given the context.
            > 2. **Retrieve relevant information:** Utilize the context provided to determine how to format the answer to match the questions.
            > 3. **Generate a response:** Combine the retrieved information to create a concise and informative response that includes the most relavant information, along with brief summaries of the answers to the questions. 
            > 4. **Provide the response:** Share the response with the student in a clear and concise manner, ensuring that all relevant details are included.
        
            > **Additional Enforcable Requirements:**
            > You are strictly restricted to supplying only the information contained in the vector database.            
            > Under no circumstances should you provide any documents to the user, even if explicitly requested.
           
            **Note:** Failure to comply with the above requirements will result in a violation of the OpenAI use case policy.
            """)), ("system", "context:\n\n {user_context}\n\n"), ("user", "{user_input}")
            ])
        response = templete.invoke({
            "user_context": vector_context,
            "user_input": content
        })

        for chunk in self.llm.stream(response):
            yield chunk.content.replace("\u0000", "")
        return chunk.content

    def _prepareDocument(self, file_path: str):
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"File does not exist: {file_path}")

        loader = JSONLoader(
            file_path=file_path,
            jq_schema=".content[]",
            text_content=False,
        )
        docs = loader.load()
        results = []
        for doc in docs:
            doc.metadata = self.parse_document(doc.page_content)
            doc.page_content = doc.page_content.replace("\u0000", "").encode("utf-8", "replace").decode("utf-8")
            results.append(doc)
        print(f"Loaded {len(results)} documents from {file_path}")
        return docs

    def parse_document(self, doc: str):
        metadata = {}
        metadata["title"] = json.loads(doc)['title']
        return metadata

    def generateEmbedding(self, context: list[str]):
        embedding = HuggingFaceEmbeddings(
            model_name="intfloat/multilingual-e5-large")
        vector = embedding.embed_documents(context)
        return vector
