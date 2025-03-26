import { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Pages/Authentication/Firebase";
// import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  // console.log(user);

  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        await axiosPublic.post('/jwt',
          { email: currentUser.email },
          { withCredentials: true }
        )
          .then(res => {
            console.log('login token', res.data);
            setLoading(false)
          })
      } else {
        setUser(currentUser);
        await axiosPublic.post('/logout',
          {},
          {
            withCredentials: true,
          }
        )
          .then(res => {
            console.log('logout', res.data)
            setLoading(false)
          })
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.displayName, user?.photoURL, axiosPublic]);


  const authInfo = {
    user,
    setUser,
    darkMode,
    setDarkMode,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
