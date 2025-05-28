import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://ezy-ticket-server2.vercel.app/api/v1",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
