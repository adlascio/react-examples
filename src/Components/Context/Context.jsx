import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
<<<<<<< HEAD
import { UserProvider } from './UserContext';
=======
import { useState } from 'react';
import { UserContext, UserProvider } from './UserContext';
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29

export default function Context() {
  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  // });
  // const updateUser = (newUser) => {
  //   setUser({ ...newUser });
  // };
  return (
    <div className='component'>
<<<<<<< HEAD
      {/* <UserContext.Provider
        value={{
          user: {
            name: '',
            email: 'test2@test.com',
          },
        }}>
        <h1>App</h1>
        <UserContext.Consumer>
          {(value) => {
            return <Navbar email={value.user.email} />;
          }}
        </UserContext.Consumer>

=======
      <h1>App</h1>
      {/* <UserContext.Provider
        value={{ name: 'Context', email: 'context@context.com' }}>
        <UserContext.Consumer>
          {(value) => <Navbar email={value.email} />}
        </UserContext.Consumer>
        <Navbar email={user.email} />
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
        <Main user={user} updateUser={updateUser} />
      </UserContext.Provider> */}
      <UserProvider>
        <Navbar />
        <Main />
      </UserProvider>
    </div>
  );
}
