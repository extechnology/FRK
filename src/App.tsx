import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop"
import SuspenseLoader from "./components/common/SuspenseLoader"



// lazy loading pages
const Home = lazy(() => import("./pages/Index"))
const About = lazy(() => import("./pages/About"))
const Service = lazy(() => import("./pages/Service"))
const Products = lazy(() => import("./pages/Products"))
const ProductDetails = lazy(() => import("./pages/ProductDetails"))
const Projects = lazy(() => import("./pages/Projects"))
const Contact = lazy(() => import("./pages/Contact"))



// lazy loading layouts
const MainLayout = lazy(() => import("./components/layout/MainLayout"))




function App() {



  return (


    <Suspense fallback={<SuspenseLoader />}>

      {/* Scroll to top */}
      <ScrollToTop />


      <Routes>


        {/* Main Layout */}
        <Route element={<MainLayout />} >

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="service" element={<Service />} />

          <Route path="products" element={<Products />} />

          <Route path="products/:id" element={<ProductDetails />} />

          <Route path="projects" element={<Projects />} />

          <Route path="contact" element={<Contact />} />

        </Route>


        {/* 404 */}
        <Route path="*" element={<div>404</div>} />


      </Routes>


    </Suspense>


  )



}

export default App
