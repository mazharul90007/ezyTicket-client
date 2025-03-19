import React from "react";
import { FaLock, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import { useLocation, useNavigate, Navigate } from "react-router-dom";

import toast from "react-hot-toast";
// import Spinner from "../components/Spinner"; // Optional spinner component
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

function LoginPage() {
  const { signIn, signInWithGoogle, setLoading, darkMode } = useAuth();
  // const navigate = useNavigate();user, loading,
  // const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const from = location?.state?.from?.pathname || "/";

  // if (loading) return <Spinner />;
  // if (user) return <Navigate to={from} replace={true} />;

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signIn(email, password);
      // navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      // await saveUserInformation(result?.user); // Optional: add your user-saving logic
      console.log(result);
      // navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      toast.error("Something went wrong");
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${darkMode ? 'from-black via-blue-900 to-purple-900' : 'from-green-200 via-green-50 to-green-200'} `}>
      <div className={`${darkMode ? 'bg-white/10 text-white' : 'bg-white text-black'} backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md `}>
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1">Email</label>
            <div className={`flex items-center ${darkMode ? 'bg-white/20' : 'bg-green-100'} rounded-lg px-3 py-2`}>
              <FaEnvelope className={`${darkMode ? 'text-gray-200' : 'text-black'} mr-2`} />
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
                className={`${darkMode ? 'outline-none bg-transparent text-white placeholder-gray-300' : 'outline-none text-gray-500 placeholder-gray-600'} py-2 w-full`}
              />
            </div>
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <div className={`flex items-center ${darkMode ? 'bg-white/20' : 'bg-green-100'} rounded-lg px-3 py-2`}>
              <FaLock className={`${darkMode ? 'text-gray-200' : 'text-black'} mr-2`} />
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
                className={`${darkMode ? 'outline-none bg-transparent text-white placeholder-gray-300' : 'outline-none text-gray-500 placeholder-gray-600'} py-2 w-full`}
              />
            </div>
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-center py-2 md:py-3 bg-supporting rounded-lg shadow-md hover:scale-95 transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <div className="divider">OR</div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="p-2 border border-gray-300 text-3xl font-bold rounded-full hover:scale-95 transform transition-transform cursor-pointer mx-auto md:mx-0 shadow-md"
            >
              {/* <FaGoogle /> Login with Google */}
              <FcGoogle />
            </button>

            <button
              onClick={''}
              className="p-2 border border-gray-300 text-3xl font-bold text-blue-500 rounded-full hover:scale-95 transform transition-transform cursor-pointer mx-auto md:mx-0 shadow-md"
            >
              {/* <FaGoogle /> Login with Google */}
              <FaFacebookF />
            </button>
          </div>
        </div>

        <p className={`text-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} mt-6`}>
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="text-amber-600 font-semibold underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
