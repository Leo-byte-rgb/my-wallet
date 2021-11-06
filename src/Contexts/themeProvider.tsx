import { createContext, useEffect, useState } from "react";
import { ThemeProvider as Theme } from "styled-components";
import LightTheme from "../styles/themes/light";
import DarkTheme from "../styles/themes/dark";

interface IThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const themeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
);

export const ThemeProvider: React.FC = ({ children }) => {
  const storagedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storagedTheme ?? "Dark");
  const toggleTheme = () => setTheme(theme === "Dark" ? "Light" : "Dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <Theme theme={theme === "Dark" ? DarkTheme : LightTheme}>
        {children}
      </Theme>
    </themeContext.Provider>
  );
};
