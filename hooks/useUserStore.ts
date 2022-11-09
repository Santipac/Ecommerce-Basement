import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { RootState } from '../store';
import { checkingUser, loginUser, logoutUser } from '../store/users/userSlice';

export const useUserStore = () => {
  const { status, displayName, photoURL } = useSelector(
    (state: RootState) => state.user
  );
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();

  const startLoginUser = async () => {
    try {
      dispatch(checkingUser());
      const result = await signInWithPopup(FirebaseAuth, provider);
      const { displayName, email, photoURL, uid } = result.user;
      dispatch(
        loginUser({
          displayName,
          email,
          photoURL,
          uid,
          status: 'authenticated',
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const startSignOutUser = async () => {
    try {
      dispatch(checkingUser());
      await signOut(FirebaseAuth);

      dispatch(logoutUser());
    } catch (error) {
      console.log(error);
    }
  };
  return { startLoginUser, startSignOutUser, status, displayName, photoURL };
};
