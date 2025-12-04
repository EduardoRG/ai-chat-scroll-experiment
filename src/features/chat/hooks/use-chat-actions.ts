import { useCallback } from 'react';
import { useLandbotCore } from '@/components/landbot-core-provider';
import { addMessage } from '@/features/messages/messagesSlice';
import { fromUserMessage } from '@/features/messages/parsers';
import type { Message } from '@/features/messages/types';
import { useDispatch } from '@/hooks/useDispatch';

export const useChatActions = () => {
  const { landbotCore, loading } = useLandbotCore();
  const dispatch = useDispatch();

  const sendMessage = useCallback(
    (content: string) => {
      if (loading || !landbotCore) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        content,
        type: 'text',
        author: 'user',
      };

      landbotCore.sendMessage(fromUserMessage(userMessage));
      dispatch(addMessage(userMessage));
    },
    [dispatch, landbotCore, loading],
  );

  return { sendMessage };
};
