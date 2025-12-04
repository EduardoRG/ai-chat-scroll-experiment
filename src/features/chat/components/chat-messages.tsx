import { Message } from '@/features/messages/components/message';
import { useSelector } from '@/hooks/useSelector';
import { useInitMessaging } from '../hooks/use-init-messaging';
import { LLM_SCROLL_HELPER_CHAT_ID, LLM_SCROLL_HELPER_MUTATING_ID, useLLMScroll } from '../hooks/use-llm-scroll';

export const ChatMessages = () => {
  const messages = useSelector((state) => state.messages);
  const lastUserMessageKey = messages.filter((msg) => msg.author === 'user').slice(-1)[0]?.id ?? 'none';

  useInitMessaging();
  useLLMScroll();

  return (
    <div id={LLM_SCROLL_HELPER_CHAT_ID} className="max-w-3xl mx-auto flex flex-col gap-4 min-h-full">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div
        id={LLM_SCROLL_HELPER_MUTATING_ID}
        className="absolute opacity-0 top-0 left-0 w-0 h-0 pointer-events-none select-none"
      >
        {lastUserMessageKey}
      </div>
    </div>
  );
};
