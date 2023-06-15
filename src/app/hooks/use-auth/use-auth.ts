import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context/auth-context';
import { User } from '../use-user/use-user';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAuth {
  user: User|null,
  isAuthenticated: boolean,
  login: () => void,
  signup: () => void,
  logout: () => void,
}

export function useAuth(): UseAuth {
  const { user, setUser } = useContext(AuthContext);
  const login = () => {};
  const signup = () => {};
  const logout = () => {};

  return ({
    user,
    isAuthenticated: true,//!!user?.authToken,
    login,
    signup,
    logout,
  })
}

export default useAuth;
