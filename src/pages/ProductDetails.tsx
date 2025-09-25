import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { productData } from "@/lib/mockdata";
import { Calculator, CheckCircle, ShoppingCart } from "lucide-react";




export default function ProductView() {


    const { id } = useParams<{ id: string }>();
    const product = productData.find((p) => p.id === Number(id));
    const [activeImg, setActiveImg] = useState(0);



    if (!product) return <div className="p-6 text-center">Product not found</div>;



    return (


        <div className="mx-auto px-2 sm:px-8 lg:px-24 pt-16 sm:pt-24 pb-12">


            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">


                {/* Image Gallery */}
                <div>

                    <motion.img
                        key={activeImg}
                        src={product.images[activeImg]}
                        alt={product.title}
                        className="w-full rounded-2xl shadow-lg object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    />


                    {/* Thumbnails */}
                    <div className="flex gap-3 mt-4 overflow-x-auto py-2 px-1 sm:px-2 no-scrollbar">

                        {product.images.map((img, i) => (

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                key={i}
                                onClick={() => setActiveImg(i)}
                                className={`h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 border rounded-lg overflow-hidden transition ${i === activeImg
                                    ? "ring-2 ring-green-600"
                                    : "border-gray-300 hover:border-green-400"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`thumb-${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.button>

                        ))}

                    </div>

                </div>



                {/* Product Info */}
                <div className="flex flex-col gap-4">

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {product.title}
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600">
                        {product.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-gray-700">
                        {product.description}
                    </p>

                    {/* Notes with Green Ticks */}
                    <div className="space-y-2">
                        {product.notes.slice(0, 5).map((note, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <CheckCircle className="text-green-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{note}</span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                        {/* Order Now Button */}
                        <Button
                            size="lg"
                            className="flex-1 py-3 bg-green-600 hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Order Now
                        </Button>

                        {/* Get an Estimate Button */}
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex-1 py-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            <Calculator className="mr-2 h-5 w-5" />
                            Get an Estimate!
                        </Button>
                    </div>

                </div>

            </div>


            {/* Tabs Section */}
            <div className="mt-8 sm:mt-12 max-w-7xl mx-auto border rounded-lg p-4 sm:p-8 overflow-hidden">

                <Tabs defaultValue="specs" className="w-full">

                    {/* Modern Tabs */}
                    <TabsList className="flex flex-wrap justify-center bg-gray-100 p-0 rounded-xl shadow-inner gap-2">

                        <TabsTrigger
                            value="specs"
                            className="data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-lg px-4 py-2 sm:px-6 sm:py-4 transition"
                        >
                            Specifications
                        </TabsTrigger>

                        <TabsTrigger
                            value="warranty"
                            className="data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-lg px-4 py-2 sm:px-6 sm:py-4 transition"
                        >
                            Warranty
                        </TabsTrigger>

                        <TabsTrigger
                            value="notes"
                            className="data-[state=active]:bg-green-500 data-[state=active]:text-white rounded-lg px-4 py-2 sm:px-6 sm:py-4 transition"
                        >
                            Notes
                        </TabsTrigger>

                    </TabsList>



                    {/* Specifications */}
                    <TabsContent value="specs" className="mt-6 sm:mt-8">

                        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">

                            <table className="w-full text-sm sm:text-md">

                                <tbody>

                                    {product.specifications.map((spec, i) => (

                                        <tr
                                            key={i}
                                            className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                                } hover:bg-green-50 transition`}
                                        >

                                            <td className="px-3 sm:px-4 py-2 font-medium border-b border-gray-200 w-1/3 text-gray-800">
                                                {spec.label}
                                            </td>

                                            <td className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 text-gray-600">
                                                {spec.value}
                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </TabsContent>


                    {/* Warranty */}
                    <TabsContent
                        value="warranty"
                        className="mt-6 sm:mt-8 text-center text-gray-700 text-base sm:text-lg"
                    >
                        {product.warranty}
                    </TabsContent>

                    {/* Notes */}
                    <TabsContent value="notes" className="mt-6 sm:mt-8">
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
                            {product.notes.map((note, i) => (
                                <li key={i}>{note}</li>
                            ))}
                        </ul>
                    </TabsContent>

                </Tabs>

            </div>

        </div>

    );

}
