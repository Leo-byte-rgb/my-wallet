import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "./Contexts/themeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
