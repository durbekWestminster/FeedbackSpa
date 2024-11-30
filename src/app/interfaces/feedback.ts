import {Sender} from './sender';

export interface Feedback {
  id: number,
  title: string,
  content: string,
  sender: Sender
}
