import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const LogoutPath = useContext(AuthContext);

  useEffect(() => {
    LogoutPath?.LogoutUser();
  }, [LogoutPath]);

  return <Navigate to="/login" />;
};
