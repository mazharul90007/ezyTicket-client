import { FaBullhorn, FaCalendarAlt, FaHome, FaList, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { TbHomePlus } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import noImage from "../assets/Common_image/noImage.png"
// import useManager from "../Hooks/useManager";
import useEventManager from "../Hooks/useEventManager";
import useTravelManager from "../Hooks/useTravelManager";
import useEntertainmentManager from "../Hooks/useEntertainmentManager";




const Dashboard = () => {
    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    const [isEventManager] = useEventManager();
    const [isTravelManager] = useTravelManager();
    const [isEntertainmentManager] = useEntertainmentManager();
    const { user } = useAuth();
    console.log(isTravelManager);

    return (
        <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Dashboard SideBar */}
            <div className="md:col-span-3 md:min-h-screen bg-green-100 border-r border-gray-200 px-4">
                <Link to={'/'}>
                    <div className="flex items-center justify-center gap-1 pt-4">
                        <p className="text-3xl text-main font-bold"> Ezy Tickets</p>
                    </div>
                </Link>

                <div>
                    {
                        isAdmin ?
                            <h2 className="dashboard-badge">
                                ADMIN
                            </h2>
                            :
                            isTravelManager ?
                                <>
                                    <h2 className="dashboard-badge">
                                        TRAVEL MANAGER
                                    </h2>
                                </>
                                :
                                isEventManager ?
                                    <>
                                        <h2 className="dashboard-badge">
                                            EVENT MANAGER
                                        </h2>
                                    </>
                                    :
                                    isEntertainmentManager ?
                                        <>
                                            <h2 className="dashboard-badge">
                                                ENTERTAINMENT MANAGER
                                            </h2>
                                        </>
                                        :
                                        <>
                                            <h2 className="dashboard-badge">
                                                USER
                                            </h2>
                                        </>
                    }
                </div>

                <div className="divider"></div>
                {/* User Profile */}
                <div className="flex flex-col items-center space-y-2 mb-4 text-center">
                    <img src={user?.photoURL ? user.photoURL : noImage} alt="User Image" className="w-24 h-24 rounded-lg" />
                    <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                    <p className="font-semibold text-gray-500">{user?.email}</p>
                </div>
                <div className="divider"></div>
                <ul className="menu space-y-4 text-lg font-semibold">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminProfile'}><IoPerson /> Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageEvents'}><FaHome></FaHome> Manage Events</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageTravel'}><FaHome></FaHome> Manage Travel</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageEntertainments'}><FaHome></FaHome> Manage Entertainments</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'}><FaUsers />
                                    Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/advertiseProperty'}><FaBullhorn /> Advertise Property</NavLink>
                            </li>

                        </>
                            :
                            isEventManager ?
                                <>
                                    <li>
                                        <NavLink to={'/dashboard/managerProfile'}><IoPerson /> My Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/addEvent'}><TbHomePlus />Add Post</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/addedProperties'}><FaList /> My added Post</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/soldProperties'}><HiCurrencyDollar />Ticket Sold</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/manageReview'}><FaHouseCircleExclamation />
                                            Manage Review</NavLink>
                                    </li>
                                </>
                                :
                                isTravelManager ?
                                    <>
                                        <li>
                                            <NavLink to={'/dashboard/managerProfile'}><IoPerson /> My Profile</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/services'}><TbHomePlus />Add Post</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/addedProperties'}><FaList /> My added Post</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/soldProperties'}><HiCurrencyDollar />Ticket Sold</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/manageReview'}><FaHouseCircleExclamation />
                                                Manage Review</NavLink>
                                        </li>
                                    </>

                                    :
                                    isEntertainmentManager ?
                                        <>
                                            <li>
                                                <NavLink to={'/dashboard/managerProfile'}><IoPerson /> My Profile</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/dashboard/services'}><TbHomePlus />Add Post</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/dashboard/addedProperties'}><FaList /> My added Post</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/dashboard/soldProperties'}><HiCurrencyDollar />Ticket Sold</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/dashboard/manageReview'}><FaHouseCircleExclamation />
                                                    Manage Review</NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <NavLink to={'/dashboard/userProfile'}><IoPerson /> My Profile</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/dashboard/wishlist'}><FaCalendarAlt /> Wishlist</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/dashboard/propertyBought'}><FaWallet /> Ticket Bought</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/dashboard/myReview'}><FaShoppingCart />  My Review</NavLink>
                                            </li>
                                        </>
                    }

                    {/* Shared Nav Links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}><IoMdMail />
                            Support</NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-2 md:col-span-9 bg-blue-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;