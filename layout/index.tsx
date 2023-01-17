import { Button, Modal } from "@nextui-org/react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import React, { CSSProperties, useEffect, useState } from "react";
import Menu from "../components/menu";
// import { useSelector } from "react-redux/es/exports";
// import { AppState } from "../store";

export default function DefaultLayout({ children }: any) {
  // const gMenuValue = useSelector((state: AppState) => state.control.openMenu);
  const [modal, setModal] = useState<boolean>(false);
  const buttonStyle: CSSProperties = {
    border: "1px solid white",
  };
  // useEffect(() => {
  //   setModal(gMenuValue);
  // }, [gMenuValue]);
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
