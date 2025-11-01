import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export default function Footer() {


  return (

    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black text-white rounded-t-3xl px-6 sm:px-12 lg:px-20 pt-16 pb-5"
    >


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


        {/* Left Section */}
        <div className="space-y-6">

          <div className="flex items-center gap-2">
            <img src="/FRK-logo-white.png" className="w-48 h-16 object-contain" alt="foot-logo" />
          </div>


          <p className="text-gray-300 max-w-md text-sm leading-relaxed">
            Solar energy reduces greenhouse gases and air pollutants, helping
            combat climate change. Explore the top financial.
          </p>


          {/* Social Icons */}
          <div className="flex">

            <a
              href="https://www.facebook.com/frklighting/"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>

            <a
              href="https://www.instagram.com/frk.lighting/"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>


            <a
              href="linkedin.com/company/frklighting"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>


            <a
              href="https://x.com/frklighting"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-x-twitter fa-xl"></i>
            </a>

            <a
              href="https://in.pinterest.com/frklighting/"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-pinterest fa-xl"></i>
            </a>

            <a
              href="https://www.youtube.com/@FRK089"
              target="_blank"
              className="text-gray-300 hover:text-white w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-youtube fa-xl"></i>
            </a>

          </div>


          <div className="flex gap-5 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-300 hover-cursor-pointer">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-300 hover-cursor-pointer">Privacy Policy</a>
          </div>

        </div>



        {/* Right Section */}
        <div className="space-y-8">

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">

            <div>
              <h5 className="font-medium mb-3">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/service'}>Services</Link></li>
                <li><Link to={'/product'}>Products</Link></li>
                <li><Link to={'/project'}>Projects</Link></li>
              </ul>
            </div>


            <div>
              <h5 className="font-medium mb-3">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#">Community</a></li>
                <li><a href="#">Knowledge base</a></li>
                <li><a href="#">Academy</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium mb-3">Address</h5>
              <p className="text-gray-400 text-sm">
                475 Cherry Dr, Troy, Michigan <br />
                46546 United States <br />
                (258 525-2353)
              </p>
            </div>

          </div>

        </div>

      </div>

      <div className="flex flex-col text-gray-400 items-center justify-center mt-5 sm:mt-0">
        <a href="#" className="hover-cursor-pointer text-xs">©2025 FRK LIGHTING SOLUTIONS All rights reserved</a>
        <a href="https://extechnology.in" target="_blank" className="hover-cursor-pointer text-sm">Developed by <span className="text-white">ex-technology</span></a>
      </div>

    </motion.footer>

  )

}

