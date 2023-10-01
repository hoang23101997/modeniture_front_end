import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import authAPI from "../apis/authAPI";

const AuthState = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticate: false,
    user: {},
  });
  
  const handleLogin = async () => {

    try {
      const response = await authAPI.authInfo();
      console.log(response);
      const data = response.data;
    
      setAuth({
        isAuthenticate: true,
        user: data.userInfo,
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    setAuth({
      isAuthenticate: false,
      user: {},
    });
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      handleLogin();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
