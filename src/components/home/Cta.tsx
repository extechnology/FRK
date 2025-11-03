import { motion } from "framer-motion";
import { Link } from "react-router-dom";




export default function Cta() {


    return (


        <section className="w-full px-4 sm:px-6 lg:px-8 py-8">


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-3xl bg-gradient-to-br from-green-700 via-green-500 to-yellow-500 text-center px-6 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto"
            >


                {/* Overlay gradient texture effect */}
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.3),transparent_70%)]"></div>


                {/* Content */}
                <div className="relative z-10 max-w-2xl mx-auto">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Contribute and Welcome Green Revolution
                    </h2>

                    <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                        proudly contributes to the green revolution by providing sustainable solar lighting solutions, reducing carbon footprint, saving energy, and creating a brighter, eco-friendly future for communities and generations to come.
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
