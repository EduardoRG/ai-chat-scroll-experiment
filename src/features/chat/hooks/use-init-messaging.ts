import { useEffect } from 'react';
import { useLandbotCore } from '@/components/landbot-core-provider';
import { addMessage } from '@/features/messages/messagesSlice';
import { toMessage } from '@/features/messages/parsers';
import { useDispatch } from '@/hooks/useDispatch';
import { type Message as CoreMessage } from '@landbot/core';

export const useInitMessaging = () => {
  const { landbotCore, loading } = useLandbotCore();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading || !landbotCore) return;

    const subscription = landbotCore.pipelines.$readableSequence.subscribe((message: CoreMessage) => {
      dispatch(addMessage(toMessage(message)));
    });

    landbotCore.init();

    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch, landbotCore, loading]);
};
