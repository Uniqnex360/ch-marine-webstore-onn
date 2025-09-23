import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    sku: 'ST084812',
    name: 'Star brite Fogging Oil - 283g',
    description: 'Premium fogging oil designed to protect internal engine components during storage. Prevents corrosion and extends engine life.',
    price: 24.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/4162/images/35495/starbrite-fogging-oil__41882.1693232668.500.750.jpg?c=2',
    category: 'Engine Care',
    brand: 'Star brite',
    rating: 4.5,
    reviews: 87,
    inStock: true,
    specifications: [
      { name: 'Size', value: '283g' },
      { name: 'Type', value: 'Fogging Oil' },
      { name: 'Application', value: 'Engine Storage' },
      { name: 'Protection', value: 'Corrosion Prevention' }
    ]
  },
  {
    id: '2',
    sku: '54037',
    name: 'Whale Gusher 25 Service Kit - Nitrile',
    description: 'Complete service kit for Whale Gusher 25 manual bilge pump. Includes nitrile seals and components for optimal performance.',
    price: 45.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/4668/images/7338/apikj1hvr__05144.1749212244.500.750.jpg?c=2',
    category: 'Pumps',
    brand: 'Whale',
    rating: 4.7,
    reviews: 124,
    inStock: true,
    specifications: [
      { name: 'Compatibility', value: 'Gusher 25' },
      { name: 'Material', value: 'Nitrile' },
      { name: 'Type', value: 'Service Kit' },
      { name: 'Components', value: 'Complete Set' }
    ]
  },
  {
    id: '3',
    sku: 'JVR050-1122',
    name: 'Jabsco Diesel Transfer Pump - Switch and Fuse - 50LPM - 24V',
    description: 'High-performance diesel transfer pump with integrated switch and fuse protection. 50 liters per minute flow rate at 24V.',
    price: 189.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/4714/images/26421/apicop31w__48051.1616422930.500.750.jpg?c=2',
    category: 'Pumps',
    brand: 'Jabsco',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    specifications: [
      { name: 'Flow Rate', value: '50 LPM' },
      { name: 'Voltage', value: '24V' },
      { name: 'Type', value: 'Diesel Transfer' },
      { name: 'Protection', value: 'Switch & Fuse' }
    ]
  },
  {
    id: '4',
    sku: 'J50200-2111',
    name: 'Jabsco 50200 Series 1 1/2\'\' Electric Magnetic Clutch Pump - Double Pulley - 24V (2.5A)',
    description: 'Professional electric magnetic clutch pump with double pulley system. 1.5 inch connections, 24V operation at 2.5A current draw.',
    price: 345.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/4723/images/26287/apiwscb0d__84832.1593680657.500.750.jpg?c=2',
    category: 'Pumps',
    brand: 'Jabsco',
    rating: 4.4,
    reviews: 93,
    inStock: true,
    specifications: [
      { name: 'Size', value: '1 1/2 inch' },
      { name: 'Voltage', value: '24V' },
      { name: 'Current', value: '2.5A' },
      { name: 'Type', value: 'Magnetic Clutch' }
    ]
  },
  {
    id: '5',
    sku: '44064',
    name: 'Isotemp SPA Stainless Steel Water Heater - 25L with Thermo Mixing Valve',
    description: 'Premium stainless steel water heater with 25-liter capacity. Includes thermo mixing valve for precise temperature control.',
    price: 429.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/4724/images/26279/apilkwsf9__33210.1593681266.500.750.jpg?c=2',
    category: 'Plumbing',
    brand: 'Isotemp',
    rating: 4.3,
    reviews: 201,
    inStock: true,
    specifications: [
      { name: 'Capacity', value: '25 Liters' },
      { name: 'Material', value: 'Stainless Steel' },
      { name: 'Valve', value: 'Thermo Mixing' },
      { name: 'Type', value: 'SPA Series' }
    ]
  },
  {
    id: '6',
    sku: '45468/5',
    name: 'MGDuff Bolt On Anode MD77EURO - Magnesium',
    description: 'High-quality magnesium bolt-on anode for corrosion protection. European standard MD77EURO specification.',
    price: 89.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/4934/images/21969/apibvtjpz__40082.1593681471.500.750.jpg?c=2',
    category: 'Anodes',
    brand: 'MGDuff',
    rating: 4.2,
    reviews: 167,
    inStock: false,
    specifications: [
      { name: 'Material', value: 'Magnesium' },
      { name: 'Type', value: 'Bolt On' },
      { name: 'Standard', value: 'MD77EURO' },
      { name: 'Protection', value: 'Corrosion' }
    ]
  },
  {
    id: '7',
    sku: '50179',
    name: 'Roca Plastic Vent 100 x 200mm - White 480804',
    description: 'Marine-grade plastic ventilation grille. 100mm x 200mm dimensions in white finish for optimal airflow.',
    price: 35.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/18013/images/29290/apiporbgi__87493.1593681529.500.750.jpg?c=2',
    category: 'Ventilation',
    brand: 'Roca',
    rating: 4.8,
    reviews: 78,
    inStock: true,
    specifications: [
      { name: 'Dimensions', value: '100 x 200mm' },
      { name: 'Material', value: 'Plastic' },
      { name: 'Color', value: 'White' },
      { name: 'Model', value: '480804' }
    ]
  },
  {
    id: '8',
    sku: 'ST080500',
    name: 'Star brite Heavy Duty Concentrated Bilge Cleaner - 3.78L',
    description: 'Professional-grade concentrated bilge cleaner for heavy-duty cleaning. 3.78-liter container for extended use.',
    price: 42.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/21734/images/42820/starbrite-bilge-cleaner-80500__37353.1741681009.500.750.jpg?c=2',
    category: 'Cleaning',
    brand: 'Star brite',
    rating: 4.7,
    reviews: 65,
    inStock: true,
    specifications: [
      { name: 'Volume', value: '3.78L' },
      { name: 'Type', value: 'Concentrated' },
      { name: 'Application', value: 'Bilge Cleaning' },
      { name: 'Grade', value: 'Heavy Duty' }
    ]
  },
  {
    id: '9',
    sku: 'BEP-770-DP',
    name: 'BEP Pro Installer 400A Double Pole Battery Switch',
    description: 'Professional-grade 400A double pole battery switch for marine electrical systems. Pro installer series quality.',
    price: 125.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/23350/images/45890/770-DP_HR__80959.1679654066.500.750.jpg?c=2',
    category: 'Electrical',
    brand: 'BEP',
    rating: 4.9,
    reviews: 142,
    inStock: true,
    specifications: [
      { name: 'Current Rating', value: '400A' },
      { name: 'Type', value: 'Double Pole' },
      { name: 'Series', value: 'Pro Installer' },
      { name: 'Application', value: 'Battery Switch' }
    ]
  },
  {
    id: '10',
    sku: '60203/7',
    name: 'Aqua Signal MIRZ54-600 LED 2500 HF TW PC 840M20',
    description: 'High-performance LED navigation light with 2500 lumens output. Professional marine lighting solution.',
    price: 189.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/23884/images/47203/_led_600_ip54__35388.1684236963.500.750.png?c=2',
    category: 'Lighting',
    brand: 'Aqua Signal',
    rating: 4.6,
    reviews: 98,
    inStock: true,
    specifications: [
      { name: 'Output', value: '2500 Lumens' },
      { name: 'Type', value: 'LED' },
      { name: 'Model', value: 'MIRZ54-600' },
      { name: 'Code', value: '840M20' }
    ]
  },
  {
    id: '11',
    sku: 'SIERRA18-1976-1',
    name: 'Mercruiser Exhaust Manifold Elbow by Sierra - Model 18-1976-1 replaces 44354A3, 807914A1',
    description: 'Premium exhaust manifold elbow for Mercruiser engines. Sierra quality replacement part compatible with multiple OEM numbers.',
    price: 156.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/24108/images/47811/18-1976-1__43991.1692971775.500.750.jpg?c=2',
    category: 'Engine Parts',
    brand: 'Sierra',
    rating: 4.5,
    reviews: 89,
    inStock: true,
    specifications: [
      { name: 'Model', value: '18-1976-1' },
      { name: 'Replaces', value: '44354A3, 807914A1' },
      { name: 'Application', value: 'Mercruiser' },
      { name: 'Type', value: 'Exhaust Manifold Elbow' }
    ]
  },
  {
    id: '12',
    sku: '44018/10',
    name: 'MeacoCool MC Series Pro 10000 Portable Air Conditioner',
    description: 'Professional portable air conditioning unit with 10,000 BTU capacity. MC Series Pro for marine and mobile applications.',
    price: 899.99,
    image: 'https://cdn11.bigcommerce.com/s-lmnt0zg7g8/products/25373/images/50861/MeacoCool_MC_Series_Pro_8000_BTU_Portable_Air_Conditioner_CH__83743.1714144576.1280.1280__93531.1714145260.1280.1280__50152.1749204803.500.750.jpg?c=2',
    category: 'Climate Control',
    brand: 'MeacoCool',
    rating: 4.4,
    reviews: 76,
    inStock: true,
    specifications: [
      { name: 'Capacity', value: '10,000 BTU' },
      { name: 'Type', value: 'Portable' },
      { name: 'Series', value: 'MC Pro' },
      { name: 'Application', value: 'Air Conditioning' }
    ]
  }
];

// Updated category structure based on the new products
export const categoryStructure = {
  'Engine Care': {
    name: 'Engine Care',
    subcategories: ['Fogging Oil', 'Engine Maintenance', 'Fuel Additives', 'Oil Treatment']
  },
  'Pumps': {
    name: 'Pumps',
    subcategories: ['Bilge Pumps', 'Transfer Pumps', 'Service Kits', 'Magnetic Clutch Pumps']
  },
  'Plumbing': {
    name: 'Plumbing',
    subcategories: ['Water Heaters', 'Mixing Valves', 'Fittings', 'Hoses']
  },
  'Anodes': {
    name: 'Anodes',
    subcategories: ['Bolt On Anodes', 'Magnesium Anodes', 'Zinc Anodes', 'Aluminum Anodes']
  },
  'Ventilation': {
    name: 'Ventilation',
    subcategories: ['Vents', 'Grilles', 'Fans', 'Ducting']
  },
  'Cleaning': {
    name: 'Cleaning',
    subcategories: ['Bilge Cleaners', 'Hull Cleaners', 'Deck Cleaners', 'Engine Cleaners']
  },
  'Electrical': {
    name: 'Electrical',
    subcategories: ['Battery Switches', 'Wiring', 'Fuses', 'Panels']
  },
  'Lighting': {
    name: 'Lighting',
    subcategories: ['Navigation Lights', 'LED Lights', 'Deck Lights', 'Interior Lights']
  },
  'Engine Parts': {
    name: 'Engine Parts',
    subcategories: ['Exhaust Parts', 'Manifolds', 'Gaskets', 'Seals']
  },
  'Climate Control': {
    name: 'Climate Control',
    subcategories: ['Air Conditioners', 'Heaters', 'Fans', 'Dehumidifiers']
  }
};

// Updated brand filters
export const brands = ['Star brite', 'Whale', 'Jabsco', 'Isotemp', 'MGDuff', 'Roca', 'BEP', 'Aqua Signal', 'Sierra', 'MeacoCool'];

// Price ranges
export const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $500', min: 200, max: 500 },
  { label: '$500 - $1000', min: 500, max: 1000 },
  { label: 'Over $1000', min: 1000, max: 10000 }
];