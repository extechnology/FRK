import HeroBanner from "@/components/common/HeroBanner";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Shield, Wallet, Zap } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";



export default function About() {


    return (


        <section className="w-full">


            <HeroBanner
                title="About Us"
                desc="Brighten every corner with eco-friendly solar lights,designed for durability, reliability, and sustainability"
                image="https://www.bls.gov/spotlight/2022/the-construction-industry-labor-force-2003-to-2020/images/cover-image.jpg"
            />


            <div className="px-2 sm:px-10 lg:px-20 pb-8 sm:pb-10">


                <div className="mx-auto text-center">

                    {/* Animated Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug"
                    >
                        Experience energy independence with  <br className="hidden md:block" /> advanced solar lights built for performance and long life
                    </motion.h2>

                    {/* Animated Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-8 md:mt-12"
                    >
                        <img
                            src="/about-us-hero.jpg"
                            loading="lazy"
                            alt="Team collaboration"
                            className="w-full rounded-lg md:rounded-xl lg:rounded-2xl shadow-md"
                        />

                    </motion.div>

                </div>



                {/* Our Mission */}
                <div className="pt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
                            WELCOME TO FRK SOLAR STREET LIGHTS
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Partner for Reliable Solar Lighting Solutions FRK specializes in distributing high-quality, environment-friendly, cost-effective solar street lighting. Its solar-powered street lights will capture power directly from the sun. They will give you highly reliable lighting that does not require one to fall back on traditional power sources. However well you want to light your streets, pathways, or public spaces, we offer sustainable solutions and a brighter future for more years.
                        </p>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src="/about-us-1.jpg"
                            alt="Growth Chart"
                            loading="lazy"
                            className="w-full h-[50vh] max-w-xl rounded-xl shadow-md"
                        />
                    </motion.div>
                </div>




                {/* Our Vision */}
                <div className="pt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-48 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src="/about-us-2.jpg"
                            alt="Growth Chart"
                            loading="lazy"
                            className="w-full h-[50vh] max-w-xl rounded-xl shadow-md"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
                            Trust built by our Quality and Performance
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Your Trusted Partner for Reliable Solar Lighting Solutions Our commitment to state-of-the-art solar street lighting solutions spans a decade of innovation. From our start with a goal of providing increased sustainability and safety for the public by utilizing renewable energy, we have consistently worked to design and develop premium solar street lights that light up streets we have consistently worked to design and develop premium solar street lights that light up streets, empower a community &  engage in environmental stewardship.
                        </p>
                    </motion.div>

                </div>



                {/* Our Mission */}
                <div className="pt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
                            Well Organized and Committed
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Management and employees share a united vision to lead the Green Solar Revolution. Every member of the team is committed to delivering innovative, sustainable, and high-quality solar lighting solutions that reduce environmental impact and promote renewable energy adoption. Through continuous training, research, and collaboration, FRK ensures that its workforce stays ahead of industry trends, maintaining excellence in service and technology. This collective dedication not only drives the company’s growth but also contributes to creating safer, well-lit communities powered by clean energy. FRK believes that true progress comes from teamwork, responsibility, and a shared passion for a greener future
                        </p>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src="/about-us-3.jpg"
                            loading="lazy"
                            alt="Growth Chart"
                            className="w-full h-[50vh] max-w-xl rounded-xl shadow-md"
                        />
                    </motion.div>
                </div>



                {/* wHY US Section */}
                <div className="mx-auto mt-14 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative border-t-2 border-dashed">


                    <DotPattern
                        width={22}
                        height={30}
                        className={cn(
                            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                        )}
                    />

                    <div className="space-y-8">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-20 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                                <Zap className="w-10 h-10 text-green-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">Energy Efficiency</p>
                            <p className="text-gray-600 text-sm mt-2">Increase electricity and environmental degradation savings through the efficient performance of our solar-powered lighting systems.</p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-20 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                                <Wallet className="w-10 h-10 text-green-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">Seamless Process</p>
                            <p className="text-gray-600 text-sm mt-2">From the consultation process up to installation and maintenance, we aim at bringing the least hassle scenario in the daily life activities of our customers. Solar is more than just a provider of solar lighting</p>
                        </motion.div>

                    </div>


                    {/* Center Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center px-4 md:px-6"
                    >

                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
                            Why us?
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base mb-6">
                            Upgrade Solar Lights for a cleaner environment,
                            reduced costs and brighter outdoor spaces
                        </p>

                        <button className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 font-medium px-5 py-2 rounded-full hover:bg-gray-900 hover:text-white transition">
                            Learn more
                            <span>↗</span>
                        </button>

                    </motion.div>


                    {/* Right Column */}
                    <div className="space-y-8">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-20 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                                <BriefcaseBusiness className="w-6 h-6 text-green-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">Professional Competence</p>
                            <p className="text-gray-600 text-sm mt-2">Benefit from accumulated years of experience and technical know-how, and your project is therefore done to the highest standards.</p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-20 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">Technology integration</p>
                            <p className="text-gray-600 text-sm mt-2">We use the latest technology and equipment to ensure that our solar lighting solutions are efficient, reliable, and long-lasting.</p>
                        </motion.div>

                    </div>

                </div>



                {/* Cta Section */}
                <div className="relative px-6 py-20 sm:py-28 mt-10 sm:mt-20 mx-auto text-center rounded-2xl overflow-hidden shadow-2xl">


                    {/* Gradient Background with Glow Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"></div>
                    </div>


                    {/* Content */}
                    <div className="relative z-10">
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
                        >
                            Became a partner of the Green Revolution
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto"
                        >
                            Join the Green Revolution! Install solar lights today to save energy, reduce carbon footprint, and brighten communities sustainably. Small action, big impact—together we create a cleaner, greener future
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <button className="relative bg-gradient-to-r from-white via-gray-200 to-white text-black font-semibold px-8 py-3 rounded-full transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                                Order Now
                            </button>
                            <button className="relative border border-white/80 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                                Connect with Us
                            </button>
                        </motion.div>
                    </div>
                </div>



            </div>

        </section>

    )


}
