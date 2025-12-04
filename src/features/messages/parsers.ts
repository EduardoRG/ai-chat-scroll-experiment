import { type Message as CoreMessage, type SendingMessage } from '@landbot/core';
import { type Message } from './types';

export const toMessage = (message: CoreMessage): Message => {
  return {
    id: message.ui_key ?? message.key,
    type: message.type,
    content: message.rich_text ?? message.title ?? message.message,
    author: message.samurai !== undefined ? 'bot' : 'user',
  };
};

export const fromUserMessage = (message: Message): SendingMessage => {
  return {
    ui_key: message.id,
    type: message.type,
    message: message.content,
  };
};
