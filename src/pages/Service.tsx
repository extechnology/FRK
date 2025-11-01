import HeroBanner from "@/components/common/HeroBanner";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";



export default function Service() {


    // ✅ Data
    const services = [
        {
            title: "Site Assessment & Feasibility Study",
            desc: "Conducts comprehensive site assessments and feasibility studies to ensure optimal solar street lighting solutions. By analyzing location, sunlight availability, and energy requirements, FRK designs efficient, reliable, and cost-effective systems that maximize performance, minimize wastage, and guarantee sustainable, long-lasting illumination tailored to each project’s unique needs.",
            img: "/site-assesment-study-service.jpg",
        },
        {
            title: "Customized Solar Lighting Design",
            desc: "provides customized solar lighting design tailored to each project’s requirements. By considering street layout, illumination needs, and energy efficiency, FRK creates innovative, reliable, and sustainable solutions that maximize brightness, minimize costs, and ensure long-lasting performance, delivering safe, eco-friendly lighting for communities and commercial spaces",
            img: "/customized-design-service.jpg",
        },
        {
            title: "Supply of High-Quality Solar Lights",
            desc: "Supplies high-quality solar lights, including durable LED fixtures, efficient solar panels, long-lasting batteries, and sturdy poles. Each component is rigorously tested to ensure reliability, optimal performance, and energy efficiency, providing sustainable, low-maintenance, and eco-friendly lighting solutions that brighten streets, public spaces, and communities effectively",
            img: "/supply-of-high-quality-service.jpg",
        },
        {
            title: "Professional Installation & Commissioning",
            desc: "offers professional installation and commissioning of solar street lighting systems, ensuring precise setup and seamless operation. Their expert team handles pole erection, light fixture mounting, wiring, and system integration with strict safety standards. Post-installation, each system is tested for optimal performance, reliability, and energy efficiency, providing clients with a fully operational, low-maintenance, and sustainable solar lighting solution that illuminates streets, parks, and public spaces effectively",
            img: "/Professional-Installation-Commissioning-service.jpg",
        },
        {
            title: "Project Management & Execution",
            desc: "Provides end-to-end project management and execution for solar street lighting projects. From planning and resource allocation to scheduling, procurement, and on-site supervision, FRK ensures timely, cost-effective, and high-quality delivery. Their experienced team coordinates all aspects of the project, including permits, installations, and quality checks, guaranteeing smooth execution, optimal system performance, and sustainable, reliable lighting solutions that meet client expectations and community needs",
            img: "/Project-Management-Execution-service.jpg",
        },
        {
            title: "Integration of Smart Controls",
            desc: "Integrates smart control systems into solar street lights to enhance efficiency and convenience. Features like timers, motion sensors, dimming controls, and remote monitoring optimize energy usage, extend battery life, and ensure consistent illumination. These intelligent systems provide automated, adaptive lighting solutions that reduce operational costs, improve safety, and deliver reliable, eco-friendly street lighting tailored to the specific needs of communities and commercial spaces",
            img: "/Integration-of-Smart-Controls-service.jpg",
        },
        {
            title: "Maintenance & Troubleshooting Services",
            desc: "Comprehensive maintenance and troubleshooting services for solar street lights, ensuring long-term performance and reliability. Their skilled technicians conduct routine inspections, cleaning, battery checks, and repairs, promptly addressing any issues. By maintaining optimal system functionality, FRK minimizes downtime, extends equipment lifespan, and guarantees consistent, energy-efficient, and safe illumination for streets, parks, and public spaces, providing clients with peace of mind and sustainable lighting solutions",
            img: "/Maintenance-Troubleshooting-Services.jpg",
        },
        {
            title: "After-Sales Support & Warranty Services",
            desc: "Provides reliable after-sales support and warranty services for solar street lights, ensuring customer satisfaction and system longevity. Their dedicated team offers technical assistance, troubleshooting, and prompt resolution of issues, while honoring warranty commitments. This comprehensive support guarantees uninterrupted, efficient, and sustainable lighting, giving clients peace of mind and confidence in their investment, while reinforcing FRK’s commitment to quality, reliability, and eco-friendly solar solutions for communities and commercial projects",
            img: "/After-Sales-Support-Warranty-Services.jpg",
        },
        {
            title: "Sustainability & Energy Consulting",
            desc: "offers expert sustainability and energy consulting for solar street lighting projects, helping clients optimize energy usage, reduce carbon footprint, and achieve cost savings. Their team provides guidance on renewable energy integration, efficient system design, and eco-friendly practices. By combining technical expertise with sustainable solutions, FRK ensures reliable, energy-efficient, and environmentally responsible lighting that supports the Green Revolution while delivering long-term benefits to communities, businesses, and public spaces",
            img: "/Sustainability-Energy-Consulting-service.jpg",
        },
    ];



    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const getShortDesc = (desc: string) => {
        const words = desc.split(" ");
        return words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");
    };



    return (


        <section className="w-full">


            <HeroBanner
                title="Our Services"
                desc="Delivering reliable, energy-efficient, and sustainable lighting solutions that brighten communities and support the Green Revolution"
                image="/Service-banner.jpg"

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
                        Service Focus on Subsensible energy
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
                            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer flex flex-col justify-end h-80"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.img})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

                                {/* Description */}
                                <AnimatePresence>
                                    <motion.p
                                        key={expandedIndex === i ? "full" : "short"}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="text-sm text-gray-200 overflow-hidden"
                                    >
                                        {expandedIndex === i ? service.desc : getShortDesc(service.desc)}
                                    </motion.p>
                                </AnimatePresence>

                                {/* View More / Less Button */}
                                {service.desc.split(" ").length > 20 && (
                                    <button
                                        onClick={() => toggleExpand(i)}
                                        className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition"
                                    >
                                        {expandedIndex === i ? "View Less" : "View More"}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>


            </section>


        </section>


    )



}
