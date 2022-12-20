import { Button } from "@nextui-org/react";
import React from "react";

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Button color="primary">XX</Button> {children}
    </>
  );
}
