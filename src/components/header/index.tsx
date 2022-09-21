import { Flex } from "@chakra-ui/react";

import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      px="14"
      h="24"
      pos="sticky"
      alignItems="center"
      justifyContent="space-between"
      bg="primary.500"
      boxShadow="4"
    >
      <Logo />

      <MobileMenu />
    </Flex>
  );
};
