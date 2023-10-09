import { Badge, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMoreHorizontal,
  FiPhone,
  FiVideo,
} from "react-icons/fi";
import { IUser } from "../../../models/chat/conversation";
import useMedia from "../../../repositories/useMedia";
import UserAvatar from "../user-avatar";

interface PropType {
  user: IUser;
  status: string;
}

export default function TopBar({ user, status }: PropType) {
  const isMobile = useMedia("(max-width: 480px)");
  const router = useRouter();
  const onGoBack = () => {
    router.back();
  };
  return (
    <div className="flex bg-sky-900 py-1 text-white">
      {isMobile ? (
        <div>
          <Button
            className="text-white mt-3"
            size="lg"
            auto
            icon={<FiChevronLeft size={30} />}
            onPress={onGoBack}
          />
        </div>
      ) : null}
      <div className="px-2">
        <UserAvatar user={user} size="xl" />
      </div>
      <div className="grow">
        <div className="font-bold text-xl">{user.userName}</div>
        <Badge color={status === "online" ? "success" : undefined}>
          {status}
        </Badge>
      </div>
      <div className="flex">
        <Button
          className="mt-3"
          size="md"
          auto
          icon={<FiVideo size={26} />}
        />
        <Button
          className="mt-3"
          size="md"
          auto
          icon={<FiPhone size={26} />}
        />
        <Button
          className="mt-3 mr-12"
          size="md"
          auto
          icon={<FiMoreHorizontal size={26} />}
        />
      </div>
    </div>
  );
}
