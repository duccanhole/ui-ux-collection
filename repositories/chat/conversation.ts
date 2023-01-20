import conversations from "../../mock-data/chat/conversation";
import { IConversation } from "../../models/chat/conversation";

export default class ConversationRepo {
  data: IConversation[];
  constructor() {
    this.data = conversations;
  }
  getAll() {
    return this.data.sort((a, b) => b.unseen - a.unseen);
  }
}
