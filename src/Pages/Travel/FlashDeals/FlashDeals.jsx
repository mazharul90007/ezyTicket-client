import { FaBus } from "react-icons/fa";
import Heading from "../../../components/Heading"
import FlashDealCard from "./FlashDealCard"
import DiscountImage from "../../../assets/Travel_image/travel-service/card-bg.jpg";
import DiscountImage2 from "../../../assets/Travel_image/travel-service/card-bg2.jpg";
import DiscountImage3 from "../../../assets/Travel_image/travel-service/card-bg3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
const FlashDeals = () => {
  const flashDeals = [
    {
      id: 1,
      title: "Up to 20% Discount on Eid-ul-Fitr Return Bus Tickets!",
      discount: "20%",
      originalPrice: 1200,
      discountedPrice: 1000,
      promoCode: "EIDRETURN20",
      icon: <FaBus />,
      image: DiscountImage
    },
    {
      id: 2,
      title: "Up to 15% Discount on Eid-ul-Fitr Bus Tickets!",
      originalPrice: 2000,
      discountedPrice: 1800,
      discount: "15%",
      promoCode: "EID15",
      icon: <FaBus />,
      image: DiscountImage2
    },
    {
      id: 3,
      title: "10% Eid Discount on Bus Tickets with Programming Hero",
      originalPrice: 1000,
      discountedPrice: 900,
      discount: "10%",
      promoCode: "EIDPH10",
      icon: <FaBus />,
      image: DiscountImage3
    },
    {
      id: 3,
      title: "10% Eid Discount on Bus Tickets with Programming Hero",
      originalPrice: 1000,
      discountedPrice: 900,
      discount: "10%",
      promoCode: "EIDPH10",
      icon: <FaBus />,
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
      {/* <div className="flex flex-col md:flex-row justify-between mt-15 gap-10">
                {
                    flashDeals.map((deal, idx) => <FlashDealCard key={idx} deal={deal}/>)
                }

            </div> */}
      <div className="py-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {
            flashDeals.map((deal, idx) =>
              <SwiperSlide key={idx}>
                <FlashDealCard deal={deal} />
              </SwiperSlide>
            )
          }

        </Swiper>
      </div>
    </>
  )
}

export default FlashDeals