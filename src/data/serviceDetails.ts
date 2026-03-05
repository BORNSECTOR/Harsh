export interface ServiceCard {
  name: string;
  duration?: string;
  warranty?: string;
  includes?: string;
  rating?: number;
  originalPrice: number;
  offerPrice: number;
  discount: string;
}

export interface SubCategory {
  name: string;
  cards: ServiceCard[];
}

export interface ServiceDetailData {
  serviceId: string;
  subCategories: SubCategory[];
}

export const serviceDetails: ServiceDetailData[] = [
  // ✅ 1️⃣ CAR SERVICES
  {
    serviceId: "car-services",
    subCategories: [
      {
        name: "Scheduled Packages",
        cards: [
          { name: "Basic Service", duration: "4 Hours", warranty: "3 Months", includes: "9 Services", rating: 4.4, originalPrice: 15263, offerPrice: 11447, discount: "25% OFF" },
          { name: "Standard Service", duration: "6 Hours", warranty: "3 Months", includes: "15 Services", rating: 4.5, originalPrice: 21303, offerPrice: 14912, discount: "30% OFF" },
          { name: "Comprehensive Service", duration: "8 Hours", warranty: "6 Months", includes: "20 Services", rating: 4.6, originalPrice: 28000, offerPrice: 22999, discount: "18% OFF" },
          { name: "Premium Service", duration: "1 Day", warranty: "6 Months", includes: "Deep Cleaning Included", rating: 4.7, originalPrice: 35000, offerPrice: 29999, discount: "15% OFF" },
        ],
      },
      {
        name: "Brake Maintenance",
        cards: [
          { name: "Front Brake Pads", duration: "3 Hours", warranty: "1 Month", includes: "Both Front Wheels", originalPrice: 14102, offerPrice: 11282, discount: "20% OFF" },
          { name: "Rear Brake Shoes", duration: "3 Hours", warranty: "1 Month", includes: "Labour Included", originalPrice: 12775, offerPrice: 10220, discount: "20% OFF" },
          { name: "Disc Turning", duration: "4 Hours", warranty: "1 Month Labour", includes: "Front Disc Refinishing", originalPrice: 2924, offerPrice: 2339, discount: "20% OFF" },
          { name: "Brake Fluid Replacement", duration: "1 Hour", warranty: "Performance Check", includes: "Complete Bleeding", originalPrice: 1499, offerPrice: 999, discount: "33% OFF" },
        ],
      },
      {
        name: "Under ₹49",
        cards: [
          { name: "Wiper Fluid Replacement", duration: "30 Minutes", warranty: "Monthly Recommended", includes: "Pickup Charges Extra", originalPrice: 490, offerPrice: 49, discount: "90% OFF" },
          { name: "Headlight Adjustment", duration: "30 Minutes", warranty: "Beam Alignment", includes: "Safety Check", originalPrice: 399, offerPrice: 49, discount: "88% OFF" },
          { name: "Battery Water Top-Up", duration: "20 Minutes", warranty: "Terminal Cleaning", includes: "Voltage Check", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "Tyre Pressure Check", duration: "15 Minutes", warranty: "Nitrogen Check", includes: "Safety Inspection", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
        ],
      },
      {
        name: "Under ₹149",
        cards: [
          { name: "Engine Oil Top-Up", duration: "30 Minutes", warranty: "Premium Oil Used", includes: "Basic Inspection", originalPrice: 249, offerPrice: 149, discount: "40% OFF" },
          { name: "Interior Cleaning", duration: "1 Hour", warranty: "Vacuum + Dashboard Polish", includes: "Fragrance Added", originalPrice: 299, offerPrice: 149, discount: "50% OFF" },
          { name: "AC Checkup", duration: "30 Minutes", warranty: "Gas Level Check", includes: "Vent Cleaning", originalPrice: 299, offerPrice: 149, discount: "50% OFF" },
          { name: "Light Inspection", duration: "30 Minutes", warranty: "Wiring Check", includes: "Adjustment", originalPrice: 249, offerPrice: 149, discount: "40% OFF" },
        ],
      },
      {
        name: "Value Services",
        cards: [
          { name: "Oil Filter Replacement", duration: "1 Hour", warranty: "Genuine Filter", includes: "Performance Boost", originalPrice: 1499, offerPrice: 1199, discount: "20% OFF" },
          { name: "Air Filter Replacement", duration: "45 Minutes", warranty: "Better Mileage", includes: "Dust Removal", originalPrice: 999, offerPrice: 799, discount: "20% OFF" },
          { name: "Coolant Replacement", duration: "1 Hour", warranty: "Radiator Flush", includes: "Temp Control", originalPrice: 1999, offerPrice: 1599, discount: "20% OFF" },
          { name: "Engine Tuning", duration: "2 Hours", warranty: "Performance Calibration", includes: "Mileage Improvement", originalPrice: 2499, offerPrice: 1999, discount: "20% OFF" },
        ],
      },
    ],
  },
  // ✅ 2️⃣ DENTING & PAINTING
  {
    serviceId: "denting-painting",
    subCategories: [
      {
        name: "Front Side",
        cards: [
          { name: "Front Bumper Repair", duration: "4 Hours", warranty: "3 Months", includes: "Paint Matching", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Bonnet Dent Removal", duration: "5 Hours", warranty: "3 Months", includes: "Primer + Paint", originalPrice: 7999, offerPrice: 5499, discount: "31% OFF" },
          { name: "Front Door Paint", duration: "6 Hours", warranty: "3 Months", includes: "Full Door Finish", originalPrice: 6999, offerPrice: 4999, discount: "29% OFF" },
          { name: "Headlight Panel Repair", duration: "3 Hours", warranty: "1 Month", includes: "Panel Alignment", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
        ],
      },
      {
        name: "Rear Side",
        cards: [
          { name: "Rear Bumper Repair", duration: "4 Hours", warranty: "3 Months", includes: "Paint Matching", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Boot Denting", duration: "5 Hours", warranty: "3 Months", includes: "Primer + Paint", originalPrice: 6999, offerPrice: 4799, discount: "31% OFF" },
          { name: "Rear Panel Painting", duration: "6 Hours", warranty: "3 Months", includes: "Full Panel", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Tail Light Frame Repair", duration: "3 Hours", warranty: "1 Month", includes: "Frame Alignment", originalPrice: 3499, offerPrice: 2299, discount: "34% OFF" },
        ],
      },
      {
        name: "Whole Body",
        cards: [
          { name: "Full Body Repaint", duration: "3 Days", warranty: "6 Months", includes: "All Panels", originalPrice: 45000, offerPrice: 29999, discount: "33% OFF" },
          { name: "Scratch Removal", duration: "2 Hours", warranty: "1 Month", includes: "All Body Panels", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
          { name: "Premium Paint Finish", duration: "4 Days", warranty: "1 Year", includes: "Metallic/Pearl", originalPrice: 65000, offerPrice: 49999, discount: "23% OFF" },
          { name: "Complete Restoration", duration: "5 Days", warranty: "1 Year", includes: "Denting + Paint", originalPrice: 55000, offerPrice: 39999, discount: "27% OFF" },
        ],
      },
      {
        name: "Left Side",
        cards: [
          { name: "Left Door Dent", duration: "4 Hours", warranty: "3 Months", includes: "Dent Removal", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Side Skirt Repair", duration: "3 Hours", warranty: "1 Month", includes: "Panel Work", originalPrice: 3999, offerPrice: 2699, discount: "33% OFF" },
          { name: "Panel Paint", duration: "5 Hours", warranty: "3 Months", includes: "Color Match", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Scratch Removal", duration: "2 Hours", warranty: "1 Month", includes: "Polish Finish", originalPrice: 2499, offerPrice: 1499, discount: "40% OFF" },
        ],
      },
      {
        name: "Right Side",
        cards: [
          { name: "Right Door Dent", duration: "4 Hours", warranty: "3 Months", includes: "Dent Removal", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Panel Repair", duration: "4 Hours", warranty: "3 Months", includes: "Panel Alignment", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Paint Matching", duration: "5 Hours", warranty: "3 Months", includes: "Perfect Color", originalPrice: 5499, offerPrice: 3799, discount: "31% OFF" },
          { name: "Scratch Polish", duration: "2 Hours", warranty: "1 Month", includes: "Deep Polish", originalPrice: 1999, offerPrice: 1299, discount: "35% OFF" },
        ],
      },
    ],
  },
  // ✅ 3️⃣ AC SERVICE
  {
    serviceId: "ac-service",
    subCategories: [
      {
        name: "Service Packages",
        cards: [
          { name: "AC Gas Refill", duration: "1 Hour", warranty: "3 Months", includes: "R134a Gas", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Compressor Repair", duration: "4 Hours", warranty: "3 Months", includes: "Diagnosis + Fix", originalPrice: 8999, offerPrice: 6499, discount: "28% OFF" },
          { name: "Cooling Coil Repair", duration: "5 Hours", warranty: "3 Months", includes: "Coil Replacement", originalPrice: 7999, offerPrice: 5999, discount: "25% OFF" },
          { name: "AC Leak Repair", duration: "3 Hours", warranty: "1 Month", includes: "Leak Detection + Fix", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
        ],
      },
      {
        name: "Pollution",
        cards: [
          { name: "PUC Test", duration: "30 Minutes", warranty: "6 Months Valid", includes: "Certificate", originalPrice: 499, offerPrice: 199, discount: "60% OFF" },
          { name: "Emission Certificate", duration: "30 Minutes", warranty: "Govt Approved", includes: "Digital Copy", originalPrice: 599, offerPrice: 299, discount: "50% OFF" },
          { name: "Sensor Check", duration: "1 Hour", warranty: "O2 Sensor Test", includes: "Diagnosis", originalPrice: 999, offerPrice: 599, discount: "40% OFF" },
          { name: "PUC Renewal", duration: "30 Minutes", warranty: "Quick Process", includes: "Documentation", originalPrice: 499, offerPrice: 249, discount: "50% OFF" },
        ],
      },
      {
        name: "AC Fitments",
        cards: [
          { name: "AC Condenser", duration: "4 Hours", warranty: "3 Months", includes: "New Condenser", originalPrice: 9999, offerPrice: 7499, discount: "25% OFF" },
          { name: "Blower Motor", duration: "2 Hours", warranty: "3 Months", includes: "Motor Replace", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Cabin Filter", duration: "30 Minutes", warranty: "Fresh Air", includes: "Anti-Bacterial", originalPrice: 999, offerPrice: 599, discount: "40% OFF" },
          { name: "AC Compressor Belt", duration: "1 Hour", warranty: "1 Month", includes: "Belt Replace", originalPrice: 1999, offerPrice: 1299, discount: "35% OFF" },
        ],
      },
      {
        name: "Radiator",
        cards: [
          { name: "Radiator Flush", duration: "2 Hours", warranty: "Coolant Replace", includes: "System Clean", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Coolant Replacement", duration: "1 Hour", warranty: "3 Months", includes: "Anti-Freeze", originalPrice: 1999, offerPrice: 1299, discount: "35% OFF" },
          { name: "Fan Motor Repair", duration: "3 Hours", warranty: "1 Month", includes: "Motor + Blade", originalPrice: 3999, offerPrice: 2799, discount: "30% OFF" },
          { name: "Hose Replacement", duration: "2 Hours", warranty: "1 Month", includes: "Upper & Lower", originalPrice: 2499, offerPrice: 1699, discount: "32% OFF" },
        ],
      },
      {
        name: "Under ₹49",
        cards: [
          { name: "AC Vent Cleaning", duration: "15 Minutes", warranty: "Fresh Air", includes: "Dust Removal", originalPrice: 299, offerPrice: 49, discount: "84% OFF" },
          { name: "Cabin Odour Check", duration: "15 Minutes", warranty: "Smell Test", includes: "Freshener", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "AC Belt Check", duration: "15 Minutes", warranty: "Tension Test", includes: "Visual Inspect", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
          { name: "Cooling Fan Check", duration: "15 Minutes", warranty: "Speed Test", includes: "Wiring Check", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
        ],
      },
      {
        name: "Under ₹99",
        cards: [
          { name: "AC Gas Level Check", duration: "20 Minutes", warranty: "Pressure Test", includes: "Report", originalPrice: 499, offerPrice: 99, discount: "80% OFF" },
          { name: "Thermostat Check", duration: "30 Minutes", warranty: "Temp Test", includes: "Calibration", originalPrice: 399, offerPrice: 99, discount: "75% OFF" },
          { name: "AC Filter Clean", duration: "20 Minutes", warranty: "Dust Free", includes: "Blow Clean", originalPrice: 299, offerPrice: 99, discount: "67% OFF" },
          { name: "AC Performance Test", duration: "30 Minutes", warranty: "Full Report", includes: "Cooling Check", originalPrice: 499, offerPrice: 99, discount: "80% OFF" },
        ],
      },
      {
        name: "Under ₹199",
        cards: [
          { name: "AC Sanitization", duration: "30 Minutes", warranty: "Anti-Bacterial", includes: "Spray Clean", originalPrice: 799, offerPrice: 199, discount: "75% OFF" },
          { name: "Evaporator Clean", duration: "45 Minutes", warranty: "Deep Clean", includes: "Foam Wash", originalPrice: 999, offerPrice: 199, discount: "80% OFF" },
          { name: "AC Pipe Inspection", duration: "30 Minutes", warranty: "Leak Check", includes: "Visual + UV", originalPrice: 599, offerPrice: 199, discount: "67% OFF" },
          { name: "Blower Speed Fix", duration: "45 Minutes", warranty: "Speed Restore", includes: "Resistor Check", originalPrice: 699, offerPrice: 199, discount: "72% OFF" },
        ],
      },
    ],
  },
  // ✅ 4️⃣ CAR SPA
  {
    serviceId: "car-spa",
    subCategories: [
      {
        name: "Spa Packages",
        cards: [
          { name: "Basic Car Spa", duration: "2 Hours", warranty: "Exterior + Interior", includes: "Foam Wash + Vacuum", rating: 4.3, originalPrice: 1999, offerPrice: 999, discount: "50% OFF" },
          { name: "Premium Spa", duration: "4 Hours", warranty: "Full Detailing", includes: "Polish + Wax", rating: 4.5, originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
          { name: "Ultimate Spa", duration: "6 Hours", warranty: "Deep Clean", includes: "Engine Bay + Underbody", rating: 4.7, originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Royal Treatment", duration: "1 Day", warranty: "Complete Care", includes: "Spa + Coating", rating: 4.8, originalPrice: 8999, offerPrice: 5999, discount: "33% OFF" },
        ],
      },
      {
        name: "Under ₹149",
        cards: [
          { name: "Dashboard Polish", duration: "30 Minutes", warranty: "Shine Finish", includes: "UV Protection", originalPrice: 399, offerPrice: 149, discount: "63% OFF" },
          { name: "Seat Freshening", duration: "30 Minutes", warranty: "Odour Removal", includes: "Fragrance Spray", originalPrice: 299, offerPrice: 149, discount: "50% OFF" },
          { name: "Glass Cleaning", duration: "30 Minutes", warranty: "Streak Free", includes: "All Windows", originalPrice: 349, offerPrice: 149, discount: "57% OFF" },
          { name: "Tyre Dressing", duration: "20 Minutes", warranty: "Black Shine", includes: "All 4 Tyres", originalPrice: 299, offerPrice: 149, discount: "50% OFF" },
        ],
      },
      {
        name: "Winter Special",
        cards: [
          { name: "Anti-Fog Treatment", duration: "1 Hour", warranty: "Clear Vision", includes: "All Glass", originalPrice: 999, offerPrice: 599, discount: "40% OFF" },
          { name: "Wax Protection", duration: "2 Hours", warranty: "3 Months", includes: "Paint Shield", originalPrice: 2499, offerPrice: 1499, discount: "40% OFF" },
          { name: "Underbody Wash", duration: "1 Hour", warranty: "Rust Prevention", includes: "High Pressure", originalPrice: 1499, offerPrice: 899, discount: "40% OFF" },
          { name: "Heater Check + Spa", duration: "3 Hours", warranty: "Winter Ready", includes: "AC + Heat Test", originalPrice: 2999, offerPrice: 1799, discount: "40% OFF" },
        ],
      },
    ],
  },
  // ✅ 5️⃣ DETAILING
  {
    serviceId: "detailing",
    subCategories: [
      {
        name: "Polishing",
        cards: [
          { name: "Machine Polishing", duration: "4 Hours", warranty: "3 Months", includes: "Full Body", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Rubbing Compound", duration: "3 Hours", warranty: "1 Month", includes: "Oxidation Remove", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
          { name: "Scratch Polishing", duration: "2 Hours", warranty: "1 Month", includes: "Targeted Areas", originalPrice: 2499, offerPrice: 1499, discount: "40% OFF" },
          { name: "Gloss Finish", duration: "5 Hours", warranty: "3 Months", includes: "Mirror Effect", originalPrice: 6999, offerPrice: 4999, discount: "29% OFF" },
        ],
      },
      {
        name: "Ceramic Coating",
        cards: [
          { name: "1 Year Ceramic", duration: "1 Day", warranty: "1 Year", includes: "Full Body Coat", rating: 4.5, originalPrice: 12999, offerPrice: 8999, discount: "31% OFF" },
          { name: "2 Year Ceramic", duration: "1.5 Days", warranty: "2 Years", includes: "Dual Layer", rating: 4.6, originalPrice: 19999, offerPrice: 14999, discount: "25% OFF" },
          { name: "3 Year Ceramic", duration: "2 Days", warranty: "3 Years", includes: "Triple Layer", rating: 4.8, originalPrice: 29999, offerPrice: 22999, discount: "23% OFF" },
          { name: "Premium Ceramic", duration: "3 Days", warranty: "5 Years", includes: "Graphene Coat", rating: 4.9, originalPrice: 45000, offerPrice: 34999, discount: "22% OFF" },
        ],
      },
      {
        name: "Teflon Coating",
        cards: [
          { name: "Basic Teflon", duration: "3 Hours", warranty: "3 Months", includes: "Single Coat", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
          { name: "Standard Teflon", duration: "4 Hours", warranty: "6 Months", includes: "Double Coat", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Premium Teflon", duration: "5 Hours", warranty: "1 Year", includes: "Triple Coat", originalPrice: 7999, offerPrice: 5499, discount: "31% OFF" },
          { name: "Teflon + Spa Combo", duration: "6 Hours", warranty: "6 Months", includes: "Full Package", originalPrice: 6999, offerPrice: 4499, discount: "36% OFF" },
        ],
      },
      {
        name: "PPF",
        cards: [
          { name: "Partial PPF", duration: "1 Day", warranty: "3 Years", includes: "Bonnet + Bumper", originalPrice: 25000, offerPrice: 18999, discount: "24% OFF" },
          { name: "Full Body PPF", duration: "3 Days", warranty: "5 Years", includes: "Complete Cover", originalPrice: 85000, offerPrice: 64999, discount: "24% OFF" },
          { name: "Bumper PPF", duration: "4 Hours", warranty: "3 Years", includes: "Front + Rear", originalPrice: 12000, offerPrice: 8999, discount: "25% OFF" },
          { name: "Headlight PPF", duration: "2 Hours", warranty: "2 Years", includes: "Both Lights", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
        ],
      },
      {
        name: "Anti Rust Coating",
        cards: [
          { name: "Underbody Coating", duration: "3 Hours", warranty: "1 Year", includes: "Full Underbody", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Internal Coating", duration: "4 Hours", warranty: "1 Year", includes: "Door Cavities", originalPrice: 5999, offerPrice: 4299, discount: "28% OFF" },
          { name: "Premium Anti-Rust", duration: "5 Hours", warranty: "2 Years", includes: "Full Protection", originalPrice: 8999, offerPrice: 6499, discount: "28% OFF" },
          { name: "Complete Package", duration: "1 Day", warranty: "3 Years", includes: "Under + Internal", originalPrice: 12999, offerPrice: 8999, discount: "31% OFF" },
        ],
      },
    ],
  },
  // ✅ 6️⃣ BATTERIES
  {
    serviceId: "batteries",
    subCategories: [
      {
        name: "Amaron",
        cards: [
          { name: "Amaron Go 35AH", duration: "30 Minutes", warranty: "24 Months", includes: "Free Installation", originalPrice: 4999, offerPrice: 3999, discount: "20% OFF" },
          { name: "Amaron Go 45AH", duration: "30 Minutes", warranty: "36 Months", includes: "Free Installation", originalPrice: 5999, offerPrice: 4799, discount: "20% OFF" },
          { name: "Amaron Pro 55AH", duration: "30 Minutes", warranty: "48 Months", includes: "Free Installation", originalPrice: 7499, offerPrice: 5999, discount: "20% OFF" },
          { name: "Amaron Flo 65AH", duration: "30 Minutes", warranty: "55 Months", includes: "Free Installation", originalPrice: 8999, offerPrice: 7199, discount: "20% OFF" },
        ],
      },
      {
        name: "Exide",
        cards: [
          { name: "Exide Mileage 35AH", duration: "30 Minutes", warranty: "24 Months", includes: "Free Installation", originalPrice: 4499, offerPrice: 3599, discount: "20% OFF" },
          { name: "Exide Mileage 45AH", duration: "30 Minutes", warranty: "36 Months", includes: "Free Installation", originalPrice: 5499, offerPrice: 4399, discount: "20% OFF" },
          { name: "Exide Matrix 55AH", duration: "30 Minutes", warranty: "48 Months", includes: "Free Installation", originalPrice: 6999, offerPrice: 5599, discount: "20% OFF" },
          { name: "Exide Invaplus 65AH", duration: "30 Minutes", warranty: "60 Months", includes: "Free Installation", originalPrice: 8499, offerPrice: 6799, discount: "20% OFF" },
        ],
      },
      {
        name: "SF Sonic",
        cards: [
          { name: "SF Sonic Flash 35AH", duration: "30 Minutes", warranty: "24 Months", includes: "Free Installation", originalPrice: 3999, offerPrice: 3199, discount: "20% OFF" },
          { name: "SF Sonic Flash 45AH", duration: "30 Minutes", warranty: "36 Months", includes: "Free Installation", originalPrice: 4999, offerPrice: 3999, discount: "20% OFF" },
          { name: "SF Sonic Stan 55AH", duration: "30 Minutes", warranty: "48 Months", includes: "Free Installation", originalPrice: 6499, offerPrice: 5199, discount: "20% OFF" },
          { name: "SF Sonic Power 65AH", duration: "30 Minutes", warranty: "60 Months", includes: "Free Installation", originalPrice: 7999, offerPrice: 6399, discount: "20% OFF" },
        ],
      },
      {
        name: "Under ₹49",
        cards: [
          { name: "Battery Health Check", duration: "15 Minutes", warranty: "Voltage Report", includes: "Load Test", originalPrice: 299, offerPrice: 49, discount: "84% OFF" },
          { name: "Water Top-Up", duration: "10 Minutes", warranty: "Cell Check", includes: "Distilled Water", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "Terminal Cleaning", duration: "15 Minutes", warranty: "Corrosion Free", includes: "Grease Apply", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "Voltage Test", duration: "10 Minutes", warranty: "Full Report", includes: "Alternator Check", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
        ],
      },
      {
        name: "Under ₹99",
        cards: [
          { name: "Battery Jumpstart", duration: "30 Minutes", warranty: "Emergency Service", includes: "On-Spot", originalPrice: 499, offerPrice: 99, discount: "80% OFF" },
          { name: "Cable Replacement", duration: "30 Minutes", warranty: "New Cables", includes: "Both Terminals", originalPrice: 399, offerPrice: 99, discount: "75% OFF" },
          { name: "Tray Cleaning", duration: "20 Minutes", warranty: "Rust Removal", includes: "Anti-Rust Spray", originalPrice: 299, offerPrice: 99, discount: "67% OFF" },
          { name: "Charging Check", duration: "30 Minutes", warranty: "Alternator Test", includes: "Belt Check", originalPrice: 399, offerPrice: 99, discount: "75% OFF" },
        ],
      },
    ],
  },
  // ✅ 7️⃣ TYRES
  {
    serviceId: "tyres",
    subCategories: [
      {
        name: "Polishing",
        cards: [
          { name: "Alloy Polishing", duration: "2 Hours", warranty: "All 4 Wheels", includes: "Mirror Finish", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Tyre Shine", duration: "30 Minutes", warranty: "Black Gloss", includes: "All 4 Tyres", originalPrice: 499, offerPrice: 299, discount: "40% OFF" },
          { name: "Rim Repair", duration: "3 Hours", warranty: "1 Month", includes: "Scratch Remove", originalPrice: 3999, offerPrice: 2799, discount: "30% OFF" },
          { name: "Wheel Detailing", duration: "2 Hours", warranty: "Deep Clean", includes: "Brake Dust Remove", originalPrice: 1999, offerPrice: 1299, discount: "35% OFF" },
        ],
      },
      {
        name: "Ceramic Coating",
        cards: [
          { name: "Wheel Ceramic Coat", duration: "3 Hours", warranty: "1 Year", includes: "All 4 Wheels", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Alloy Protection", duration: "2 Hours", warranty: "6 Months", includes: "Heat Resistant", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
          { name: "Premium Wheel Coat", duration: "4 Hours", warranty: "2 Years", includes: "Graphene Layer", originalPrice: 8999, offerPrice: 5999, discount: "33% OFF" },
          { name: "Brake Caliper Coat", duration: "2 Hours", warranty: "1 Year", includes: "Color Options", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
        ],
      },
      {
        name: "Teflon Coating",
        cards: [
          { name: "Tyre Teflon", duration: "1 Hour", warranty: "3 Months", includes: "UV Protection", originalPrice: 1999, offerPrice: 1299, discount: "35% OFF" },
          { name: "Alloy Teflon", duration: "2 Hours", warranty: "6 Months", includes: "Anti-Dust", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Wheel Guard", duration: "2 Hours", warranty: "6 Months", includes: "Full Protection", originalPrice: 3499, offerPrice: 2299, discount: "34% OFF" },
          { name: "Complete Tyre Care", duration: "3 Hours", warranty: "6 Months", includes: "Polish + Coat", originalPrice: 3999, offerPrice: 2699, discount: "33% OFF" },
        ],
      },
      {
        name: "PPF",
        cards: [
          { name: "Rim PPF", duration: "3 Hours", warranty: "2 Years", includes: "All 4 Rims", originalPrice: 8999, offerPrice: 5999, discount: "33% OFF" },
          { name: "Fender PPF", duration: "2 Hours", warranty: "2 Years", includes: "Stone Guard", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Wheel Arch PPF", duration: "3 Hours", warranty: "2 Years", includes: "Full Cover", originalPrice: 6999, offerPrice: 4999, discount: "29% OFF" },
          { name: "Mud Guard PPF", duration: "1 Hour", warranty: "1 Year", includes: "Both Sides", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
        ],
      },
      {
        name: "Anti Rust",
        cards: [
          { name: "Wheel Well Coat", duration: "2 Hours", warranty: "1 Year", includes: "All 4 Wells", originalPrice: 3999, offerPrice: 2799, discount: "30% OFF" },
          { name: "Suspension Coat", duration: "3 Hours", warranty: "1 Year", includes: "Anti-Corrosion", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Brake Shield", duration: "2 Hours", warranty: "6 Months", includes: "Caliper + Disc", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Full Wheel Anti-Rust", duration: "4 Hours", warranty: "2 Years", includes: "Complete Package", originalPrice: 7999, offerPrice: 5499, discount: "31% OFF" },
        ],
      },
    ],
  },
  // ✅ 8️⃣ CAR INSPECTIONS
  {
    serviceId: "car-inspections",
    subCategories: [
      {
        name: "Used Car",
        cards: [
          { name: "50 Point Check", duration: "1 Hour", warranty: "Basic Report", includes: "Visual Inspect", originalPrice: 999, offerPrice: 499, discount: "50% OFF" },
          { name: "100 Point Check", duration: "2 Hours", warranty: "Detailed Report", includes: "OBD Scan", originalPrice: 1999, offerPrice: 999, discount: "50% OFF" },
          { name: "Engine Inspection", duration: "2 Hours", warranty: "Compression Test", includes: "Leak Check", originalPrice: 2499, offerPrice: 1499, discount: "40% OFF" },
          { name: "Body Inspection", duration: "1.5 Hours", warranty: "Paint Meter", includes: "Accident Check", originalPrice: 1499, offerPrice: 799, discount: "47% OFF" },
        ],
      },
      {
        name: "Inspection",
        cards: [
          { name: "Engine Diagnostics", duration: "2 Hours", warranty: "OBD Report", includes: "Error Codes", originalPrice: 1999, offerPrice: 1199, discount: "40% OFF" },
          { name: "Suspension Check", duration: "1 Hour", warranty: "Full Report", includes: "Road Test", originalPrice: 999, offerPrice: 599, discount: "40% OFF" },
          { name: "Brake Inspection", duration: "1 Hour", warranty: "Safety Report", includes: "Pad + Disc", originalPrice: 799, offerPrice: 499, discount: "38% OFF" },
          { name: "Electrical Check", duration: "1.5 Hours", warranty: "Wiring Report", includes: "Battery + Alt", originalPrice: 1499, offerPrice: 899, discount: "40% OFF" },
        ],
      },
      {
        name: "Radiator",
        cards: [
          { name: "Radiator Flush", duration: "2 Hours", warranty: "Coolant Replace", includes: "System Clean", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Leak Detection", duration: "1 Hour", warranty: "Pressure Test", includes: "UV Dye Test", originalPrice: 1499, offerPrice: 899, discount: "40% OFF" },
          { name: "Radiator Replace", duration: "4 Hours", warranty: "6 Months", includes: "New Radiator", originalPrice: 8999, offerPrice: 6499, discount: "28% OFF" },
          { name: "Cooling System Test", duration: "1 Hour", warranty: "Temp Report", includes: "Fan + Thermostat", originalPrice: 999, offerPrice: 599, discount: "40% OFF" },
        ],
      },
      {
        name: "Under ₹49",
        cards: [
          { name: "Visual Inspection", duration: "15 Minutes", warranty: "Quick Check", includes: "Under Hood", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "Fluid Level Check", duration: "10 Minutes", warranty: "All Fluids", includes: "Top-Up Advice", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
          { name: "Light Check", duration: "10 Minutes", warranty: "All Lights", includes: "Bulb Test", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
          { name: "Wiper Check", duration: "10 Minutes", warranty: "Blade Inspect", includes: "Washer Test", originalPrice: 99, offerPrice: 49, discount: "51% OFF" },
        ],
      },
      {
        name: "Custom Issue",
        cards: [
          { name: "Full Diagnosis", duration: "2 Hours", warranty: "Expert Report", includes: "OBD + Manual", originalPrice: 2499, offerPrice: 1499, discount: "40% OFF" },
          { name: "Repair Estimate", duration: "1 Hour", warranty: "Detailed Quote", includes: "Parts + Labour", originalPrice: 999, offerPrice: 499, discount: "50% OFF" },
          { name: "Expert Home Visit", duration: "1 Hour", warranty: "At Your Door", includes: "Basic Tools", originalPrice: 1999, offerPrice: 1299, discount: "35% OFF" },
          { name: "Computer Scan", duration: "30 Minutes", warranty: "Error Report", includes: "Reset Option", originalPrice: 799, offerPrice: 399, discount: "50% OFF" },
        ],
      },
    ],
  },
  // ✅ 9️⃣ CLUTCH
  {
    serviceId: "clutch",
    subCategories: [
      {
        name: "Clutch Parts",
        cards: [
          { name: "Clutch Plate", duration: "4 Hours", warranty: "6 Months", includes: "Genuine Part", originalPrice: 8999, offerPrice: 6499, discount: "28% OFF" },
          { name: "Pressure Plate", duration: "4 Hours", warranty: "6 Months", includes: "Complete Set", originalPrice: 7999, offerPrice: 5799, discount: "28% OFF" },
          { name: "Release Bearing", duration: "3 Hours", warranty: "3 Months", includes: "Smooth Shift", originalPrice: 3999, offerPrice: 2799, discount: "30% OFF" },
          { name: "Flywheel", duration: "5 Hours", warranty: "6 Months", includes: "Resurface/Replace", originalPrice: 12999, offerPrice: 9499, discount: "27% OFF" },
        ],
      },
      {
        name: "Body Parts",
        cards: [
          { name: "Door Repair", duration: "4 Hours", warranty: "3 Months", includes: "Hinge + Panel", originalPrice: 5999, offerPrice: 3999, discount: "33% OFF" },
          { name: "Panel Replacement", duration: "5 Hours", warranty: "3 Months", includes: "OEM Parts", originalPrice: 6999, offerPrice: 4999, discount: "29% OFF" },
          { name: "Frame Straighten", duration: "1 Day", warranty: "6 Months", includes: "Laser Align", originalPrice: 15999, offerPrice: 11999, discount: "25% OFF" },
          { name: "Chassis Repair", duration: "2 Days", warranty: "6 Months", includes: "Welding + Paint", originalPrice: 19999, offerPrice: 14999, discount: "25% OFF" },
        ],
      },
      {
        name: "Custom Issue",
        cards: [
          { name: "Gear Slipping Fix", duration: "3 Hours", warranty: "3 Months", includes: "Diagnosis + Fix", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Noise Diagnosis", duration: "2 Hours", warranty: "Report", includes: "Road Test", originalPrice: 1999, offerPrice: 1199, discount: "40% OFF" },
          { name: "Hard Shifting Fix", duration: "3 Hours", warranty: "3 Months", includes: "Cable Adjust", originalPrice: 3999, offerPrice: 2799, discount: "30% OFF" },
          { name: "Clutch Scan", duration: "1 Hour", warranty: "OBD Report", includes: "Error Check", originalPrice: 999, offerPrice: 599, discount: "40% OFF" },
        ],
      },
      {
        name: "Under ₹49",
        cards: [
          { name: "Clutch Pedal Check", duration: "15 Minutes", warranty: "Free Play Test", includes: "Adjust", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "Gear Oil Check", duration: "10 Minutes", warranty: "Level Test", includes: "Quality Check", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
          { name: "Linkage Inspect", duration: "15 Minutes", warranty: "Cable Check", includes: "Lubrication", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "Noise Assessment", duration: "15 Minutes", warranty: "Quick Listen", includes: "Expert Opinion", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
        ],
      },
      {
        name: "Under ₹249",
        cards: [
          { name: "Clutch Cable Lube", duration: "30 Minutes", warranty: "Smooth Action", includes: "Full Lube", originalPrice: 499, offerPrice: 249, discount: "50% OFF" },
          { name: "Pedal Adjustment", duration: "30 Minutes", warranty: "Correct Height", includes: "Spring Check", originalPrice: 399, offerPrice: 249, discount: "38% OFF" },
          { name: "Slave Cylinder Check", duration: "30 Minutes", warranty: "Leak Test", includes: "Fluid Check", originalPrice: 599, offerPrice: 249, discount: "58% OFF" },
          { name: "Gear Linkage Adjust", duration: "45 Minutes", warranty: "Smooth Shift", includes: "Bush Check", originalPrice: 499, offerPrice: 249, discount: "50% OFF" },
        ],
      },
    ],
  },
  // ✅ 🔟 WINDSHIELD
  {
    serviceId: "windshield",
    subCategories: [
      {
        name: "Windshield Replacement",
        cards: [
          { name: "Front Windshield", duration: "3 Hours", warranty: "6 Months", includes: "OEM Glass", originalPrice: 12999, offerPrice: 8999, discount: "31% OFF" },
          { name: "Rear Windshield", duration: "3 Hours", warranty: "6 Months", includes: "OEM Glass", originalPrice: 9999, offerPrice: 6999, discount: "30% OFF" },
          { name: "Premium Glass", duration: "3 Hours", warranty: "1 Year", includes: "Rain Sensor Compatible", originalPrice: 18999, offerPrice: 13999, discount: "26% OFF" },
          { name: "OEM Replacement", duration: "4 Hours", warranty: "1 Year", includes: "Original Brand", originalPrice: 22999, offerPrice: 17999, discount: "22% OFF" },
        ],
      },
      {
        name: "Glasses",
        cards: [
          { name: "Side Window Glass", duration: "2 Hours", warranty: "3 Months", includes: "Tempered Glass", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Quarter Glass", duration: "2 Hours", warranty: "3 Months", includes: "Fixed Panel", originalPrice: 3999, offerPrice: 2799, discount: "30% OFF" },
          { name: "Door Glass", duration: "2 Hours", warranty: "3 Months", includes: "Power Window", originalPrice: 5999, offerPrice: 4199, discount: "30% OFF" },
          { name: "Tinted Glass", duration: "3 Hours", warranty: "6 Months", includes: "UV Protection", originalPrice: 6999, offerPrice: 4999, discount: "29% OFF" },
        ],
      },
      {
        name: "Lights",
        cards: [
          { name: "Headlight Replace", duration: "1 Hour", warranty: "3 Months", includes: "Bulb + Housing", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
          { name: "Tail Light Replace", duration: "1 Hour", warranty: "3 Months", includes: "Complete Unit", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Fog Light Install", duration: "2 Hours", warranty: "3 Months", includes: "Wiring + Switch", originalPrice: 3499, offerPrice: 2299, discount: "34% OFF" },
          { name: "Indicator Replace", duration: "30 Minutes", warranty: "1 Month", includes: "Both Sides", originalPrice: 999, offerPrice: 599, discount: "40% OFF" },
        ],
      },
    ],
  },
  // ✅ 1️⃣1️⃣ SUSPENSION
  {
    serviceId: "suspension",
    subCategories: [
      {
        name: "Steering",
        cards: [
          { name: "Steering Rack Repair", duration: "5 Hours", warranty: "6 Months", includes: "Seal Kit", originalPrice: 12999, offerPrice: 8999, discount: "31% OFF" },
          { name: "Wheel Alignment", duration: "1 Hour", warranty: "3 Months", includes: "4 Wheel 3D", originalPrice: 1999, offerPrice: 999, discount: "50% OFF" },
          { name: "Steering Column", duration: "4 Hours", warranty: "3 Months", includes: "Universal Joint", originalPrice: 6999, offerPrice: 4999, discount: "29% OFF" },
          { name: "Power Steering Fluid", duration: "30 Minutes", warranty: "Flush + Fill", includes: "Genuine Fluid", originalPrice: 1499, offerPrice: 899, discount: "40% OFF" },
        ],
      },
      {
        name: "Suspension",
        cards: [
          { name: "Shock Absorber", duration: "3 Hours", warranty: "6 Months", includes: "Front or Rear", originalPrice: 6999, offerPrice: 4999, discount: "29% OFF" },
          { name: "Strut Assembly", duration: "4 Hours", warranty: "6 Months", includes: "Complete Unit", originalPrice: 8999, offerPrice: 6499, discount: "28% OFF" },
          { name: "Coil Spring", duration: "3 Hours", warranty: "6 Months", includes: "Replace + Align", originalPrice: 5999, offerPrice: 4299, discount: "28% OFF" },
          { name: "Control Arm", duration: "4 Hours", warranty: "6 Months", includes: "Ball Joint Inc", originalPrice: 7999, offerPrice: 5699, discount: "29% OFF" },
        ],
      },
      {
        name: "Fitments",
        cards: [
          { name: "Bush Replacement", duration: "2 Hours", warranty: "3 Months", includes: "PU Bushes", originalPrice: 2999, offerPrice: 1999, discount: "33% OFF" },
          { name: "Engine Mount", duration: "3 Hours", warranty: "3 Months", includes: "Vibration Fix", originalPrice: 4999, offerPrice: 3499, discount: "30% OFF" },
          { name: "Ball Joint", duration: "2 Hours", warranty: "3 Months", includes: "Lower Arm", originalPrice: 3499, offerPrice: 2399, discount: "31% OFF" },
          { name: "Link Rod", duration: "1.5 Hours", warranty: "3 Months", includes: "Stabilizer Bar", originalPrice: 1999, offerPrice: 1299, discount: "35% OFF" },
        ],
      },
      {
        name: "Custom Issues",
        cards: [
          { name: "Noise Diagnosis", duration: "1 Hour", warranty: "Expert Report", includes: "Road Test", originalPrice: 999, offerPrice: 499, discount: "50% OFF" },
          { name: "Vibration Fix", duration: "2 Hours", warranty: "Balancing Inc", includes: "Wheel + Susp", originalPrice: 1999, offerPrice: 1199, discount: "40% OFF" },
          { name: "Car Pulling Fix", duration: "2 Hours", warranty: "Alignment Inc", includes: "Camber Adjust", originalPrice: 2499, offerPrice: 1499, discount: "40% OFF" },
          { name: "Hard Steering Fix", duration: "3 Hours", warranty: "3 Months", includes: "Diagnosis + Fix", originalPrice: 3999, offerPrice: 2499, discount: "38% OFF" },
        ],
      },
      {
        name: "Under ₹49",
        cards: [
          { name: "Ride Quality Check", duration: "15 Minutes", warranty: "Quick Test", includes: "Bounce Test", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
          { name: "Tyre Wear Inspect", duration: "10 Minutes", warranty: "Pattern Check", includes: "Alignment Advice", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
          { name: "Steering Play Check", duration: "10 Minutes", warranty: "Free Play Test", includes: "Safety Check", originalPrice: 149, offerPrice: 49, discount: "67% OFF" },
          { name: "Visual Inspection", duration: "15 Minutes", warranty: "Under Car Look", includes: "Leak Check", originalPrice: 199, offerPrice: 49, discount: "75% OFF" },
        ],
      },
    ],
  },
  // ✅ 1️⃣2️⃣ INSURANCE CLAIMS
  {
    serviceId: "insurance-claims",
    subCategories: [
      {
        name: "Know Your Policy",
        cards: [
          { name: "Coverage Analysis", duration: "30 Minutes", warranty: "Expert Review", includes: "Full Breakdown", originalPrice: 999, offerPrice: 0, discount: "FREE" },
          { name: "IDV Calculator", duration: "15 Minutes", warranty: "Market Value", includes: "Fair Estimate", originalPrice: 499, offerPrice: 0, discount: "FREE" },
          { name: "Claim Limit Check", duration: "15 Minutes", warranty: "Policy Review", includes: "Max Payout Info", originalPrice: 499, offerPrice: 0, discount: "FREE" },
          { name: "Renewal Advice", duration: "30 Minutes", warranty: "Best Rates", includes: "Comparison", originalPrice: 999, offerPrice: 0, discount: "FREE" },
        ],
      },
      {
        name: "Accidental Repairs",
        cards: [
          { name: "Minor Accident", duration: "2-3 Days", warranty: "6 Months", includes: "Cashless Claim", originalPrice: 15000, offerPrice: 0, discount: "Cashless" },
          { name: "Major Accident", duration: "7-10 Days", warranty: "6 Months", includes: "Full Restoration", originalPrice: 50000, offerPrice: 0, discount: "Cashless" },
          { name: "Full Body Repair", duration: "15-20 Days", warranty: "1 Year", includes: "Complete Overhaul", originalPrice: 100000, offerPrice: 0, discount: "Cashless" },
          { name: "Cashless Process", duration: "Same Day Start", warranty: "Hassle Free", includes: "Documentation", originalPrice: 0, offerPrice: 0, discount: "FREE" },
        ],
      },
      {
        name: "Theft / Lost",
        cards: [
          { name: "Claim Filing", duration: "1 Day", warranty: "Expert Help", includes: "FIR + Documentation", originalPrice: 2999, offerPrice: 0, discount: "FREE" },
          { name: "Documentation Help", duration: "2-3 Hours", warranty: "Complete Pack", includes: "All Paperwork", originalPrice: 1999, offerPrice: 0, discount: "FREE" },
          { name: "Inspection Support", duration: "Surveyor Visit", warranty: "On-Site Help", includes: "Photo + Video", originalPrice: 999, offerPrice: 0, discount: "FREE" },
          { name: "Settlement Follow-Up", duration: "Till Complete", warranty: "Regular Updates", includes: "Negotiation", originalPrice: 4999, offerPrice: 0, discount: "FREE" },
        ],
      },
      {
        name: "Inspections",
        cards: [
          { name: "Survey Assistance", duration: "Surveyor Visit", warranty: "On-Site Help", includes: "Damage Report", originalPrice: 1499, offerPrice: 0, discount: "FREE" },
          { name: "Damage Assessment", duration: "2 Hours", warranty: "Detailed Report", includes: "Photo Evidence", originalPrice: 999, offerPrice: 0, discount: "FREE" },
          { name: "Valuation Report", duration: "1 Day", warranty: "Market Value", includes: "Expert Opinion", originalPrice: 1999, offerPrice: 0, discount: "FREE" },
          { name: "Repair Estimate", duration: "2 Hours", warranty: "Parts + Labour", includes: "Detailed Quote", originalPrice: 999, offerPrice: 0, discount: "FREE" },
        ],
      },
    ],
  },
];
