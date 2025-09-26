"use client";

import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import { Fragment, useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";
import { SendIcon } from "lucide-react";

import { CarnavalHeader } from "@/components/carnaval/header";
import { CarnavalMessage } from "@/components/carnaval/message-bubble";
import { EcoAside } from "@/components/carnaval/eco-aside";
import { FestiveBackground } from "@/components/carnaval/festive-background";

export default function ChatBotDemo() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
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

  // Scroll automático cada vez que cambian los mensajes
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 50);
    }
  }, [messages]);

  return (
    <div className="min-h-screen relative text-white cel-shading-chat">
      <FestiveBackground />
      
      <div className="relative z-10 flex flex-col h-screen pt-20">
        <CarnavalHeader />
        
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col min-h-0">
            {/* Área de mensajes con scroll en el contenedor completo */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
              role="log" 
              aria-live="polite"
              aria-label="Historial de conversación"
            >
              <div className="px-4 sm:px-6 lg:px-8 pt-8">
                <div className="max-w-4xl mx-auto">
                  <div className="space-y-6 pb-8">
                    {messages.length === 0 && (
                      <div className="flex items-center justify-center min-h-[50vh]">
                        <div className="text-center animate-fade-in-up">
                          <div className="text-6xl mb-4">🎭</div>
                          <h2 className="text-2xl font-bold titulo-seccion mb-2">
                            ¡Bienvenido a la Guía Verde!
                          </h2>
                          <p className="subtitulo-seccion max-w-md">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Input flotante en la parte inferior */}
            <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-4" style={{ background: 'transparent' }}>
              <div className="max-w-4xl mx-auto">
                <div className="floating-input-container">
                  <div className="floating-input-area flex items-end gap-4 rounded-2xl p-4">
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
                      className="floating-textarea w-full resize-none p-4 placeholder:text-gray-500"
                      rows={1}
                      style={{ minHeight: '50px', maxHeight: '120px' }}
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
                    className="floating-send-button flex-shrink-0 disabled:bg-gray-400 disabled:border-gray-500 disabled:cursor-not-allowed text-white focus-visible-strong p-3 disabled:hover:scale-100"
                  >
                    <SendIcon className="size-4" />
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-80 xl:w-96 cel-sidebar p-2">
            <EcoAside onPickTopic={handlePickTopic} />
          </div>
        </div>
      </div>
    </div>
  );
}