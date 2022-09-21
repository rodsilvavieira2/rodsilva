import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  variants: {
    solid: {
      bg: "primary.500",
      color: "text.primary",
      _focus: {
        bg: "primary.400",
      },
      _hover: {
        bg: "primary.400",
      },
      rounded: "none",
    },
    outline: {
      border: "1px solid",
      borderColor: "text.primary",
      color: "text.primary",
      rounded: "none",
      _focus: {
        bg: "primary.400",
      },
      _hover: {
        bg: "primary.400",
      },
    },
  },
};

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    color: "text.primary",
  },
};

export const Text: ComponentStyleConfig = {
  baseStyle: {
    color: "text.primary",
  },
};
