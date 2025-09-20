import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

export default function ImageGrid() {
    // Fade-up animation
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
        }),
    };

    // Reusable card with hover effects
    const ImageCard = ({
        src,
        alt,
        description,
    }: {
        src: string;
        alt: string;
        description: string;
    }) => (
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            {/* Image with zoom effect */}
            <img
                src={src}
                alt={alt}
                className="w-full h-[600px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text + Button */}
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white text-lg mb-3">{description}</p>
                <button className="px-4 py-2 bg-white text-black rounded-lg font-medium shadow-md hover:bg-gray-200 transition">
                    Learn More
                </button>
            </div>
        </div>
    );

    return (
        <section className="w-full px-4 sm:px-8 lg:px-20 py-8 sm:py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Top Left */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                >
                    <ImageCard
                        src="https://img.freepik.com/free-photo/man-with-white-helmet-near-solar-panel_1157-30009.jpg?semt=ais_incoming&w=740&q=80"
                        alt="Engineer at solar panels"
                        description="Engineer at solar panels"
                    />
                </motion.div>

                {/* Top Right */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                >
                    <ImageCard
                        src="https://advocateturkey.com/wp-content/uploads/2025/07/ChatGPT-Image-22-Tem-2025-13_38_23.png"
                        alt="Mother and child at solar panels"
                        description="Family exploring solar energy"
                    />
                </motion.div>

                {/* Bottom Full Width */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    className="sm:col-span-2"
                >
                    <ImageCard
                        src="https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Engineers walking at solar farm"
                        description="Engineers walking at solar farm"
                    />
                </motion.div>
            </div>
        </section>
    );
}
