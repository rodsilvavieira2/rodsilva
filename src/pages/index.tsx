import { highlightProject, mySkills, projects } from "config";
import { whitId } from "helpers";
import { LinkedinDevIcon } from "icons";
import type { NextPage } from "next";
import Head from "next/head";
import { EnvelopeSimple } from "phosphor-react";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CvDownloadBtn, ProjectCard } from "@components";

const PresentationSection: React.FC = () => (
  <Flex
    id="presentation"
    as="section"
    alignItems="center"
    h="calc(100vh - 6rem)"
    px="8"
    background="url(/presentation-section.png)"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
  >
    <Stack w="full" spacing={8}>
      <Box
        p="3"
        border="2px solid"
        borderColor="text.primary"
        w="fit-content"
        rounded="sm"
      >
        <Text fontWeight="bold">Bem vindo ao meu site</Text>
      </Box>

      <Box>
        <Heading size="sm">Olá, eu sou</Heading>

        <Heading lineHeight="1.2" size="3xl" textTransform="uppercase">
          rodrigo silva
        </Heading>

        <Heading size="sm">Um desenvolvedor javascript Full Stack</Heading>
      </Box>
    </Stack>
  </Flex>
);

export const AboutSection: React.FC = () => (
  <Stack
    id="about"
    spacing={4}
    background="url(/presentation-section.png)"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    as="section"
    h="100vh"
    px="8"
    boxShadow="1"
    alignItems="center"
    justifyContent="center"
  >
    <Heading
      textAlign="center"
      textTransform="uppercase"
      textDecoration="underline"
      lineHeight="1.5"
    >
      Sobre
    </Heading>

    <Center>
      <Text textAlign="center" w={{ base: "100%", lg: "70%" }}>
        Eu sou um desenvolvedor javascript full stack, com experiência como
        freelancer para criação de sites e aplicativos Android. Tenho foco em
        sempre estar atualizado com as mais novas tendencias do mercado, com
        isso trago projetos modernos , com foco em acessibilidade,
        responsividade e performance.
      </Text>
    </Center>
  </Stack>
);

export const ResumeSection: React.FC = () => (
  <Stack
    id="resume"
    spacing={4}
    bg="primary.500"
    as="section"
    h="100vh"
    px="8"
    boxShadow="1"
    alignItems="center"
    justifyContent="center"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
  >
    <Heading
      textAlign="center"
      textTransform="uppercase"
      textDecoration="underline"
      lineHeight="1.5"
    >
      Currículo
    </Heading>

    <CvDownloadBtn />
  </Stack>
);

export const ProjectsSection: React.FC = () => {
  return (
    <Stack
      id="projects"
      spacing={4}
      background="url(/presentation-section.png)"
      as="section"
      minH="100vh"
      p={{ base: 2, md: 4, lg: 8 }}
      boxShadow="1"
      backgroundSize="contain"
      backgroundRepeat="repeat-y"
    >
      <Heading
        textAlign="center"
        textTransform="uppercase"
        textDecoration="underline"
        lineHeight="1.5"
      >
        Meus Projetos
      </Heading>

      <SimpleGrid
        minChildWidth={{ base: "100%", md: "50%", lg: "33.3333%" }}
        w="full"
        columns={3}
      >
        {whitId(projects).map(({ id, ...props }) => (
          <ProjectCard key={id} {...props} _innerContainer={{ boxShadow: 1 }} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <Stack
      id="skills"
      spacing={"14"}
      bg="primary.500"
      as="section"
      minH="100vh"
      px="8"
      boxShadow="1"
      alignItems="center"
      justifyContent="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Heading
        textAlign="center"
        textTransform="uppercase"
        textDecoration="underline"
        lineHeight="1.5"
      >
        Minhas habilidades
      </Heading>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="2.5rem"
      >
        {whitId(mySkills).map(({ icon, id, label }) => (
          <HStack key={id} flexShrink={0} alignItems="center">
            {icon}

            <Text flexShrink={0} textTransform="capitalize">
              {label}
            </Text>
          </HStack>
        ))}
      </Flex>
    </Stack>
  );
};

const HighlightSection: React.FC = () => {
  return (
    <Stack
      id="highligh"
      spacing={4}
      bg="primary.500"
      as="section"
      minH="100vh"
      p="8"
      boxShadow="1"
      backgroundSize="contain"
      backgroundRepeat="repeat-y"
      color="text.primary"
    >
      <Heading
        textAlign="center"
        textTransform="uppercase"
        textDecoration="underline"
        lineHeight="1.5"
      >
        Destaque
      </Heading>

      <Center>
        <Box
          maxW={{
            base: "100%",
            md: "70%",
            lg: "60%",
          }}
          w="100%"
          mx="auto"
        >
          <ProjectCard {...highlightProject} />
        </Box>
      </Center>
    </Stack>
  );
};

export const ContactSection: React.FC = () => {
  return (
    <Stack
      id="contact"
      spacing={4}
      background="url(/presentation-section.png)"
      as="section"
      minH="100vh"
      p="8"
      boxShadow="1"
      backgroundSize="contain"
    >
      <Heading
        textAlign="center"
        textTransform="uppercase"
        textDecoration="underline"
        lineHeight="1.5"
      >
        Meu Contatos
      </Heading>

      <HStack flex={1} justifyContent="center" spacing={10} flexWrap="wrap">
        <Link
          href="https://www.linkedin.com/in/rodrigo-silva-27a7a01b2"
          isExternal
        >
          <HStack>
            <LinkedinDevIcon width={64} height={64} />

            <Text textTransform="capitalize" fontWeight="bold">
              linkedin
            </Text>
          </HStack>
        </Link>

        <Link href="mailto:rodsilvavieira2@gmail.com" isExternal>
          <HStack>
            <EnvelopeSimple width={64} height={64} color="#ffffff" />

            <Text textTransform="capitalize" fontWeight="bold">
              e-mail
            </Text>
          </HStack>
        </Link>

        <Link href="https://wa.me/+55092986462015" isExternal>
          <HStack>
            <RiWhatsappFill size={64} color="#25D366" />

            <Text textTransform="capitalize" fontWeight="bold">
              whatsApp
            </Text>
          </HStack>
        </Link>
      </HStack>
    </Stack>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>rod.dev</title>
      </Head>

      <PresentationSection />

      <HighlightSection />

      <AboutSection />

      <ResumeSection />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />
    </>
  );
};

export default Home;
