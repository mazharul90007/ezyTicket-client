import axios from "axios";


const axiosSecure = axios.create({
  baseURL: "https://ezy-ticket-server.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
