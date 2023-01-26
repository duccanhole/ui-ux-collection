import { Card, Loading, Text } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { IConversationDetail } from "../../../models/chat/conversation";
import ConversationRepo from "../../../repositories/chat/conversation";

interface PropType {
  lastMess?: string;
  roomId: number;
}

export default function ChatBox({ lastMess, roomId }: PropType) {
  // declare variable
  const scrollBar = useRef<any>(null);
  const [prevId, setId] = useState<number>(roomId);
  const [loading, setLoading] = useState<boolean>(false);
  const chatMessage: IConversationDetail[] =
    new ConversationRepo().getConversationMessage(lastMess);
  if (roomId !== prevId) {
    alert("change");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setId(roomId);
  }
  useEffect(() => {
    scrollBar.current.scrollTop = scrollBar.current?.scrollHeight;
  }, [lastMess])
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
                  <Card variant="flat" className="max-w-lg m-2 w-fit">
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
      <div>loading: {String(loading)}</div>
    </>
  );
}
