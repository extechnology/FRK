import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";
import type {Variants} from "framer-motion";



export default function AboutUs() {


    // Variants for staggered fade-up
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.4, duration: 0.6, ease: easeOut },
        }),
    };



    // Image reveal effect (drop from top → bottom)
    const dropReveal: Variants = {
        hidden: { clipPath: "inset(0 0 100% 0)" },
        visible: {
            clipPath: "inset(0 0 0% 0)",
            transition: { duration: 4, ease: [0.25, 0.8, 0.25, 1] },
        },
    };



    return (


        <section className="w-full px-2 sm:px-10 lg:px-20 py-8 sm:py-10">


            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


                {/* Left Side */}
                <div className="flex flex-col gap-6">


                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
                    >
                        Sun-Powered Solutions
                        <br />
                        for Every Home
                    </motion.h2>

                    {/* Large Image with reveal */}
                    <motion.div
                        variants={dropReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <img
                            src="https://w0.peakpx.com/wallpaper/447/499/HD-wallpaper-city-ferris-wheel-aerial-view-buildings-lights-water.jpg"
                            alt="Packaging industry machinery"
                            className="w-full object-cover min-h-[260px] sm:min-h-[320px] lg:min-h-[640px] transform transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Link to={"/about"}>
                            <button className="absolute bottom-4 left-4 bg-white text-black font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transform transition hover:cursor-pointer">
                                Explore more about us
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-8 h-full">
                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="text-gray-600 text-sm sm:text-base max-w-[520px] leading-relaxed"
                    >
                        Frk Lighting Solutions is a leading provider of solar lighting
                        solutions for residential and commercial customers. Our mission is
                        to empower homeowners and businesses with clean, renewable energy
                        solutions that not only save them money but also contribute to a
                        greener environment.
                    </motion.p>

                    {/* Specialty List */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Our Speciality</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Ready for Any Home",
                                "100% Solar Powered",
                                "No Wiring, No Fuss",
                                "Affordable & Efficient",
                                "Smart Technology",
                                "Built to Last",
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={idx + 3}
                                    className="flex items-center gap-3 text-gray-700 bg-white/40 rounded-md px-2 py-1"
                                >
                                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Small Image Reveal */}
                    <motion.div
                        variants={dropReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group self-stretch"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
                            alt="Easypack factory packaging process"
                            className="w-full object-cover h-[220px] sm:h-[240px] lg:h-[460px] transform transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
