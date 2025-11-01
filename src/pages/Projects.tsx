import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import HeroBanner from "@/components/common/HeroBanner";



// ✅ Data
const solutions = [
    {
        title: "Homeowner Solutions",
        img: "/Home-owner-project.jpg",
    },
    {
        title: "Business Owner Solutions",
        img: "/Bussiness-owner-project.jpg",
    },
    {
        title: "Utility-Scale Owner Solutions",
        img: "/utility-scale-project.jpg",
    },
];



// ✅ Variants for wave animation
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // easeOut curve
        },
    }),
};



export default function Projects() {


    return (


        <section className="w-full">


            <HeroBanner
                title="Our Projects"
                desc=" Discover our successful solar and energy projects, empowering communities and businesses with sustainable solutions worldwide."
                image="https://www.zurich.co.uk/-/media/news-and-insight/images/featured-banner/how_safe_are_solar_panels_desktop.jpg?w=1155&hash=6CCE0E8BA4A5857FBDDAE46D3AFAC444"
            />


            <div className="px-2 sm:px-10 lg:px-20 pb-8 sm:pb-16">

                {/* Header Section */}
                <div className="block sm:flex sm:justify-between mx-auto text-center sm:text-left mb-5">

                    <div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            All Your Energy <br /> Needs, Solved Here!
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg mt-2">
                            We offer five essential solar solutions tailored to your needs
                        </p>

                    </div>


                    <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:space-x-12 mt-6">

                        <div>
                            <p className="text-3xl font-bold text-black">770</p>
                            <p className="text-sm text-gray-500">
                                Billion kWh Green Power Generated
                            </p>
                        </div>

                        <div className="mt-4 sm:mt-0">
                            <p className="text-3xl font-bold text-black">85,000+</p>
                            <p className="text-sm text-gray-500">Installs across the Europe</p>
                        </div>

                    </div>

                </div>


                {/* Grid Section */}
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {solutions.map((card, i) => (

                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className={`relative overflow-hidden bg-gray-100 flex items-center justify-center text-gray-800 font-medium text-lg hover:bg-gray-200 transition`} >

                            <>
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    loading="lazy"
                                    className="w-full h-64 md:h-72 lg:h-96 object-cover"
                                />
                                <div className="absolute top-0 left-0 right-0 bg-black text-white px-4 py-3 text-sm md:text-base font-semibold flex items-center justify-between">
                                    {card.title}
                                </div>
                            </>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    )


}
