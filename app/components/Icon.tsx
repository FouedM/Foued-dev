import React, { JSX } from "react";
import JavascriptPlainIcon from "@devicon/react/javascript/plain";
import TypescriptPlainIcon from "@devicon/react/typescript/plain";
import JavaPlainIcon from "@devicon/react/java/plain";
import SolidityPlainIcon from "@devicon/react/solidity/plain";
import RustOriginalIcon from "@devicon/react/rust/original";
import Html5PlainIcon from "@devicon/react/html5/plain";
import Css3PlainIcon from "@devicon/react/css3/plain";
import ReactOriginalIcon from "@devicon/react/react/original";
import TailwindcssOriginalIcon from "@devicon/react/tailwindcss/original";
import D3jsPlainIcon from "@devicon/react/d3js/plain";
import NextjsPlainIcon from "@devicon/react/nextjs/plain";
import DeviconPlainIcon from "@devicon/react/devicon/plain";
import ReduxOriginalIcon from "@devicon/react/redux/original";
import AngularjsPlainIcon from "@devicon/react/angularjs/plain";
import BootstrapPlainIcon from "@devicon/react/bootstrap/plain";
import VitejsPlainIcon from "@devicon/react/vitejs/plain";
import NodejsPlainIcon from "@devicon/react/nodejs/plain";
import ExpressOriginalWordmarkIcon from "@devicon/react/express/original-wordmark";
import FeathersjsOriginalIcon from "@devicon/react/feathersjs/original";
import NestjsOriginalIcon from "@devicon/react/nestjs/original";
import GraphqlPlainIcon from "@devicon/react/graphql/plain";
import MongodbPlainIcon from "@devicon/react/mongodb/plain";
import PostgresqlPlainIcon from "@devicon/react/postgresql/plain";
import RedisPlainIcon from "@devicon/react/redis/plain";
import ElasticsearchPlainIcon from "@devicon/react/elasticsearch/plain";
import MongooseOriginalIcon from "@devicon/react/mongoose/original";
import PrismaOriginalIcon from "@devicon/react/prisma/original";
import SupabasePlainIcon from "@devicon/react/supabase/plain";
import CypressioPlainIcon from "@devicon/react/cypressio/plain";
import PlaywrightPlainIcon from "@devicon/react/playwright/plain";
import SeleniumOriginalIcon from "@devicon/react/selenium/original";
import CucumberPlainIcon from "@devicon/react/cucumber/plain";
import JestPlainIcon from "@devicon/react/jest/plain";
import VitestPlainIcon from "@devicon/react/vitest/plain";
import MochaPlainIcon from "@devicon/react/mocha/plain";
import DockerPlainIcon from "@devicon/react/docker/plain";
import GitPlainIcon from "@devicon/react/git/plain";
import GithubOriginalIcon from "@devicon/react/github/original";
import AzurePlainIcon from "@devicon/react/azure/plain";
import JenkinsPlainIcon from "@devicon/react/jenkins/plain";
import LinuxPlainIcon from "@devicon/react/linux/plain";
import NginxOriginalIcon from "@devicon/react/nginx/original";
import JiraPlainIcon from "@devicon/react/jira/plain";
import FigmaPlainIcon from "@devicon/react/figma/plain";
import PostmanPlainIcon from "@devicon/react/postman/plain";
import {
  BookOpenText,
  BriefcaseBusiness,
  Cog,
  Languages,
  SquareChartGantt,
  Database,
} from "lucide-react";

type IconProps = {
  type: string;
  color?: string;
  size?: string;
};

const buildMap = (
  color?: string,
  size?: string,
): Record<string, JSX.Element | React.ReactNode> => ({
  Javascript: <JavascriptPlainIcon size={size ?? "2em"} color={color} />,
  Typescript: <TypescriptPlainIcon size={size ?? "2em"} color={color} />,
  Java: <JavaPlainIcon size={size ?? "2em"} color={color} />,
  Solidity: <SolidityPlainIcon size={size ?? "2em"} color={color} />,
  Rust: <RustOriginalIcon size={size ?? "2em"} color={color} />,
  HTML5: <Html5PlainIcon size={size ?? "2em"} color={color} />,
  CSS3: <Css3PlainIcon size={size ?? "2em"} color={color} />,
  React: <ReactOriginalIcon size={size ?? "2em"} color={color} />,
  Reactnative: <ReactOriginalIcon size={size ?? "2em"} color={color} />,
  Tailwind: <TailwindcssOriginalIcon size={size ?? "2em"} color={color} />,
  D3js: <D3jsPlainIcon size={size ?? "2em"} color={color} />,
  Nextjs: <NextjsPlainIcon size={size ?? "2em"} color={color} />,
  Remix: <DeviconPlainIcon size={size ?? "2em"} color={color} />,
  Redux: <ReduxOriginalIcon size={size ?? "2em"} color={color} />,
  Angularjs: <AngularjsPlainIcon size={size ?? "2em"} color={color} />,
  Bootstrap: <BootstrapPlainIcon size={size ?? "2em"} color={color} />,
  Vitejs: <VitejsPlainIcon size={size ?? "2em"} color={color} />,
  Nodejs: <NodejsPlainIcon size={size ?? "2em"} color={color} />,
  Express: <ExpressOriginalWordmarkIcon size={size ?? "2em"} color={color} />,
  Feathersjs: <FeathersjsOriginalIcon size={size ?? "2em"} color={color} />,
  Nestjs: <NestjsOriginalIcon size={size ?? "2em"} color={color} />,
  Graphql: <GraphqlPlainIcon size={size ?? "2em"} color={color} />,
  Mongodb: <MongodbPlainIcon size={size ?? "2em"} color={color} />,
  Postgresql: <PostgresqlPlainIcon size={size ?? "2em"} color={color} />,
  Redis: <RedisPlainIcon size={size ?? "2em"} color={color} />,
  Elasticsearch: <ElasticsearchPlainIcon size={size ?? "2em"} color={color} />,
  Mongoose: <MongooseOriginalIcon size={size ?? "2em"} color={color} />,
  Prisma: <PrismaOriginalIcon size={size ?? "2em"} color={color} />,
  Supabase: <SupabasePlainIcon size={size ?? "2em"} color={color} />,
  Cypress: <CypressioPlainIcon size={size ?? "2em"} color={color} />,
  Playwright: <PlaywrightPlainIcon size={size ?? "2em"} color={color} />,
  Selenium: <SeleniumOriginalIcon size={size ?? "2em"} color={color} />,
  Cucumber: <CucumberPlainIcon size={size ?? "2em"} color={color} />,
  Jest: <JestPlainIcon size={size ?? "2em"} color={color} />,
  Vitest: <VitestPlainIcon size={size ?? "2em"} color={color} />,
  Mocha: <MochaPlainIcon size={size ?? "2em"} color={color} />,
  Docker: <DockerPlainIcon size={size ?? "2em"} color={color} />,
  Git: <GitPlainIcon size={size ?? "2em"} color={color} />,
  Github: <GithubOriginalIcon size={size ?? "2em"} color={color} />,
  Azuredevops: <AzurePlainIcon size={size ?? "2em"} color={color} />,
  Jenkins: <JenkinsPlainIcon size={size ?? "2em"} color={color} />,
  Linux: <LinuxPlainIcon size={size ?? "2em"} color={color} />,
  Nginx: <NginxOriginalIcon size={size ?? "2em"} color={color} />,
  Jira: <JiraPlainIcon size={size ?? "2em"} color={color} />,
  Figma: <FigmaPlainIcon size={size ?? "2em"} color={color} />,
  Postman: <PostmanPlainIcon size={size ?? "2em"} color={color} />,
  Directus: <Database size={size ?? "2em"} color={color} />,
  Skills: <Cog />,
  Work: <BriefcaseBusiness />,
  Summary: <SquareChartGantt />,
  Languages: <Languages />,
  Education: <BookOpenText />,
});

const Icon = ({ type, color, size }: IconProps) => {
  return buildMap(color, size)[type];
};

export default Icon;
