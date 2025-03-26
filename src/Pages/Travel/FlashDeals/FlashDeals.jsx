import { FaBus } from "react-icons/fa";
import Heading from "../../../components/Heading"
import FlashDealCard from "./FlashDealCard"
import DiscountImage from "../../../assets/Travel_image/Discount/discount.webp";
import DiscountImage2 from "../../../assets/Travel_image/Discount/discount2.webp";
import DiscountImage3 from "../../../assets/Travel_image/Discount/discount3.webp";

const FlashDeals = () => {
    const flashDeals = [
        {
          id: 1,
          title: "Up to 20% Discount on Eid-ul-Fitr Return Bus Tickets!",
          originalPrice: 1200,
          discountedPrice: 1000,
          promoCode: "EIDRETURN20",
          icon: <FaBus/>,
          image: DiscountImage
        },
        {
          id: 2,
          title: "Up to 15% Discount on Eid-ul-Fitr Bus Tickets!",
          originalPrice: 2000,
          discountedPrice: 1800,
          promoCode: "EID15",
          icon: <FaBus/>,
          image: DiscountImage2
        },
        {
          id: 3,
          title: "10% Eid Discount on Bus Tickets with Programming Hero",
          originalPrice: 1000,
          discountedPrice: 900,
          promoCode: "EIDPH10",
          icon: <FaBus/>,
          image: DiscountImage3
        }
      ];
      

    return (
        <>
            <div>
                <Heading
                    title={"Flash Deals"}
                    subtitle={"Limited-Time Bus Ticket Discounts - Grab Exclusive Flash Deals for Affordable and Convenient Travel Before They're Gone!"}
                />
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-5">
                {
                    flashDeals.map((deal, idx) => <FlashDealCard key={idx} deal={deal}/>)
                }

            </div>
        </>
    )
}

export default FlashDeals