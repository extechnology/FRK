import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "../CountUp";




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



    // Statistics Data
    const stats: { name: string; value: number; symbol: string }[] = [

        { name: "Product Deliveries", value: 25, symbol: "L+" },
        { name: "Project Executions", value: 400, symbol: "+" },
        { name: "Satisfied Customers", value: 50, symbol: "K+" },
        { name: "Reserved Energy ( Units )", value: 100, symbol: "Mill+" },

    ]




    return (


        <div className="w-full px-2 sm:px-10 lg:px-14 py-2 sm:py-5">


            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6">


                {/* Left Green Services Card */}
                <motion.div
                    className="bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-xl px-5 sm:px-10 flex flex-col justify-center md:row-span-2 h-[320px] md:h-[330px]"
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <ul className="space-y-6 text-2xl font-medium py-5 sm:py-0">

                        {stats.map((item, i) => (

                            <li
                                key={i}
                                className="flex justify-between items-center group cursor-pointer"
                            >

                                <span className="relative transition-colors text-md sm:text-3xl duration-300 group-hover:text-green-400 font-semibold">
                                    {item.name}
                                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                                </span>

                                <span className="text-white transition-colors duration-300 group-hover:text-green-400 text-md sm:text-3xl font-semibold">

                                    <CountUp
                                        from={0}
                                        to={item.value}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        startWhen={true}
                                        className="count-up-text"
                                    />

                                    {item.symbol}
                                </span>

                            </li>

                        ))}

                    </ul>

                </motion.div>



                {/* Middle Image Card */}
                <motion.div
                    className="rounded-xl overflow-hidden h-[420px] p-6 sm:p-5 md:h-[820px] lg:h-[330px] border-2"
                    custom={1}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img
                        src="/bento-gird-1.jpg"
                        alt="Solar Panel Technician"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </motion.div>


                {/* Right Image Card */}
                <motion.div
                    className="rounded-xl overflow-hidden h-[420px] p-6 sm:p-5 md:h-[820px] lg:h-[330px] border-2"
                    custom={2}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img
                        src="/bento-gird-2.jpg"
                        alt="Solar Worker"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </motion.div>

            </div>




            {/* Reviews Cards */}
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
                            src="https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg"
                            alt="Jidan D."
                            loading="lazy"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <h3 className="font-semibold text-xl">Jidan D</h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                        "FRK Solar Street Lights exceeded my expectations! Bright illumination, durable build, and easy installation. They run flawlessly all night and save on electricity bills. Truly an eco-friendly, cost-effective lighting solution."
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
                        Sustainable Lighting for  <br /> a Brighter Tomorrow.
                    </h2>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        Illuminate roads and pathways with renewable energy solutions that save money and conserve natural resources.
                    </p>

                    <Link to={'/about'}>
                        <button className="mt-6 px-5 py-2 bg-black text-white rounded-full w-fit hover:bg-gray-900 transition hover:scale-105 hover:cursor-pointer">
                            Explore Now →
                        </button>
                    </Link>

                </motion.div>


            </div>

        </div>

    )

}
