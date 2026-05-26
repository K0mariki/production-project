import "./styles/index.scss"
import {Routes, Route, Link} from "react-router-dom";
import {Suspense, useContext} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

function App(){
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>{theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;