import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://ezy-ticket-server2.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
