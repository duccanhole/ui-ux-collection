import { Card, Loading, Text, Input, styled } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { IConversationDetail } from "../../../models/chat/conversation";
import ConversationRepo from "../../../repositories/chat/conversation";

interface PropType {
  lastMess?: string;
  roomId: number;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const SendBtn = styled("button", {
  backgroundColor: "#9ca3af",
  borderRadius: "$rounded",
  cursor: "pointer",
  padding: "15%",
  marginRight: "10px",
  "&:active": {
    transform: "translate(10px)",
  },
  "&:hover": {
    backgroundColor: "$primary",
  },
});

export default function ChatBox({ lastMess, roomId }: PropType) {
  // declare variable
  const scrollBar = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [chatMessage, setChatMessage] = useState<IConversationDetail[]>([]);
  const [message, setMessage] = useState<string>("");
  // first load
  useEffect(() => {
    async function getMessageData() {
      setLoading(true);
      setChatMessage(new ConversationRepo().getConversationMessage(lastMess));
      await sleep(1500);
      setLoading(false);
    }
    getMessageData();
  }, [roomId]);
  // logic
  const scrollToBottom = () => {
    scrollBar.current.scrollTop = scrollBar.current?.scrollHeight;
  };
  const onChatMessage = () => {
    if (message.trim() !== "")
      setChatMessage((prev) => [
        ...prev,
        {
          from: "me",
          message,
        },
      ]);
    setMessage("");
  };
  useEffect(() => {
    if (!loading) scrollToBottom();
  }, [loading, chatMessage]);
  return (
    <>
      <div className="grow overflow-y-auto">
        {loading ? (
          <div className="text-center flex flex-col justify-center h-full">
            <Loading>loading data...</Loading>
          </div>
        ) : (
          <div ref={scrollBar} className="h-full overflow-y-auto">
            {chatMessage.map((item, index) => {
              return (
                <div
                  key={index}
                  className={item.from === "other" ? "" : "flex justify-end"}
                >
                  <Card
                    variant="bordered"
                    className="max-w-lg m-2 w-fit"
                  >
                    <Card.Body>
                      <Text>{item.message}</Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="py-2">
        <Input
          className="bg-white"
          bordered
          color="primary"
          width="100%"
          contentRightStyling={false}
          value={message}
          contentRight={
            <SendBtn onClick={onChatMessage}>
              <FiSend />
            </SendBtn>
          }
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onChatMessage();
          }}
        />
      </div>
    </>
  );
}
