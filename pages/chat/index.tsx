import Head from "next/head";
import ChatMenu from "../../components/chat/chat-menu";
import ChatRoom from "../../components/chat/chat-room";

export default function () {
  return (
    <>
      <Head>
        <title>Chat app</title>
      </Head>
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
