import React, { createContext, useContext, useState, useCallback } from 'react';
import { AuthState, LoginCredentials, RegisterCredentials } from '../types/auth';
import { authApi } from '../services/api';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: Boolean(localStorage.getItem('token')),
  });

  const login = useCallback(async (credentials: LoginCredentials) => {
    const data = await authApi.login(credentials);
    localStorage.setItem('token', data.token);
    setAuth({
      user: data.user,
      token: data.token,
      isAuthenticated: true,
    });
  }, []);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    const data = await authApi.register(credentials);
    localStorage.setItem('token', data.token);
    setAuth({
      user: data.user,
      token: data.token,
      isAuthenticated: true,
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setAuth({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...auth, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};