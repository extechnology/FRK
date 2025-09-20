import HeroBanner from "@/components/common/HeroBanner";
import { motion } from "framer-motion";
import { Headphones, LineChart, Shield, Wallet } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";



export default function About() {


    return (


        <section className="w-full">


            <HeroBanner
                title="About Us"
                desc="Discover our story and journey as a leading solar energy provider, dedicated to empowering communities and businesses with sustainable solutions."
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
                        className="text-2xl md:text-4xl lg:text-6xl font-semibold text-gray-900 leading-snug"
                    >
                        Our story inspires every <br className="hidden md:block" /> journey we
                        create
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
                            src="https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg"
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
                        <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
                            Our mission
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
                            Driving success <br /> through smart funding
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Our mission is to empower businesses with the financial resources
                            they need to thrive in a competitive world. We are committed to
                            creating a seamless and efficient funding experience by removing
                            traditional roadblocks. By leveraging innovative solutions, we help
                            businesses not only meet their current financial needs but also plan
                            for sustainable growth and long-term success. Whether you're
                            managing daily operations or pursuing ambitious expansions, we're
                            here to drive your success with tailored support.
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
                            src="https://t4.ftcdn.net/jpg/02/20/30/97/360_F_220309764_saqqOIGaPKdnjmQacHmNkDOezY0uyOFg.jpg"
                            alt="Growth Chart"
                            className="w-full max-w-xl rounded-xl shadow-md"
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
                            src="https://t4.ftcdn.net/jpg/02/20/30/97/360_F_220309764_saqqOIGaPKdnjmQacHmNkDOezY0uyOFg.jpg"
                            alt="Growth Chart"
                            className="w-full max-w-4xl rounded-xl shadow-md"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <span className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
                            Our Vision
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
                            Driving success <br /> through smart funding
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Our mission is to empower businesses with the financial resources
                            they need to thrive in a competitive world. We are committed to
                            creating a seamless and efficient funding experience by removing
                            traditional roadblocks. By leveraging innovative solutions, we help
                            businesses not only meet their current financial needs but also plan
                            for sustainable growth and long-term success. Whether you're
                            managing daily operations or pursuing ambitious expansions, we're
                            here to drive your success with tailored support.
                        </p>
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
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                                <LineChart className="w-10 h-10 text-orange-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">Transparent Impact</p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-20 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                                <Wallet className="w-10 h-10 text-orange-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">Quick Donations</p>
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
                            We believe that every act of generosity can spark extraordinary
                            change. We’re building a brighter, more equitable future
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
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                                <Headphones className="w-6 h-6 text-orange-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">24/7 Support</p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-20 flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                                <Shield className="w-6 h-6 text-orange-600" />
                            </div>
                            <p className="font-medium text-gray-900 text-xl">Secure receive funds</p>
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
                            Turn your goals into reality
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto"
                        >
                            With just a few clicks, get the financial support you need to grow and
                            succeed.
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
                                Get funding
                            </button>
                            <button className="relative border border-white/80 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                                Learn more
                            </button>
                        </motion.div>
                    </div>
                </div>



            </div>

        </section>

    )


}
