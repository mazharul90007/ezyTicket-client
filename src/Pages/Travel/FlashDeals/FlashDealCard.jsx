import { Link } from "react-router-dom"
import DiscountImage from "../../../assets/Travel_image/Discount/discount.webp"
const FlashDealCard = ({deal}) => {
    const {title, image, discountedPrice, promoCode, originalPrice, icon} = deal
    return (
        <div className="card bg-base-100 w-full shadow-sm">
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