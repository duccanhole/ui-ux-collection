import { Badge, Card, User } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IConversation } from "../../models/chat/conversation";
import ConversationRepo from "../../repositories/chat/conversation";

export default function ChatTab() {
  // declare variable
  const [conversationList, setConversationList] = useState<IConversation[]>([]);
  // first load
  useEffect(() => {
    setConversationList(new ConversationRepo().getAll());
  }, []);
  return (
    <div className="flex flex-col justify-center">
      {conversationList.map((item, index) => (
        <Badge
          className="mt-3"
          color="error"
          placement="top-left"
          key={index}
          content={item.unseen}
          isInvisible={item.unseen === 0}
        >
          <Card isPressable variant="flat" className="bg-gray-200 mx-2">
            <Card.Body>
              <User
                size="lg"
                src={item.from.avatarSrc}
                name={item.from.userName}
                description={
                  item.lastMessage.length <= 25
                    ? item.lastMessage
                    : item.lastMessage.slice(0, 25) + "..."
                }
              />
            </Card.Body>
          </Card>
        </Badge>
      ))}
    </div>
  );
}
