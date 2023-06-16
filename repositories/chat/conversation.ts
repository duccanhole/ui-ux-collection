import {
  contents,
  generateRandomData,
} from "../../mock-data/chat/conversation";
import {
  IConversation,
  IConversationDetail,
} from "../../models/chat/conversation";

const defaultData: IConversation = {
  from: {
    userName: "Null User",
    avatarSrc: "",
  },
  id: 0,
  lastMessage: "",
  unseen: 0,
  status: "offline",
};

export default class ConversationRepo {
  data: IConversation[];
  constructor() {
    this.data = generateRandomData(10);
  }
  getAll(): IConversation[] {
    return this.data.sort((a, b) => b.unseen - a.unseen);
  }
  getDetail(id: number): IConversation {
    return this.data.find((el) => el.id === id) ?? defaultData;
  }
  getConversationMessage(
    lastMessage: string = "hjalsjd"
  ): IConversationDetail[] {
    const randomLength = Math.floor(Math.random() * 30);
    const cMessData: IConversationDetail[] = [];
    for (let i = 0; i < randomLength; i++) {
      const randomMessage =
        contents[Math.floor(Math.random() * contents.length)];
      cMessData.push({
        from: Math.floor(Math.random() * 2) === 1 ? "me" : "other",
        message: randomMessage,
      });
    }
    cMessData.push({
      from: Math.floor(Math.random() * 2) === 1 ? "me" : "other",
      message: lastMessage,
    });
    return cMessData;
  }
}
