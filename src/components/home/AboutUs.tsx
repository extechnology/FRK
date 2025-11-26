import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";




export default function AboutUs() {


    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.4, duration: 0.6, ease: easeOut },
        }),
    };


    const dropReveal: Variants = {
        hidden: { clipPath: "inset(0 0 100% 0)" },
        visible: {
            clipPath: "inset(0 0 0% 0)",
            transition: { duration: 4, ease: [0.25, 0.8, 0.25, 1] },
        },
    };



    return (


        <section className="w-full px-2 sm:px-10 lg:px-14 py-2 sm:py-10">


            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-stretch">


                {/* LEFT COLUMN */}
                <div className="flex flex-col h-full gap-6">

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Shining Light on Every
                        <br />
                        Pathway with&nbsp;the&nbsp;Sun
                    </motion.h2>

                    {/* BIG IMAGE */}
                    <motion.div
                        variants={dropReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group flex-1"
                    >
                        <img
                            src="/hero-about-1.jpg"
                            alt="Packaging industry machinery"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <Link to="/about">
                            <button className="absolute bottom-4 left-4 bg-white text-black font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transition">
                                Explore more about us
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col h-full justify-between gap-3">

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify"
                    >
                        FRK Solar Streetlight stands as a symbol of reliability and innovation in solar lighting solutions.
                        As a trusted brand from a trusted name, we are dedicated to delivering high-quality, energy-efficient,
                        and eco-friendly solar street lights that brighten communities and protect the environment. With
                        advanced technology, durable designs, and a strong focus on customer satisfaction, FRK continues to
                        lead the way in sustainable outdoor lighting. Choose FRK where excellence meets trust, and every light
                        shines&nbsp;with&nbsp;purpose.
                    </motion.p>

                    {/* Specialty */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                    >
                        <h3 className="text-3xl font-semibold mb-4">Our Speciality</h3>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "High-Efficiency Solar Technology",
                                "Custom Project Solutions",
                                "Turnkey Installation Services",
                                "Durability & Weather Resistance",
                                "Smart & Energy-Saving Features",
                                "Eco-Friendly & Cost-Effective",
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={idx + 3}
                                    className="flex items-center gap-3 text-gray-700 bg-white/60 rounded-md px-2 py-1"
                                >
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span className="text-sm">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* SMALL IMAGE */}
                    <motion.div
                        variants={dropReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden shadow-lg group flex-1 self-stretch"
                    >
                        <img
                            src="/hero-about-2.jpg"
                            alt="Easypack factory packaging process"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                </div>

            </div>

        </section>
    );
}
