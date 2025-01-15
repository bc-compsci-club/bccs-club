"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import clubIcon from "../../../images/logo/club-logo-hd.png"
import React, { Fragment, useState } from "react";
import ReactMarkdown, {} from "react-markdown";
export default function AIActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="relative sm:overflow-auto max-w-7xl z-50 scroll inset-0 mx-auto">
      <button
        onClick={() => handleOpen()}
        className={`bottom-5 right-5 fixed bg-bc-red hover:bg-bc-red/85 text-white font-bold py-2 px-4 rounded-xl ${
          isOpen ? "hidden" : "block"
        }`}
      >
        🤖
      </button>
      {isOpen && <AIChat open={isOpen} handleOpen={handleOpen} />}
    </div>
  );
}

export type MessageData = {
  role: "user" | "assistant";
  typing: boolean,
  content: string;
};

export function AIChat({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<MessageData[]>([]);
  const [disabledInput, setDisabledInput] = React.useState(false);

  function isScrolledToBottom(element: HTMLDivElement | null) {
    if (element) {
      element.scroll({ top: element.scrollHeight, behavior: "smooth" });
    }
  }

  async function handleForm(e: React.FormEvent) {
    e.preventDefault();
    setDisabledInput(true)
    if(message.trim() === "") return;
    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message, typing: false },
      { role: "assistant", content: "", typing: true },
    ]);
    const abortController = new AbortController();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/api/v1/llm`,
        {
          signal: abortController.signal,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            ...messages,
            { role: "user", content: message },
          ]),
        }
      );
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) return;
      while (true) {
        const { value, done } = await reader.read();
        const text = decoder.decode(value, { stream: true });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content:
                lastMessage.typing && lastMessage.content === ""
                  ? text
                  : lastMessage.content + text,
              typing: false,
            },
          ];
        });
        if (done) {
          setDisabledInput(false)
          break;
        }
        
      }
    } catch (error) {
      abortController.abort();
      console.log(error)
      setMessages((messages) => {
        let lastMessage = messages[messages.length - 1];
        let otherMessages = messages.slice(0, messages.length - 1);
        const errorMessage = "Sorry, I am not able to process your request at the moment.";
        return [
          ...otherMessages,
          {
            ...lastMessage,
            content:
              lastMessage.content === ""
                ? errorMessage
                : lastMessage.content + errorMessage,
            typing: false,
          },
        ];
      });
      setDisabledInput(false)
    }
  }
  return (
    <Transition appear show={open} as={Fragment}>
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <Dialog
        open={open}
        onClose={handleOpen}
        as="div"
        role="dialog"
        aria-modal="true"
        className={`w-full overflow-hidden h-full lg:w-3/4 lg:h-3/4 z-50  fixed mx-auto my-auto inset-0 lg:rounded-2xl bg-white shadow-lg`}
      >
        <div
          aria-hidden="true"
          className="fixed blur-2xl  inset-x-0 rotate-45 -top-60 -right-60 -z-10 flex transform-gpu justify-center overflow-hidden pointer-events-none"
        >
          <div
            style={{
              width: 1000,
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#454091] opacity-15"
          />
        </div>
        <div
          aria-hidden="true"
          className="fixed blur-2xl inset-x-0 rotate-45 -top-12 -right-20 -z-10 flex transform-gpu justify-center overflow-hidden pointer-events-none"
        >
          <div
            style={{
              width: 1000,
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#454091] opacity-15"
          />
        </div>
        <div
          aria-hidden="true"
          className="fixed blur-2xl inset-x-0 rotate-45 -bottom-12 -left-20 -z-10 flex transform-gpu justify-center overflow-hidden pointer-events-none"
        >
          <div
            style={{
              width: 1000,
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#454091] opacity-15"
          />
        </div>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Club Assistant</h2>
            <button
              onClick={handleOpen}
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            ref={isScrolledToBottom}
            className={`h-4/5 rounded overflow-x-hidden  ${
              messages.length > 0 ? "block" : "hidden"
            }`}
          >
            <div className="px-5 py-4 relative flex-col mt-4 flex gap-3">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 ${
                    message.role === "user" ? "justify-end" : ""
                  }`}
                >
                  <div className={`${message.role === "user" && "order-2"}`} />
                  {message.role !== "user" && (
                    <Image
                      className="w-8 h-8 flex  items-center justify-center rounded-full"
                      src={clubIcon}
                      alt="assistant profile"
                    />
                  )}
                  {message.typing && (
                    <div className="animate-typing flex items-center justify-center  gap-1">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  )}
                  <p
                    className={`${
                      message.role !== "user" ? "bg-none" : " bg-bc-red/15"
                    } rounded-lg p-2`}
                  >
                    <div>
                    <ReactMarkdown>
                      {message.content}
                    </ReactMarkdown>
                    </div>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={
              messages.length === 0
                ? "h-5/6 w-full flex items-center gap-2 flex-col justify-center"
                : "block"
            }
          >
            <div
              className={`${
                messages.length === 0
                  ? "w-full  overflow-hidden whitespace-nowrap flex items-center justify-center font-bold text-2xl"
                  : "hidden"
              }`}
            >
              What can I help you with?
            </div>
            <form className="w-full px-5" onSubmit={handleForm}>
              <input
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={disabledInput}
                onInvalid={(e) => e.preventDefault()}
                autoFocus={true}
                className=" bg-bc-red/10 focus h-12 my-5 rounded-xl px-10 w-full focus:outline-none"
                placeholder="Enter your message..."
                value={message}
                type="text"
              />
            </form>
            <p className="text-center bottom-0 md:text-sm text-xs items-center pb-5 text-gray-500">
              Please note: The AI bot may occasionally provide incorrect or
              outdated information.
            </p>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
