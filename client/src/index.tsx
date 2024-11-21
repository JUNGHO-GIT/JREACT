// index.tsx

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@assets/styles/Reset.css';
import '@assets/styles/Core.css';
import '@assets/styles/Mui.css';
import '@assets/styles/Jstyle.css';
import './index.css';

import {
  BrowserRouter, Routes, Route, createRoot,
  useEffect
} from '@importReacts';

import {
  CssBaseline, createTheme, ThemeProvider
} from '@importMuis';

import {
  useScrollTop, useEnhancedTouch, useStoreLoading
} from '@importHooks';

import {
  Loader, Footer, Header, Toggle
} from '@importLayouts';

import {
  Main, Project1, Project2, Project3, Project4
} from '@importPages';

// -------------------------------------------------------------------------------------------------
const App = () => {

  const { LOADING, setLOADING } = useStoreLoading();

  useEffect(() => {
    setLOADING(true);
  }, []);

  useScrollTop();
  useEnhancedTouch();

  return (
    <div className={"App"}>
      {LOADING && <Loader />}
      <Routes>
        <Route path={"/*"} element={<Main />} />
        <Route path={"/details/project1/*"} element={<Project1 />} />
        <Route path={"/details/project2/*"} element={<Project2 />} />
        <Route path={"/details/project3/*"} element={<Project3 />} />
        <Route path={"/details/project4/*"} element={<Project4 />} />
      </Routes>
      {<Footer />}
    </div>
  );
};

// -------------------------------------------------------------------------------------------------
createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename={"/JREACT"}>
    <ThemeProvider theme={
      createTheme({
        typography: {
          fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif"
        }
      })
    }>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);