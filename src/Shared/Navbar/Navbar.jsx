import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import nightSky from "../../assets/Navbar_image/sky.jpg";
import noImage from "../../assets/Common_image/noImage.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Navbar = () => {
  const { darkMode, setDarkMode, user, logOut, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage =
    location.pathname === "/entertainment" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/travel" ||
    location.pathname === "/events";

  // Initialize darkMode from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");
    if (savedTheme === "dark_mode") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    // const handleScroll = () => {
    //     if (window.scrollY > 0 || !isHomePage) {
    //       setIsScrolled(true);
    //     } else {
    //       setIsScrolled(false);
    //     }
    //   };

    //   window.addEventListener("scroll", handleScroll);
    //   handleScroll();
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
  }, [setDarkMode, isHomePage]);

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
      .catch((error) => {
        console.log(error);
      });
    closeMenu(); // Close the mobile menu after logout
  };

  // Navigation links
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
          }`
        }
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/travel"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
          }`
        }
        onClick={closeMenu}
      >
        Travel
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
          }`
        }
        onClick={closeMenu}
      >
        Events
      </NavLink>
      <NavLink
        to="/entertainment"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
          }`
        }
        onClick={closeMenu}
      >
        Entertainment
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
          }`
        }
        onClick={closeMenu}
      >
        Pricing
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
          }`
        }
        onClick={closeMenu}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
          }`
        }
        onClick={closeMenu}
      >
        Contact
      </NavLink>
      {user ? (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="py-2  flex gap-1 items-center cursor-pointer"
          >
            <div className="w-10 rounded-full">
              <img
                src={user?.photoURL ? user.photoURL : noImage}
                alt="User Profile"
                className="rounded-full"
              />

            </div>
            <span className="text-xl">
              <MdOutlineKeyboardDoubleArrowDown />
            </span>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-4 shadow mt-4"
          >
            <div className="text-center">
              <img
                src={user?.photoURL ? user.photoURL : noImage}
                alt="User Profile"
                className="w-16 h-16 rounded-full border-2 p-1 border-main mx-auto mb-3"
              />
              <h4 className="text-lg text-gray-600 font-semibold">
                {user?.displayName}
              </h4>
              <p className="text-sm font-semibold text-gray-400">
                {user?.email}
              </p>
            </div>
            <div className="divider"></div>
            <ul>
              <li>
                <Link to="/mydashboard" className="hover:text-supporting">
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-supporting">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/mywishlist" className="hover:text-supporting">
                  My WishList
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-supporting"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-supporting ${isActive ? "text-supporting" : ""
            }`
          }
          onClick={closeMenu}
        >
          Login/SignUp
        </NavLink>
      )}
    </>
  );

  return (
    <nav
      className={`navbar shadow px-6 py-4 fixed top-0 z-40 w-full bg-cover bg-center
              ${darkMode ? "" : "bg-background"} `}
      style={darkMode ? { backgroundImage: `url(${nightSky})` } : {}}
    >
      {/* Left Side: Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-3xl font-bold text-main flex items-center gap-2"
        >
          <img className="w-28 h-12 object-cover" src="/icon.png" alt="" />
          
        </Link>
      </div>

      {/* Right Side: Navigation Links (Desktop) */}
      <div
        className={`hidden text-lg font-medium lg:flex space-x-6 ${darkMode ? "text-white" : "text-black"
          }`}
      >
        {links}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={activeMode}
        aria-label="Toggle dark mode"
        className={`text-xl border ${darkMode ? "border-white" : "border-black"
          } p-2 ml-4 rounded-full shadow hover:scale-110 transition-transform transform`}
      >
        {!darkMode ? (
          <FaMoon className="text-black" />
        ) : (
          <FaSun className="text-white" />
        )}
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
          className="fixed inset-0 z-30"
          onClick={closeMenu} // Close menu when clicking outside
        ></div>
      )}

      {/* Mobile Menu (Drawer) */}
      <div
        className={`fixed top-20 -right-1 shadow-xl p-4 rounded-l-lg flex flex-col space-y-4 lg:hidden transition-all duration-500 ease-in-out transform z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"
          } ${darkMode ? "text-white bg-gray-700" : "text-black bg-background"}`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
      >
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
