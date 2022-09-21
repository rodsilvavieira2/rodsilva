import Image from "next/image";
import React from "react";

import { Box } from "@chakra-ui/react";

export const Logo: React.FC = () => {
  return (
    <Box h="16" w="20" position="relative">
      <Image src="/logo.svg" alt="rod." layout="fill" />
    </Box>
  );
};
