import { MdOutlineEmail } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import noImage from "../../../assets/Common_image/noImage.png"
import { FaHome, FaPhoneAlt, FaTicketAlt } from "react-icons/fa";


const ProfileDetails = () => {
    const { user } = useAuth()
    return (
        <div className="p-8 bg-white flex flex-col items-center border border-gray-200 shadow-md">
            <img src={user?.photoURL ? user.photoURL : noImage} alt="user Image"
                className="w-40 h-40 rounded-full p-1 border-2 border-main mb-8"
            />
            <h3 className="text-3xl text-black font-bold mb-8">{user?.displayName}</h3>

            <div className="divider text-4xl text-gray-400"><FaTicketAlt /></div>

            <div className="text-xl text-gray-500 font-semibold text-center space-y-2">
                <p className="flex items-center gap-2"><MdOutlineEmail /> {user?.email}</p>

                <p className="flex items-center gap-2"><FaPhoneAlt /> {user?.phone? user.phone : 'Unkown'}</p>

                <p className="flex items-center gap-2"> <FaHome /> {user?.address? user.address : 'Unkown'}</p>
            </div>

        </div>
    );
};

export default ProfileDetails;