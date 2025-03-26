import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useManager = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: isManager, isPending: isManagerLoading } = useQuery({
        queryKey: [user?.email, 'isManager'],
        enabled: !!user?.email && !loading, 
        queryFn: async () => {
            console.log('asking or checking isManager', user)
            const res = await axiosSecure.get(`/users/manager/${user?.email}`);
            console.log(res.data);
            return res.data?.manager;
        }
    })
    return [isManager, isManagerLoading]
};


export default useManager;