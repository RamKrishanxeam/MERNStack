import { createContext, useState } from "react";

export const AuthContext = createContext<AuthType | null>(null);

interface AuthType {
  isLoggedIn: boolean;
  storeTokenInLS: (serverToken: string) => void;
  LogoutUser: () => void;
}
export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const storeTokenInLS = (serverToken: string) => {
    return localStorage.setItem("token", serverToken);
  };
  const isLoggedIn = !!token;
  const LogoutUser = () => {
    if (token) {
      setToken("");
      return localStorage.removeItem("token");
    }
  };
  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
