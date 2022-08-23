import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
<<<<<<< HEAD
    email: 'test@test.com',
=======
    email: '',
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  });
  const updateUser = (newUser) => {
    setUser({ ...newUser });
  };
<<<<<<< HEAD
  return (
    <UserContext.Provider value={{ user, updateUser }}>
=======

  return (
    <UserContext.Provider
      value={{
        user: { name: 'Provider', email: 'provider@provider.com' },
        updateUser,
      }}>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
      {children}
    </UserContext.Provider>
  );
};
