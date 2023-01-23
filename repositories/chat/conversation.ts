import generateRandomData from "../../mock-data/chat/conversation";
import { IConversation } from "../../models/chat/conversation";

export default class ConversationRepo {
  data: IConversation[];
  constructor() {
    this.data = generateRandomData(10);
  }
  getAll() {
    return this.data.sort((a, b) => b.unseen - a.unseen);
  }
}
