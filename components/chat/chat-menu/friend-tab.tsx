import { Input, Loading } from "@nextui-org/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function FriendTab() {
  const [searching, setSearching] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <div className="my-4 text-center">
        <Input
          placeholder="Search friend ..."
          contentRight={<FiSearch />}
          onKeyDown={() => {
            setSearching(true);
          }}
          onBlur={() => {
            setSearching(false);
          }}
        />
      </div>
      <div className="grow grid place-items-center">
        <div className="text-center">
          {searching ? (
            <Loading className="text-gray-600">searching...</Loading>
          ) : null}
        </div>
      </div>
    </div>
  );
}
