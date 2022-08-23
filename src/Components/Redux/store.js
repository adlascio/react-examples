import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import counterReducer from './counterSlice';
import loggedReducer from './loggedSlice';
=======
import counterReducer from './slices/counterSlice';
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29

export default configureStore({
  reducer: {
    counter: counterReducer,
<<<<<<< HEAD
    logged: loggedReducer,
=======
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  },
});
