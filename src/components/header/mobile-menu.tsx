import { whitId } from "helpers";
import { List as ListIcon } from "phosphor-react";
import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Stack,
  Link,
  useToken,
} from "@chakra-ui/react";

export const MobileMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  const [iconColor] = useToken("colors", ["text.primary"]);

  const links = whitId([
    {
      label: "Home",
      link: "/",
    },

    {
      label: "Sobre",
      link: "/#about",
    },

    {
      label: "Destaque",
      link: "/#highligh",
    },

    {
      label: "Currículo",
      link: "/#resume",
    },

    {
      label: "Projetos",
      link: "/#projects",
    },

    {
      label: "Habilidades",
      link: "/#skills",
    },
    {
      label: "Contato",
      link: "/#contact",
    },
  ]);

  return (
    <>
      <IconButton
        ref={btnRef}
        variant="outline"
        icon={<ListIcon fontWeight="bold" size={24} color={iconColor} />}
        aria-label="show drawer"
        onClick={onOpen}
        rounded="none"
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary.500" color="text.primary">
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <Stack as="nav" spacing={4}>
              {links.map(({ id, label, link }) => (
                <Link
                  key={id}
                  href={link}
                  _hover={{ bg: "primary.400" }}
                  _focus={{ bg: "primary.400" }}
                  px="3"
                  py="4"
                  rounded="md"
                  w="full"
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
