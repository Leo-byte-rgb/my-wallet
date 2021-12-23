import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './Contexts/themeProvider';
import { AuthProvider } from './Contexts/authProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
