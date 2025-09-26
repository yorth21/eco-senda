"use client";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
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
import { CopyIcon } from "lucide-react";

import { Loader } from "@/components/ai-elements/loader";

const ChatBotDemo = () => {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    if (!message.text?.trim()) {
      return;
    }

    sendMessage({
      text: message.text,
    });
    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-screen">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                {message.parts.map((part, i) => {
                  if (part.type === "text") {
                    return (
                      <Fragment key={`${message.id}-${i}`}>
                        <Message from={message.role}>
                          <MessageContent>
                            <Response>{part.text}</Response>
                          </MessageContent>
                        </Message>
                        {message.role === "assistant" && (
                          <Actions className="mt-2">
                            <Action
                              onClick={() =>
                                navigator.clipboard.writeText(part.text)
                              }
                              label="Copiar"
                            >
                              <CopyIcon className="size-3" />
                            </Action>
                          </Actions>
                        )}
                      </Fragment>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
            {status === "streaming" && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4">
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Escribe tu mensaje..."
            />
          </PromptInputBody>
          <PromptInputToolbar>
            <PromptInputSubmit disabled={!input?.trim()} status={status} />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
};

export default ChatBotDemo;
