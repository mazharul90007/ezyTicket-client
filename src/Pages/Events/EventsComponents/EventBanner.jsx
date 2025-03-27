import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import banner1 from '../../../assets/Events_image/event-banner1.avif';
import banner2 from '../../../assets/Events_image/event-banner2.png';
import banner3 from '../../../assets/Events_image/event-banner3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const EventBanner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect="fade" // Enable fade effect
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]} // Include EffectFade
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="relative py-16 px-8 text-white text-center overflow-hidden h-[500px] md:h-[600px] lg:h-[680px] xl:h-[600px] flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${banner1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="relative z-10 border-1 border-white p-2">
                            <div className="border-1 border-white py-2 md:py-10 px-2 md:px-24 flex flex-col items-center">
                                <h1 className="text-4xl md:text-6xl font-bold uppercase">
                                    Feel the energy
                                </h1>
                                <div className="border-b-1 w-3/4 border-supporting mx-auto my-2 md:my-4"></div>
                                <p className="text-lg md:text-2xl mb-8">
                                    Thrilling Performance
                                </p>
                                <button className="ezy-button">
                                    <FaTicketAlt className="mr-2" /> Discover More
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative py-16 px-8 text-white text-center overflow-hidden h-[500px] md:h-[600px] lg:h-[680px] xl:h-[600px] flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${banner2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="relative z-10 border-1 border-white p-2">
                            <div className="border-1 border-white py-2 md:py-10 px-2 md:px-24">
                                <h1 className="text-4xl md:text-6xl font-bold uppercase">
                                    Be Part of Something Bigger
                                </h1>
                                <div className="border-b-1 w-3/4 border-supporting mx-auto my-2 md:my-4"></div>
                                <p className="text-lg md:text-2xl mb-8">
                                    Learn, Grow & Succeed
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="relative py-16 px-8 text-white text-center overflow-hidden h-[500px] md:h-[600px] lg:h-[680px] xl:h-[600px] flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${banner3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="relative z-10 border-1 border-white p-2">
                            <div className="border-1 border-white py-2 md:py-10 px-2 md:px-24">
                                <h1 className="text-4xl md:text-6xl font-bold uppercase">
                                    Create Memories Together
                                </h1>
                                <div className="border-b-1 w-3/4 border-supporting mx-auto my-2 md:my-4"></div>
                                <p className="text-lg md:text-2xl mb-8">
                                    Refresh your mind
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default EventBanner;
