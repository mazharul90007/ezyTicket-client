import {motion} from "framer-motion";
import useAuth from "../../../Hooks/useAuth";
const BannerCard = ({ card, idx }) => {
    const { title, description, linkText, icon } = card;
    const {darkMode} = useAuth()
    return (
        <motion.div 
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 * idx+0.8,  ease:"easeInOut" }}
        className={`${darkMode ?  "bg-[#1d1d1d] text-white" : "bg-white text-[#111111]" } shadow-2xl rounded p-5 flex flex-col justify-between text-center py-10`}>
            <div>
                <div className="text-center text-4xl mb-5 text-white  flex justify-center items-center ">
                    <span className="p-5 bg-supporting rounded-2xl">

                    {icon}
                    </span>
                </div>
                <h3 className='text-xl text-main md:text-2xl font-semibold'>{title}</h3>
                <p className=''>{description}</p>
            </div>
        </motion.div>
    )
}

export default BannerCard;