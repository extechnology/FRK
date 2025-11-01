import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";




export default function Solutions() {



    // Cards data
    const cards = [
        {
            title: "Quality Street Lighting",
            description: "Delivers bright, durable, energy-efficient illumination with advanced solar technology, ensuring safety, reliability, and sustainable outdoor lighting for every environment.",
            image: "/tech-meets-1.jpg",
        },
        {
            title: "Professional Fitting and Installation",
            description: "offers professional fitting and installation with expert precision, ensuring seamless setup, reliable performance, and long-lasting efficiency for all solar lighting projects.",
            image: "/tech-meets-2.jpg",
        },
        {
            title: "After-Sales Service",
            description: "provides prompt, reliable after-sales service with expert support, ensuring optimal performance, quick issue resolution, and complete customer satisfaction for every installation",
            image: "/tech-meets-3.jpg",
        },
    ];




    return (


        <section className="w-full px-2 sm:px-10 lg:px-20 py-8 sm:py-5">

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10"
            >

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Where Technology Meets the Power of the Sun</h2>
                    <p className="text-gray-600 max-w-xl text-justify">
                        Explore the latest in solar technology and solutions that can transform your energy
                        usage. Discover how solar power can reduce costs and create a sustainable future.
                    </p>
                </div>

                <Button className="bg-black text-white rounded-full px-6 py-2 text-sm hover:bg-gray-900 hover:cursor-pointer hover:scale-105">
                    Explore Our Projects →
                </Button>

            </motion.div>


            <div className="grid md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white overflow-hidden flex flex-col"
                    >
                        <img src={card.image} alt={card.title} className="w-full h-72 object-cover rounded-2xl" />
                        <div className="p-4 flex flex-col gap-2">
                            <h3 className="text-lg font-semibold">{card.title}</h3>
                            <p className="text-gray-600 text-sm">{card.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>

    )

}
