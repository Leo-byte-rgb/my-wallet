import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/index";
import { ThemeProvider } from "styled-components";
import DarkTheme from "./styles/themes/dark";
import LightTheme from "./styles/themes/light";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
