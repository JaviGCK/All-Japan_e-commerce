import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AuthContextType } from "../types/index";
/**
 * context with the logic to login and logout
 */
const MY_AUTH_APP = "USER_LOGED";

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  isAuthentificated: false,
});

export function AuthContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [isAuthentificated, setAuthentificated] = useState<boolean>(() => {
    const storedValue = window.localStorage.getItem(MY_AUTH_APP);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const login = useCallback(() => {
    window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(true));
    setAuthentificated(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthentificated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthentificated,
    }),
    [login, logout, isAuthentificated]
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function  useAuthContext() {
  return useContext(AuthContext);
}
