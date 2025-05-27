import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../useAxiosPublic";

const useAllEvents = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allEvents = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["allEvents"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data.data.sort(
        (a, b) => new Date(b.dateTime) - new Date(a.dateTime)
      );
    },
  });

  return { allEvents, isLoading, isError, refetch };
};

export default useAllEvents;
