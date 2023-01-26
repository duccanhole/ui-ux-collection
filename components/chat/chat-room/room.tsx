import { Badge, Button } from "@nextui-org/react";
import { FiMoreHorizontal, FiPhone, FiVideo } from "react-icons/fi";
import { IUser } from "../../../models/chat/conversation";
import ChatBox from "./chat-box";
import TopBar from "./top-bar";

interface PropType {
  user: IUser;
  status: string;
  lastMessage: string;
}

export default function Room({ user, status, lastMessage }: PropType) {
  return (
    <div className="w-full h-full flex flex-col">
      <TopBar status={status} user={user} />
      <ChatBox/>
    </div>
  );
}
