import HeroBanner from "@/components/common/HeroBanner";
import { motion } from "framer-motion";



export default function Service() {


    // ✅ Data
    const services = [
        {
            title: "Smart Solar Integration",
            desc: "Seamlessly integrate smart solar technology for efficient, reliable, and sustainable energy.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "EV Charging Solutions",
            desc: "Reliable EV charging setups tailored for your home or business.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "Microgrid Development",
            desc: "Empowering communities with decentralized, sustainable microgrids.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "Smart Battery Storage",
            desc: "Store solar energy efficiently with advanced battery systems.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "Solar Panel Cleaning",
            desc: "Maintain peak efficiency with our professional cleaning services.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "Off-Grid Solar Systems",
            desc: "Independent solar systems designed for remote locations.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "Net Metering Setup",
            desc: "Maximize returns by connecting to the grid with net metering.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "Battery Backup System",
            desc: "Ensure uninterrupted power with reliable backup solutions.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
        {
            title: "Solar System Upgrade",
            desc: "Upgrade existing solar setups for improved performance.",
            img: "https://seia.org/wp-content/uploads/2024/08/AdobeStock_588470815-scaled.jpeg",
        },
    ];



    return (


        <section className="w-full">


            <HeroBanner
                title="Our Services"
                desc="Discover our comprehensive solar and energy services, empowering communities and businesses with sustainable solutions."
                image="https://www.dolphin-charger.com/media/global/R%C3%A9gulateurs-MPPT-r%C3%A9gulateurs-charge-solaire.jpg"

            />


            <section className="mx-auto px-6 pt-2 pb-10 sm:pb-16 sm:pt-3">


                {/* Heading */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        See Our All Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore our range of solar services, from installation to maintenance
                        and energy storage. We provide tailored solutions to meet all your
                        renewable energy needs.
                    </motion.p>
                </div>



                {/* Service Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: i * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >

                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.img})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>


                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-end h-80">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition duration-500">
                                    {service.desc}
                                </p>
                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>


        </section>


    )



}
