import { Link } from "react-router-dom"
import useAuth from "../../../Hooks/useAuth"
import { IoWalletOutline } from "react-icons/io5";
const FlashDealCard = ({ deal }) => {
    const { title, image, discountedPrice,discount, promoCode, originalPrice, icon } = deal
    const { darkMode } = useAuth()

    return (
        <div className={` card w-full shadow-2xl ${darkMode ? "bg-[#1d1d1d] text-white" : "bg-white text-[#111111]"} `}>
            {/* <figure>
                <img
                    src={image}
                    alt={title} />
            </figure> */}
            <div className=" rounded grid grid-cols-5 gap-5 h-full">
                <div className="col-span-2 bg-main p-2 py-8 rounded flex flex-col items-center  -ml-4 -mt-4">
                    <div>
                        <p className="text-sm">Up To</p>
                        <p className="font-bold"><span className="text-yellow-500">{discount} </span>Discount</p>
                    </div>
                    <p className="text-white text-5xl mt-2"><IoWalletOutline /></p>
                </div>
                <div className="col-span-3 p-8 pl-2 pb-0">
                    <h2 className="card-title">{title}</h2>
                    <p>Use A simple code with a discount offer.</p>
                </div>
            </div>
            <div className="card-body ">
                <div className="card-actions justify-between items-center border-t pt-2">
                    <div>
                        <span className="font-black">Use Code:</span> <span className="text-supporting">{promoCode}</span>
                    </div>
                    <Link to={"/travel/bus-ticket-book"} className="btn bg-main border-none text-white">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default FlashDealCard