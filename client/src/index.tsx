// index.tsx

import '@assets/styles/Reset.css';
import '@assets/styles/Mui.css';
import '@assets/styles/Common.css';
import '@assets/styles/Jstyle.css';
import './index.css';

import {
  BrowserRouter, Routes, Route, createRoot, useEffect, useState
} from '@importReacts';

import {
  CssBaseline, createTheme, ThemeProvider
} from '@importMuis';

import {
  useScrollTop, useEnhancedTouch
} from '@importHooks';

import {
  Loader
} from '@importLayouts';

import {
  Main, Project1, Project2, Project3, Project4
} from '@importPages';

// -------------------------------------------------------------------------------------------------
const App = () => {

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  useScrollTop();
  useEnhancedTouch();

  return (
    !loading ? (
      <div className={"App"}>
        <Routes>
          <Route path={"/*"} element={<Main />} />
          <Route path={"/details/project1/*"} element={<Project1 />} />
          <Route path={"/details/project2/*"} element={<Project2 />} />
          <Route path={"/details/project3/*"} element={<Project3 />} />
          <Route path={"/details/project4/*"} element={<Project4 />} />
        </Routes>
      </div>
    ) : (
      <Loader />
    )
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