import React from "react";
import { useContext } from "react";
import  AuthContext from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const { auth } = useContext(AuthContext);
  const {isAuthenticate} = auth;
  console.log(isAuthenticate)
  if (isAuthenticate) {
    return <Component/>;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
