"use client";
import Image from "next/image";
import clubIcon from "../../../images/logo/club-logo-hd.png";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function AIActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 150);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`fixed bottom-5 right-5 z-50 bg-bc-red hover:bg-bc-red/90 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        } flex items-center justify-center`}
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {isOpen && <AIChat handleOpen={handleOpen} isClosing={isClosing} />}
    </>
  );
}

export type MessageData = {
  role: "user" | "assistant";
  typing: boolean;
  content: string;
};

const LinkRenderer = ({ href, children }: { href?: string; children?: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 underline"
  >
    {children}
  </a>
);

const convertUrlsToLinks = (text: string): string => {
  let result = text;

  // Pattern: "Discord (discord.gg/...)" or "Discord (https://discord.gg/...)"
  result = result.replace(/Discord\s*\((?:https?:\/\/)?discord\.gg\/[^\s\)]+\)/gi, '[Discord](https://discord.gg/C77eXN8bHT)');

  // Pattern: "WhatsApp (chat.whatsapp.com/...)" or "WhatsApp (https://chat.whatsapp.com/...)"
  result = result.replace(/WhatsApp\s*\((?:https?:\/\/)?chat\.whatsapp\.com\/[^\s\)]+\)/gi, '[WhatsApp](https://chat.whatsapp.com/ISU51DWQHSL0wQ7SoEAKa0)');

  // Pattern: standalone discord.gg URLs
  result = result.replace(/(?<!\[)(?:https?:\/\/)?discord\.gg\/[^\s\)\]]+/gi, '[Discord](https://discord.gg/C77eXN8bHT)');

  // Pattern: standalone chat.whatsapp.com URLs
  result = result.replace(/(?<!\[)(?:https?:\/\/)?chat\.whatsapp\.com\/[^\s\)\]]+/gi, '[WhatsApp](https://chat.whatsapp.com/ISU51DWQHSL0wQ7SoEAKa0)');

  // Pattern: clubs.brooklyn.cuny.edu signup
  result = result.replace(/(?:https?:\/\/)?clubs\.brooklyn\.cuny\.edu\/ComputerScienceClub\/club_signup/gi, '[club signup portal](https://clubs.brooklyn.cuny.edu/ComputerScienceClub/club_signup)');

  // Pattern: bccs.club
  result = result.replace(/(?<!\[)(?:https?:\/\/)?bccs\.club(?![\w\/])/gi, '[bccs.club](https://bccs.club)');

  return result;
};

export function AIChat({
  handleOpen,
  isClosing,
}: {
  handleOpen: () => void;
  isClosing: boolean;
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [disabledInput, setDisabledInput] = useState(false);
  const [isOpening, setIsOpening] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpening(false), 10);
    return () => clearTimeout(timer);
  }, []);

  async function handleForm(e: React.FormEvent) {
    e.preventDefault();
    setDisabledInput(true);
    if (message.trim() === "") return;
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

      // Handle error responses
      if (!response.ok) {
        let errorMessage = "Sorry, I can only help with BCCS club questions!";
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // If JSON parsing fails, use default message
        }
        setMessages((messages) => {
          const otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { role: "assistant", content: errorMessage, typing: false },
          ];
        });
        setDisabledInput(false);
        return;
      }

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
          setDisabledInput(false);
          break;
        }
      }
    } catch (error) {
      abortController.abort();
      console.log(error);
      setMessages((messages) => {
        let lastMessage = messages[messages.length - 1];
        let otherMessages = messages.slice(0, messages.length - 1);
        const errorMessage =
          "Sorry, I am not able to process your request at the moment.";
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
      setDisabledInput(false);
    }
  }

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 w-[380px] h-[500px] max-w-[calc(100vw-40px)] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 transition-all duration-150 origin-bottom-right ${
        isClosing || isOpening ? "scale-0 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{ transformOrigin: "bottom right" }}
    >
      <div className="flex items-center justify-between p-4 bg-bc-red text-white">
        <div className="flex items-center gap-3">
          <Image
            className="w-8 h-8 rounded-full bg-white p-0.5"
            src={clubIcon}
            alt="BCCS Logo"
          />
          <div>
            <h2 className="font-semibold text-sm">BCCS Assistant</h2>
            <p className="text-xs text-white/80">Ask me about the club!</p>
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
            <Image
              className="w-16 h-16 mb-4 opacity-50"
              src={clubIcon}
              alt="BCCS Logo"
            />
            <p className="font-medium text-gray-700">Hi! How can I help you?</p>
            <p className="text-sm mt-1">Ask me about events, joining, or resources</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <Image
                className="w-7 h-7 rounded-full mr-2 flex-shrink-0 mt-1"
                src={clubIcon}
                alt="Assistant"
              />
            )}
            {msg.typing ? (
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            ) : (
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm break-words overflow-hidden ${
                  msg.role === "user"
                    ? "bg-bc-red text-white rounded-tr-sm"
                    : "bg-white text-gray-800 rounded-tl-sm shadow-sm"
                }`}
                style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
              >
                <ReactMarkdown
                  components={{
                    a: LinkRenderer,
                  }}
                >
                  {convertUrlsToLinks(msg.content)}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-white border-t border-gray-200">
        <form onSubmit={handleForm} className="flex gap-2">
          <input
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={disabledInput}
            onInvalid={(e) => e.preventDefault()}
            autoFocus={true}
            className="flex-1 bg-gray-100 h-10 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-bc-red/50"
            placeholder="Type a message..."
            value={message}
            type="text"
          />
          <button
            type="submit"
            disabled={disabledInput}
            className="bg-bc-red hover:bg-bc-red/90 text-white h-10 w-10 rounded-full flex items-center justify-center disabled:opacity-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
        <p className="text-center text-[10px] text-gray-400 mt-2">
          AI may provide inaccurate info
        </p>
      </div>
    </div>
  );
}
