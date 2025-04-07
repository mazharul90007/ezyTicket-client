import React, { useState } from "react";
import {
  FaLock,
  FaEnvelope,
  FaFacebookF,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginPage() {
  const { signIn, signInWithGoogle, setLoading, darkMode } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [retypePassword, setRetypePassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signIn(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center mt-18 bg-gradient-to-br py-20 ${
        darkMode
          ? "from-black via-blue-900 to-purple-900"
          : "from-green-200 via-green-50 to-green-200"
      }`}
    >
      <div
        className={`${
          darkMode ? "bg-white/10 text-white" : "bg-white text-black"
        } backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block mb-1">Email</label>
            <div
              className={`flex items-center ${
                darkMode ? "bg-white/20" : "bg-green-100"
              } rounded-lg px-3 py-2`}
            >
              <FaEnvelope
                className={`${darkMode ? "text-gray-200" : "text-black"} mr-2`}
              />
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
                className={`${
                  darkMode
                    ? "outline-none bg-transparent text-white placeholder-gray-300"
                    : "outline-none text-gray-500 placeholder-gray-600"
                } py-2 w-full`}
              />
            </div>
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1">Password</label>
            <div
              className={`flex items-center justify-between ${
                darkMode ? "bg-white/20" : "bg-green-100"
              } rounded-lg px-3 py-2`}
            >
              <div className="flex items-center w-full">
                <FaLock
                  className={`${
                    darkMode ? "text-gray-200" : "text-black"
                  } mr-2`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password", { required: true })}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPasswordMatch(value === retypePassword);
                  }}
                  className={`${
                    darkMode
                      ? "outline-none bg-transparent text-white placeholder-gray-300"
                      : "outline-none text-gray-500 placeholder-gray-600"
                  } py-2 w-full`}
                />
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`ml-2 text-xl ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">Password is required</p>
            )}
          </div>

          {/* Retype Password Field */}
          <div className="mt-4">
            <label className="block mb-1">Retype Password</label>
            <div
              className={`flex items-center justify-between ${
                darkMode ? "bg-white/20" : "bg-green-100"
              } rounded-lg px-3 py-2`}
            >
              <div className="flex items-center w-full">
                <FaLock
                  className={`${
                    darkMode ? "text-gray-200" : "text-black"
                  } mr-2`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Retype password"
                  value={retypePassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setRetypePassword(value);
                    setPasswordMatch(value === watch("password"));
                  }}
                  className={`${
                    darkMode
                      ? "outline-none bg-transparent text-white placeholder-gray-300"
                      : "outline-none text-gray-500 placeholder-gray-600"
                  } py-2 w-full`}
                />
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`ml-2 text-xl ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {!passwordMatch && (
              <p className="text-red-300 text-sm mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!passwordMatch}
            className={`w-full text-center py-2 md:py-3 bg-supporting rounded-lg shadow-md transform transition-transform cursor-pointer text-white font-semibold mx-auto md:mx-0 ${
              !passwordMatch
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-95"
            }`}
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center mt-4">
          <div className="divider">OR</div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="p-2 border border-gray-300 text-3xl font-bold rounded-full hover:scale-95 transform transition-transform cursor-pointer mx-auto md:mx-0 shadow-md"
            >
              <FcGoogle />
            </button>

            <button
              onClick={""}
              className="p-2 border border-gray-300 text-3xl font-bold text-blue-500 rounded-full hover:scale-95 transform transition-transform cursor-pointer mx-auto md:mx-0 shadow-md"
            >
              <FaFacebookF />
            </button>
          </div>
        </div>

        {/* Register Link */}
        <p
          className={`text-center text-sm ${
            darkMode ? "text-gray-300" : "text-gray-500"
          } mt-6`}
        >
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
