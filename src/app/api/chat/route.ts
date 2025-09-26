import { convertToModelMessages, UIMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"), // Modelo fijo configurado en el backend
    messages: convertToModelMessages(messages),
    system:
      "You are a helpful assistant that can answer questions and help with tasks",
  });

  return result.toUIMessageStreamResponse();
}
