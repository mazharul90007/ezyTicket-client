import { Link } from "react-router-dom"

const Footer = () => {

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
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-20 lg:gap-5 bg-[#1b1b1b] text-white py-16 px-5">
            {/* about us */}
            <div className="flex flex-col ">
                <h1 className="text-2xl font-semibold mb-3">About Us</h1>
                <p className="text-left">Welcome to [Your Website Name], your trusted online ticket booking platform. We make ticket purchasing fast, secure, and hassle-free for events, travel, and entertainment. Our user-friendly system ensures seamless booking, real-time availability, and secure payments. Whether you're planning a trip, attending a concert, or booking a sports event, we've got you covered. Enjoy a smooth and convenient ticketing experience with us!</p>
            </div>
            {/* nav links */}
            <div className="flex flex-col  lg:pl-10">
                <h1 className="text-2xl font-semibold mb-3">Quick Links</h1>
                <div>
                    <ul className="flex flex-col justify-center  gap-4">
                        {
                            navLinks.map((i, idx) => <li><Link to={i.path}>{i.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
            {/* Be Part of Us */}
            <div className="flex flex-col ">
                <h1 className="text-2xl font-semibold mb-3">Be Part Of Us</h1>
                <ul className="flex flex-col justify-center  gap-4">
                    {
                        partUsLinks.map((i, idx) => <li><Link to={i.path}>{i.name}</Link></li>)
                    }
                </ul>
            </div>
            {/* Contact us */}
            <div className="flex flex-col ">
                <h1 className="text-2xl font-semibold mb-3">Contact Us</h1>
                <ul className="flex flex-col justify-center  gap-4">
                    <li><Link>Address: Dhaka,Bangladesh</Link></li>
                    <li><Link>Email: ezy@ticket.com</Link></li>
                    <li><Link>Email: +880 19856 458656</Link></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer