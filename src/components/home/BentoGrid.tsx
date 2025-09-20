import { motion } from "framer-motion";
import type { Variants } from "framer-motion";




export default function BentoGrid() {


    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.4,
                duration: 0.8,
                ease: "easeOut" as const,
            },
        }),
    };


    return (


        <div className="w-full px-2 sm:px-10 lg:px-20 py-8 sm:py-5">


            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">


                {/* Left Green Services Card */}
                <motion.div
                    className="bg-green-800 text-white rounded-xl px-10 flex flex-col justify-center md:row-span-2 md:h-[320px]"
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <ul className="space-y-6 text-2xl font-medium">

                        {[
                            "Smart Solar Integration",
                            "EV Charging Solutions",
                            "Microgrid Development",
                            "Advanced Battery Storage",
                        ].map((item, i) => (

                            <li
                                key={i}
                                className="flex justify-between items-center group cursor-pointer"
                            >

                                <span className="relative transition-colors duration-300 group-hover:text-green-400">
                                    {item}
                                    {/* underline effect */}
                                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                                </span>

                                <span className="text-white/70 transition-colors duration-300 group-hover:text-green-400">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                            </li>

                        ))}

                    </ul>

                </motion.div>



                {/* Middle Image Card */}
                <motion.div
                    className="rounded-xl overflow-hidden h-56 md:h-[320px]"
                    custom={1}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1000"
                        alt="Solar Panel Technician"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </motion.div>


                {/* Right Image Card */}
                <motion.div
                    className="rounded-xl overflow-hidden h-56 md:h-[320px]"
                    custom={2}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1000"
                        alt="Solar Worker"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </motion.div>

            </div>




            {/* BOTTOM ROW: two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                <motion.div
                    className="bg-gray-50 rounded-xl p-6 flex flex-col gap-2 md:h-[260px]"
                    custom={3}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <div className="flex flex-col items-center">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Jidan D."
                            loading="lazy"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <h3 className="font-semibold text-xl">Jidan D</h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                        “Switching to solar with Solva was the best decision we ever made!
                        The installation process was seamless, and the team was professional
                        and knowledgeable. Our energy bills have dropped significantly, and
                        we love knowing we’re contributing to a greener future.”
                    </p>

                </motion.div>


                <motion.div
                    className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center md:h-[260px]"
                    custom={4}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <h2 className="text-4xl font-bold text-gray-900">
                        Seamless Smart Solar <br /> Solutions
                    </h2>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        Experience effortless integration of smart solar technology for
                        efficient and reliable energy solutions.
                    </p>

                    <button className="mt-6 px-5 py-2 bg-black text-white rounded-full w-fit hover:bg-gray-900 transition hover:scale-105 hover:cursor-pointer">
                        Explore →
                    </button>

                </motion.div>


            </div>

        </div>

    )

}
