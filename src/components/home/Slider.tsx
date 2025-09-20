import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import CircularText from "../CircularText";




// Slider data
const slides = [
    {
        image: "https://usercontent.one/wp/www.winssolutions.org/wp-content/uploads/2024/10/image-6-800x500.jpg?media=1732096469",
        title: "Brighten Your World with Solar Power",
        desc: "Affordable, efficient, and eco-friendly energy tailored for your home. Start your solar journey today.",
    },
    {
        image: "https://openweather.co.uk/_next/image?url=%2Fapi%2Fmedia%2Ffile%2FSolar_Panels_Renewable_Energy.jpg&w=3840&q=75",
        title: "Clean energy for modern living",
        desc: "Power your life with renewable energy that saves money and helps the planet.",
    },
];






export default function HeroSlider() {


    return (


        <div className="w-full h-[100vh] md:h-screen relative overflow-hidden pt-0 px-0 sm:px-0">


            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt="Slide"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />


                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className="absolute -top-40 sm:-top-10 inset-0 flex flex-col justify-center px-6 sm:px-14 text-white z-10 max-w-3xl"
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3">
                                    {slide.title}
                                </h1>

                                <p className="text-md sm:text-base md:text-lg text-white/90 max-w-lg">
                                    {slide.desc}
                                </p>
                            </motion.div>



                            {/* Circular Explore Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute sm:bottom-16 bottom-10 sm:left-16 left-10 z-20"
                            >
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    {/* Explore Button */}
                                    <div className="w-24 h-24 text-xl rounded-full bg-white flex items-center justify-center text-black font-semibold shadow-md cursor-pointer hover:scale-105 transition-transform relative z-10">
                                        Explore
                                    </div>
                                    {/* Circular Text around border */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <CircularText
                                            text="EXPLORE*EXPLORE*EXPLORE*"
                                            onHover="speedUp"
                                            spinDuration={20}
                                            className=""
                                        />
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </div>

    );

}
