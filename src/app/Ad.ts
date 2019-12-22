import { User } from './User';

export class Ad {
  id: number;
  price: string;
  text: string;
  topic: string;
  telnum: string;
    user: User;
  // tslint:disable-next-line:variable-name
   user_id: number;
  // tslint:disable-next-line:variable-name
  constructor( id: number, topic: string, text: string, price: string, telnum: string, user_id: number) {
    this.id = id;
    this.topic = topic;
    this.telnum = telnum;
    this.text = text;
    this.user_id = user_id;
    this.price = price;
  }
}
