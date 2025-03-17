import { motion } from "framer-motion";
const BannerCard = ({ card, idx }) => {
    const { title, description, linkText, icon } = card;
    return (
        <motion.div 
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 * idx+0.8,  ease:"easeInOut" }}
        className='shadow-2xl rounded p-5 flex flex-col justify-between bg-white'>
            <div>
                <div className="text-center text-4xl mb-2 text-main ">
                    {icon}
                </div>
                <h3 className='text-xl text-supporting md:text-2xl font-semibold'>{title}</h3>
                <p className=''>{description}</p>
            </div>
            <button className='btn mt-4'>{linkText}</button>
        </motion.div>
    )
}

export default BannerCard