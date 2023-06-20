import React from 'react';
import { AuthContext } from '../../context/auth-context/auth-context';

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be within AuthProvider");
  }

  return context;
};

export default useAuth;
