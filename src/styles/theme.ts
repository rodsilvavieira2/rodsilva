import { extendTheme } from "@chakra-ui/react";

import { Button, Heading, Text } from "./components";

export const theme = extendTheme({
  colors: {
    primary: {
      400: "#484848",
      500: "#121212",
      600: "#000000",
    },
    secondary: {
      500: "#ffffff",
      600: "#cccccc",
    },
    ascent: {
      400: "#e254ff",
      500: "#aa00ff",
      600: "#7200ca",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
      ascent: "#ffffff",
    },
  },
  shadows: {
    1: "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    2: "0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)",
    3: "0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)",
    4: "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  components: {
    Button,
    Heading,
    Text,
  },
  fonts: {
    heading: `"Roboto Slab", serif;`,
    body: `"Roboto Slab", serif;`,
  },
  styles: {
    global: {
      body: {
        bg: "primary.400",
      },
      "*::-webkit-scrollbar": {
        backgroundColor: "primary.400",
        w: "16px",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "primary.500",
        borderRadius: "0.2rem",
        boxShadow: 2,
      },
    },
  },
});
