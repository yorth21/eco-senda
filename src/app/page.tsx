"use client";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  PromptInput,
  PromptInputBody,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
} from "@/components/ai-elements/prompt-input";
import { Actions, Action } from "@/components/ai-elements/actions";
import { Fragment, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";
import { CopyIcon, SendIcon } from "lucide-react";
import { Loader } from "@/components/ai-elements/loader";

import { CarnavalHeader } from "@/components/carnaval/header";
import { CarnavalMessage } from "@/components/carnaval/message-bubble";
import { EcoAside } from "@/components/carnaval/eco-aside";
import { FestiveBackground } from "@/components/carnaval/festive-background";

export default function ChatBotDemo() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

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

  return (
    <div className="min-h-screen relative bg-black text-white">
      <FestiveBackground />
      
      <div className="relative z-10 flex flex-col h-screen">
        <CarnavalHeader />
        
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col lg:mr-6">
            <div className="flex-1 px-4 sm:px-6 lg:px-8 pt-6">
              <div className="max-w-4xl mx-auto h-full">
                <Conversation className="h-full">
                  <ConversationContent className="space-y-4" role="log" aria-live="polite">
                    {messages.length === 0 && (
                      <div className="flex items-center justify-center h-full">
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
                                {message.role === "assistant" && (
                                  <div className="flex justify-start mb-4">
                                    <div className="max-w-[85%] sm:max-w-[75%]">
                                      <Actions className="mt-2">
                                        <Action
                                          onClick={() => navigator.clipboard.writeText(part.text)}
                                          label="Copiar"
                                          className="bg-white/10 hover:bg-white/20 border-white/15 text-white/70 hover:text-white transition-colors"
                                        >
                                          <CopyIcon className="size-3" />
                                        </Action>
                                      </Actions>
                                    </div>
                                  </div>
                                )}
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
                  </ConversationContent>
                  <ConversationScrollButton />
                </Conversation>
              </div>
            </div>

            <div className="border-t border-white/15 bg-black/50 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4">
              <div className="max-w-4xl mx-auto">
                <PromptInput onSubmit={handleSubmit} className="relative">
                  <PromptInputBody className="glass-subtle rounded-2xl border-white/15 focus-within:border-emerald-400/50 transition-colors">
                    <PromptInputTextarea
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                      placeholder="Pregúntame sobre sostenibilidad en el Carnaval..."
                      className="bg-transparent text-white placeholder:text-white/50 border-none resize-none focus:ring-0 focus-visible-strong"
                      rows={1}
                    />
                  </PromptInputBody>
                  <PromptInputToolbar className="p-2">
                    <PromptInputSubmit 
                      disabled={!input?.trim()} 
                      status={status} 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 focus-visible-strong rounded-xl px-4"
                    >
                      <SendIcon className="size-4" />
                    </PromptInputSubmit>
                  </PromptInputToolbar>
                </PromptInput>
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
