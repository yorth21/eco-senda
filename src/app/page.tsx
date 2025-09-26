"use client";

import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import { Fragment, useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";
import { SendIcon } from "lucide-react";
import { Loader } from "@/components/ai-elements/loader";

import { CarnavalHeader } from "@/components/carnaval/header";
import { CarnavalMessage } from "@/components/carnaval/message-bubble";
import { EcoAside } from "@/components/carnaval/eco-aside";
import { FestiveBackground } from "@/components/carnaval/festive-background";

export default function ChatBotDemo() {
  const [input, setInput] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { messages, sendMessage, status } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (message: PromptInputMessage) => {
    if (!message.text?.trim()) {
      return;
    }
    sendMessage({ text: message.text });
    setInput("");
  };

  const handlePickTopic = (topic: string) => {
    setInput(topic);
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      setShowScrollButton(!isNearBottom && messages.length > 3);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "end"
      });
    }
  };

  // Scroll automático cuando cambian los mensajes
  useEffect(() => {
    const autoScrollToBottom = () => {
      if (messagesEndRef.current && messagesContainerRef.current) {
        const container = messagesContainerRef.current;
        const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
        
        if (isNearBottom || messages.length === 1) {
          messagesEndRef.current.scrollIntoView({ 
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
        }
      }
    };

    const timeoutId = setTimeout(autoScrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages.length]);

  return (
    <div className="min-h-screen relative bg-black text-white">
      <FestiveBackground />
      
      <div className="relative z-10 flex flex-col h-screen">
        <CarnavalHeader />
        
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col lg:mr-6">
            <div className="flex-1 px-4 sm:px-6 lg:px-8 pt-6">
              <div className="max-w-4xl mx-auto h-full">
                <div 
                  ref={messagesContainerRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent scroll-smooth relative"
                  role="log" 
                  aria-live="polite"
                  aria-label="Historial de conversación"
                >
                  <div className="space-y-4 pb-6 px-2">
                    {messages.length === 0 && (
                      <div className="flex items-center justify-center h-full min-h-[50vh]">
                        <div className="text-center animate-fade-in-up">
                          <div className="text-6xl mb-4">🎭</div>
                          <h2 className="text-2xl font-bold text-white mb-2">
                            ¡Bienvenido a la Guía Verde!
                          </h2>
                          <p className="text-white/70 max-w-md">
                            Celebra el Carnaval de Negros y Blancos de manera sostenible. 
                            Pregúntame sobre reciclaje, transporte, puntos verdes y más.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {messages.map((message) => (
                      <div key={message.id} className="animate-fade-in-up">
                        {message.parts.map((part, i) => {
                          if (part.type === "text") {
                            return (
                              <Fragment key={`${message.id}-${i}`}>
                                <CarnavalMessage role={message.role === "system" ? "assistant" : message.role}>
                                  <Response>{part.text}</Response>
                                </CarnavalMessage>
                              </Fragment>
                            );
                          }
                          return null;
                        })}
                      </div>
                    ))}
                    
                    {status === "streaming" && (
                      <div className="animate-fade-in-scale">
                        <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm bg-white/10 text-white border border-white/15 mr-auto relative">
                          <div className="text-xs font-medium mb-2 opacity-70 text-white/60">
                            Guía Verde
                          </div>
                          <Loader />
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                  
                  {showScrollButton && (
                    <button
                      type="button"
                      onClick={scrollToBottom}
                      className="absolute bottom-4 right-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 animate-fade-in-scale z-10"
                      aria-label="Ir al final de la conversación"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-white/15 bg-black/50 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-end gap-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/15 focus-within:border-emerald-400/50 transition-colors p-3">
                  <div className="flex-1">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          if (input.trim()) {
                            handleSubmit({ text: input });
                          }
                        }
                      }}
                      placeholder="Pregúntame sobre sostenibilidad en el Carnaval..."
                      className="w-full bg-transparent text-white placeholder:text-white/50 border-none outline-none resize-none focus-visible-strong rounded-lg p-2"
                      rows={1}
                      style={{ minHeight: '40px', maxHeight: '120px' }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (input.trim()) {
                        handleSubmit({ text: input });
                      }
                    }}
                    disabled={!input?.trim() || status === "streaming"}
                    className="flex-shrink-0 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white border-0 focus-visible-strong rounded-xl p-3 transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                  >
                    <SendIcon className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-80 xl:w-96 border-l border-white/15 bg-black/30 backdrop-blur-sm">
            <EcoAside onPickTopic={handlePickTopic} />
          </div>
        </div>
      </div>
    </div>
  );
}