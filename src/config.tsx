import {
  CssDevIcon,
  FirebaseDevIcon,
  GitDevIcon,
  HtmlDevIcon,
  JavascriptDevIcon,
  NestjsDevIcon,
  NextjsDevIcon,
  NodeDevIcon,
  ReactDevIcon,
  SassDevIcon,
  SwaggerDevIcon,
  TypescriptDevIcon,
} from "icons";

import { Project, Technologies } from "@types";

export const projects: Project[] = [
  {
    type: "front-end",
    title: "Curriculum Fácil",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/easy-cv-site/main/.github/preview.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/easy-cv-site",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.easycv",
      web: "https://easy-cv.vercel.app/",
    },
    technologies: [
      {
        label: "chakra-ui",
      },
      {
        label: "typescript",
      },
      {
        label: "next.js",
      },
      {
        label: "node",
      },
      {
        label: "typescript",
      },
    ],
    description:
      "Este site foi feito para apresentar meu aplicativo no google play, Currículo Fácil, para android.",
  },
  {
    type: "front-end",
    title: "Chakra Dashboard",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/dashboard-chakra/master/public/preview/dashboard-dashgo.png",
    urls: {
      web: "https://roaring-wisp-9aa377.netlify.app",
      githubUrl: "https://github.com/rodsilvavieira2/dashboard-chakra",
    },
    technologies: [
      {
        label: "react.js",
      },
      {
        label: "typescript",
      },
      {
        label: "next.js",
      },
      {
        label: "javascript",
      },
      {
        label: "chakra-ui",
      },
      {
        label: "react-query",
      },
    ],
    description:
      "Um Dashboard construído com next.js, chakra-ui totalmente responsivo e react-query para gerenciar os dados do servidor sobre o estado da aplicação.",
  },
  {
    type: "front-end",
    title: "YouTube Clone",
    previewUrl:
      "https://github.com/rodsilvavieira2/youtube-clone/raw/master/screen-shots/home.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/youtube-clone",
    },
    technologies: [
      {
        label: "react.js",
      },
      {
        label: "typescript",
      },
      {
        label: "next.js",
      },
      {
        label: "javascript",
      },
      {
        label: "chakra-ui",
      },
      {
        label: "redux",
      },
      {
        label: "react-router",
      },
    ],
    description:
      "Uma implementação das páginas principais do YouTube com react e Redux.",
  },
  {
    type: "front-end",
    title: "WhatsApp Clone",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/whatsapp-clone-ui/master/public/assets/dark-theme-preview.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/whatsapp-clone-ui",
      web: "https://teal-shortbread-2028b9.netlify.app/",
    },
    technologies: [
      {
        label: "react.js",
      },
      {
        label: "redux",
      },
      {
        label: "javascript",
      },
      {
        label: "styled-components",
      },
      {
        label: "react-material",
      },
    ],
    description: "Um clone da interface de tema claro/escuro do WhatsApp",
  },
  {
    type: "front-end",
    title: "Codede Blog",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/blog-with-prismic/master/public/preview/home.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/blog-with-prismic",
      web: "https://blog-with-prismic.vercel.app/",
    },
    technologies: [
      {
        label: "react.js",
      },
      {
        label: "typescript",
      },
      {
        label: "javascript",
      },
      {
        label: "styled-components",
      },
      {
        label: "framer-motion",
      },
      {
        label: "axios",
      },
      {
        label: "prismic",
      },
      {
        label: "dayjs",
      },
    ],
    description:
      "Um blog é um bom exemplo de como usar os recursos do nextjs, este blog simples usa Prismic CMS e nextjs para construir páginas estáticas para cada post.",
  },
  {
    type: "front-end",
    title: "School portal",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/school-portal-vue/master/preview/page-home.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/school-portal-vue",
      web: "https://blog-with-prismic.vercel.app/",
    },
    technologies: [
      {
        label: "typescript",
      },
      {
        label: "javascript",
      },
      {
        label: "axios",
      },
      {
        label: "vue.js",
      },
      {
        label: "vite",
      },
    ],
    description:
      "Um painel escolar totalmente responsivo para alunos que usam vue.",
  },
  {
    type: "front-end",
    title: "Instagram Clone",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/instagram-clone-2/master/preview/home.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/instagram-clone-2",
      web: "https://lighthearted-horse-65bbcb.netlify.app/",
    },
    technologies: [
      {
        label: "react.js",
      },
      {
        label: "redux",
      },
      {
        label: "typescript",
      },
      {
        label: "framer-motion",
      },
      {
        label: "javascript",
      },
      {
        label: "react-router",
      },
      {
        label: "styled-components",
      },
    ],
    description: "Um clone do Instagram usando a tecnologia React.js",
  },
  {
    type: "front-end",
    title: "move.it",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/moveit/master/.github/moveit.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/moveit",
      web: "https://6269d1fe61d7222162425c39--shiny-seahorse-79cf44.netlify.app/",
    },
    technologies: [
      {
        label: "react.js",
      },
      {
        label: "javascript",
      },
    ],
    description:
      "Move.it é um app que combina a técnica Pomodoro com exercícios físicos para quem passa muito tempo em frente ao computador.",
  },
  {
    type: "back-end",
    title: "Rent cars",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/rent-cars/master/diagrama.png",
    urls: {
      githubUrl: "https://github.com/rodsilvavieira2/rent-cars",
    },
    technologies: [
      {
        label: "docker",
      },
      {
        label: "node",
      },
      {
        label: "javascript",
      },
      {
        label: "jest",
      },
      {
        label: "axios",
      },
      {
        label: "cors",
      },
      {
        label: "bcrypt",
      },
      {
        label: "dayjs",
      },
      {
        label: "AWS",
      },
      {
        label: "express",
      },
    ],
    description:
      "Este projeto é um aplicativo para aluguel de carros. Com um registo de cliente e automóvel, é possível alugar um automóvel a um cliente. Para o desenvolvimento do projeto foram utilizados os conceitos de SOLID e TDD, AWS CES para envio de emails ou Ethereum para testes locais, AWS S3 para armazenamento de arquivos ou localmente para desenvolvimento, Docker para geração de um ambiente de desenvolvimento mais completo e Sentry para monitoramento de erros.",
  },
  {
    type: "back-end",
    title: "Autenticação básica com JWT",
    previewUrl:
      "https://raw.githubusercontent.com/rodsilvavieira2/auth-with-express-solid-tdd/master/assets/database-diagram.png",
    urls: {
      githubUrl:
        "https://github.com/rodsilvavieira2/auth-with-express-solid-tdd",
    },
    technologies: [
      { label: "docker" },
      {
        label: "node",
      },
      {
        label: "docker",
      },
      {
        label: "javascript",
      },
      {
        label: "jest",
      },
      {
        label: "axios",
      },
      {
        label: "cors",
      },
      {
        label: "bcrypt",
      },
      {
        label: "dayjs",
      },
      {
        label: "express",
      },
      {
        label: "prisma",
      },
      {
        label: "class-transform",
      },
      {
        label: "class-validator",
      },
    ],
    description:
      "Uma implementação de autenticação básica com JWT. Usando os princípios SOLID, DDD, TDD.",
  },
];

type TechnologiesLinks = {
  [key in Technologies]: string;
};

export const technologiesLinks: TechnologiesLinks = {
  "chakra-ui": "https://chakra-ui.com/",
  "next.js": "https://nextjs.org/",
  "react-query": "https://tanstack.com/query/v4",
  "react.js": "https://reactjs.org/",
  "styled-components": "https://styled-components.com/",
  "vue.js": "https://vuejs.org/",
  firebase: "https://firebase.google.com/",
  javascript: "https://www.javascript.com/",
  jest: "https://jestjs.io/",
  node: "https://nodejs.org",
  vite: "https://vitejs.dev/",
  typescript: "https://www.typescriptlang.org/",
  "framer-motion": "https://www.framer.com/motion/",
  "react-router": "https://reactrouter.com/en/main",
  redux: "https://redux.js.org/",
  "react-material": "https://mui.com/",
  prismic: "https://prismic.io/",
  dayjs: "https://day.js.org/",
  axios: "https://axios-http.com/docs/intro",
  AWS: "https://aws.amazon.com/",
  jwt: "https://jwt.io/",
  babel: "https://babeljs.io/",
  bcrypt: "https://github.com/kelektiv/node.bcrypt.js",
  cors: "https://www.npmjs.com/package/cors",
  express: "https://expressjs.com/",
  postgresSQL: "https://www.postgresql.org/",
  "nest.js": "https://nestjs.com/",
  prisma: "https://www.prisma.io/",
  "class-validator": "https://www.npmjs.com/package/class-validator",
  "class-transform": "https://www.npmjs.com/package/class-transformer",
  docker: "https://www.docker.com/",
  swagger: "https://swagger.io/",
  "react-native": "https://reactnative.dev/",
  expo: "https://expo.dev/",
  "react-hook-form": "https://react-hook-form.com/",
};

export const highlightProject: Project = {
  previewUrl: "/feature-graphic -en.png",
  title: "Easy Resume",
  description:
    "Make professional resumes easily and efficiently, along with modern layouts that will make your information more attractive and organized, letting recruiters know exactly what your skills are.",
  technologies: [
    {
      label: "react-native",
    },
    {
      label: "javascript",
    },
    {
      label: "typescript",
    },
    {
      label: "expo",
    },
    {
      label: "firebase",
    },
    {
      label: "react-hook-form",
    },
  ],
  type: "fullstack",
  urls: {
    githubUrl: "https://github.com/rodsilvavieira2/easy-resume",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.easycv",
    web: "https://easy-cv.vercel.app/",
  },
};

export const mySkills = [
  {
    icon: <ReactDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "react",
  },
  {
    icon: <ReactDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "react native",
  },
  {
    icon: (
      <TypescriptDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />
    ),
    label: "typescript",
  },
  {
    icon: (
      <JavascriptDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />
    ),
    label: "javascript",
  },
  {
    icon: <HtmlDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "html",
  },
  {
    icon: <CssDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "css",
  },
  {
    icon: <SassDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "sass",
  },
  {
    icon: <FirebaseDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "firebase",
  },
  {
    icon: <NextjsDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "next.js",
  },
  {
    icon: <GitDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "git",
  },
  {
    icon: <NestjsDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "nest.js",
  },
  {
    icon: <NodeDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "Node",
  },

  {
    icon: <SwaggerDevIcon style={{ flexShrink: 0, height: 58, width: 58 }} />,
    label: "swagger.io",
  },
];
