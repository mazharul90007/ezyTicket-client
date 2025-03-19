import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import nightSky from "../../assets/Navbar_image/sky.jpg";
import noImage from "../../assets/Common_image/noImage.png";

const Navbar = () => {
    const { darkMode, setDarkMode, user, logOut, setUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    // Initialize darkMode from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("Theme");
        if (savedTheme === "dark_mode") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [setDarkMode]);

    // Dark/Light theme toggle
    const activeMode = async () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("Theme", newDarkMode ? "dark_mode" : "light_mode");
    };

    // Toggle mobile menu
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    // Logout functionality
    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
        closeMenu(); // Close the mobile menu after logout
    };

    // Navigation links
    const links = (
        <>
            <Link to="/travel" className="flex items-center gap-2 hover:text-primary" onClick={closeMenu}>
                Travel
            </Link>
            <Link to="/events" className="flex items-center gap-2 hover:text-primary" onClick={closeMenu}>
                Events
            </Link>
            <Link to="/entertainment" className="flex items-center gap-2 hover:text-primary" onClick={closeMenu}>
                Entertainment
            </Link>
            <Link to="/pricing" className="flex items-center gap-2 hover:text-primary" onClick={closeMenu}>
                Pricing
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-primary" onClick={closeMenu}>
                About
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-primary" onClick={closeMenu}>
                Contact
            </Link>
            {user ? (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                src={user?.photoURL ? user.photoURL : noImage}
                                alt="User Profile"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to="/profile" className="hover:text-primary">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className="hover:text-primary">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <Link to="/login" className="flex items-center gap-2 hover:text-primary" onClick={closeMenu}>
                    Login/SignUp
                </Link>
            )}
        </>
    );

    return (
        <nav
            className={`navbar shadow px-6 py-4 fixed top-0 z-40 w-full bg-cover bg-center bg-background`}
            style={darkMode ? { backgroundImage: `url(${nightSky})` } : {}}
        >
            {/* Left Side: Logo */}
            <div className="flex-1">
                <Link to="/" className="text-2xl font-bold text-main flex items-center gap-2">
                    <span>EzyTicket</span>
                </Link>
            </div>

            {/* Right Side: Navigation Links (Desktop) */}
            <div className={`hidden lg:flex space-x-6 ${darkMode ? 'text-white' : 'text-black'}`}>
                {links}
            </div>

            {/* Dark Mode Toggle */}
            <button
                onClick={activeMode}
                aria-label="Toggle dark mode"
                className={`text-xl border ${darkMode ? 'border-white' : 'border-black'} p-2 ml-4 rounded-full shadow hover:scale-110 transition-transform transform`}
            >
                {!darkMode ? <FaMoon className="text-black" /> : <FaSun className="text-white" />}
            </button>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="btn btn-ghost btn-circle lg:hidden ml-4"
            >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Backdrop Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={closeMenu} // Close menu when clicking outside
                ></div>
            )}

            {/* Mobile Menu (Drawer) */}
            <div
                className={`fixed top-20 -right-1 shadow-xl p-4 rounded-l-lg flex flex-col space-y-4 lg:hidden transition-all duration-500 ease-in-out transform z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"} ${darkMode ? 'text-white bg-gray-700' : 'text-black bg-background'}`}
                style={{ pointerEvents: menuOpen ? "auto" : "none" }}
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
            >
                {links}
            </div>
        </nav>
    );
};

export default Navbar;