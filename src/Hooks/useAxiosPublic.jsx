import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://ezy-ticket-server.vercel.app",
  withCredentials: true
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
