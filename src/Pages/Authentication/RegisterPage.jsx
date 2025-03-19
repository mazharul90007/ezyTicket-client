import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

function RegisterPage() {
  const {
    createUser,
    signInWithGoogle,

    darkMode,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await createUser(email, password);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error("Registration failed");
      setLoading(false);
      console.log(error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      toast.error("Google Sign-In failed");
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-8 pt-20 bg-gradient-to-br ${
        darkMode
          ? "from-black via-blue-900 to-purple-900"
          : "from-green-200 via-green-50 to-green-200"
      }`}
    >
      <div
        className={`w-full max-w-md p-10 rounded-2xl shadow-xl backdrop-blur-md ${
          darkMode ? "bg-white/10 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div>
            <label className="block mb-1">Username</label>
            <div
              className={`flex items-center rounded-lg px-3 ${
                darkMode ? "bg-white/20" : "bg-green-100"
              }`}
            >
              <FaUser
                className={`mr-2 ${darkMode ? "text-gray-200" : "text-black"}`}
              />
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                className={`py-2 w-full outline-none ${
                  darkMode
                    ? "bg-transparent text-white placeholder-gray-300"
                    : "text-gray-600 placeholder-gray-600"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <div
              className={`flex items-center rounded-lg px-3 ${
                darkMode ? "bg-white/20" : "bg-green-100"
              }`}
            >
              <FaEnvelope
                className={`mr-2 ${darkMode ? "text-gray-200" : "text-black"}`}
              />
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
                className={`py-2 w-full outline-none ${
                  darkMode
                    ? "bg-transparent text-white placeholder-gray-300"
                    : "text-gray-600 placeholder-gray-600"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">Password</label>
            <div
              className={`flex items-center rounded-lg px-3 relative ${
                darkMode ? "bg-white/20" : "bg-green-100"
              }`}
            >
              <FaLock
                className={`mr-2 ${darkMode ? "text-gray-200" : "text-black"}`}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                  validate: {
                    hasUppercase: (val) =>
                      /[A-Z]/.test(val) || "Must include an uppercase letter",
                    hasLowercase: (val) =>
                      /[a-z]/.test(val) || "Must include a lowercase letter",
                  },
                })}
                className={`py-2 w-full pr-10 outline-none ${
                  darkMode
                    ? "bg-transparent text-white placeholder-gray-300"
                    : "text-gray-600 placeholder-gray-600"
                }`}
              />
              <div
                className="absolute right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  />
                ) : (
                  <FaEye
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 transition text-white font-bold py-3 rounded-lg"
          >
            Register
          </button>
        </form>

        {/* OR */}
        <div className="text-center mt-4">
          <div className="divider">OR</div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={handleGoogleSignUp}
              className="p-2 border border-gray-300 text-3xl font-bold rounded-full hover:scale-95 transform transition-transform cursor-pointer mx-auto md:mx-0 shadow-md"
            >
              {/* <FaGoogle /> Login with Google */}
              <FcGoogle />
            </button>

            <button
              onClick={""}
              className="p-2 border border-gray-300 text-3xl font-bold text-blue-500 rounded-full hover:scale-95 transform transition-transform cursor-pointer mx-auto md:mx-0 shadow-md"
            >
              {/* <FaGoogle /> Login with Google */}
              <FaFacebookF />
            </button>
          </div>
        </div>

        {/* Already have an account */}
        <p className="text-center mt-6 text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
