import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import DefaultLayout from "../layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </NextUIProvider>
  );
}
