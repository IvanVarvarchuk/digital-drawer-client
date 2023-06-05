import React, { FC, PropsWithChildren, createContext, useCallback, useMemo, useState } from 'react';
import { redirect } from 'react-router-dom';
import { routes } from '../../config/routes';

export interface AuthContextType {
    token: string|null,
    isAuthenticated: boolean,
    userName: string;
    onLogin: () => void,
    onSignUp: () => void,
    onLogout: () => void,
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const token = localStorage.getItem('token');
  const handleLogin =useCallback( async () => {
      const token = await fakeAuth();
  
      localStorage.setItem('token', token);
      redirect(routes.convert);
      window.location.reload();
    }, []);
    
    const handleSignUp =useCallback( async () => {
      const token = await fakeAuth();
      
      localStorage.setItem('token', token);
      redirect(routes.profile);
      
      window.location.reload();
    }, []);
    
    const handleLogout =useCallback( () => {
      localStorage.clear();
      redirect('/');
    }, []);

    const value: AuthContextType = useMemo(() => ({
      token,
      isAuthenticated: !!token,
      userName: 'Cool',
      onLogin:handleLogin,
      onSignUp:handleSignUp,
      onLogout:handleLogout,
    }), [handleLogin, handleLogout, handleSignUp, token]);
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };

const fakeAuth: () => Promise<string> = () => 
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });

const useAuth = () => React.useContext(AuthContext);
export default useAuth;
