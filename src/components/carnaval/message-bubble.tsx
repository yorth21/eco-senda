import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  className?: string;
}

export const MessageBubble = ({ role, content, className }: MessageBubbleProps) => {
  const isUser = role === "user";
  
  return (
    <div className={cn(
      "flex w-full",
      isUser ? "justify-end" : "justify-start",
      className
    )}>
      <div className={cn(
        "max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl",
        isUser 
          ? "bg-emerald-500/15 text-white border border-emerald-400/30 backdrop-blur-sm ml-auto" 
          : "bg-white/10 text-white border border-white/15 mr-auto"
      )}>
        {/* Indicador de rol */}
        <div className={cn(
          "text-xs font-medium mb-1 opacity-70",
          isUser ? "text-white/80" : "text-white/60"
        )}>
          {isUser ? "Tú" : "Guía Verde"}
        </div>
        
        {/* Contenido del mensaje */}
        <div className={cn(
          "text-sm leading-relaxed",
          isUser ? "text-white" : "text-white/90"
        )}>
          {content}
        </div>
        
        {/* Decoración esquina */}
        <div className={cn(
          "absolute w-2 h-2 transform rotate-45",
          isUser 
            ? "bg-emerald-400/20 -bottom-1 -right-1" 
            : "bg-white/10 -bottom-1 -left-1"
        )} />
      </div>
    </div>
  );
};

// Componente wrapper para integrar con ai-elements
interface CarnavalMessageProps {
  role: "user" | "assistant";
  children: React.ReactNode;
  className?: string;
}

export const CarnavalMessage = ({ role, children, className }: CarnavalMessageProps) => {
  const isUser = role === "user";
  
  return (
    <div className={cn(
      "flex w-full mb-4",
      isUser ? "justify-end" : "justify-start",
      className
    )}>
      <div className={cn(
        "max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 relative animate-cel-bounce",
        isUser 
          ? "cel-message-user" 
          : "cel-message-assistant"
      )}>
        {/* Indicador de rol */}
        <div className={cn(
          "text-xs font-bold mb-2",
          isUser ? "text-white/90" : "text-amber-700"
        )}>
          {isUser ? "Tú" : "Guía Verde"}
        </div>
        
        {/* Contenido renderizado por ai-elements */}
        <div className={cn(
          "prose prose-sm max-w-none",
          isUser 
            ? "prose-invert prose-headings:text-white prose-p:text-white prose-strong:text-white prose-code:text-white/90" 
            : "prose-headings:text-amber-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-code:text-amber-800"
        )}>
          {children}
        </div>
      </div>
    </div>
  );
};
