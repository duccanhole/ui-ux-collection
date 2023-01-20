import ChatMenu from "../components/chat/chat-menu";
import useMedia from "../repositories/useMedia";

export default function () {
  const isMobile = useMedia("(max-width: 500px)");
  return (
    <>
      <main className="bg-gray-300">
        <div className="grid grid-cols-4">
          <div className="border-x-2 border-gray-400 max-[480px]:col-span-4 h-screen">
            <ChatMenu/>
          </div>
          <div className="border-2 border-black col-span-3 max-[480px]:invisible">this is chat room</div>
        </div>
      </main>
    </>
  );
}
