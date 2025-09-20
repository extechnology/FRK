import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";




export default function Solutions() {



    // Cards data
    const cards = [
        {
            date: "12 December 2024",
            title: "Solar Energy for Sustainability",
            description:
                "Solar energy is a key driver of sustainability, reducing reliance on fossil fuels. By adopting solar power.",
            image:
                "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
        },
        {
            date: "10 October 2024",
            title: "Maximizing Solar Panel Efficiency",
            description:
                "Maximizing solar panel efficiency ensures optimal energy production, saving you money.",
            image:
                "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
        },
        {
            date: "2 June 2024",
            title: "Affordable Solar Energy Solutions",
            description:
                "Affordable solar energy solutions make clean, renewable power accessible, helping money save.",
            image:
                "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Exploring Solar Solutions</h2>
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
