import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";




export default function Solutions() {



    // Cards data
    const cards = [
        {
            title: "Quality Street Lighting",
            description: "Delivers Bright, Durable, Energy-Efficient Illumination With Advanced Solar Technology, Ensuring Safety, Reliability, And Sustainable Outdoor Lighting For Every Environment.",
            image: "/tech-meets-1.jpg",
        },
        {
            title: "Professional Fitting and Installation",
            description: "Offers Professional Fitting And Installation With Expert Precision, Ensuring Seamless Setup, Reliable Performance, And Long-Lasting Efficiency For All Solar Lighting Projects.",
            image: "/tech-meets-2.jpg",
        },
        {
            title: "After-Sales Service",
            description: "Provides Prompt, Reliable After-Sales Service With Expert Support, Ensuring Optimal Performance, Quick Issue Resolution, And Complete Customer Satisfaction For Every Installation.",
            image: "/tech-meets-3.jpg",
        },
    ];




    return (


        <section className="w-full px-2 sm:px-10 lg:px-20 py-8 sm:py-5">

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col  gap-6 mb-10"
            >

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Where Technology Meets the Power of the Sun</h2>
                    <p className="text-gray-600 max-w-5xl text-justify">
                        At FRK our vision reflects an unwavering commitment to innovation sustainability and progress. We believe that sunlight can transform everyday life. Our Lighting Solutions are reliable, efficient and eco-friendly by harnessing clean solar energy. They illuminate streets enhance community safety and bring people together lighting the path toward a brighter
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link to="/projects">
                        <Button className="bg-black text-white rounded-full px-6 py-6 text-sm hover:bg-gray-900 hover:cursor-pointer hover:scale-105 transition-transform">
                            Explore Our Projects →
                        </Button>
                    </Link>
                </div>

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
                        <img src={card.image} alt={card.title} loading="lazy" className="w-full h-72 object-cover rounded-2xl" />
                        <div className="p-4 flex flex-col gap-1">
                            <h3 className="text-lg font-semibold">{card.title}</h3>
                            <p className="text-gray-600 text-sm text-justify sm:text-left">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>

    )

}
