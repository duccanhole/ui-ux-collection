import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { NextPage } from "next";

const Document: NextPage<any> = (props) => (
  <Html lang="en">
    <Head> {CssBaseline.flush()}</Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
