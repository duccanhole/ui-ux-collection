import { Button, Modal } from "@nextui-org/react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import React, { CSSProperties, useState } from "react";
import Menu from "../components/menu";

export default function DefaultLayout({ children }: any) {
  const [modal, setModal] = useState<boolean>(false);
  const buttonStyle: CSSProperties = {
    border: '1px solid white'
  }
  return (
    <>
      {!modal ? (
        <Button
          auto
          shadow
          className="fixed right-1 top-1 bg-blue-400 border-4 border-black z-50"
          icon={<BsFillGrid3X3GapFill />}
          style={buttonStyle}
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
