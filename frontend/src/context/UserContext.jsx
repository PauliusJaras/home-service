import { createContext } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "usehooks-ts";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

UserProvider.propTypes = {
  children: PropTypes.element,
};
