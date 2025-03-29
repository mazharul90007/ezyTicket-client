import { useState } from 'react';
import bannerBus from '../../../assets/Home_image/banner-bus.jpg';
import bannerCineplex from '../../../assets/Home_image/banner-cineplex.jpg';
import Barcode from '../../../assets/Home_image/barcode1.png';
import bannerConcert from '../../../assets/Home_image/tahsan.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Slide } from 'react-awesome-reveal';

const HomeBanner = () => {
    const [slideKey, setSlideKey] = useState(0);

    return (
        <div className='h-[450px] md:h-[480px] lg:h-[580px] relative grid grid-cols-1 overflow-hidden  shadow-lg'>
            {/* Left Side (Banner with Image and Overlay) */}
            <div className=''>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    effect="fade"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade]}
                    className="mySwiper h-full"
                    onSlideChange={() => setSlideKey(prev => prev + 1)} // Force re-render on slide change
                >
                    <SwiperSlide>
                        <div className="relative h-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${bannerBus})` }}
                            >
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center px-8 text-white">
                                <div key={slideKey}> {/* Key forces re-render */}
                                    <Slide duration={1000} direction='left'>
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                                            Bus Ticket
                                        </h1>
                                    </Slide>
                                    <Slide duration={1200} direction='left'>
                                        <p className="text-xl md:text-2xl lg:text-4xl">
                                            Skip the lines! Book tickets from
                                        </p>
                                    </Slide>
                                    <Slide duration={1400} direction='left'>
                                        <p className='text-supporting text-4xl md:text-5xl lg:text-6xl font-bold my-4'>EzyTicket</p>
                                    </Slide>
                                    <Slide duration={1600} direction='left'>
                                        <p className='text-xl md:text-2xl lg:text-4xl'>100+ bus operators</p>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${bannerCineplex})` }}
                            >
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                            </div>

                            <div className="absolute inset-0 flex items-center px-8 text-white">
                                <div key={slideKey}>
                                    <Slide duration={1000} direction='left'>
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                                            Blockbuster movies near you.
                                        </h1>
                                    </Slide>
                                    <Slide duration={1200} direction='left'>
                                        <p className="text-xl md:text-2xl lg:text-3xl">
                                            Skip the queues & Book tickets from
                                        </p>
                                    </Slide>
                                    <Slide duration={1400} direction='left'>
                                        <p className='text-supporting text-4xl md:text-5xl lg:text-6xl font-bold my-4'>EzyTicket</p>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${bannerConcert})` }}
                            >
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                            </div>

                            <div className="absolute inset-0 flex items-center px-8 text-white">
                                <div key={slideKey}>
                                    <Slide duration={1000} direction='left'>
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                                            Feel the Thrill
                                        </h1>
                                    </Slide>
                                    <Slide duration={1200} direction='left'>
                                        <p className="text-xl md:text-2xl lg:text-4xl">
                                            Don’t miss out! Book tickets from
                                        </p>
                                    </Slide>
                                    <Slide duration={1400} direction='left'>
                                        <p className='text-supporting text-4xl md:text-5xl lg:text-6xl font-bold my-4'>EzyTicket</p>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeBanner;
