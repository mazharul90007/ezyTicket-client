import { Link } from "react-router-dom"
import DiscountImage from "../../../assets/Travel_image/Discount/discount.webp"
import useAuth from "../../../Hooks/useAuth"
const FlashDealCard = ({deal}) => {
    const {title, image, discountedPrice, promoCode, originalPrice, icon} = deal
    const {darkMode} = useAuth()
    return (
        <div className={` card w-full shadow-sm ${darkMode ? "bg-[#1d1d1d] text-white" : "bg-white text-[#111111]" }` }>
            <figure>
                <img
                    src={image}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Use A simple code with a discount offer.</p>
                <div className="card-actions justify-between items-center border-t pt-2">
                    <div>
                    <span className="font-black">Use Code:</span> <span className="text-supporting">{promoCode}</span>
                    </div>
                    <Link to={"/travel/bus-ticket-book"} className="btn bg-main text-white">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default FlashDealCard