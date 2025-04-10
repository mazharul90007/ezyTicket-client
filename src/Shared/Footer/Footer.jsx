import { Link } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaAngleRight, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
const Footer = () => {
    const { darkMode } = useAuth();

    const navLinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Gallery",
            link: "/gallery"
        },
        {
            name: "About Us",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Blog",
            link: "/blog"
        },
    ]

    const partUsLinks = [
        {
            name: "Create Event",
            path: "/event-create"
        },
        {
            name: "Your Event",
            path: "/your-event"
        },
        {
            name: "Ticket Event",
            path: "/ticket-event"
        },

    ]




    return (
        <footer className="bg-[#1b1b1b]">
            <section className={`w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-20 lg:gap-5   py-12 px-5 ${darkMode ? 'text-dark-primary' : 'text-gray-300'}`}>
                {/* about us */}
                <div className="flex flex-col ">
                    <h1 className="text-2xl font-semibold mb-3">About Us</h1>
                    <p className="text-left">Welcome to EZY Ticket, your trusted online ticket booking platform. We make ticket purchasing fast, secure, and hassle-free for events, travel, and entertainment.</p>
                    <div className="flex items-center gap-10 mt-2">
                        <Link className=" text-main w-5 h-5 text-4xl">
                            <FaFacebookSquare />
                        </Link>
                        <Link className=" text-main w-5 h-5 text-4xl">
                            <FaYoutubeSquare />
                        </Link>
                        <Link className=" text-main w-5 h-5 text-4xl">
                            <FaTwitterSquare />
                        </Link>
                        <Link className=" text-main w-5 h-5 text-4xl">
                            <FaInstagramSquare />
                        </Link>
                    </div>
                </div>
                {/* nav links */}
                <div className="flex flex-col  lg:pl-10">
                    <h1 className="text-2xl font-semibold mb-3">Quick Links</h1>
                    <div>
                        <ul className="flex flex-col justify-center  gap-4">
                            {
                                navLinks.map((i, idx) => <li key={idx} className="flex items-center gap-2">
                                    <FaAngleRight className="text-main font-bold text-xl" />
                                    <Link to={i.path}>{i.name}</Link></li>)
                            }
                        </ul>
                    </div>
                </div>
                {/* Be Part of Us */}
                <div className="flex flex-col ">
                    <h1 className="text-2xl font-semibold mb-3">Be Part Of Us</h1>
                    <ul className="flex flex-col justify-center  gap-4">
                        {
                            partUsLinks.map((i, idx) => <li key={idx}> <Link to={i.path}>{i.name}</Link></li>)
                        }
                    </ul>
                </div>
                {/* Contact us */}
                <div className="flex flex-col ">
                    <h1 className="text-2xl font-semibold mb-3">Contact Us</h1>
                    <ul className="flex flex-col justify-center  gap-4">
                        <li className="border-t border-gray-500 pt-4  flex items-center gap-2"> <FaLocationDot className="text-main" /> <Link>Dhaka,Bangladesh</Link></li>
                        <li className="border-t border-gray-500 pt-4 flex items-center gap-2"><IoMdMail className="text-main" /> <Link>ezy@ticket.com</Link></li>
                        <li className="border-t border-gray-500 pt-4 flex items-center gap-2"><FaPhone className="text-main" /> <Link>+880 19856 458656</Link></li>
                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Footer