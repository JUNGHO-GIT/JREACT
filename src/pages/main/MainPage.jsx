// MainPage.jsx

import { React } from "../../import/ImportReacts.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Hero } from "./components/Hero.jsx";
import { Portfolio } from "./components/Portfolio.jsx";
import { Skills } from "./components/Skills.jsx";

// -------------------------------------------------------------------------------------------------
export const MainPage = () => {

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
