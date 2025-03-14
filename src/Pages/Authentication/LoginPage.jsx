import React from "react";
import { FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import { useLocation, useNavigate, Navigate } from "react-router-dom";

import toast from "react-hot-toast";
// import Spinner from "../components/Spinner"; // Optional spinner component
import useAuth from "../../Hooks/useAuth";

function LoginPage() {
  const { signIn, signInWithGoogle, setLoading } = useAuth();
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-purple-900">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1">Email</label>
            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <FaEnvelope className="text-gray-200 mr-2" />
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
                className="bg-transparent outline-none py-2 w-full text-white"
              />
            </div>
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <FaLock className="text-gray-200 mr-2" />
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
                className="bg-transparent outline-none py-2 w-full text-white"
              />
            </div>
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 transition text-white font-bold py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="mb-2">Or</p>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-lg transition font-semibold"
          >
            <FaGoogle /> Login with Google
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-gray-300">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-300 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
