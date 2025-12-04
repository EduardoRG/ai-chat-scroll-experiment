import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useSelector } from '@/hooks/useSelector';
import { LLM_SCROLL_HELPER_HEADER_ID } from '../hooks/use-llm-scroll';

export const ChatHeader = () => {
  const avatarUrl = useSelector((state) => state.config.avatarUrl);
  const tagline = useSelector((state) => state.config.tagline);

  return (
    <div id={LLM_SCROLL_HELPER_HEADER_ID} className="flex items-center px-8 py-3 border-b">
      <div className="flex items-center">
        <Avatar className="rounded-xs">
          <AvatarImage src={avatarUrl} />
        </Avatar>
        <p className="text-md ml-5">{tagline}</p>
      </div>
    </div>
  );
};
