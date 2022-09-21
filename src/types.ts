import { SVGProps } from "react";

interface Url {
  githubUrl: string;
  web?: string;
  playStoreUrl?: string;
}

type ProjectType = "front-end" | "back-end" | "fullstack";

export type Technologies =
  | "react.js"
  | "next.js"
  | "nest.js"
  | "javascript"
  | "typescript"
  | "vue.js"
  | "firebase"
  | "vite"
  | "jest"
  | "node"
  | "styled-components"
  | "react-query"
  | "chakra-ui"
  | "framer-motion"
  | "redux"
  | "react-router"
  | "react-material"
  | "prismic"
  | "dayjs"
  | "axios"
  | "jwt"
  | "AWS"
  | "bcrypt"
  | "babel"
  | "cors"
  | "postgresSQL"
  | "express"
  | "prisma"
  | "class-validator"
  | "class-transform"
  | "docker"
  | "swagger"
  | "react-native"
  | "expo"
  | "react-hook-form";

export interface Project {
  title: string;
  type: ProjectType;
  description: string;
  previewUrl?: string;
  technologies: Array<{ label: Technologies }>;
  urls: Url;
}

export type ReactSvgProps = SVGProps<SVGSVGElement>;
