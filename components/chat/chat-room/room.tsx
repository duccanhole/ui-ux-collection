import { Badge, Button } from "@nextui-org/react";
import { FiMoreHorizontal, FiPhone, FiVideo } from "react-icons/fi";
import { IUser } from "../../../models/chat/conversation";
import UserAvatar from "../user-avatar";

interface PropType {
  user: IUser;
  status: string;
  lastMessage: string;
}

export default function Room({ user, status, lastMessage }: PropType) {
  return (
    <div className="w-full h-full">
      <div className="flex bg-gray-200 py-1">
        <div className="px-2">
          <UserAvatar className="border-2 border-white" user={user} size="xl" />
        </div>
        <div className="grow pl-3">
          <div className="font-bold text-xl">{user.userName}</div>
          <Badge color={status === "online" ? "success" : undefined}>
            {status}
          </Badge>
        </div>
        <div className="flex">
          <Button
            className="text-black/80 mt-3"
            size="md"
            auto
            icon={<FiVideo size={26} />}
          />
          <Button
            className="text-black/80 mt-3"
            size="md"
            auto
            icon={<FiPhone size={26} />}
          />
          <Button
            className="text-black/80 mt-3 mr-12"
            size="md"
            auto
            icon={<FiMoreHorizontal size={26} />}
          />
        </div>
      </div>
    </div>
  );
}
