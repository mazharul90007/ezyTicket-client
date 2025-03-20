import ProfileBanner from "./ProfileComponents/ProfileBanner";
import ProfileDashboard from "./ProfileComponents/ProfileDashboard";
import ProfileDetails from "./ProfileComponents/ProfileDetails";


const Profile = () => {
    return (
        <div className="py-16 bg-background">
            <ProfileBanner></ProfileBanner>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-11/12 mx-auto">
                <div className="lg:col-span-4">
                    <div className=" -mt-16 w-full">
                        <ProfileDetails></ProfileDetails>
                    </div>
                </div>
                {/*  */}
                <div className="lg:col-span-8 p-4">
                    <ProfileDashboard></ProfileDashboard>
                </div>
            </div>
        </div>
    );
};

export default Profile;