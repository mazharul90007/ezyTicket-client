import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useBusState = () => {
  const axiosSecure = useAxiosSecure();
  const { data: busInfo = [], refetch } = useQuery({
    queryKey: ["BusInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/bus");
      return res.data;
    },
  });

<<<<<<< HEAD
    const axiosSecure = useAxiosSecure()
    const { data: allBusData = [], refetch } = useQuery({
        queryKey: ['allBusData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/bus');
            return res.data;
        }
    })

    return [allBusData, refetch]
}

export default useBusState
=======
  return [busInfo, refetch];
};

export default useBusState;
>>>>>>> e1944cf (some changes)
