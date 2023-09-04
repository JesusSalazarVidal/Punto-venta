import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used withi, an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (usuario) => {
    try {
      const res = await registerRequest(usuario);
      console.log(res.data);
      setUsuario(res.data);
      setIsAuthenticated(true)
    } catch (error) {
        console.log(error)
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUsuario(null);
  }

  return (
    <AuthContext.Provider 
    value={
      {signup, logout, usuario, isAuthenticated}
      }>
      {children}
    </AuthContext.Provider>
  );
};
