import { ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from '@/components/ui/input-group';
import { useChatActions } from '../hooks/use-chat-actions';

export const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useChatActions();

  const handleSendMessage = () => {
    sendMessage(message.trim());
    setMessage('');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <InputGroup>
        <InputGroupTextarea
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          value={message}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="default"
            className="rounded-full cursor-pointer"
            size="icon-sm"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <ArrowUp />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
