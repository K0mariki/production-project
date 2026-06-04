import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { AppLink } from "shared/ui/AppLink/AppLink";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <AppLink to="/">Home</AppLink>
      <AppLink to="/about">About</AppLink>
      <AppRouter />
    </div>
  );
}

export default App;
