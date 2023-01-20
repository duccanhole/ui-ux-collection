import { IConversation } from "../../models/chat/conversation";

const conversations: IConversation[] = [
  {
    id: 1,
    from: {
      userName: "Ariana Wattson",
      avatarSrc: "https://i.pravatar.cc/",
    },
    unseen: Math.floor(Math.random() * 100),
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    from: {
      userName: "Jane Fisher",
      avatarSrc: "https://i.pravatar.cc/",
    },
    unseen: Math.floor(Math.random() * 100),
    lastMessage: "Lorem .",
  },
];

export default conversations;
