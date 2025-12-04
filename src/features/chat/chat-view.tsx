import { LandbotCoreProvider } from '@/components/landbot-core-provider';
import { ChatFooter } from './components/chat-footer';
import { ChatHeader } from './components/chat-header';
import { ChatMessages } from './components/chat-messages';
import { LLM_SCROLL_HELPER_SCROLLING_ELEMENT_ID } from './hooks/use-llm-scroll';

export const ChatView = () => {
  return (
    <LandbotCoreProvider configUrl="https://landbot.pro/v3/H-3264766-KWEIO45R3L3OYPE1/index.json">
      <div className="flex h-full flex-col">
        <div className="shrink-0">
          <ChatHeader />
        </div>
        <div id={LLM_SCROLL_HELPER_SCROLLING_ELEMENT_ID} className="flex-1 min-h-0 p-8 overflow-y-auto scroll-smooth">
          <ChatMessages />
        </div>
        <div className="shrink-0 px-8 pb-8">
          <ChatFooter />
        </div>
      </div>
    </LandbotCoreProvider>
  );
};
