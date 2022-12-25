import { Button, Modal } from "@nextui-org/react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import React, { useState } from "react";
import Menu from "../components/menu";

export default function DefaultLayout({ children }: any) {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      {!modal ? (
        <Button
          auto
          shadow
          rounded
          className="fixed right-1 top-1 bg-blue-400 border-4 border-black z-50"
          icon={<BsFillGrid3X3GapFill />}
          onPress={() => {
            setModal(true);
          }}
        />
      ) : null}
      <Modal
        scroll
        fullScreen
        open={modal}
        className="bg-slate-500/75"
        onClose={() => {
          setModal(false);
        }}
      >
        <Menu
          onClose={() => {
            setModal(false);
          }}
        />
      </Modal>
      <div>{children}</div>
    </>
  );
}
