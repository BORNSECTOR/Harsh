import {
  Wrench, Paintbrush, Snowflake, Sparkles, Search, Battery, CircleDot, CarFront,
  Settings, Wind, ArrowDownUp, Shield, Star
} from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: any;
  name: string;
  badge: string | null;
  badgeType: string | null;
  shortDesc: string;
  description: string;
  features: string[];
  price: string;
}

export const services: ServiceItem[] = [
  {
    id: "car-services",
    icon: Wrench,
    name: "Car Services",
    badge: "Starting ₹99/-",
    badgeType: "discount",
    shortDesc: "Complete car servicing with genuine parts",
    description: "Our comprehensive car service covers everything from oil changes to full engine diagnostics. We use only genuine OEM parts and our certified technicians ensure your vehicle runs at peak performance.",
    features: ["Engine oil & filter change", "Brake inspection & service", "Fluid top-ups", "Multi-point inspection", "Free pickup & drop"],
    price: "Starting from ₹999",
  },
  {
    id: "denting-painting",
    icon: Paintbrush,
    name: "Denting & Painting",
    badge: "50% OFF",
    badgeType: "discount",
    shortDesc: "Premium denting and painting at half price",
    description: "Restore your car's showroom finish with our expert denting and painting services. We use premium paints and advanced techniques for a flawless result.",
    features: ["Scratch removal", "Full body paint", "Bumper repair", "Color matching technology", "Anti-rust coating"],
    price: "Starting from ₹2,999",
  },
  {
    id: "ac-service",
    icon: Snowflake,
    name: "AC Service",
    badge: "FREE Check",
    badgeType: "sale",
    shortDesc: "Complete AC diagnostics and repair",
    description: "Keep your car cool with our expert AC service. From gas refilling to compressor repair, we handle all AC issues with precision.",
    features: ["Free AC diagnostic", "Gas refilling", "Compressor repair", "Condenser cleaning", "Cabin filter replacement"],
    price: "Starting from ₹499",
  },
  {
    id: "car-spa",
    icon: Sparkles,
    name: "Car Spa",
    badge: "Heavy Discount",
    badgeType: "discount",
    shortDesc: "Deep cleaning and detailing for your car",
    description: "Give your car the spa treatment it deserves. Our deep cleaning service covers every inch of your vehicle inside and out.",
    features: ["Exterior foam wash", "Interior deep clean", "Dashboard polish", "Seat shampooing", "Engine bay cleaning"],
    price: "Starting from ₹999",
  },
  {
    id: "detailing",
    icon: Star,
    name: "Detailing",
    badge: "Premium",
    badgeType: "new",
    shortDesc: "Premium ceramic coating and protection",
    description: "Professional-grade detailing services including ceramic coating, paint protection film, and interior restoration for the ultimate finish.",
    features: ["Ceramic coating", "Paint protection film", "Headlight restoration", "Leather conditioning", "Glass coating"],
    price: "Starting from ₹4,999",
  },
  {
    id: "batteries",
    icon: Battery,
    name: "Batteries",
    badge: "Starting ₹99/-",
    badgeType: "discount",
    shortDesc: "All brand batteries with warranty",
    description: "We stock batteries from all major brands with full manufacturer warranty. Free installation and old battery buyback available.",
    features: ["All major brands", "Free installation", "Old battery buyback", "Warranty included", "Emergency service"],
    price: "Starting from ₹2,499",
  },
  {
    id: "tyres",
    icon: CircleDot,
    name: "Tyres",
    badge: "All Brands",
    badgeType: "new",
    shortDesc: "Premium tyres from all brands",
    description: "Choose from a wide range of tyres from top brands. We offer wheel alignment, balancing, and nitrogen filling services.",
    features: ["All major tyre brands", "Wheel alignment", "Wheel balancing", "Nitrogen filling", "Puncture repair"],
    price: "Starting from ₹1,999",
  },
  {
    id: "car-inspections",
    icon: Search,
    name: "Car Inspections",
    badge: null,
    badgeType: null,
    shortDesc: "Comprehensive vehicle inspection reports",
    description: "Get a detailed 200+ point inspection of your vehicle. Perfect for pre-purchase checks or routine health monitoring.",
    features: ["200+ point check", "Detailed report", "Expert recommendations", "Pre-purchase inspection", "Annual health check"],
    price: "Starting from ₹499",
  },
  {
    id: "clutch",
    icon: Settings,
    name: "Clutch",
    badge: "Starting ₹99/-",
    badgeType: "discount",
    shortDesc: "Clutch repair and replacement",
    description: "Expert clutch repair and replacement services. We handle clutch plate, pressure plate, and flywheel issues.",
    features: ["Clutch plate replacement", "Pressure plate repair", "Flywheel resurfacing", "Clutch cable adjustment", "Hydraulic clutch repair"],
    price: "Starting from ₹3,999",
  },
  {
    id: "windshield",
    icon: Wind,
    name: "Windshield",
    badge: null,
    badgeType: null,
    shortDesc: "Windshield repair and replacement",
    description: "Professional windshield repair and replacement. We use OEM-quality glass and ensure a perfect seal.",
    features: ["Chip repair", "Full replacement", "OEM-quality glass", "Wiper replacement", "Rain repellent coating"],
    price: "Starting from ₹1,499",
  },
  {
    id: "suspension",
    icon: ArrowDownUp,
    name: "Suspension",
    badge: "Heavy Discount",
    badgeType: "discount",
    shortDesc: "Suspension repair for a smooth ride",
    description: "Restore your car's ride quality with our suspension repair services. From shock absorbers to control arms, we handle it all.",
    features: ["Shock absorber replacement", "Strut repair", "Control arm replacement", "Bushing replacement", "Ride height adjustment"],
    price: "Starting from ₹2,999",
  },
  {
    id: "insurance-claims",
    icon: Shield,
    name: "Insurance Claims",
    badge: "NEW",
    badgeType: "new",
    shortDesc: "Hassle-free insurance claim processing",
    description: "We handle the entire insurance claim process for you. From documentation to repair, everything is taken care of seamlessly.",
    features: ["Cashless claims", "All insurance companies", "Free documentation", "Pickup & drop", "Genuine parts only"],
    price: "Free Processing",
  },
];
