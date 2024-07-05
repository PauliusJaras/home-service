import { createContext, ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";
import { IUser, UserContextType } from "./UserContext.types";

const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<IUser | null>("user", null);
  const login = (user: IUser) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
