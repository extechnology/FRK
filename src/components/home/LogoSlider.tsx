import LogoLoop from "../LogoLoop"



export default function LogoSlider() {


    // List of logos
    const imageLogos = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png", alt: "Company 1", href: "https://company1.com" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/1280px-Upwork-logo.svg.png", alt: "Company 2", href: "https://company2.com" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png", alt: "Company 1", href: "https://company1.com" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/1280px-Upwork-logo.svg.png", alt: "Company 2", href: "https://company2.com" },
    ];


    return (

        <section className="relative overflow-hidden h-[80px]">
            <LogoLoop
                logos={imageLogos}
                speed={40}
                direction="left"
                logoHeight={60}
                gap={60}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
                style={{ maxHeight: '100%', }}
            />
        </section>

    )



}
