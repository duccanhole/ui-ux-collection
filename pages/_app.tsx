import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import DefaultLayout from "../layout";

import store from "../store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <NextUIProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </NextUIProvider>
    </Provider>
  );
}
