import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PublicRouter = ({ children }) => {
  const isAuth = localStorage.getItem("auth");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(-1);
    }
  }, [isAuth, navigate]);

  if (isAuth) return null;

  return children;
};
