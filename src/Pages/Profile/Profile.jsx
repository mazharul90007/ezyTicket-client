import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AdminProfile from "./ProfileComponents/AdminProfile";
import EntertainmentManagerProfile from "./ProfileComponents/EntertainmentManagerProfile";
import EventManagerProfile from "./ProfileComponents/EventManagerProfile";
import TravelManagerProfile from "./ProfileComponents/TravelManagerProfile";
import UserProfile from "./ProfileComponents/UserProfile";



const Profile = () => {
    const { user, userInfo, setUserInfo } = useAuth();
    const axiosSecure = useAxiosSecure();


    //get user info from mongodb
    useQuery({
        queryKey: ['savedUser', user?.email],
        queryFn: async () => {
            if (!user?.email) return null; // Prevents API call if user is null
            const res = await axiosSecure.get(`/users/${user.email}`);
            setUserInfo(res.data[0]);
            return res.data[0];
        },
        enabled: !!user?.email, // Ensures query only runs when user is logged in
    });

    const renderProfile = () => {
        switch (userInfo?.role) {
            case 'admin':
                return <AdminProfile />;
            case 'travelManager':
                return <TravelManagerProfile />;
            case 'eventManager':
                return <EventManagerProfile />;
            case 'entertainmentManager':
                return <EntertainmentManagerProfile />;
            default:
                return <UserProfile></UserProfile>;
        }
    };
    return (
        <div className="py-16">
            {renderProfile()}

        </div>
    );
};

export default Profile;