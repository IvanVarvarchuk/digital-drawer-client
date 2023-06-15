import { FC, PropsWithChildren, createContext, useState } from "react";
import { User, useUser } from "../../hooks/use-user/use-user";

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => ({} as User),
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, _setUser] = useState<User|null>(null);
  const setUser = (u: User|null) => {_setUser(u ? {...u} : null)};
  
  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
}

