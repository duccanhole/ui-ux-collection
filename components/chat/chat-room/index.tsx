import { Image } from "@nextui-org/react";

export default function ChatRoom() {
  return (
    <div className="flex h-full">
      <div className="m-auto">
        <Image width={500} src="/chat/bloom-man-chatroom.png" />
        <div className="text-center antialiased text-lg tracking-wide font-medium text-gray-700">More chat, more connect.</div>
      </div>
    </div>
  );
}
