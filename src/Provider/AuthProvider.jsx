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
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

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
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const {
    data: userInfo = null,
    isLoading: isUserLoading,
    refetch,
  } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data?.data || null;
    },
    enabled: !!user?.email,
  });

  // Auth state handler
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      try {
        if (currentUser?.email) {
          setUser(currentUser);
          await axiosPublic.post(
            "/auth/jwt",
            { email: currentUser.email },
            { withCredentials: true }
          );
          await refetch();
        } else {
          setUser(null);
          await axiosPublic.post("/auth/logout", {}, { withCredentials: true });
        }
      } catch (error) {
        console.error("Auth error:", error);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [axiosPublic, refetch]);

  console.log(userInfo);

  const authInfo = {
    user,
    setUser,
    darkMode,
    setDarkMode,
    loading,
    setLoading,
    userInfoLoading: isUserLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    userInfo,
    // setUserInfo,
    refetchUserInfo: () => {
      queryClient.invalidateQueries(["userInfo", user?.email]);
    },
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
