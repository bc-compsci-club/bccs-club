import json
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import CSVLoader
from langchain_core.documents import Document
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_core.prompts import ChatPromptTemplate
from enum import Enum
import os

class ResourceType(Enum):
    COURSES = "courses"
    RESOURCES = "resources"

class Chat:
    files = ["./data/courses.json", "./data/resources.json"]
    documents: list[Document] = []
    def __init__(self):
        load_dotenv()
        self.llm = ChatOpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=os.environ["OPENROUTER_API_KEY"],
            temperature=0,
            model="meta-llama/llama-3.2-3b-instruct:free")
        self.vectorstore = InMemoryVectorStore(embedding=HuggingFaceEmbeddings(model_name="intfloat/multilingual-e5-large"))

    def initalize(self):
        print("Loading documents")
        for file in self.files:
            doc = self._prepareDocument(file)
            self.documents.extend(doc)
        print("Documents loaded")
        self.vectorstore.add_documents(self.documents)

    def response(self, content: str):
        vector_context = self.vectorstore.similarity_search(content, k=3)
        templete = ChatPromptTemplate([
            ("system", str("""
            > **Your role:** You are a Computer Science club assistant agent tasked with helping students find resources, classes, and events based on their specific queries.
            > **Task:** Use Retrieval Argmented Generation (RAG) to provide the top 3 most relevant resources, classes, or events based on the student's query.
            > **Process:**
            > 1. **Understand the query:** Carefully analyze the student's query to idnetify the main keywords and context (eg. classes, events, or resources).
            > 2. **Retrieve relevant information:** Search through a vast database of resources, classes and events to find the most pertinent data.
            > 3. **Generate a response:** Combine the retrieved information to create a concise and informative response that includes the top 3 most relavant information, along with brief summaries of their content. 
            > **Example Query:** "what is the 2025 Game Jam?"
            > **Example Response:** "Based on your query, here are the top 3 most relevant response to your questions:
            > 1. The 2025 Game Jam is an annual event that brings together game developers from around the world to collaborate and create innovative games. 
            > 2. You can learn more about the Game Jam by visiting the official website, joining the Discord server, or attending the virtual workshops.
            > 3. The Game Jam is open to all skill levels and provides a unique opportunity to showcase your talent, learn new skills, and connect with other game developers.
            
            **Additional Considerations:**
            * **Be concise:** Provide clear and concise responses to help students quickly find the information they need.
            * **Be Accurate:** Ensure that the information you provide is accurate and up-to-date to avoid confusion or misinformation.
            * **Be Informative:** Include relevant details and context to help students understand the significance of the resources, classes, or events.
            > - **Stay Relevant:** Ensure all information directly addresses the student's query and information provided is in the storage without deviating into unrelated topics.

            Must follow all the guidelines above, you can provide students with valuable information to help them make informed decisions.
                """)), ("system", "context:\n {user_context}"), ("user", "{user_input}")
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
            raise "File does not exist"
        headers = self._getDocumentHeaders(file_path)
        loader = CSVLoader(file_path.replace(".json", ".csv"), csv_args={"delimiter": ",", "quotechar": '"', 'fieldnames': headers})
        docs = loader.load()[1:]
        results = []
        for doc in docs:
            doc.metadata = self.parse_document(doc.page_content)
            doc.page_content = doc.page_content.replace("\u0000", "").encode("utf-8", "replace").decode("utf-8")
            results.append(doc)
        print(f"Loaded {len(results)} documents from {file_path}")
        return results
              

    def parse_document(self, document: str):
        lines = document.split("\n")
        data = {}
        for line in lines:
            if line.strip():
                key, value = line.split(":", 1)
                data[key.strip()] = value.strip()
                if value.strip().startswith("["):
                    data[key.strip()] = [item.strip().strip("'") for item in value.strip()[1:-1].split("', '")]
        return data


    def generateEmbedding(self, context: list[str]):
        embedding = HuggingFaceEmbeddings(model_name="intfloat/multilingual-e5-large")
        vector = embedding.embed_documents(context)
        return vector

    def _getDocumentHeaders(self, file_path):
        headers = []
        with open(file_path, 'r') as f:
            data = json.load(f)
            for resource in data:
                for items in data[resource]:
                    for key in items.keys():
                        if key not in headers:
                            headers.append(key)
        return headers
