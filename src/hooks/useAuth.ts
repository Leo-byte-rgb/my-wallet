import { useContext } from 'react';
import { AuthContext } from '../Contexts/authProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('No context found');

  return context;
};
