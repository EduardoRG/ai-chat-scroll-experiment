import type { Message as MessageType } from '../types';

type MessageProps = {
  message: MessageType;
};

export const Message = ({ message }: MessageProps) => {
  if (message.author === 'user') {
    return (
      <div className="flex justify-end" data-author="user">
        <div className="inline-flex bg-muted py-2 px-4 rounded-sm max-w-10/12">
          <div>{message.content}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start" data-author="bot">
      <div className="inline-flex py-2 px-4 rounded-sm max-w-10/12 whitespace-pre-wrap">
        <div dangerouslySetInnerHTML={{ __html: message.content }} />
      </div>
    </div>
  );
};
