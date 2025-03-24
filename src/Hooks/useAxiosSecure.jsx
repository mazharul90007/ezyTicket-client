import axios from "axios";

const axiosSecure = axios.create({
<<<<<<< HEAD
  baseURL: "https://ezy-ticket-server.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

=======
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {

  return axiosSecure;
};


>>>>>>> 22ad521d1e79975ec5f150fcd464abcd05fd494b
export default useAxiosSecure;
