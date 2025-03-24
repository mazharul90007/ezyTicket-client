import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {useQuery} from '@tanstack/react-query'

const useBusState = () => {

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