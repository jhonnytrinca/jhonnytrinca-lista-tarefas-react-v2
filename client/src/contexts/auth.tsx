import React, { createContext, useState, useEffect } from 'react';
import Auth from '../services/auth';
import { AuthContextData } from './interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Object | null>(
    localStorage.getItem('token')
  );

  useEffect(() => {
    const storageToken = localStorage.getItem('token');

    if (storageToken) {
      const foundUser = JSON.parse(storageToken);
      setUser(foundUser);
    }
  }, []);

  async function signIn() {
    const response = await Auth();

    setUser(response.token);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
