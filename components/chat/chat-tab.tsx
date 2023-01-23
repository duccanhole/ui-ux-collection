import { Badge, Card, User } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IConversation } from "../../models/chat/conversation";
import ConversationRepo from "../../repositories/chat/conversation";
import ChatTabItem from "./chat-tab-item";

export default function ChatTab() {
  // declare variable
  const [conversationList, setConversationList] = useState<IConversation[]>([]);
  // first load
  useEffect(() => {
    setConversationList(new ConversationRepo().getAll());
  }, []);
  return (
    <div className="flex flex-col overflow-y-auto">
      {conversationList.map((item, index) => (
        <ChatTabItem key={index} conversation={item} />
      ))}
    </div>
  );
}
