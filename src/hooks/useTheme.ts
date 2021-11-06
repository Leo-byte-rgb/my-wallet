import { useContext } from "react";
import { themeContext } from "../Contexts/themeProvider";

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error("Expected a Context - Themes");
  return context;
};
