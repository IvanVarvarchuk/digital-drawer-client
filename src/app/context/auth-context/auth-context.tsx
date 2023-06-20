import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

import { useLoginMutation, useProfileGETQuery, useRegisterMutation } from '../../../api/axios-client/Query';
import { LoginCommand, ProfileInfoDto, RegisterCommand } from "../../../api/axios-client";
import { useLocalStorage } from "usehooks-ts";

export interface IAuthContext {
  isAuthenticated: boolean,
  user: ProfileInfoDto|undefined,
  login: (email: string, password: string) => Promise<void>,
  singUp: (userName: string, email: string, password: string) => Promise<void>,
  logout: () => void,
}


export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [accessToken, setAccessToken] = useLocalStorage<string|undefined|null>('token', undefined);
  const [tokenExpires, setTokenExpires] = React.useState<string>();
  const loginQuery = useLoginMutation({
    onSuccess: (data) => {
      // here we rely on the returned data contains the user, the token and its expiration date.
      setAccessToken(data.token);
      setTokenExpires(data.expiration?.toString());
    },
  });

  const registerQuery = useRegisterMutation({
    onSuccess: (data) => {
      setAccessToken(data.token);
      setTokenExpires(data.expiration?.toString());
    }
  })

  const profileQuery = useProfileGETQuery({
    enabled: !!accessToken,
  })

  const login = async (email: string, password: string) => {
    await loginQuery.mutateAsync(new LoginCommand({ email, password }));
    // you might want to wrap this in try / catch to handle errors and alert the user
    // if the username/password is incorrect.
  };

  const singUp =async (userName: string, email: string, password: string) => {
    await registerQuery.mutateAsync(new RegisterCommand({ userName, email, password }));
  }

  const logout = () => {
    setAccessToken(undefined);
  }

  const isAuthenticated = !!accessToken;
  // if you need a user object you can do something like this.
  // const user = profileQuery.data;
  // example on provider
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user: profileQuery.data && accessToken? profileQuery.data : undefined,
        login,
        singUp,
        logout,
      }}
      >
        {children}

      </AuthContext.Provider>
  );
}