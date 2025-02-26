import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  role: string | null;
  login: (role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<string | null>(localStorage.getItem("userRole"));

  const login = (role: string) => {
    setRole(role);
    localStorage.setItem("userRole", role);
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem("userRole");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};