import { createContext, useContext, useState } from 'react';
const RoleContext = createContext();
export const RoleProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  const login = (newToken, newRole) => {
    setToken(newToken);
    setRole(newRole);
    localStorage.setItem('token', newToken);
    localStorage.setItem('role', newRole);
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.clear();
  };

  return (
    <RoleContext.Provider value={{ token, role, login, logout }}>
      {children}
    </RoleContext.Provider>
  );
};
export const useRole = () => useContext(RoleContext);