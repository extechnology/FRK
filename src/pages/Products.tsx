import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";





interface ProductProps {
    title: string;
    subtitle: string;
    description: string;
    specs: Record<string, string | number>;
    warranty: string;
    notes: string[];
    image?: string;
}





const products: ProductProps[] = [
    {
        title: "Solar Street Lights (600W)",
        subtitle: "Outdoor, Roads & Villages | Light + Remote Control",
        description: "Energy-efficient solar lights with remote control and durable LiFePO₄ batteries.",
        specs: { Battery: "3.2V / 50,000mAh", "Lamp Output": "2178.041 lm", "Solar Panel": "60W / 5V", "LED Pieces": 69, "Charging Time": "4–5 Hours", "Lighting Time": "11 Hours", "Size of Light": "510×215×80 mm", "Size of Panel": "610×580×25 mm", "Rainy Days Backup": "1–3 Days", "Waterproof Rating": "IP65", "Working Mode": "Light + Remote", "Installation Height": "5–8 m", "Panel Type": "Mono PERC HPT", },
        warranty: "5-year warranty ensuring long-term performance and peace of mind.",
        notes: ["Built-in LiFePO₄ battery with 10+ years lifespan.", "Fast charging Mono PERC HPT solar panels.", "1–3 days backup during cloudy weather.",],
        image: "https://media.gettyimages.com/id/1130184194/video/sunrise-and-technologic-solar-energy-panels.jpg?s=640x640&k=20&c=D_q0aCPYQbZKBUbJHRb03Obmr5W-a_hr4cNv-3G7bO4=",
    }, {
        title: "Solar Street Lights (800W)",
        subtitle: "Outdoor, Roads & Villages | Light + Remote Control",
        description: "High-power solar lighting system with efficient charging and waterproof build.",
        specs: { Battery: "3.2V / 80,000mAh", "Lamp Output": "3131.71 lm", "Solar Panel": "80W / 5V", "LED Pieces": 88, "Charging Time": "5–6 Hours", "Lighting Time": "11 Hours", "Size of Light": "590×220×90 mm", "Size of Panel": "760×580×25 mm", "Rainy Days Backup": "1–3 Days", "Waterproof Rating": "IP65", "Working Mode": "Light + Remote", "Installation Height": "5–8 m", "Panel Type": "Mono PERC HPT", },
        warranty: "5-year warranty ensuring long-term performance and peace of mind.",
        notes: ["Strong aluminium build for outdoor conditions.", "IP65 waterproof & dustproof.", "Consistent 11-hour illumination daily.",],
        image: "https://media.gettyimages.com/id/1130184194/video/sunrise-and-technologic-solar-energy-panels.jpg?s=640x640&k=20&c=D_q0aCPYQbZKBUbJHRb03Obmr5W-a_hr4cNv-3G7bO4=",
    }, {
        title: "Solar Street Lights (1000W)",
        subtitle: "Outdoor, Roads & Villages | Light + Remote Control",
        description: "Powerful 1000W solar street lights with high efficiency and remote control.",
        specs: { Battery: "3.2V / 120,000mAh", "Lamp Output": "4884.841 lm", "Solar Panel": "100W / 5V", "LED Pieces": 144, "Charging Time": "5–6 Hours", "Lighting Time": "11 Hours", "Size of Light": "550×230×90 mm", "Size of Panel": "980×580×25 mm", "Rainy Days Backup": "1–3 Days", "Waterproof Rating": "IP65", "Working Mode": "Light + Remote", "Installation Height": "5–8 m", "Panel Type": "Mono PERC HPT", },
        warranty: "5-year warranty ensuring long-term performance and peace of mind.",
        notes: ["Bright 4884 lumen output for wide coverage.", "Quick 5–6 hour charging time.", "Remote + light control included.",],
        image: "https://media.gettyimages.com/id/1130184194/video/sunrise-and-technologic-solar-energy-panels.jpg?s=640x640&k=20&c=D_q0aCPYQbZKBUbJHRb03Obmr5W-a_hr4cNv-3G7bO4=",
    }, {
        title: "Solar Street Lights (1200W)",
        subtitle: "Outdoor, Roads & Villages | Light + Remote Control",
        description: "Top-range 1200W solar lights designed for large outdoor spaces and villages.",
        specs: { Battery: "3.2V / 120,000mAh", "Lamp Output": "3881.11 lm", "Solar Panel": "100W / 5V", "LED Pieces": 144, "Charging Time": "5–6 Hours", "Lighting Time": "11 Hours", "Size of Light": "420×330×75 mm", "Size of Panel": "980×580×25 mm", "Rainy Days Backup": "1–3 Days", "Waterproof Rating": "IP65", "Working Mode": "Light + Remote", "Installation Height": "5–8 m", "Panel Type": "Mono PERC HPT", },
        warranty: "5-year warranty ensuring long-term performance and peace of mind.",
        notes: ["Efficient Mono PERC panels for fast charging.", "Durable aluminium body with IP65 rating.", "Perfect for roads, outdoor spaces, and villages.",],
        image: "https://media.gettyimages.com/id/1130184194/video/sunrise-and-technologic-solar-energy-panels.jpg?s=640x640&k=20&c=D_q0aCPYQbZKBUbJHRb03Obmr5W-a_hr4cNv-3G7bO4=",
    },];





export default function Products() {


    return (

        <section className="w-full">

            <HeroBanner
                title="Our Products"
                desc="Lighting the way with Renewable Energy where Innovation meets illumination"
                image="https://static.vecteezy.com/system/resources/thumbnails/046/371/170/small_2x/man-installs-solar-panels-on-roof-worker-installing-solar-panels-outdoors-photo.jpg"
            />


            {/* Section Heading */}
            <div className="text-center mt-0 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-800"
                >
                    Explore Our <span className="text-green-600">Solar Solutions</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-3 text-gray-600 max-w-2xl mx-auto"
                >
                    Choose from our range of energy-efficient solar street lights designed
                    for durability, performance, and sustainability.
                </motion.p>
                <div className="mt-4 h-1 w-24 bg-gradient-to-r from-green-500 to-green-700 mx-auto rounded-full" />
            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>

        </section>

    );

}




const ProductCard: React.FC<ProductProps> = ({ title, subtitle, description, specs, warranty, notes, image, }) => {



    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all flex flex-col"
        >

            {/* Image with overlay */}
            {image && (

                <div className="relative h-52 overflow-hidden">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                        <h2 className="text-lg font-bold">{title}</h2>
                        <p className="text-xs opacity-80">{subtitle}</p>
                    </div>
                </div>

            )}



            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">


                <p className="text-gray-700 mb-4 text-sm">{description}</p>


                {/* Specs Preview */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
                    {Object.entries(specs).slice(0, 4).map(([key, value]) => (
                        <div
                            key={key}
                            className="bg-gray-50 p-2 rounded-lg shadow-sm border border-gray-100 hover:bg-green-50 transition"
                        >
                            <span className="font-semibold">{key}: </span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>


                {/* Warranty */}
                <div className="mt-auto mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-100 to-green-50 border border-green-200">
                        <h3 className="font-semibold text-green-800 mb-1">Warranty</h3>
                        <p className="text-green-700 text-sm">{warranty}</p>
                    </div>
                </div>


                {/* Notes */}
                <ul className="text-gray-600 text-sm space-y-2 mb-4">
                    {notes.slice(0, 3).map((note, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700 bg-gray-50 p-2 rounded-lg hover:bg-green-50 transition"
                        >
                            ✅ <span>{note}</span>
                        </li>
                    ))}
                </ul>


                {/* Buttons */}
                <div className="flex gap-3">

                    <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                        <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-md hover:from-green-600 hover:to-green-700 transition-all rounded-xl hover:scale-105 hover:cursor-pointer">
                            Order Now <ShoppingCart size={20} />
                        </Button>
                    </motion.div>

                    <motion.div whileTap={{ scale: 0.95 }} className="w-full">
                        <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all rounded-xl hover:scale-105 hover:cursor-pointer">
                            Get Estimate
                        </Button>
                    </motion.div>

                </div>

            </div>

        </motion.div>

    );

};
