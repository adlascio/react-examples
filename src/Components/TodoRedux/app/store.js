import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import todoReducer from '../features/todoSlice';
=======
import todoReducer from '../features/todo/todoSlice';
import userReducer from '../features/user/userSlice';
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29

export default configureStore({
  reducer: {
    todo: todoReducer,
<<<<<<< HEAD
=======
    user: userReducer,
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  },
});
