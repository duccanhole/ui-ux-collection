import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IConversation } from "../../../models/chat/conversation";
import { AppState } from "../../../store";
import Room from "./room";

function useConservation() {
  const conversation = useSelector((state: AppState) => state.chat.data);
  const [conversationData, setConversationData] =
    useState<IConversation | null>(null);
  useEffect(() => {
    setConversationData(conversation);
  }, [conversation]);
  return conversationData;
}

export default function ChatRoom() {
  const conversationData = useConservation();
  return (
    <div className="flex h-full">
      {conversationData ? (
        <Room
          user={conversationData.from}
          status={conversationData.status}
          lastMessage={conversationData.lastMessage}
        />
      ) : (
        <div className="m-auto">
          <Image width={500} src="/chat/bloom-man-chatroom.png" />
          <div className="text-center antialiased text-lg tracking-wide font-medium text-gray-700">
            More chat, more connect.
          </div>
        </div>
      )}
    </div>
  );
}
