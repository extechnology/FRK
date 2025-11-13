
export interface ProductProps {
    id: number;
    title: string;
    subtitle: string;
    shortDescription: string;
    description: string;
    images: string[];
    specifications: {
        keySpecifications?: { label: string; value: string }[];
        panelDetails?: { label: string; value: string }[];
        batteryDetails?: { label: string; value: string }[];
        lightingDetails?: { label: string; value: string }[];
    };
    warranty: string;
    notes: string[];
}



// 🔥 Full Product Data
export const productData: ProductProps[] = [
    {
        id: 1,
        title: "SOLAR STREETLIGHT 600W",
        subtitle: "Light control + Remote control",
        shortDescription: "Energy-efficient solar street lights with durable LiFePO₄ batteries, advanced tech, and easy installation for reliable, sustainable public lighting.",
        description: "Experience Powerful & Sustainable Outdoor Illumination with the 600W Solar Street Light.Designed for Performance and Efficiency, Equipped with a high-capacity LiFePO₄ battery and advanced Solar Panel Technology, it ensures Long -lasting Brightness quick charging & Reliable Operation even in low Sunlight Conditions.",
        images: [
            "/Solar-Street-Lights-600W-1-product.jpg",
            "/Solar-Street-Lights-600W-2-product.jpg",
            "/Solar-Street-Lights-600W-3-product.jpg",
            "/Solar-Street-Lights-600W-4-product.jpg"
        ],
        specifications: {
            panelDetails: [
                { label: "Solar Panel Size", value: "610 × 580 mm" },
                { label: "Rated Maximum Power [Pmax]", value: "60 W" },
                { label: "Open Circuit Voltage [Voc]", value: "21.95 V" },
                { label: "Rated Voltage [Vmax]", value: "19.23 V" },
                { label: "Short Circuit Current [Isc]", value: "3.30 A" },
                { label: "Rated Current [Imax]", value: "3.12 A" },
                { label: "NOCT", value: "45°C (Normal Operating Cell Temperature)" },
            ],
            batteryDetails: [
                { label: "Battery Name", value: "Lithium Iron Phosphate" },
                { label: "Battery Protections", value: "Overcharge, Deep Discharge, Short Circuit, Over-current, Over-voltage, Under-voltage, Open Circuit" },
                { label: "Battery Type", value: "Built-in LiFePO₄ Battery" },
                { label: "Battery Lifespan", value: "Over 10 Years" },
                { label: "Battery Charging Time", value: "1 day under normal sunlight" },
                { label: "Rainy Days Backup", value: "2 Days" },
                { label: "Battery Capacity", value: "12000 mAh (Ensures autonomy in cloudy days)" },
                { label: "Ingress Protection", value: "IP66 or above (better than IP65)" },
            ],
            lightingDetails: [
                { label: "Housing", value: "High Pressure Aluminium Die-Cast" },
                { label: "Lamp Material", value: "Die Casting Aluminium + PC Lens" },
                { label: "PIR Sensor", value: "Optional (energy saving feature)" },
                { label: "Features", value: "Flicker-free, Dimming Option" },
                { label: "Lamp Output", value: "2178.041 lm" },
                { label: "Colour Temperature", value: "6500K" },
                { label: "Light Size", value: "21 × 41 × 8 cm" },
                { label: "Number of LEDs", value: "69" },
                { label: "Light Working Time", value: "2 Days Backup (First 6 Hours → 100% Brightness / After 6 Hours → 80%)" },
                { label: "Driver", value: "Inbuilt DC-DC" },
                { label: "Beam Angle", value: "120°" },
                { label: "Waterproof Rating", value: "IP66" },
                { label: "Working Mode", value: "Light Control + Remote Control" },
                { label: "Installation Height", value: "5–6 m" },
                { label: "Standards Compliance", value: "IS : 15885 / IS : 16104 / IEC 62384 (latest)" },
            ],
        },
        warranty: "Solar Street Lights 600W come with a reliable 3-years Service warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology.",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP66-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–2 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, and 1200W models.",
        ],
    },
    {
        id: 2,
        title: "SOLAR STREETLIGHT 800W",
        subtitle: "Light control + Remote control",
        shortDescription: "Energy-efficient solar street lights with durable LiFePO₄ batteries, advanced tech, and easy installation for reliable, sustainable public lighting.",
        description: "Experience Superior & Sustainable Outdoor Illumination with the 800W Solar Street Light Built for maximum brightness and extended coverage, the 800W Solar Street Light combines high-efficiency solar panels with a powerful LiFePO₄ battery, delivering enhanced performance, faster charging, and brilliant illumination even in low sunlight conditions — ensuring greater reliability and energy independence for every environment.",
        images: [
            "/Solar-Street-Lights-800W-1-product.jpg",
            "/Solar-Street-Lights-800W-2-product.jpg",
            "/Solar-Street-Lights-800W-3-product.jpg",
            "/Solar-Street-Lights-800W-4-product.jpg",
        ],
        specifications: {

            panelDetails: [
                { label: "Solar Panel Size", value: "760 × 580 × 25 mm" },
                { label: "Rated Maximum Power [Pmax]", value: "80 W" },
                { label: "Open Circuit Voltage [Voc]", value: "21.95 V" },
                { label: "Rated Voltage [Vmax]", value: "19.23 V" },
                { label: "Short Circuit Current [Isc]", value: "4.47 A" },
                { label: "Rated Current [Imax]", value: "4.23 A" },
                { label: "NOCT", value: "45°C (Normal Operating Cell Temperature)" },
            ],

            batteryDetails: [
                { label: "Battery Name", value: "Lithium Iron Phosphate" },
                { label: "Battery Protections", value: "Overcharge, Deep Discharge, Short Circuit, Over-current, Over-voltage, Under-voltage, Open Circuit" },
                { label: "Battery Type", value: "Built-in LiFePO₄ Battery" },
                { label: "Battery Lifespan", value: "Over 10 Years" },
                { label: "Battery Charging Time", value: "1 day under normal sunlight" },
                { label: "Rainy Days Backup", value: "2 Days" },
                { label: "Battery Capacity", value: "12000 mAh (Ensures autonomy in cloudy days)" },
                { label: "Ingress Protection", value: "IP66 or above (better than IP65)" },
            ],

            lightingDetails: [
                { label: "Housing", value: "High Pressure Aluminium Die-Cast" },
                { label: "Lamp Material", value: "Die Casting Aluminium + PC Lens" },
                { label: "PIR Sensor", value: "Optional (for energy saving)" },
                { label: "Features", value: "Flicker-free, Dimming Option" },
                { label: "Lamp Output", value: "3131.71 lm" },
                { label: "Colour Temperature", value: "6500K" },
                { label: "Light Size", value: "22 × 49 × 9 cm" },
                { label: "Number of LEDs", value: "88" },
                { label: "Light Working Time", value: "2 Days Backup (First 6 Hours → 100% Brightness / After 6 Hours → 80% Brightness)" },
                { label: "Driver", value: "Inbuilt DC-DC" },
                { label: "Beam Angle", value: "120° (wider coverage vs. 100°)" },
                { label: "Waterproof Rating", value: "IP66" },
                { label: "Working Mode", value: "Light Control + Remote Control" },
                { label: "Installation Height", value: "5–6 m (Customized option available)" },
                { label: "Standards Compliance", value: "IS : 15885 (Part 2 / Sec 13) / IS : 16104 / IEC 62384 (latest)" },
            ],
        },
        warranty: "Solar Street Lights 800W come with a reliable 3-years Service warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP66-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–2 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, and 1200W models.",
        ],
    },
    {
        id: 3,
        title: "SOLAR STREETLIGHT 1000W",
        subtitle: "Light control + Remote control",
        shortDescription: "Energy-efficient solar street lights with durable LiFePO₄ batteries, advanced tech, and easy installation for reliable, sustainable public lighting.",
        description: "Experience Ultimate Power & Efficiency with the 1000W Solar Street Light Designed for  maximum illumination and wide-area coverage, the 1000W Solar Street Light features ultra-efficient solar panels and a high-capacity LiFePO₄ battery to deliver exceptional brightness, rapid charging, and uninterrupted performance even in challenging weather — ensuring superior visibility, durability, and sustainability all night long.",
        images: [
            "/Solar-Street-Lights-1000W-1-product.jpg",
            "/Solar-Street-Lights-1000W-2-product.jpg",
            "/Solar-Street-Lights-1000W-3-product.jpg",
            "/Solar-Street-Lights-1000W-4-product.jpg",
        ],
        specifications: {
            panelDetails: [
                { label: "Solar Panel Size", value: "960 × 580 × 25 mm" },
                { label: "Rated Maximum Power [Pmax]", value: "150 W" },
                { label: "Open Circuit Voltage [Voc]", value: "22.64 V" },
                { label: "Rated Voltage [Vmax]", value: "19.83 V" },
                { label: "Short Circuit Current [Isc]", value: "5.35 A" },
                { label: "Rated Current [Imax]", value: "5.06 A" },
                { label: "Charging Time", value: "5–6 Hours" },
                { label: "NOCT", value: "45°C (Normal Operating Cell Temperature)" },
            ],

            batteryDetails: [
                { label: "Battery Name", value: "Lithium Iron Phosphate" },
                { label: "Battery Protections", value: "Overcharge, Deep Discharge, Short Circuit, Over-current, Over-voltage, Under-voltage, Open Circuit" },
                { label: "Battery Type", value: "Built-in LiFePO₄ Battery" },
                { label: "Battery Lifespan", value: "> 10 Years" },
                { label: "Battery Charging Time", value: "1 day under normal sunlight" },
                { label: "Rainy Days Backup", value: "2 Days" },
                { label: "Battery Capacity", value: "12000 mAh (Ensures autonomy in cloudy days)" },
                { label: "Ingress Protection", value: "IP66 or above (better than IP65)" },
            ],

            lightingDetails: [
                { label: "Housing", value: "High Pressure Aluminium Die-Cast" },
                { label: "Lamp Material", value: "Die Casting Aluminium + PC Lens" },
                { label: "PIR Sensor", value: "Optional (energy saving feature)" },
                { label: "Features", value: "Flicker-free, Dimming Option" },
                { label: "Lamp Output", value: "4884.84 lm" },
                { label: "Colour Temperature", value: "6500K" },
                { label: "Light Size", value: "24 × 45 × 8 cm" },
                { label: "Number of LEDs", value: "144" },
                { label: "Light Working Time", value: "2 Days Backup (First 6 Hours → 100% Brightness / After 6 Hours → 80% Brightness)" },
                { label: "Driver", value: "Inbuilt DC-DC" },
                { label: "Beam Angle", value: "120° (wider coverage vs. 100°)" },
                { label: "Waterproof Rating", value: "IP66" },
                { label: "Working Mode", value: "Light Control + Remote Control" },
                { label: "Installation Height", value: "5–6 m (Customized Option Available)" },
                { label: "Standards Compliance", value: "IS : 15885 (Part 2 / Sec 13) / IS : 16104 / IEC 62384 (latest)" },
            ],
        },
        warranty: "Solar Street Lights 1000W come with a reliable 3-years Service warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology.",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP66-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–2 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, and 1200W models.",
        ],
    },
    {
        id: 4,
        title: "SOLAR HIGH MAST 1000W",
        subtitle: "Light control + Remote control",
        shortDescription: "FRK Solar 1000W High Mast Light delivers powerful, eco-friendly illumination with advanced solar technology and durable design. Built for reliability and efficiency, it ensures maximum brightness, long battery life, and superior performance in all weather conditions—perfect for highways, stadiums, industrial zones, and public spaces requiring consistent, high-intensity lighting.",
        description: "FRK Solar 1000W High Mast Light delivers powerful, eco-friendly illumination with advanced solar technology and durable design. Built for reliability and efficiency, it ensures maximum brightness, long battery life, and superior performance in all weather conditions—perfect for highways, stadiums, industrial zones, and public spaces requiring consistent, high-intensity lighting.",
        images: [
            "/Solar-High-Mast-1000W-1-product.jpg",
            "/Solar-High-Mast-1000W-2-product.jpg",
            "/Solar-High-Mast-1000W-3-product.jpg",
            "/Solar-High-Mast-1000W-4-product.jpg",
        ],
        specifications: {
            panelDetails: [
                { label: "Solar Panel Size", value: "980 × 580 × 25 mm" },
                { label: "Rated Maximum Power [Pmax]", value: "100 W" },
                { label: "Open Circuit Voltage [Voc]", value: "22.64 V" },
                { label: "Rated Voltage [Vmax]", value: "19.83 V" },
                { label: "Short Circuit Current [Isc]", value: "5.35 A" },
                { label: "Rated Current [Imax]", value: "5.06 A" },
                { label: "NOCT", value: "45°C (Normal Operating Cell Temperature)" },
            ],

            batteryDetails: [
                { label: "Battery Name", value: "Lithium Iron Phosphate" },
                { label: "Battery Type", value: "Built-in LiFePO₄ Battery" },
                { label: "Battery Protections", value: "Overcharge, Deep Discharge, Short Circuit, Over-Current, Over-Voltage, Under-voltage, Open Circuit" },
                { label: "Battery Lifespan", value: "> 10 Years" },
                { label: "Battery Charging Time", value: "1 Day under normal sunlight" },
                { label: "Rainy Days Backup", value: "2 Days" },
                { label: "Battery Capacity", value: "10000 mAh (Ensures autonomy in cloudy days)" },
                { label: "Charging Time", value: "5–6 Hours" },
                { label: "Ingress Protection", value: "IP66 or above (better than IP65)" },
            ],

            lightingDetails: [
                { label: "Housing", value: "High Pressure Aluminium Die-Cast" },
                { label: "Lamp Material", value: "Die Casting Aluminium + PC Lens" },
                { label: "PIR Sensor", value: "Optional (energy saving feature)" },
                { label: "Features", value: "Flicker-free, Dimming Option" },
                { label: "Lamp Output", value: "4884.84 lm" },
                { label: "Colour Temperature", value: "6500K" },
                { label: "Light Size", value: "420 × 330 × 75 mm" },
                { label: "Number of LEDs", value: "144" },
                { label: "Light Working Time", value: "2 Days Backup (First 6 Hours → 100% Brightness / After 6 Hours → 80% Brightness)" },
                { label: "Driver", value: "Inbuilt DC-DC" },
                { label: "Beam Angle", value: "120° (wider coverage vs. 100°)" },
                { label: "Waterproof Rating", value: "IP66" },
                { label: "Working Mode", value: "Light Control + Remote Control" },
                { label: "Installation Height", value: "5–6 m (Customized Option Available)" },
                { label: "Standards Compliance", value: "IS : 15885 (Part 2 / Sec 13) / IS : 16104 / IEC 62384 (latest)" },
            ],
        },
        warranty: "Solar Street HIGH MAST 1000W comes with a reliable 3-year Service warranty, assuring long-term performance, durability, and peace of mind. This warranty reflects our commitment to quality, customer satisfaction, and trust in our advanced solar lighting technology.",
        notes: [
            "Built-in LiFePO₄ battery with a lifespan of over 10 years.",
            "Uses Mono PERC HPT solar panels for fast charging and high efficiency.",
            "Supports light control and remote control operation.",
            "IP66-rated for dustproof and waterproof protection.",
            "Charges fully in just 4–6 hours of sunlight.",
            "Provides up to 11 hours of bright illumination daily.",
            "Made with high-quality aluminium for strength and longevity.",
            "Offers 1–2 days of lighting backup during rainy or cloudy weather.",
            "Designed for mounting heights between 5–8 meters.",
            "Available in 600W, 800W, 1000W, HIGH MAST (1000W)  etc."
        ],
    },
]
