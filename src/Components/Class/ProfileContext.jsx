import { createContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  return (
<<<<<<< HEAD
    <ProfileContext.Provider value={{ profile: { name: 'Arthur' } }}>
=======
    <ProfileContext.Provider value={{ someValue: 'value' }}>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
      {children}
    </ProfileContext.Provider>
  );
};
