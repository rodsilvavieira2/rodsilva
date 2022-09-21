import "@fontsource/roboto-slab";

import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "@components";
import { theme } from "@styles/theme";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
