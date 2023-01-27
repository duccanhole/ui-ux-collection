import { useRouter } from "next/router";
import Room from "../../components/chat/chat-room/room";
import { IConversation, IConversationDetail } from "../../models/chat/conversation";
import ConversationRepo from "../../repositories/chat/conversation";

export default function ChatIdPage() {
  const router = useRouter();
  const conversationData: IConversation =
    new ConversationRepo().getDetail(
      parseInt((router.query?.id as string) || "0")
    );
  return (
    <>
      <Room
        key={conversationData?.id}
        user={conversationData?.from}
        status={conversationData?.status}
        lastMessage={conversationData?.lastMessage}
        roomId={conversationData?.id}
      />
    </>
  );
}
