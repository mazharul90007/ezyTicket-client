import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;