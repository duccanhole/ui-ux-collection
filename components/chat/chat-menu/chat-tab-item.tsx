import { Badge } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { IConversation } from "../../../models/chat/conversation";
import useMedia from "../../../repositories/useMedia";
import { openRoomChat } from "../../../store/chatSlice";
import UserAvatar from "../user-avatar";

interface PropType {
  conversation: IConversation;
}

export default function ChatTabItem({ conversation }: PropType) {
  const router = useRouter();
  const isMobile = useMedia("(max-width:480px)");
  const dispatch = useDispatch();
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
  const onChatItemClick = () => {
    if (isMobile) router.push("/chat/" + conversation.id);
    else dispatch(openRoomChat(conversation));
  };
  return (
    <div
      className="flex my-2 px-2 py-3 hover:bg-gray-400/60 cursor-pointer"
      onClick={onChatItemClick}
    >
      <div>
        <Badge
          color={getStatus(conversation.status)}
          content=""
          shape="circle"
          variant="dot"
          placement="bottom-right"
          size="lg"
        >
          <UserAvatar user={conversation.from} />
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
