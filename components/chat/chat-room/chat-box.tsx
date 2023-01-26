import { Card, Loading, Text } from "@nextui-org/react";
import { useState } from "react";
import { IConversationDetail } from "../../../models/chat/conversation";

export default function ChatBox() {
  const [loading, setLoading] = useState(false);
  const [chatMessage, setChatMessage] = useState<IConversationDetail[]>([]);
  return (
    <div className="grow">
      {loading ? (
        <div className="text-center flex flex-col justify-center h-full">
          <Loading>loading data...</Loading>
        </div>
      ) : (
        <div className="h-full">
          <div>
            <Card className="max-w-lg m-2 w-fit">
              <Card.Body>
                <Text>asdadasd</Text>
              </Card.Body>
            </Card>
          </div>
          <div className="flex justify-end">
            <Card className="max-w-lg m-2 w-fit">
              <Card.Body>
                <Text>asdadasd</Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="max-w-lg m-2 w-fit">
              <Card.Body>
                <Text>asdadasd</Text>
              </Card.Body>
            </Card>
          </div>
          <div>chat input</div>
        </div>
      )}
    </div>
  );
}
