import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/index";
import { ThemeProvider } from 'styled-components';
import DarkTheme from './styles/themes/dark'
import LightTheme from "./styles/themes/light";
const App: React.FC = () => {
    return (
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyles />
        <Layout />
      </ThemeProvider>
    );
}

export default App;