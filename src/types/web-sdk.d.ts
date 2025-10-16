declare module '@un360/web-sdk' {
  export const ChatWidget: React.ComponentType<{
    apiKey: string;
    clientId: string;
    apiBaseUrl: string;
    position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    theme?: {
      primaryColor?: string;
      secondaryColor?: string;
    };
    greetingMessage?: string;
    placeholder?: string;
    onMessageSent?: (message: string) => void;
    onChatOpen?: () => void;
    onChatClose?: () => void;
    // Add other props as needed
  }>;
}