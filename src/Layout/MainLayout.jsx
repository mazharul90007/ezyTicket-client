import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div className="font-roboto flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Main content area */}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;