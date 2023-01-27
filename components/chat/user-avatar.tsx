import { Avatar } from "@nextui-org/react";
import { IUser } from "../../models/chat/conversation";

interface PropType {
  user: IUser;
  size?: "lg" | "xs" | "md" | "xl" | "md";
  className?: string;
}

export default function UserAvatar({
  user,
  size = "lg",
  className = "",
}: PropType) {
  const getAvatarName = (name: string) => {
    const nameArr = name.trim().split(" ");
    const lastName = nameArr[nameArr.length - 1];
    return lastName[0].toUpperCase();
  };
  return (
    <Avatar
      className={className + " cursor-pointer"}
      src={user.avatarSrc}
      text={getAvatarName(user.userName)}
      size={size}
    />
  );
}
