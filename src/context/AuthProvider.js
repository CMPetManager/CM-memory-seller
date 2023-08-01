import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );

  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem('persist') || false)
  );

  const [isLogout, setIsLogout] = useState(false);

  console.log(JSON.stringify(auth));
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, persist, setPersist, isLogout, setIsLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
