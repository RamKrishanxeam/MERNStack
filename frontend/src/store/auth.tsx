import { createContext, useEffect, useState } from "react";
import { BaseUrl } from "./BaseUrl";

export const AuthContext = createContext<AuthType | null>(null);

interface AuthType {
  isLoggedIn: boolean;
  storeTokenInLS: (serverToken: string) => void;
  LogoutUser: () => void;
  user: Object;
  serviceData: Object;
}
export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const storeTokenInLS = (serverToken: string) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  const isLoggedIn = !!token;
  const LogoutUser = () => {
    if (token) {
      setToken("");
      return localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${BaseUrl}/auth/user`, requestOptions)
      .then((response) => response.json())
      .then((result) => setUser(result.userData))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${BaseUrl}/data/service`, requestOptions)
      .then((response) => response.json())
      .then((result) => setServiceData(result.response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, serviceData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
