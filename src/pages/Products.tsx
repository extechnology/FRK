import HeroBanner from "@/components/common/HeroBanner";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { ProductProps } from "@/lib/mockdata";
import { productData } from "@/lib/mockdata";




export default function Products() {


    return (


        <section className="w-full">


            <HeroBanner
                title="Our Products"
                desc="Lighting the way with Renewable Energy where Innovation meets illumination"
                image="https://static.vecteezy.com/system/resources/thumbnails/046/371/170/small_2x/man-installs-solar-panels-on-roof-worker-installing-solar-panels-outdoors-photo.jpg"
            />


            {/* Heading */}
            <div className="text-center mt-0 px-2 sm:px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-900"
                >
                    Explore Our{" "}
                    <span className="text-green-600 drop-shadow">Solar Solutions</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 text-gray-600 max-w-2xl mx-auto"
                >
                    Choose from our range of energy-efficient solar street lights designed
                    for durability, performance, and sustainability.
                </motion.p>
            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-2 sm:p-8 mt-5 sm:mt-0">
                {productData.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>

        </section>

    );

}




const ProductCard: React.FC<ProductProps> = ({ id, title, subtitle, shortDescription, images, }) => {


    const navigate = useNavigate();


    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all flex flex-col"
        >


            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <motion.img
                    src={images[0]}
                    alt={title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-xs opacity-80">{subtitle}</p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 text-sm flex-grow">{shortDescription}</p>

                {/* CTA */}
                <div className="mt-6 flex gap-3">
                    
                    <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                        <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-md hover:from-green-600 hover:to-green-700 rounded-xl">
                            <ShoppingCart size={18} /> Order Now
                        </Button>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                        <Button
                            onClick={() => navigate(`/products/${id}`)}
                            className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-xl"
                        >
                            <Eye size={18} /> View Product
                        </Button>
                    </motion.div>

                </div>

            </div>

        </motion.div>

    );

};
