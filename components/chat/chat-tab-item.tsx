import { Avatar, Badge } from "@nextui-org/react";
import { IConversation } from "../../models/chat/conversation";

export default function ChatTabItem({
  conversation,
}: {
  conversation: IConversation;
}) {
  const getAvatarName = (name: string) => {
    const nameArr = name.trim().split(" ");
    const lastName = nameArr[nameArr.length - 1];
    return lastName[0].toUpperCase();
  };
  const getLastMessage = (message: string) => {
    return message.length <= 15 ? message : message.slice(0, 15) + "...";
  };
  const getUnseen = (unseen: number) => {
    return unseen <= 5 ? unseen : "+5";
  };
  const getStatus: (status: string) => "success" | undefined = (
    status: string
  ) => {
    return status === "online" ? "success" : undefined;
  };
  return (
    <div className="flex my-2 px-2 py-3 hover:bg-gray-400/60 cursor-pointer">
      <div>
        <Badge
          color={getStatus(conversation.status)}
          content=""
          shape="circle"
          variant="dot"
          placement="bottom-right"
          size="lg"
        >
          <Avatar
            src={conversation.from.avatarSrc}
            text={getAvatarName(conversation.from.userName)}
            size="lg"
          />
        </Badge>
      </div>
      <div className="grow px-3">
        <div className="font-bold text-lg">{conversation.from.userName}</div>
        <p>{getLastMessage(conversation.lastMessage)}</p>
      </div>
      <div>
        <br />
        <span
          className={`bg-red-400 border-2 border-white/50 px-2 rounded-xl font-semibold text-red-800 float-right ${
            conversation.unseen === 0 ? "hidden" : ""
          }`}
        >
          {getUnseen(conversation.unseen)}
        </span>
      </div>
    </div>
  );
}
