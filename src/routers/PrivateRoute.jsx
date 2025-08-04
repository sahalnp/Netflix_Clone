import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/Context";

export const PrivateRoute = ({ children }) => {
    const { loading } = useUser();
    const auth = localStorage.getItem("auth");
    console.log(auth,"cvbgnhm,.");
    
    return auth ? children : <Navigate to="/login" replace />;
};
