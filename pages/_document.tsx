import { Html, Head, Main, NextScript } from "next/document";
import DefaultLayout from "../layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <DefaultLayout>
          <Main />
          <NextScript />
        </DefaultLayout>
      </body>
    </Html>
  );
}
