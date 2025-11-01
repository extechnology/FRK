import { motion } from "framer-motion";



export default function SuspenseLoader() {


    return (


        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">

            <div className="flex flex-col items-center justify-center">

                {/* Static Company Logo with Subtle Shimmer */}
                <div className="relative">
                    <motion.img
                        src="/Nav-logo.png"
                        alt="Company Logo"
                        loading="lazy"
                        className="w-60 h-24 md:w-72 md:h-28 object-contain"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-lg"
                        animate={{ x: ["-150%", "150%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Solar-themed wave animation */}
                <div className="relative w-44 sm:w-52 h-1 overflow-hidden rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

              
            </div>
        </div>
    );
}
