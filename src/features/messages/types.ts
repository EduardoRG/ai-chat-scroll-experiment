import { type Message as CoreMessage } from '@landbot/core';

export interface Message {
  id: string;
  type: CoreMessage['type'];
  content: string;
  author: 'user' | 'bot';
}
