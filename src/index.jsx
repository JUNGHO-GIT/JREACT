// index.jsx

import { React } from "./import/ImportReacts.jsx";
import { ReactDOM, BrowserRouter, Routes, Route } from "./import/ImportReacts.jsx";
import { AOS } from "./import/ImportLibs.jsx";
import { useScrollTop, useEnhancedTouch } from "./import/ImportHooks.jsx";
import { useResize, useHover } from "./import/ImportHooks.jsx";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "swiper/swiper-bundle.min.css";
import "./assets/css/Jstyle.css";
import "./assets/css/Loader.css";
import "./assets/css/Core.css";
import "./assets/css/Media.css";
import "./index.css";

import {MainPage} from "./pages/main/MainPage.jsx";
import {Project1} from "./pages/details/Project1";
import {Project2} from "./pages/details/Project2";
import {Project3} from "./pages/details/Project3";
import {Project4} from "./pages/details/Project4";

// -------------------------------------------------------------------------------------------------
const Aos = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
};

// -------------------------------------------------------------------------------------------------
const Main = () => (
  <Routes>
    <Route path="/*" element={<MainPage />} />
  </Routes>
);

// -------------------------------------------------------------------------------------------------
const Detail = () => (
  <Routes>
    <Route path="project1" element={<Project1 />} />
    <Route path="project2" element={<Project2 />} />
    <Route path="project3" element={<Project3 />} />
    <Route path="project4" element={<Project4 />} />
  </Routes>
);

// -------------------------------------------------------------------------------------------------
const App = () => {

  Aos();
  useScrollTop();
  useResize();
  useHover();
  useEnhancedTouch();

  return (
    <div className={"App"}>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/details/*" element={<Detail />} />
      </Routes>
    </div>
  );
};

// -------------------------------------------------------------------------------------------------
const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("root element is null");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter basename={"/JREACT"}>
    <App />
  </BrowserRouter>
);
