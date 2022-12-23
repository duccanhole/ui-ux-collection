import { Button, Modal } from "@nextui-org/react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import React, { useState } from "react";
import Menu from "../components/menu";

export default function DefaultLayout({ children }: any) {
  const [modal, setModal] = useState<boolean>(false);
  const BtnStyle: React.CSSProperties = {
    position: "fixed",
    top: "10px",
    right: "10px",
  };
  const ModalStyle: React.CSSProperties = {
    backgroundColor: "rgb(66,66,66, 0.7)",
  };
  return (
    <>
      {!modal ? (
        <Button
          auto
          shadow
          color="primary"
          icon={<BsFillGrid3X3GapFill />}
          style={BtnStyle}
          onPress={() => {
            setModal(true);
          }}
        />
      ) : null}
      <Modal
        scroll
        fullScreen
        open={modal}
        style={ModalStyle}
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
