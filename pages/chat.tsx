import ChatMenu from "../components/chat/chat-menu";
import ChatRoom from "../components/chat/chat-room";
import useMedia from "../repositories/useMedia";

export default function () {
  const isMobile = useMedia("(max-width: 500px)");
  return (
    <>
      <main className="bg-gray-300">
        <div className="grid grid-cols-4">
          <div className="border-x-2 border-gray-200 max-[480px]:col-span-4 h-screen">
            <ChatMenu />
          </div>
          <div className="col-span-3 max-[480px]:invisible">
            <ChatRoom />
          </div>
        </div>
      </main>
    </>
  );
}
