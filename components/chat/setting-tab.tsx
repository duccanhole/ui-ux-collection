import { Avatar, Button } from "@nextui-org/react";
import { FiBell, FiImage, FiKey, FiLock, FiLogOut } from "react-icons/fi";

export default function SettingTab() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center">
        <img
          className="rounded-full mx-auto my-5 border-2 border-gray-600"
          width={150}
          src="https://i.pravatar.cc"
        />
        <div className="font-semibold text-lg">Chaim Hampton</div>
      </div>
      <div className="my-3">
        <Button className="bg-blue-500 w-3/4 mx-auto">
          <FiImage className="mr-2" /> Change avatar
        </Button>
      </div>
      <div className="my-3">
        <Button bordered className="w-3/4 mx-auto">
          <FiKey className="mr-2" /> Change password
        </Button>
      </div>
      <div className="my-3">
        <Button bordered className="w-3/4 mx-auto">
          <FiBell className="mr-2" /> Notification manager
        </Button>
      </div>
      <div className="my-3">
        <Button bordered className="w-3/4 mx-auto">
          <FiLock className="mr-2" /> Privacy and Security
        </Button>
      </div>
      <div className="my-3">
        <Button bordered color="error" className="w-3/4 mx-auto">
          <FiLogOut className="mr-2" /> Log out
        </Button>
      </div>
    </div>
  );
}
