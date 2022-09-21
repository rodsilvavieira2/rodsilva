import { technologiesLinks } from "config";
import {
  isValidMotionProp,
  motion,
  Variants,
  AnimatePresence,
} from "framer-motion";
import { whitId } from "helpers";
import Image from "next/image";
import {
  Diamond,
  CaretCircleDown,
  X,
  Browsers,
  GithubLogo,
  GooglePlayLogo,
  HardDrives,
  Code,
} from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  IconButton,
  Stack,
  Text,
  useToken,
  chakra,
  shouldForwardProp,
  Flex,
  UnorderedList,
  ListItem,
  useDisclosure,
  Link,
  Skeleton,
  BoxProps,
} from "@chakra-ui/react";
import { Project } from "@types";

const variants: Variants = {
  initial: {
    y: "100%",
    opacity: 0.1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0,
    },
  },
  exit: {
    y: "100%",
    opacity: 0.8,
    transition: {
      bounce: 0,
    },
  },
};

type MoreProps = Omit<Project, "title" | "previewUrl" | "urls" | "type"> & {
  isOpen: boolean;
  onClose: VoidFunction;
};

const MoreContent: React.FC<Omit<MoreProps, "isOpen">> = ({
  description,
  onClose,
  technologies,
}) => {
  const btnCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    btnCloseRef.current?.focus();
  }, []);

  return (
    <AnimatedBox
      pos="absolute"
      inset={0}
      bg="primary.400"
      boxShadow={2}
      zIndex={1}
      color="text.primary"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <Flex flexDir="column" h="full" w="full" minH={0}>
        <Flex bg="primary.400" boxShadow="1" py="2" px="3">
          <IconButton
            ml="auto"
            aria-label="close"
            icon={<X />}
            onClick={onClose}
            ref={btnCloseRef}
          />
        </Flex>

        <Stack flex={1} overflow="auto" px="3" pt="3" pb="5">
          <Stack>
            <Text textTransform="capitalize"> technology used</Text>

            <UnorderedList pl="5">
              {whitId(technologies).map(({ id, label }) => (
                <ListItem opacity={0.75} key={id}>
                  <Link
                    isExternal
                    href={technologiesLinks[label]}
                    alignItems="center"
                    display="flex"
                  >
                    {label}

                    <ExternalLinkIcon ml="1" />
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>

          <Stack>
            <Text textTransform="capitalize"> Description</Text>

            <Box>
              <Text opacity={0.75}>{description}</Text>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </AnimatedBox>
  );
};

const More: React.FC<MoreProps> = ({
  description,
  isOpen,
  onClose,
  technologies,
}) => (
  <AnimatePresence>
    {isOpen && (
      <MoreContent
        description={description}
        onClose={onClose}
        technologies={technologies}
      />
    )}
  </AnimatePresence>
);

interface ImageLoaderProps {
  alt: string;
  src?: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({ alt, src }) => {
  const [status, setStatus] = useState<"isLoading" | "isError" | "isLoaded">(
    "isLoading"
  );

  if (!src) return null;

  return (
    <Box flex={1} position="relative">
      <Image
        onError={() => setStatus("isError")}
        onLoad={() => setStatus("isLoaded")}
        src={status === "isError" ? "/project.svg" : src}
        alt={alt}
        objectFit="scale-down"
        layout="fill"
      />

      {status === "isLoading" && (
        <Skeleton
          startColor="primary.500"
          endColor="primary.400"
          flex={1}
          w="full"
          h="full"
          pos="absolute"
          inset={0}
        />
      )}
    </Box>
  );
};

const AnimatedBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

type ProjectCardProps = Project & {
  _innerContainer?: BoxProps;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  previewUrl,
  technologies,
  title,
  urls,
  type,
  _innerContainer,
}) => {
  const [textPrimary] = useToken("colors", ["text.primary"]);
  const { isOpen, onToggle } = useDisclosure();

  const typeIcon = {
    "back-end": <HardDrives size={24} />,
    "front-end": <Browsers size={24} />,
    fullstack: <Code size={24} />,
  };

  return (
    <Box p="2">
      <Box
        as="article"
        h="28.125rem"
        bg="primary.500"
        p="4"
        position="relative"
        overflow="hidden"
        color="text.primary"
        {..._innerContainer}
      >
        <Stack h="full">
          <Flex alignItems="center" justifyContent="space-between">
            <HStack alignItems="center">
              <Diamond color={textPrimary} size={24} />

              <Link
                href={urls.githubUrl}
                fontWeight={600}
                _hover={{ textDecoration: "underline" }}
                isExternal
              >
                {title}
              </Link>
            </HStack>

            {typeIcon[type]}
          </Flex>

          <ImageLoader alt={title} src={previewUrl} />

          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <HStack spacing={2}>
              <IconButton
                icon={<CaretCircleDown color={textPrimary} size={24} />}
                aria-label="view more"
                variant="outline"
                size="sm"
                onClick={onToggle}
              />

              <Text>Ver mais</Text>
            </HStack>

            <HStack>
              {urls.web && (
                <IconButton
                  variant="outline"
                  aria-label="see website"
                  icon={<Browsers size={24} />}
                  as={Link}
                  href={urls.web}
                  isExternal
                />
              )}

              {urls.githubUrl && (
                <IconButton
                  variant="outline"
                  aria-label="see on github"
                  href={urls.githubUrl}
                  isExternal
                  icon={<GithubLogo size={24} />}
                  as={Link}
                />
              )}

              {urls.playStoreUrl && (
                <IconButton
                  variant="outline"
                  aria-label="see on play store"
                  href={urls.playStoreUrl}
                  isExternal
                  icon={<GooglePlayLogo size={24} />}
                  as={Link}
                />
              )}
            </HStack>
          </Flex>
        </Stack>

        <More
          description={description}
          isOpen={isOpen}
          onClose={onToggle}
          technologies={technologies}
        />
      </Box>
    </Box>
  );
};
