import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase-config';

const provider = new GoogleAuthProvider();
const userService = {
  loginWithGoogle: async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      return data;
    } catch (e) {
      console.log('error', e);
    }
  },
};
export default userService;
