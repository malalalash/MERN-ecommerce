import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { loginUser } from "../api/user/loginUser";
import { checkAuth } from "../api/auth/checkAuth";
import { UserContextType, UserType, UserFormType } from "../types";
import { logoutUser } from "../api/user/logoutUser";

const AuthContext = createContext<UserContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const authorize = useCallback(async () => {
    const response = await checkAuth();
    if (response?.isAdmin === true) {
      setUser(response);
    } else {
      setUser(null);
    }
  }, []);

  const login = useCallback(async (data: UserFormType) => {
    const response = await loginUser(data);
    if (response?.isAdmin === true) {
      setUser(response);
    } else {
      setUser(null);
    }
  }, []);

  const logout = useCallback(async () => {
    await logoutUser();
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      user: user as UserType,
      login,
      logout,
      authorize,
    }),
    [user, login, authorize]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
