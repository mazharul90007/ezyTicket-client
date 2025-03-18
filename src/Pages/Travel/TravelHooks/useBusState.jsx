import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {useQuery} from '@tanstack/react-query'

const useBusState = () => {

    const axiosSecure = useAxiosSecure()
    const { data: busInfo = [], refetch } = useQuery({
        queryKey: ['BusInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/bus');
            return res.data;
        }
    })

    return [busInfo, refetch]
}

export default useBusState