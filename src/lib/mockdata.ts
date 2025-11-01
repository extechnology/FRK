
export interface ProductProps {
    id: number;
    title: string;
    subtitle: string;
    shortDescription: string;
    description: string;
    images: string[];
    specifications: { label: string; value: string }[];
    warranty: string;
    notes: string[];
}



// 🔥 Full Product Data
export const productData: ProductProps[] = [
    {
        id: 600,
        title: "Solar Street Lights for Outdoor, Roads & Villages (600W)",
        subtitle: "Light control + Remote control",
        shortDescription: "Energy-efficient solar street lights with durable LiFePO₄ batteries, advanced tech, and easy installation for reliable, sustainable public lighting.",
        description: "Solar Street Lights offer a wide range of energy-efficient solutions with advanced technology, remote control systems, and durable LiFePO₄ batteries, ensuring reliable performance, easy installation, and sustainable lighting for streets and public spaces.",
        images: [
            "/Solar Street Lights for Outdoo-600W-product.jpg"
        ],
        specifications: [
            { label: "Battery", value: "3.2V / 50,000 mAh (LiFePO₄, Aluminium)" },
            { label: "Lamp Output", value: "2178.041 lm" },
            { label: "Solar Panel", value: "60W / 5V (Mono PERC HPT)" },
            { label: "LED Pieces", value: "69" },
            { label: "Charging Time", value: "4–5 Hours" },
            { label: "Lighting Time", value: "11 Hours" },
            { label: "Size of Light", value: "510×215×80 mm" },
            { label: "Size of Panel", value: "610×580×25 mm" },
            { label: "Rainy Days Backup", value: "1–3 Days" },
            { label: "Waterproof Rating", value: "IP65" },
            { label: "Working Mode", value: "Light Control + Remote Control" },
            { label: "Installation Height", value: "5–8 m" },
        ],
        warranty: "Solar Street Lights 600W come with a reliable 5-year warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology.",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP65-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–3 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, and 1200W models.",
        ],
    },
    {
        id: 800,
        title: "Solar Street Lights for Outdoor, Roads & Villages (800W)",
        subtitle: "Light control + Remote control",
        shortDescription: "Energy-efficient solar street lights with durable LiFePO₄ batteries, advanced tech, and easy installation for reliable, sustainable public lighting.",
        description: "Solar Street Lights offer a wide range of energy-efficient solutions with advanced technology, remote control systems, and durable LiFePO₄ batteries, ensuring reliable performance, easy installation, and sustainable lighting for streets and public spaces.",
        images: [
            "/Solar Street Lights for Outdoo-800W-product.jpg"
        ],
        specifications: [
            { label: "Battery", value: "3.2V / 80,000 mAh (LiFePO₄, Aluminium)" },
            { label: "Lamp Output", value: "3131.71 lm" },
            { label: "Solar Panel", value: "80W / 5V (Mono PERC HPT)" },
            { label: "LED Pieces", value: "88" },
            { label: "Charging Time", value: "5–6 Hours" },
            { label: "Lighting Time", value: "11 Hours" },
            { label: "Size of Light", value: "590×220×90 mm" },
            { label: "Size of Panel", value: "760×580×25 mm" },
            { label: "Rainy Days Backup", value: "1–3 Days" },
            { label: "Waterproof Rating", value: "IP65" },
            { label: "Working Mode", value: "Light Control + Remote Control" },
            { label: "Installation Height", value: "5–8 m" },
        ],
        warranty: "Solar Street Lights 600W come with a reliable 5-year warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP65-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–3 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, and 1200W models.",
        ],
    },
    {
        id: 1000,
        title: "Solar Street Lights for Outdoor, Roads & Villages (1000W)",
        subtitle: "Light control + Remote control",
        shortDescription: "Energy-efficient solar street lights with durable LiFePO₄ batteries, advanced tech, and easy installation for reliable, sustainable public lighting.",
        description: "Solar Street Lights offer a wide range of energy-efficient solutions with advanced technology, remote control systems, and durable LiFePO₄ batteries, ensuring reliable performance, easy installation, and sustainable lighting for streets and public spaces.",
        images: [
            "/Solar Street Lights for Outdoo-1000W-product.jpg"
        ],
        specifications: [
            { label: "Battery", value: "3.2V / 120,000 mAh (LiFePO₄, Aluminium)" },
            { label: "Lamp Output", value: "4884.84 lm" },
            { label: "Solar Panel", value: "100W / 5V (Mono PERC HPT)" },
            { label: "LED Pieces", value: "144" },
            { label: "Charging Time", value: "5–6 Hours" },
            { label: "Lighting Time", value: "11 Hours" },
            { label: "Size of Light", value: "550×230×90 mm" },
            { label: "Size of Panel", value: "980×580×25 mm" },
            { label: "Rainy Days Backup", value: "1–3 Days" },
            { label: "Waterproof Rating", value: "IP65" },
            { label: "Working Mode", value: "Light Control + Remote Control" },
            { label: "Installation Height", value: "5–8 m" },
        ],
        warranty: "Solar Street Lights 600W come with a reliable 5-year warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology.",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP65-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–3 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, and 1200W models.",
        ],
    },
    {
        id: 1200,
        title: "Solar Street Lights for Outdoor, Roads & Villages (1200W)",
        subtitle: "Light control + Remote control",
        shortDescription: "Energy-efficient solar street lights with durable LiFePO₄ batteries, advanced tech, and easy installation for reliable, sustainable public lighting.",
        description: "Solar Street Lights offer a wide range of energy-efficient solutions with advanced technology, remote control systems, and durable LiFePO₄ batteries, ensuring reliable performance, easy installation, and sustainable lighting for streets and public spaces.",
        images: [
            "https://media.istockphoto.com/id/1278723493/photo/solar-battery-and-lantern-in-park-close-up-side-view.jpg?s=612x612&w=0&k=20&c=v8vXDS2PPkdjp2quuugKSxFtr6-sFpTyhmeyeknP66M=",
            "https://media.istockphoto.com/id/1278723493/photo/solar-battery-and-lantern-in-park-close-up-side-view.jpg?s=612x612&w=0&k=20&c=v8vXDS2PPkdjp2quuugKSxFtr6-sFpTyhmeyeknP66M=",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOeocq3xdRhG3xLZP4AwP-QdIfj2TYGUxaIgGPI7LlXY-4xquRsdpiMgrNXt5ezoSJ6E&usqp=CAU",
        ],
        specifications: [
            { label: "Battery", value: "3.2V / 120,000 mAh (LiFePO₄, Aluminium)" },
            { label: "Lamp Output", value: "3881.11 lm" },
            { label: "Solar Panel", value: "100W / 5V (Mono PERC HPT)" },
            { label: "LED Pieces", value: "144" },
            { label: "Charging Time", value: "5–6 Hours" },
            { label: "Lighting Time", value: "11 Hours" },
            { label: "Size of Light", value: "420×330×75 mm" },
            { label: "Size of Panel", value: "980×580×25 mm" },
            { label: "Rainy Days Backup", value: "1–3 Days" },
            { label: "Waterproof Rating", value: "IP65" },
            { label: "Working Mode", value: "Light Control + Remote Control" },
            { label: "Installation Height", value: "5–8 m" },
        ],
        warranty: "Solar Street Lights 600W come with a reliable 5-year warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology.",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP65-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–3 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, and 1200W models.",
        ],
    },
]
