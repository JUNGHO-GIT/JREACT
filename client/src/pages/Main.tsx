// Main.jsx

import { About } from "./main/About";
import { Hero } from "./main/Hero";
import { Portfolio } from "./main/Portfolio";
import { Skills } from "./main/Skills";

import { Hr } from "@importComponents";

// -------------------------------------------------------------------------------------------------
export const Main = () => (
  <>
    <Hero />
    <Hr className={"bg-light h-5"} />
    <About />
    <Hr className={"bg-light h-5"} />
    <Skills />
    <Hr className={"bg-light h-5"} />
    {/* <Portfolio /> */}
  </>
);