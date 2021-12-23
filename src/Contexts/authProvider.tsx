import React, { createContext, useState } from 'react';

interface IAuthContext {
  logged: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const users = [{ email: 'leo@gmail.com', password: '123456' }];

const AuthContext = createContext({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('myWallet:logged');

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('myWallet:logged', 'true');
      setLogged(true);
      alert('Logado');
    }
    if (!user) alert('Infos erradas');
  };

  const signOut = () => {
    localStorage.removeItem('myWallet:logged');
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, logged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
