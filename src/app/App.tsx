import "./styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import { MainPageAsync } from "pages/MainPage/ui/MainPageAsync";
import { AboutPageAsync } from "pages/AboutPage/ui/AboutPageAsync";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>
        theme
      </button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
