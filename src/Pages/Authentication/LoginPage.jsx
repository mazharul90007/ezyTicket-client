import React from "react";

function LoginPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-purple-900">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md text-white">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <div className="flex items-center bg-white/20 rounded-lg px-3">
                <FaEnvelope className="text-gray-200 mr-2" />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-transparent outline-none py-2 w-full text-white"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <div className="flex items-center bg-white/20 rounded-lg px-3">
                <FaLock className="text-gray-200 mr-2" />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="bg-transparent outline-none py-2 w-full text-white"
                />
              </div>
            </div>

            <button className="w-full bg-purple-700 hover:bg-purple-800 transition text-white font-bold py-3 rounded-lg">
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="mb-2">Or</p>
            <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-lg transition font-semibold">
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
    </div>
  );
}

export default LoginPage;
