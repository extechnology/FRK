import { motion } from "framer-motion";
import { Link } from "react-router-dom";




export default function Cta() {


    return (

        <section className="w-full px-2 sm:px-6 lg:px-8 py-5">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black text-center px-5 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto"
            >

                {/* Gradient Background with Glow Beam */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl mx-auto">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Contribute and Welcome Green Revolution
                    </h2>

                    <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center">
                        FRK solar streetlights proudly leads the movement toward a sustainable future by delivering advanced solar lighting solutions that redefine energy efficiency. Through innovation and clean technology, we reduce carbon footprints, conserve energy, and illuminate pathways toward a brighter, eco-conscious world for communities today and generations tomorrow.
                    </p>

                    <Link to="/products">
                        <button className="mt-6 px-6 py-2.5 bg-white text-gray-900 font-medium rounded-full shadow hover:bg-gray-100 transition hover:scale-105 hover:cursor-pointer">
                            Order Now !
                        </button>
                    </Link>

                </div>

            </motion.div>

        </section>


    )



}
