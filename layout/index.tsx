import { Button, Modal } from "@nextui-org/react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import React, { useState } from "react";

export default function DefaultLayout({ children }: any) {
  const [modal, setModal] = useState<boolean>(false);
  const style: React.CSSProperties = {
    position: "fixed",
    top: "10px",
    right: "10px",
  };
  return (
    <>
      <Button
        auto
        shadow
        color="primary"
        icon={<BsFillGrid3X3GapFill />}
        style={style}
        onClick={() => {
          alert('click');
          setModal(true);
        }}
      ></Button>
      <Modal
        open={modal}
        onClose={() => {
          setModal(false);
        }}
      >
        <Modal.Header>Tesst</Modal.Header>
        <Modal.Body>asdas</Modal.Body>
      </Modal>
      {children}
    </>
  );
}
