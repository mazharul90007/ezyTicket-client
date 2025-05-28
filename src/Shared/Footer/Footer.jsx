import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-white relative overflow-hidden py-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-main/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-main/2 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-11/12 mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12"
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-main mb-6">EZY Ticket</h3>
          <p className="text-gray-400 mb-6 max-w-sm">
            Transforming your event experience with seamless ticketing solutions
          </p>
          <div className="flex flex-wrap gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-3 bg-white/5 rounded-xl hover:bg-main/20 transition-colors cursor-pointer"
                >
                  <Icon className="text-xl text-gray-300 hover:text-main transition-colors" />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        {/* Navigation Sections */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Resources</h4>
          <div className="flex flex-col gap-4 text-gray-400">
            {["Application", "Documentation", "Systems", "FAQ"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-main transition-colors flex items-center group"
              >
                <span className="bg-main rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Company</h4>
          <div className="flex flex-col gap-4 text-gray-400">
            {["About Us", "Blog", "Partnerships", "Careers", "Press"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-main transition-colors flex items-center group"
                >
                  <span className="bg-main rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </Link>
              )
            )}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <div className="flex flex-col gap-5 text-gray-400">
            <div className="flex items-start gap-3 hover:text-main transition-colors">
              <FaLocationDot className="text-main mt-1 flex-shrink-0" />
              <span>
                Level 8, Tech Hub Tower
                <br />
                Dhaka 1212, Bangladesh
              </span>
            </div>
            <div className="flex items-center gap-3 hover:text-main transition-colors">
              <IoMdMail className="text-main flex-shrink-0" />
              <span>support@ezyticket.com</span>
            </div>
            <div className="flex items-center gap-3 hover:text-main transition-colors">
              <FaPhone className="text-main flex-shrink-0" />
              <span>+880 19856 458656</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative z-10 border-t border-white/10 py-4 text-center text-gray-400"
      >
        <div className="max-w-7xl mx-auto px-4">
          &copy; {new Date().getFullYear()} EZY Ticket. All rights reserved.
          <div className="mt-2 text-sm">Powered by EZY Ticketing Solutions</div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
