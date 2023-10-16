import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";
import ChatTab from "./chat-tab";
import FriendTab from "./friend-tab";
import SettingTab from "./setting-tab";

const buttonControl = [
  {
    icon: <FiMessageSquare size={24} />,
  },
  {
    icon: <FiUsers size={24} />,
  },
  {
    icon: <FiSettings size={24} />,
  },
];
const tabs = [<ChatTab />, <FriendTab />, <SettingTab />];

export default function ChatMenu() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-around bg-sky-900 py-3 border-y-2 border-gray-200">
        {buttonControl.map((item, index) => (
          <Button
            key={index}
            auto
            flat
            size="md"
            icon={item.icon}
            className={
              "mt-3 text-white " + (selectedTab === index ? "bg-sky-700" : "")
            }
            onPress={() => {
              setSelectedTab(index);
            }}
          />
        ))}
      </div>
      {tabs.map((item, index) => {
        if (index !== selectedTab) return null;
        return (
          <div className="overflow-y-auto grow bg-blue-100" key={"tab" + index}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
