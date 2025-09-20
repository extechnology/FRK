import HeroSlider from "@/components/home/Slider"
import AboutUs from "@/components/home/AboutUs"
import BentoGrid from "@/components/home/BentoGrid"
import LogoSlider from "@/components/home/LogoSlider"
import Solutions from "@/components/home/Solutions"
import ImageGrid from "@/components/home/ImageGrid"
import Cta from "@/components/home/Cta"
import { BlurFade } from "@/components/ui/blur-fade"




export default function Index() {



  return (


    <section className="w-full flex-col items-center justify-center">


      <div className="w-full h-full">
        <HeroSlider />
      </div>


      <div className="w-full h-full">
        <BlurFade delay={0.25} duration={0.5} inView>
          <AboutUs />
        </BlurFade>
      </div>


      <div className="w-full h-full hidden sm:block">
        <BlurFade delay={0.25 * 2} duration={0.5} inView>
          <LogoSlider />
        </BlurFade>
      </div>


      <div className="w-full h-full">
        <BlurFade delay={0.25 * 3} duration={0.5} inView>
          <BentoGrid />
        </BlurFade>
      </div>


      <div className="w-full h-full">
        <BlurFade delay={0.25 * 4} duration={0.5} inView>
          <Solutions />
        </BlurFade>
      </div>


      <div className="w-full h-full">
        <BlurFade delay={0.25 * 4} duration={0.5} inView>
          <ImageGrid />
        </BlurFade>
      </div>


      <div className="w-full h-full">
        <BlurFade delay={0.25 * 5} duration={0.5} inView>
          <Cta />
        </BlurFade>
      </div>


    </section>


  )


}
