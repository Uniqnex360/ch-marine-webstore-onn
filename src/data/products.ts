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
  },
  {
  "id": "13",
  "sku": "H3WPS496TAM6-80",
  "name": "Hoover H-Wash 350 9KG 1400RPM Freestanding Washing Machine - White | H3WPS496TAM6-80",
  "description": "85CM X 60CM X 52CM\r\nComing with a fantastic range of 16 programmes to suit any load, this Hoover washer will make household chores quicker and easier. If you’re in a hurry, then why not take advantage of the three Quick Wash options? Freshen your clothes in 14, 30, or 44 minutes to have your favourite outfits clean in a flash. There’s even an All-in-One option which means you can wash different colours together in a single load. Add a blast of high-temperature steam at the end of a cycle to remove creases and remove odours. Plus, the H3WPS496TAM6 is Bluetooth and Wi-Fi enabled, so doing the laundry is easier than ever.\r\nConnectivity:\r\nBluetooth\r\nSmart Connect\r\nWi-Fi\r\nAdditional Information:\r\nExtra rinse\r\nUp to 90 degrees\r\nVariable spin\r\nDelay start\r\nHygiene+\r\nQuick Wash Time: 14/30/44 minutes\r\nFeatures:\r\nAll-in-One programme\r\nSteam Function\r\nMultiple Quick Wash cycles\r\nWhite Goods Features:\r\nAutomatic Load Recognition\r\nDigital Inverter Motor\r\nHeight Adjustment\r\nQuick Wash Option\r\nProgrammes:\r\nCotton\r\nMixed\r\nEco 40/60\r\nSynthetics\r\nRinse\r\nDrain & Spin\r\nSports\r\nDelicates\r\nQuick Cycles",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 349.99,
  "image": "https://www.did.ie/cdn/shop/files/H3WPS496TAM6-80-1_5000x.jpg?v=1704875221",
  "brand": "Hoover",
  "rating": 4.8,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hoover\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"9KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Child Safety Lock\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Delay Start\""
    },
    {
      "name": "\"name\"",
      "value": "\"Large Porthole\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"End of Programme Indication\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Time Remaining\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"No. of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"14min\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"9200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"46\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.445\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level dB (spin)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"520\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Add Laundry Feature\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dials\""
    },
    {
      "name": "\"name\"",
      "value": "\"Temperature Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built-in Water Heater\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stackable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Supply\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cold\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Category Group\","
    },
    {
      "name": "\"value\"",
      "value": "\"White Goods\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Digital\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weighted Energy Consumption [100 Cycles, Eco 40-60]\","
    },
    {
      "name": "\"value\"",
      "value": "\"49\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programme Duration Rated Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"3:48\""
    },
    {
      "name": "\"name\"",
      "value": "\"Airborn Acoustical Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Index (EEIw)\","
    },
    {
      "name": "\"value\"",
      "value": "\"46.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rinsing Effectiveness (G/Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Temperature Inside The Treated Textile Rated Capacity (°C)\","
    },
    {
      "name": "\"value\"",
      "value": "\"32\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weighted Remaining Moisture Content(A) (%)\","
    },
    {
      "name": "\"value\"",
      "value": "\"53.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed Rated Capacity (Rpm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1351\""
    }
  ]
},
{
  "id": "14",
  "sku": "WAN28259GB",
  "name": "Bosch Series 4 9KG 1400RPM Washing Machine - White | WAN28259GB",
  "description": "Best energy class: A.\r\nBy using energy-saving home appliances, you save valuable resources. That’s why you should consider low energy and water consumption values when you purchase a home appliance. The energy label, specifies the efficiency class, noise level, capacity, energy and water consumption of the relevant appliance. The new efficiency class is now rated from A to G for washing machines. Thanks to our high efficiency energy saving system, the Bosch washing machine range includes models that achieve the best energy class A without compromising on results.\r\nThe perfect clean, up to 65% faster.\r\nWhen time is of the essence, washing machines with Speed Perfect can cut washing time by up to 65%, without compromising your results. Speed Perfect can be used in combination with most programmes, and with all load sizes and fabric types. For example, you can select the mixed programme along with Speed Perfect to thoroughly wash up to four kilograms of clothes in just 46 minutes.\r\nReduces wrinkles and your ironing pile\r\nHow to get wrinkle-free clothes with minimum effort? Iron Assist gently steams freshly washed and dried items in just 20 minutes. It can also reduce wrinkles on a previously worn item of clothing. Just place items in the machine and let Iron Assist do the rest. It reduces wrinkles up to 50% and therefore your ironing pile.\r\nFor highly efficient use of water even with smaller loads.\r\nOur ActiveWater Plus technology delivers perfect results while only using the precise amount of water needed for every wash. This ensures highly efficient use of water even when washing smaller loads. Thanks to highly efficient water management technology, the type and size of load is automatically detected and then the water consumption is precisely adjusted. Save up to 50% of water when washing smaller loads. ActiveWater Plus automatically adjusts water consumption to suit your load. Comparing water consumption of Eco 40-60 with quarter vs. full load per cycle.\r\nNever miss an item again, with Reload.\r\nForgot to add a sock, or a stray t-shirt? No problem! The Reload function lets you easily add or remove clothes during wash cycles. Just press the Reload button and open the door, then add your forgotten items and continue the wash. As a safety feature, you can’t use Reload if the suds are hotter than 50°C or the water level is too high.\r\nGuaranteed quiet and long-lasting motor.\r\nDon't let your washing machine intrude on your dinner. Bosch’s EcoSilence Drive is so quiet that sometimes you might forget it's even on. The brushless, energy-efficient motor is quiet in operation, has an especially long life and comes with a 10-year parts warranty.\r\nHygienic washing, even at 40°C.\r\nSometimes clean just isn't clean enough. That’s why we developed the Hygiene Plus programme. It keeps the temperature during the wash cycle constant and an additional rinse cycle is added to ensure hygienically clean laundry, effectively killing germs and house dust mites. The result: hygienic washing results that kill 99,99% of common germs even at 40°C. Bosch washing machines with the ‘HygienePlus’ wash programme at 40° and 60° fulfill scientifically recommended conditions for 99,99% of germ reduction for Enterococcus Hirae and Pseudomonas Aeruginosa, according to Honisch et al. 2014, \"Impact of wash cycle time, temperature and detergent formulation on the hygiene effectiveness of domestic laundering.” Conducted by University Rhine-Waal.\r\nPowerful but gentle washing to protect your clothes.\r\nIn the past, your favourite or most delicate clothes may have been damaged in the wash. The unique, patented VarioDrum system uses even water distribution to gently and efficiently wash all types of clothing - without stretching, creasing or damaging your most beloved items. Depending on the selected programme, the droplet-shaped design, with asymmetrical paddles gently rotates your laundry to the centre - regardless of the rotation direction. This not only ensures an intensive clean for more heavily soiled clothes, but a quicker, more thorough clean for the entire load.\r\nA quieter wash for night time.\r\nNo more being woken up by your washing machine. Our Night Wash Option helps you have a peaceful night's sleep thanks to a quieter wash cycle. This special quiet mode can be combined with any programme, and simply reduces the RPM of the selected wash cycle, making it ideal for night time.\r\nKey Features:\r\nLoading sensor\r\nDigital countdown indicator\r\nwaterperfectplus\r\nSelf adjusting water level to load\r\nSpeedPerfect\r\nFoam control\r\nBest energy class A:\r\nsave energy with the most efficient class A\r\nSpeed Perfect:\r\nget the perfect clean in up to 65% less time\r\nIron Assist:\r\nreduce wrinkles up to 50%\r\nActiveWater Plus:\r\nFor highly efficient use of water even with smaller loads thanks to automatic load detection\r\nReload function:\r\nforgot an item? Add it easily to the wash",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 549.99,
  "image": "https://www.did.ie/cdn/shop/files/WAN28259GB-1_5000x.jpg?v=1719577917",
  "brand": "Bosch",
  "rating": 4.7,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bosch\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"9KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Child Safety Lock\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Half Load Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Delay Start\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Time Remaining\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cycle Pause\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"No. of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"15\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"15min, 30min\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washer Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Drain / Spin, easy ironing steam assisted, Mixed Load, Night Wash, Outdoor, Prewash, Ready in, Shirts, Single Rinse, SpeedPerfect, Spin speed reduction, start/pause with reload function, Super Quick 15/30, Temperature selection\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"49\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level dB (spin)\","
    },
    {
      "name": "\"value\"",
      "value": "\"72\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"630\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"70.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"4242005422203\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Airborne Acoustical Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Index For The Washing Cycle\","
    },
    {
      "name": "\"value\"",
      "value": "\"51.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washing Efficiency Index Eco 40-60 Programme\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.031\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Hinge\","
    },
    {
      "name": "\"value\"",
      "value": "\"Left\""
    },
    {
      "name": "\"name\"",
      "value": "\"Reload Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Countdown Indicator\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Waterperfectplus\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Self Adjusting Water Level To Load\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cottons Programme\","
    },
    {
      "name": "\"value\"",
      "value": "\"Standard Cold - 90°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Easy-Care Programme\","
    },
    {
      "name": "\"value\"",
      "value": "\"Standard Cold - 60°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fuse protection\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"220 - 240 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy consumption in kWh per kg per cycle of eco 40-60 programme\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.489 kWh\""
    }
  ]
},
{
  "id": "15",
  "sku": "WGG254Z1GB",
  "name": "Bosch Series 6 10KG 1400RPM Freestanding Washing Machine - White | WGG254Z1GB",
  "description": "A rated\r\nAll Bosch washing machines are A-rated, built with sustainability in mind. By using energy-saving home appliances, you save valuable resources. That’s why you should consider low energy and water consumption when you purchase a home appliance. We know performance is still important, which is why our A-rated models are still packed with all of your favourite features. The energy label, specifies the efficiency class, noise level, capacity, energy and water consumption of the relevant appliance. Efficiency class for washing machines ranges from A to G.\r\nSpeed Perfect: Cuts the cycle time by up to 65% without compromising on results\r\nWhen time is of the essence, washing machines with Speed Perfect can cut washing time by up to 65%, without compromising your results. Speed Perfect can be used in combination with most programmes, and with all load sizes and fabric types. For example, you can select the mixed programme along with Speed Perfect to thoroughly wash up to four kilograms of clothes.\r\nFaster washing when you need it\r\nWith Super Quick 30, you can now wash your clothes in just 30 minutes, without compromising on cleanliness . Whether you have a last-minute event or simply need your clothes freshened up in a hurry, this innovative function has got you covered. Designed to deliver outstanding results, Super Quick 30 ensures that your clothes are thoroughly cleaned and ready to wear in no time. Experience the convenience and effectiveness of Bosch's Super Quick 30 and make your laundry routine faster and more efficient than ever before.\r\nReduces wrinkles and your ironing pile\r\nIron Assist is designed to make ironing easier and more efficient, a household chore we often dread. Iron Assist gently steams freshly washed and dried items in just 20 minutes, reducing wrinkles to help reduce your ironing. Enjoy the convenience of Iron Assist and simplify your ironing routine. It can also reduce wrinkles on a previously worn item of clothing. Just place your items in the machine and let Iron Assist do the rest.\r\nThe right wash for the right stain\r\nWith the Anti Stain system, your washing machine can tackle four stubborn types of stain with ease. It automatically adjusts the temperature, drum movement and soaking time to easily remove up to four of the most stubborn stains fully automatically. It’s the perfect way to remove butter or oil, grass, red wine and blood stains.\r\nQuiet and energy-efficient drive, with a 10-year warranty\r\nBosch’s Eco Silence Drive, the perfect blend of efficiency and quiet operation. With its innovative motor technology, enjoy powerful yet silent washing cycles, so quiet that you might forget it's on. The brushless, energy-efficient motor is quiet in operation, has an especially long life and comes with a 10-year parts warranty. Unlike other washing machines, Bosch’s Eco Silence Drive operates without brushes, resulting in reduced friction and noise. This innovative design ensures a smooth and efficient washing experience.\r\nExtremely stable and especially quiet, thanks to special vibration protection\r\nThe innovative Anti Vibration sidewall provides stability and reduces vibrations. The enhanced insulation regulates noise levels, making Bosch washing machines extremely quiet, even during the spin cycle. You can enjoy peace of mind knowing that your Bosch washing machine will operate smoothly and silently, without disturbing your daily activities. Upgrade to a washing machine with Bosch Anti Vibration sidewall and enjoy a more peaceful and efficient laundry routine.\r\nUses only the precise amount of water needed for every wash\r\nOur Active Water Plus technology delivers perfect results while only using the precise amount of water needed for every wash. This ensures highly efficient use of water even when washing smaller loads. Thanks to highly efficient water management technology, the type and size of load is automatically detected and then the water consumption is precisely adjusted. Save up to 50% of water when washing smaller loads.\r\nLarger washes and efficient results with 10kg capacity\r\n10kg capacity gives you the opportunity to fit more in one wash. This appliance also provides ideal wash cycles for large families and busy households in need of saving time and energy on laundry. You can fit in a large pile of dirty clothing or comfortably wash big items such as duvets and curtains.\r\nSteam Care\r\nIroning could have been extremely tiring and time-wasting. If only it wasn't Iron Steam Assist! Wrinkles are reduces up to 50% with steam care applied to your laundry. Thus, while your T-shirts are ready to wear, your shirts and bed linen are ironed much easier.",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 629.99,
  "image": "https://www.did.ie/cdn/shop/files/WGG254Z1GB-1_5000x.jpg?v=1758108338",
  "brand": "Bosch",
  "rating": 4.9,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bosch\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"10KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Child Safety Lock\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Delay Start\""
    },
    {
      "name": "\"name\"",
      "value": "\"End of Programme Indication\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cycle Pause\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"15min, 30min\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washer Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Iron Assist, Cottons, Hygiene Plus, Eco 40-60, Sportswear, Easy Care, Super Quick 15/30, Delicates/Silk, Easy Care Plus, Wool, Drum Clean, Mixed Load, Spin/Drain, Rinse\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"51\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"74\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"630\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"72.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"4242005513116\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wash Optimization\","
    },
    {
      "name": "\"value\"",
      "value": "\"Easy ironing steam assisted, Drain / Spin, Mixed Load, SportsWear, Single Rinse, Super Quick 15/30, Reduced Ironing option, Ready in, stain selection, start/pause with reload function, Temperature selection, SpeedPerfect, Prewash, Spin speed reduction\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Protection System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Multiple water protection\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Index for the Washing Cycle\","
    },
    {
      "name": "\"value\"",
      "value": "\"51.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washing Efficiency Index Eco 40-60 Programme\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.035\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drum Volume (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"70\""
    },
    {
      "name": "\"name\"",
      "value": "\"Length Electrical Supply Cord (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2100\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Adjustability Feet\","
    },
    {
      "name": "\"value\"",
      "value": "\"12 mm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Reload Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Loading Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Countdown Indicator\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drying Progress Indicator\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED-display, LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Plus\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Start Delay Options\","
    },
    {
      "name": "\"value\"",
      "value": "\"Continuous\""
    },
    {
      "name": "\"name\"",
      "value": "\"Self Adjusting Water Level to Load\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wave Drum\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Interior Light\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ecosilence Drive - Efficient and Extra Silent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Super15\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Super Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"SpeedPerfect\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Automatic Stain Removal System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Wash Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pre-wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cottons Programme\","
    },
    {
      "name": "\"value\"",
      "value": "\"Standard cold - 90°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Easy-care Programme\","
    },
    {
      "name": "\"value\"",
      "value": "\"Standard cold - 60°C, Easy-care plus\""
    },
    {
      "name": "\"name\"",
      "value": "\"Separate Temperature Control Options\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Plus\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Balance Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Foam Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Protection System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Multiple Water Protection\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Hinge\","
    },
    {
      "name": "\"value\"",
      "value": "\"Left\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connection rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"2300 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fuse protection\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"50 Hz\""
    }
  ]
},
{
  "id": "16",
  "sku": "H3WPS4146TAMB-80",
  "name": "Hoover H-Wash 350 14KG 1400RPM Freestanding Washing Machine - White | H3WPS4146TAMB-80",
  "description": "H-Wash 350 - White/Black - 14KG delivers expert fabric care, top efficiency, and maximum clothes protection with its ECO-Power Inverter Motor. The Allergy Care Pro cycle removes 99.9% of bacteria and allergens, while the hOn App offers 50+ specialized cycles and smart features for every washing need.\r\nTop Efficiency in A Class\r\nIn compliance with the New Energy Label, this Hoover A class washing machine reduces energy consumption starting from 51% compared to a G class, saving energy and protecting the environment.\r\nEnhance Washing Results\r\nDiscover all the advantages of hOn App: choose from more than 60 specialized cycles, monitor efficiency and consumption and get suggestions on how to optimize them. You can also access self-maintenance planning, control the washing status at any time and much more.\r\nPreserve your Garments\r\nH-Wash350 is a unique machine offering a complete set of Care Cycles, keeping all your favourite clothes looking good for longer.\r\nOptimized Consumptions\r\nThe KG Mode Plus perfectly adjusts water, energy and time consumption according to actual loading, reducing waste ensuring the perfect wash.\r\nKey Features:\r\nSmart Cycles – 60+ wash programs via hOn App\r\nScan to Care – Auto-recognizes clothing care symbols\r\nPerfect Rinse – Less vibration, faster cycles\r\nEco Load – Adjusts water & energy to save resources\r\nDeep Clean – Powerful stain removal even at low temps\r\nBox Contains:\r\nH-Wash 350 - White/Black 14KG\r\nWarranty documents\r\nProduct manual\r\nEnergy labels",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 529.99,
  "image": "https://www.did.ie/cdn/shop/files/H3WPS4146TAMB-80-1_9d6ad2f9-8b0c-4b97-84c6-1db3b4a59708_5000x.jpg?v=1758221604",
  "brand": "Hoover",
  "rating": 4.4,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hoover\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"14KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brushless Motor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"70\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Delay Start\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max. Delay Timer Length (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"24\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"56\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"56\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"80\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"680\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8059019094861\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\","
    },
    {
      "name": "\"value\"",
      "value": "\"Advanced remote control and extra content (Wi-Fi + Bluetooth)\""
    },
    {
      "name": "\"name\"",
      "value": "\"IoT App\","
    },
    {
      "name": "\"value\"",
      "value": "\"hOn\""
    },
    {
      "name": "\"name\"",
      "value": "\"Acoustical Noise Emission\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drum Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Inverter BPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240 V\""
    }
  ]
},
{
  "id": "17",
  "sku": "H3W 49TA4/1-80",
  "name": "Hoover H-Wash 300 Lite 9KG 1400RPM Freestanding Washing Machine - White | H3W 49TA4/1-80",
  "description": "H-Wash 300 Lite\r\nHOOVER H-WASH 300 LITE boasts the most complete set of washing cycles to take care of all your favourite clothes, preserving fabrics and colours for longer, without any effort.\r\nB Class\r\nIn compliance with the New Energy Label, this B class washing machine reduces consumption starting from 43% compared to a G class, saving energy and respecting the environment.\r\nKG Mode\r\nKG Mode is the function that weighs the laundry within the first 4 minutes of the program, adapting the water level, energy consumption and time of cycle with a scientific precision. Giving you a excellent wash whilst saving time and energy.",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 349.99,
  "image": "https://www.did.ie/cdn/shop/files/H3W49TA41-80-1_5000x.jpg?v=1695663247",
  "brand": "Hoover",
  "rating": 4.7,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hoover\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"9KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Half Load Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Delay Start\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max. Delay Timer Length (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"24\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Top\","
    },
    {
      "name": "\"value\"",
      "value": "\"No\""
    },
    {
      "name": "\"name\"",
      "value": "\"Large Porthole\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Time Remaining\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"No. of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"46\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"57\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.570\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level dB (spin)\","
    },
    {
      "name": "\"value\"",
      "value": "\"79\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"530\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8059019067452\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\","
    },
    {
      "name": "\"value\"",
      "value": "\"Extra content and proximity control (NFC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"IoT App\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wizard\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drum Volume\","
    },
    {
      "name": "\"value\"",
      "value": "\"58\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drum Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Plug Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"UK\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mix Power System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programme Duration Rated Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.158333333333333\""
    },
    {
      "name": "\"name\"",
      "value": "\"Airborn Acoustical Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cabinet Depth (without pipes and door)\","
    },
    {
      "name": "\"value\"",
      "value": "\"470\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Index(a) (EEIW)\","
    },
    {
      "name": "\"value\"",
      "value": "\"59.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washing Efficiency\""
    },
    {
      "name": "\"name\"",
      "value": "\"Index(a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.031\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rinsing Effectiveness (g/kg)(a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weighted Remaining Moisture Content(a) (%)\","
    },
    {
      "name": "\"value\"",
      "value": "\"53.9\""
    }
  ]
},
{
  "id": "18",
  "sku": "EFI61141B",
  "name": "Electrolux 10KG 1400RPM Freestanding Washing Machine - White | EFI61141B",
  "description": "SensiCare  - save up to 30% of time, water and energy with load-sensing technology\r\nSensiCare is a load-sensing technology that detects load size and adjusts the programme in order to save up to 30% of time, water and energy per load. This ensures precise and tailored washing for every garment.\r\nReduce washing time with Time Manager\r\nDon't wash longer than you need to. Wash your clothes with the adjustable 4-step Time Manager feature and finish washing cycles in less time.\r\nSteam Hygiene Programme removes 99,99% of bacteria and viruses\r\nThe Steam Hygiene Programme, certified by Swissatest, combines a wash cycle and steam to remove more than 99,99% of bacteria and viruses above 60°C. Pollen and allergens are also reduced for hygienically clean clothes after every wash.\r\nRapid washing, for quick results\r\nThe Rapid programme lets you quick-wash your clothes for light cleaning. Take care of 3kg of laundry in just 20 minutes.\r\nInverter Motor+ is energy efficient and durable\r\nThe Inverter Motor+ is more energy efficient than standard Inverter motors thanks to the permanent magnet motor technology.\r\nKey Features:\r\nSpin reduction option - your choice of 500/700/900/1400 rpm\r\nWater connection - cold fill\r\nEFI61141B",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 499.99,
  "image": "https://www.did.ie/cdn/shop/files/EFI61141B-1_c4d94fdf-d6d2-4eeb-bc79-6f1999fc84c3_5000x.jpg?v=1739350241",
  "brand": "Electrolux",
  "rating": 4.8,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Electrolux\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"10KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1351 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cycle Pause\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"20min\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washer Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cottons, Synthetics, Delicates, Wool, Rapid 20 Min, Rinse, Spin/Drain, Jeans, Sport, Silk, Duvet, Outdoor, Hygiene, Eco 40-60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"52\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"51\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"597\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"636\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"847\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"7333394059266\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drum Volume (L)\","
    },
    {
      "name": "\"value\"",
      "value": "\"68.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motor System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Permanent Magnet\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drawer Compartments\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Eco 40-60 Programme Duration (H\","
    },
    {
      "name": "\"value\"",
      "value": "\"Min): 3:50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wheels/Feet\","
    },
    {
      "name": "\"value\"",
      "value": "\"4 Adjustable Feet\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Inlet Hose Length (cm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"130\""
    },
    {
      "name": "\"name\"",
      "value": "\"Outlet Hose Length (cm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"145\""
    },
    {
      "name": "\"name\"",
      "value": "\"Total Electricity Loading (W)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2100\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Fuse (A)\","
    },
    {
      "name": "\"value\"",
      "value": "\"13\""
    },
    {
      "name": "\"name\"",
      "value": "\"Porthole Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"E Full White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Woolmark\","
    },
    {
      "name": "\"value\"",
      "value": "\"Woolmark Blue\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weighted Remaining Moisture Content (%)\","
    },
    {
      "name": "\"value\"",
      "value": "\"53.5\""
    }
  ]
},
{
  "id": "19",
  "sku": "T35128SKW-A",
  "name": "Thor 8KG 1200RPM Freestanding Washing Machine - White | T35128SKW-A",
  "description": "Experience seamless laundry care with the Thor washing machine, designed to meet the demands of active households. Its 8kg drum capacity accommodates busy\r\nwash schedules efficiently.\r\nA convenient Quick Wash programme completes small loads in just 15 minutes—ideal for lightly soiled garments that require rapid cleaning. The appliance offers a diverse selection of wash programmes to suit an array of fabric types, ensuring optimal performance for every laundry need.\r\nFor enhanced safety, a Child Lock feature prevents unintended programme adjustments or interruptions by children. The Time Delay function allows users to set wash cycles to operate during off-peak electricity hours, providing both economic and environmental benefits.\r\nKey Features:\r\nTime Delay Settings: 3/6/9/12/15/18 hours\r\nStart/Pause Indication\r\nDoor Lock Indicator\r\nError Message Display & Alarm\r\nThis washing machine is engineered for reliability, efficiency, and user convenience, making it an excellent choice for modern homes",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 309.99,
  "image": "https://www.did.ie/cdn/shop/files/T35128SKW-A-1_a03b4ad2-05d6-4165-89a5-d01d2906f594_5000x.jpg?v=1759312653",
  "brand": "Thor",
  "rating": 4.4,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Thor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"8KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1200 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brushless Motor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"40\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Child Safety Lock\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Delay Start\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max. Delay Timer Length (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cycle Pause\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"15min\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washer Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cotton, Eco40-60, Sports, Duvet, Delicate, Baby Care, Storm Wash, Steam, Mix, Quick 15, Rapid 42, 20℃, Wool, Rinse + Spin, Spin Only, Tub Clean\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"40\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"47\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"174\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"480\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"53\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Drum Volume (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"43\""
    },
    {
      "name": "\"name\"",
      "value": "\"Intelligent Washing System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Balance & Load Detect\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Foam Sensing & Removal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1200/800/400/No spin\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cold/20/40/60/90°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hot & Cold Water Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Restart\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Manual/Auto Door\","
    },
    {
      "name": "\"value\"",
      "value": "\"Both options available\""
    },
    {
      "name": "\"name\"",
      "value": "\"LED Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"439 mm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"CTN 60(40)+Max rpm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC 220-240V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"50Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Heating Input Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1600W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Input Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1700W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washing Input Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"200W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spinning Input Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"500W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (per cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"79 kWh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washing Efficiency Index\","
    },
    {
      "name": "\"value\"",
      "value": "\"03\""
    },
    {
      "name": "\"name\"",
      "value": "\"Waterproof Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"IPX4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level – Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"60 dBA\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"03-1 MPa\""
    },
    {
      "name": "\"name\"",
      "value": "\"Additional Options\","
    },
    {
      "name": "\"value\"",
      "value": "\"Prewash, Pre Delay / Time Delay, Tub Clean, Spin Only, Temperature Selection, Speed Adjustment\""
    },
    {
      "name": "\"name\"",
      "value": "\"Loading Quantity (40HQ)\","
    },
    {
      "name": "\"value\"",
      "value": "\"252 Units\""
    }
  ]
},
{
  "id": "20",
  "sku": "FFB 9469 WV UK",
  "name": "Whirlpool 6TH SENSE 9KG 1400RPM Freestanding Washing Machine - White | FFB 9469 WV UK",
  "description": "6th Sense Technology\r\nDiscover perfect care. 6th SENSE intelligent sensors adapt resources according to the size and type of load, offering time, energy and water optimization.\r\nFreshCare+\r\nKeep laundry fresh, even hours after the cycle has finished. Innovative Delicate steam and tumbling action takes care of your laundry inside the washing machine.[i]. The new FreshCare+ system gently massages the laundry with regular slow movements alternated with steam actions - letting air circulate inside the fibers to keep garments fresh and prevent bad odours. FreshCare+ treatment leaves truly fresher clothes and peace of mind - even hours after the end of the cycle. FreshCare+ treatment inhibits the proliferation of the main bad odour sources (inside the washing machine) up to 6 hours after the washing ends. Not compatible with programmes designed for delicate garments and duvets.\r\nSteam Refresh\r\nSteam Refresh regenerates the freshness of your garments avoiding unnecessary washing. Clothes are ready to wear again in just 20 minutes. The washer generates a flow of steam that penetrates into the fibers, removing unpleasant smells, relaxing fibers and smoothing creases.\r\nInverter Motor\r\nSilent performance. This Whirlpool Washing machine's innovative Inverter Motor is designed to ensure a long lasting, silent performance. Enjoy both ideal results and some extra peace and quiet.\r\nStart Delay\r\nTailored for you. The Start Delay option allows you to set the Washing machine to begin its cycle whenever most convenient for you, saving you both time and energy.\r\nRapid 30'\r\nFor your convenience. The Rapid 30' feature provides all the ideal washing results you deserve, in just 30 minutes.\r\nSilence\r\nThe Washing Machine's noise-level, measured in decibels.\r\nSpinning Efficiency\r\nDrum rotations, or spins, per minute (rpm). The faster the washing machine spins, the drier the clothes when taken out of the Washing Machine.\r\n1400 RPM\r\nOutstanding speed. This Whirlpool Washing Machine features a 1400 rounds per minute spin speed.\r\nEnergy Rating\r\nThe Washing Machine's energy rating. The higher the rating, the higher the energy-efficiency of the product.\r\nSuper Energy Efficiency: A\r\nUnparalleled energy efficiency. This Whirlpool Washing Machine features maximum energy savings at energy class A.\r\nCapacity\r\nThe Washing Machine's drum capacity, measured in kilograms.\r\n9KG Capacity\r\nAll the space you need. With its 9kg drum capacity, this Whirlpool Washing Machine provides all the space you need for your laundry.\r\nFFB 9469 WV UK",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 529.99,
  "image": "https://www.did.ie/cdn/shop/files/FFB9469WVUK-2_de1cbafa-fd30-41a7-9a92-5122e921acfe_5000x.jpg?v=1728459963",
  "brand": "Whirlpool",
  "rating": 4.8,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Whirlpool\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"9KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1351 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Delay Start\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cycle Pause\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"30 Mins\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washer Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cotton 40, Cotton 60, Mixed/Magic 40, Synthetics 30, Wool, Rapid 30', Big Items/Duvet, Delicates, Sport/Outdoor, Rinse & Spin, Drain & spin, Eco 40-60, 20°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"49\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"78\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"595\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"630\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"845\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"71\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8003437059353\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Feet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connection Rating (W)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Length of Electrical Supply Cord (cm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type of Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Big Digit\""
    },
    {
      "name": "\"name\"",
      "value": "\"Current (A)\","
    },
    {
      "name": "\"value\"",
      "value": "\"13\""
    },
    {
      "name": "\"name\"",
      "value": "\"Separate Temperature Control Options\","
    },
    {
      "name": "\"value\"",
      "value": "\"Steps\""
    }
  ]
},
{
  "id": "21",
  "sku": "WEK365",
  "name": "Miele 10KG 1400RPM Freestanding Washing Machine - Lotus White | WEK365",
  "description": "Register for your 125 day money back guarantee\r\nTested for 20 years of perfect laundry care.\r\nSave energy in the best energy efficiency class (A).\r\nCleaning cannot be faster - QuickPowerWash.\r\nIroning made simple thanks topre-ironing with steam.\r\nGentle XXL laundry care with the Mielehoneycomb drum - even for 10 kg loads.\r\nConstruction Types:\r\nSuitable for stacking\r\nSide-by-side\r\nSlot-in\r\nCan be built-under\r\nRight door hinge\r\nCleaning Performance:\r\nInnovative PowerWash technology\r\nCapDosing portioned dispensing\r\nKey Features:\r\nW1 Chrome Edition\r\nFront-loader\r\nRinse hold\r\nWithout spin function\r\nPre-ironing\r\nHoneycomb drum\r\nBox Contains:\r\n3 Caps\r\nVoucher for Miele Detergent",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 1449.99,
  "image": "https://www.did.ie/cdn/shop/files/WEK365-1_709265a1-68ed-4797-91cd-abdd4e3128da_5000x.jpg?v=1716275978",
  "brand": "Miele",
  "rating": 4.7,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Miele\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lotus White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"10KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Half Load Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"No. of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washer Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"ECO 40-60, Cottons, Minimum iron, Delicates, Woollens, Dark Garments/Denim, MobileStart, QuickPowerWash, Express 20, Shirts, Proofing, Drain/Spin\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"53\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"52\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.514\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level dB (spin)\","
    },
    {
      "name": "\"value\"",
      "value": "\"71\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"640\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"4002516789192\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Panel Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lotus White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Chrome\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rotary Selector Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lotus White / Chrome Ring\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Panel Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"Straight\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Rotary Control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"DirectSensor White, 7 Segment\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Index (EEI)\","
    },
    {
      "name": "\"value\"",
      "value": "\"52\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washing Efficiency Index\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.031\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rinsing Effectiveness (g/kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Temperature Inside The Treated Textile (°C) (Rated Capacity)\","
    },
    {
      "name": "\"value\"",
      "value": "\"42\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Temperature Inside The Treated Textile (°C) (Half)\","
    },
    {
      "name": "\"value\"",
      "value": "\"33\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Temperature Inside The Treated Textile (°C) (Quarter)\","
    },
    {
      "name": "\"value\"",
      "value": "\"26\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weighted Remaining Moisture Content (%)\","
    },
    {
      "name": "\"value\"",
      "value": "\"52\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed (RPM) (Half)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed (RPM) (Quarter)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programme Duration (h\","
    },
    {
      "name": "\"value\"",
      "value": "\"min) (Rated Capacity): 3:59\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programme Duration (h\","
    },
    {
      "name": "\"value\"",
      "value": "\"min) (Half): 2:59\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programme Duration (h\","
    },
    {
      "name": "\"value\"",
      "value": "\"min) (Quarter): 2:59\""
    },
    {
      "name": "\"name\"",
      "value": "\"Airborne Acoustical Noise Emission Class (Spinning Phase)\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Off-mode (W) (If Applicable)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.40\""
    },
    {
      "name": "\"name\"",
      "value": "\"Delay Start (W) (If Applicable)\","
    },
    {
      "name": "\"value\"",
      "value": "\"3.60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Networked Standby (W) (If Applicable)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.80\""
    }
  ]
},
{
  "id": "22",
  "sku": "T351412SKWA",
  "name": "Thor 12KG 1400RPM Freestanding Washing Machine - White | T351412SKWA",
  "description": "Take the stress out of laundry day with the Thor 12kg Freestanding Washing Machine. Built for busy households, it combines power, efficiency, and smart features to give you cleaner clothes with less effort. Whether it’s everyday washing or bulky bedding, this machine has the space and performance to handle it all.\r\nProgram - Time(m)\r\nCotton - 94\r\nEco 40-60 - 158\r\nSports - 83\r\nDuvet - 125\r\nBaby Care - 130\r\nSteam - 83\r\nMix - 73\r\nQuick 15' - 15\r\n20°C - 63\r\nWool - 57\r\nRinse & Spin - 38\r\nSpin Only - 14\r\nKey Features:\r\nExtra-Large 12kg Drum – Wash more in one go, perfect for family life or bigger laundry loads\r\nEnergy Class A – Save money on bills while caring for the environment\r\nEco 40–60 Programme – Designed for everyday laundry, using as little as 0.483 kWh of energy and just 50L of water per cycle. Only 17c per wash\r\nFast & Efficient Spin – Spins at up to 1400 rpm to cut down on drying time\r\nQuieter Washes – Operates at just 76 dB(A), so you won’t be disturbed while it runs\r\nSmart Load Detection – The cycle time adjusts to the size of your load, so you don’t waste time, energy, or water\r\nModern & Practical Design – Sleek freestanding style with standard 60cm width, making it easy to slot into your kitchen or utility room",
  "category": "Appliances > Home Appliances > Washing Machine",
  "price": 459.99,
  "image": "https://www.did.ie/cdn/shop/files/T351412SKWA-1_5000x.png?v=1759903332",
  "brand": "Thor",
  "rating": 4.9,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Thor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Load Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"12KG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400 RPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of T-shirts per wash load\","
    },
    {
      "name": "\"value\"",
      "value": "\"60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Child Safety Lock\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Large Porthole\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cycle Pause\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Quick Wash Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"15min\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Option\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Washer Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cotton, Eco 40-60, Sports, Duvet, Baby Care, Steam, Mix, Quick 15', 20°C, Wool, Rinse & Spin, Spin Only\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spin Performance\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Consumption (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/100 cycle)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"640\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"5391503420811\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "23",
  "sku": "T17101",
  "name": "Tower Vortx 1700W 7L Steam Air Fryer - Black | T17101",
  "description": "Key Features:\r\n7 innovative cooking methods\r\nSteam lock in key vitamins & nutrients\r\nIntelligent steam clean function\r\nVortx technology 99% less fat\r\nSave up to 50% on energy\r\nPowerful 1700W Air Fryer with Steam Cooking Function\r\nOptions to Cook With or Without Steam\r\nLarge 7L Capacity Drawer. Water tank volume 1400ml\r\n7 Cooking Modes: Air Fry/Bake/Roast/Reheat/Grill\r\nSteam/Combo Cook\r\n60 Minute Timer. Adjustable Temperature 80-200 Degrees\r\nFeatures Steam Clean function\r\nAutomatic Shut Off. Non-Slip Feet\r\n7 in 1 Cooking Technology\r\nAir fry, steam or conveniently combo cook using air frying and steaming at the same time. Additional functions include reheat and steam clean.\r\nMore Meal Choices with 7L Capacity\r\nChoose from steam, fry, roast, and grill or bake functions to add variety to your family mealtimes. The generous 7L capacity will fit a whole chicken or joint, saving you time when cooking a Sunday dinner for the whole family.\r\nLarge 1.4L Water Tank provides 100 Minutes Continuous Steam\r\nThe large, easy to fill water tank offers 100 minutes of steam, plenty of time to create delicious meals, such as healthy steamed vegetables or fish for an exciting and quick cooking experience.\r\nVortx Technology with 99% Less Fat\r\nRapid air circulation cooks 30% faster with 99% less oil. Produces healthier fried food with only a spoonful of oil, reducing fat contents by up to 99% compared to traditional deep-fried methods.\r\nSave Up To 50% on Energy\r\nCooking food 30% faster, Tower Steam Air Fryer uses less power than conventional ovens. Save up to 50% on your energy by simply switching to Steam Air Fryer cooking.\r\nSteam Clean Function\r\nSelf-steam cleaning function makes cleaning up after cooking effortless. The pump water feature runs for 5 minutes and pumps out any excess water left in the tank, ready for you to refill again when needed.\r\nAutomatic Safety Shut Off\r\nThis feature lets you operate the Steam Air Fryer safely without worrying about heat or steam accidentally escaping.\r\nNon-slip Feet\r\nNon-slip feet ensure the steam air fryer is always securely adhered to your worktop, avoiding any slipping whilst in use.",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 169.99,
  "image": "https://www.did.ie/cdn/shop/products/T17101-1_5000x.webp?v=1677073171",
  "brand": "Tower",
  "rating": 4.4,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tower\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1700W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touch Control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Shut-off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Thermostat\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Basket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"427\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"319\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"387\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Steam Cooking Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (ml)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Cooking Modes\","
    },
    {
      "name": "\"value\"",
      "value": "\"7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer (min)\","
    },
    {
      "name": "\"value\"",
      "value": "\"60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"80-200°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Non-Slip Feet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "24",
  "sku": "AF400UK",
  "name": "Ninja 9.5L 2470W Foodi Max Dual Zone Air Fryer - Black | AF400UK",
  "description": "Ninja 9.5L 2470W Foodi Max Dual Zone Air Fryer\r\nTake mealtimes to the MAX with the large capacity air fryer that cooks 2 foods, 2 ways, and finishes at the same time.\r\nMore than an air fryer. 6 ways to cook – Max Crisp, Roast, Bake, Reheat, Dehydrate and Air Fry.\r\nIntroducing the ultimate mealtime solution, perfect for feeding the whole household. With a large capacity and 2 independent cooking zones, the Ninja Foodi MAX Dual Zone 9.5L Air Fryer does the thinking and timing for you.\r\nMix and match cooking programs, times and temperatures across both drawers to create delicious meals in moments!\r\nSYNC to cook different foods in each drawer – both ready to serve at exactly the same time! MATCH settings across both drawers to double your serving size.\r\nCook up to 25% more† – easily fit a 2kg chicken in each drawer! Up to 75% faster than fan ovens. Up to 75% less fat than traditional frying methods.\r\nTake mealtimes to the MAX with the large capacity air fryer that cooks 2 foods, 2 ways, and finishes at the same time.\r\nMore than an air fryer. 6 ways to cook – Max Crisp, Roast, Bake, Reheat, Dehydrate and Air Fry.\r\n2 Independent Cooking Zones\r\nWhen it comes to cooking, timing is everything. Perfect for families and large households, the Ninja Foodi MAX Dual Zone 9.5L Air Fryer does the thinking and timing for you.\r\nCook 2 different foods with different temperatures, times and settings in 2 separate cooking drawers – and have both ready to serve at exactly the same time using the SYNC feature!\r\nMore people to feed? MATCH settings across both zones to make double the amount of food in the same amount of time!\r\nSync\r\nWith the SYNC feature you can cook two different foods using different times, temperatures and programs – both are ready to serve at the same time!\r\nWant to Bake in one drawer and Air Fry in the other? No problem! Different cooking times for roast chicken and crispy fries?\r\nBoth zones finish cooking at the same time, so you can enjoy freshly-cooked mains and sides together – no need to use different appliances or let your side go cold while your main finishes cooking!\r\nWhether it’s a whole 2kg chicken and fluffy roast potatoes, baked salmon and Mediterranean vegetables or juicy beef koftas and golden chips, your perfect pairing is just moments away.\r\nCooking for two different dietary requirements? Cater for everyone by cooking vegetarian food in one drawer and meat in the other.\r\nMatch\r\nCooking for extra guests or feeding the whole family? Use the MATCH feature to double your serving size, with the same cooking program and time across both drawers.\r\nCook the same food in both zones to make twice the amount of food in the same amount of time! Or easily cook two different foods with the same cooking instructions.\r\nJust cooking for yourself? No problem – you can cook in a single drawer.\r\nFeed the family\r\nThis extra-large capacity air fryer cooks up to 25% more.\r\nYou can fit a 2kg chicken or up to 1.4kg of fries in each 4.75L drawer – that means you can easily create a complete meal of a whole roast chicken and crispy air fried chips, cooked in one appliance and ready to eat at the same time!\r\nEasily feed 8+ people or just make enough for yourself.\r\nUp to 75% faster than fan ovens, quickly and easily create a delicious variety of meals that the whole family will love.\r\nMore than an Air Fryer\r\nGet creative with 6 customisable cooking functions:\r\nAir Fry\r\n– Up to 75% less fat than traditional frying methods. Enjoy guilt-free fried favourites using little to no oil. From delicious chicken wings, fish and chips, burgers and sausages to tasty fajitas, sweet potato fries and chunky chips. How does air frying work? Super-hot air is evenly circulated around food to remove excess moisture and give it a delicious golden finish.\r\nMax Crisp\r\n– Cook from frozen to crispy in minutes. Temperatures of 240°C evenly cook and crisp your favourite frozen foods. From breaded scampi and chicken nuggets to golden French fries, onion rings and more. Perfect for quick, delicious dinners.\r\nRoast\r\n– Not just for Sundays, enjoy your favourite roast meat, fish and vegetables any day of the week. From a roast chicken, salmon fillets, golden chicken breasts and roast pork chops with crispy crackling to fluffy roast potatoes, balsamic-roasted tomatoes and sweet potato hash.\r\nBake\r\n– Easily cook pasta bakes with a crispy topping. Enjoy freshly-baked bread and homemade sweet treats, from muffins and brownies to cakes and cookies.\r\nDehydrate\r\n– Create delicious dried fruit snacks, from apple to mango, banana to pineapple. Enjoy homemade vegetable crisps, beef jerky, and even make your own dried herbs.\r\nReheat\r\n– Restore leftovers to that delicious fresh-out-of-the-oven finish, perfect for reviving leftover pizza, quiche, spring rolls and more.\r\nMore Features On Your Ninja 9.5l Air Fryer\r\nThe easy-to-use digital control panel with a countdown timer makes it easy to see how much cooking time is left.\r\nVariable temperature controls let you make every snack and meal just how you like it. The innovative Auto-Adjust Fan automatically changes speeds based on the cooking function selected.\r\nWashing up is easy thanks to non-stick, dishwasher-safe parts. Our best air fryer for large households, get started straight away with a Chef-Created Recipe Guide included in the box, packed with Ninja Air Fryer recipes to kick-start your imagination.\r\nFeatures:\r\n2 independent cooking zones\r\nDifferent foods, different times, different programs – both ready at the same time! With 2 separate cooking drawers, you can SYNC or MATCH cooking programs and times for total versatility. Cook up to 25% more† – the extra-large 9.5L capacity feeds 8+ people. Each drawer fits up to 1.4kg of fries or a 2kg chicken. †Compared to AF300UK, 7.6L.\r\nUp to 75% faster than fan ovens\r\nEnjoy delicious food, cooked in under half the time of a fan oven. Perfect when you need to get dinner on the table quickly. *Tested against fish fingers and sausages, including preheat.\r\nUp to 75% less fat\r\nUp to 75% less fat than traditional frying methods. Using little to no oil, super-hot air is evenly circulated around your food to quickly cook and crisp with a delicious golden finish. Tested against deep fried, hand-cut French fries.\r\nMore than an air fryer\r\nGet creative with 6 ways to cook – Air Fry, Max Crisp, Roast, Bake, Reheat and Dehydrate. Customise with variable temperature controls. Cook from frozen to crispy in minutes.\r\nBox Includes:\r\nMain Unit 2470W\r\n2 x Non-Stick Drawers\r\n2 x Non-Stick Crisper Plates",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 269.99,
  "image": "https://www.did.ie/cdn/shop/products/ninja-9-5l-2470w-foodi-max-dual-zone-air-fryer-black-or-af400uk-did-electrical-3_fc457e79-4097-447f-8ac0-412065ea268c_5000x.jpg?v=1692267939",
  "brand": "Ninja",
  "rating": 4.7,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"2470W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"9.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Knob\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Independent cooking zones, Extra-large capacity, Easy-to-use, Variable temperature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"415\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"270\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.8000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0622356245265\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "25",
  "sku": "AF140UK",
  "name": "Ninja Pro 4.7L Air Fryer - Black | AF140UK",
  "description": "Crispy results, every time. The Ninja Air Fryer PRO quickly cooks your favourite foods using little to no oil, for healthier frying up to 75% less fat than traditional frying methods. Perfect for cooking and crisping your favourite fresh and frozen foods.\r\nGet the perfect crisp with up to 210°C heat. AirCrisp Technology rapidly surrounds food with superheated air for hot, crispy results every time and it uses less energy than an oven.\r\nWhether you’re new to air frying or ready to upgrade, this compact air fryer is the perfect choice. It’s easy to use with digital controls and 4 versatile cooking functions:\r\nAir Fry:\r\nUp to 75% less fat than traditional frying methods. Create healthier version of your fried favourites, from burgers and koftas to frozen chips and fish fingers. Experiment with everyday dishes, from juicy chicken breasts and jacket potatoes to crispy spring rolls and filo parcels. Or try something totally new, like air fryer nachos or pizza rolls.\r\nRoast\r\n: Only cooking for 2? Forget the oven this worktop appliance makes fluffy, crispy roast potatoes, roasted pork chops, herby root vegetables studded with goat’s cheese, even a whole 1kg roast chicken.\r\nDehydrate:\r\nSlowly remove moisture from sliced fruit, vegetables, herbs or other ingredients to create healthy homemade snacks, garnishes and flavourings.\r\nReheat:\r\nGently restore leftovers to that just-out-of-the-oven texture and taste, without sogginess. Perfect for pizza, spring rolls and more.\r\nLarge capacity, small footprint\r\nThe 4.7L drawer is perfect for feeding up to 2 people, or just cook enough for 1, without taking up precious space on your worktop. A removable crisper plate ensures air circulates evenly around your food for 360° crisping.\r\nSimple digital controls\r\nNo fuss easily set the cooking function, temperature and timer at the touch of a button. A wide temperature range of 40-210°C means you can do everything from gently reheating leftovers to crisping a golden toasted sandwich with a melted cheese middle. We know life is busy and full of distractions, so Ninja air fryers automatically stop cooking when the digital timer ends.\r\nEasy to clean\r\nDon’t worry about the washing up the removable drawer and crisper plate are both non-stick and easy to wipe clean.\r\nInspiration is included\r\nGet cooking straight away with a chef-created recipe book included in the box, packed with recipes and cook charts for all your air fryer favourites.\r\nBox Contain\r\n1 x Main Unit\r\n1 x 4.7L Drawer\r\n1 x Crisper Plate",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 119.99,
  "image": "https://www.did.ie/cdn/shop/files/AF140UK_01_601853a0-e96b-44c1-8c85-cdc4fb441cc2_5000x.jpg?v=1716189041",
  "brand": "Ninja",
  "rating": 4.8,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Button\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Basket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"285\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"360\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"265\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0622356282949\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Temperature Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"40°C to 240°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pre-Set Functions\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fry, Roast, Reheat, Dehydrate\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.8\""
    }
  ]
},
{
  "id": "26",
  "sku": "SL300UK",
  "name": "Ninja 7.6L Double Stack 2 Drawer Air Fryer - Black | SL300UK",
  "description": "Wish you could fit a double air fryer in your kitchen, but running low on worktop space? Meet the Ninja Double Stack 2-Drawer Air Fryer.\r\nWith two drawers stacked on top of each other, this vertical Dual Zone air fryer takes up less space on your worktop than traditional side-by-side 2-drawer air fryers. Now you can mix and match 6 cooking functions, cooking times and temperatures across 2 individually-controlled drawers, and have all your food ready at the same time – even in smaller kitchen spaces!\r\n25% slimmer without compromising on capacity: This double-drawer air fryer is perfect for up to 6 people, fitting a whole 1.2kg roast chicken in each 3.8L drawer. At 38.5cm tall, it’s designed to fit under cabinets – so you can enjoy clear countertops with less clutter.\r\n2x capacity with Double Stack Air Fry Technology: Cook on 4 levels at once for evenly crispy results. Simply insert the included Stacked Meal racks into each drawer to double your cooking surface. Even cooking and crisping on 4 levels: each drawer has an individual heat source and rear fan, delivering 360° air circulation for all-over crispy results. Layer your food on the racks for multi-level cooking – perfect for making chicken thighs with asparagus in one drawer and beef burgers with French fries in the other, or a selection of party food across 4 levels.\r\n2 independently controlled drawers: Mix and match different cooking functions, times and temperatures in each drawer. The SYNC functions ensures both drawers finish cooking at the same time – so you can enjoy freshly-cooked mains and sides together, serve up a buffet with everything freshly cooked, or easily cater for different tastes and dietary requirements. Cooking up to 55% faster than fan ovens, you can have family favourites on the table in minutes. Only cooking for yourself? Just cook in 1 drawer to make smaller portions. Each drawer also includes a crisper plate to help the hot air surround your food and cook it to perfection.\r\n6 cooking functions: Air Fry your favourite foods using little to no oil – up to 75% less fat than traditional frying methods. More than an air fryer, you can also Roast, Bake, Dehydrate, Reheat, and cook from frozen to extra-crispy with Max Crisp.\r\nEasy to use: The sleek control panel is positioned to the side for easy access, so it’s simple to select your desired settings in each drawer. We know life is busy and full of distractions, so Ninja air fryers automatically stop cooking when the digital timer ends. There’s a chef-created Recipe Guide in the box, packed with ideas to get you started and cooking charts to help make the most of your new appliance.\r\nEasy to clean: The non-stick drawers, crisper plates and wire racks are all dishwasher-safe and easy to wipe clean.\r\nSpace-saving design\r\nWith two cooking drawers stacked on top of each other, this compact double air fryer is 25% slimmer, without compromising on capacity. Perfect for cooking up to 6 portions. At 38.5cm tall, it’s designed to fit under cabinets.\r\nCook 4 foods at once\r\nOnly Ninja has Double Stack Air Fry Technology. Cook on 4 levels at the same time, layering your foods with 2 included racks. Food is evenly cooked and crisped on all levels, so you can cook 400g of chicken tenders in the same drawer as fries, salmon in the same drawer as asparagus, or the ultimate combo of party foods. Perfect for mix-and-match meals or cooking buffet food without leaving your guests.\r\n6 cooking functions\r\nMix. Match. Stack. Use a different program, temperature and cook time in each drawer, with 6 cooking functions: Air Fry, Max Crisp, Roast, Bake, Dehydrate, Reheat. The SYNC function ensures both drawers finish cooking at the same time. The MATCH function uses the same settings in each drawer to cook larger quantities of one food.\r\nEasy family-size meals\r\nThe 7.6L capacity is perfect for feeding up to 6 people, fitting a 1.2kg roast chicken or 400g of French fries in each 3.8L drawer. Cooking up to 55% faster than fan ovens, you can have complete meals on the table in minutes.\r\nBox Contains:\r\n2 x 4.75L Non-Stick Drawers\r\n2 x Non-Stick Crisper Plates\r\n2 x Multi-Layer Rack",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 239.99,
  "image": "https://www.did.ie/cdn/shop/files/SL300UK-2_d9eb47e6-ccef-47bd-893e-e219297c9307_5000x.jpg?v=1734952014",
  "brand": "Ninja",
  "rating": 4.4,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"2470W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"280\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"420\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"380\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"9.76\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"622356297837\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max Crisp, Air Fry, Roast, Reheat, Dehydrate, Bake\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Main Housing - Plastic Crisper Plates - Nano Ceramic Coated Aluminium/Rubber\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.885\""
    }
  ]
},
{
  "id": "27",
  "sku": "SL400UK",
  "name": "Ninja 9.5L 2470W Double Stack XL 2 Drawer Air Fryer - Grey | SL400UK",
  "description": "Take air frying to new heights with the new Ninja Double Stack. Space saving design, 2 stacking drawers , ideal for small kitchens. Perfect!\r\nSPACE SAVING DESIGN\r\nUsing an amazing 30% less counter space, the Ninja DoubleStack XL Air Fryer takes up just 30cm square of space, perfect for small kitchens and countertops.\r\nZONES:\r\nZone 1: 1.5 kg whole chicken\r\nZone 2: 1.5 kg whole chicken\r\nMATCH\r\nMatch your cook settings across all levels for the full 9.5L capacity at once.\r\nXL FAMILY-SIZED CAPACITY\r\n9.5L capacity lets you cook a whole 1.5kg roast chicken in each drawer and feed up to 8 people.\r\nCOOK 4 FOODS AT ONCE\r\nIndependent air fry drawers with Stacked Meal Racks allow you to cook on 4 separate levels.\r\nSPACE-SAVING DESIGN\r\nCook double the food with this 30% slimmer design that fits under cabinets.\r\nPERFECT FOR ENTERTAINING\r\nEliminates back-to-back cooking so you can make all the snacks without missing the party.\r\nSTACKED MEAL RACKS\r\nWire racks fit perfectly in each independent air fry drawer, so you can perfectly cook 4 foods at once.\r\nENERGY\r\nCook using up to 55% less energy than an oven.\r\nPre-Set Functions\r\nMax Crisp\r\nAir Fry\r\nRoast\r\nReheat\r\nDehydrate\r\nBake\r\nBox Contains:\r\nMain Unit 2470W\r\n2 x 4.75L Non-Stick Drawers\r\n2 x Non-Stick Crisper Plates\r\n2 x Multi-Layer Rack\r\nInstruction Booklet",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 319.99,
  "image": "https://www.did.ie/cdn/shop/files/SL400UK-1_a91e11e9-f6eb-4970-b910-fffb2259051c_5000x.jpg?v=1713264875",
  "brand": "Ninja",
  "rating": 4.8,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"2470W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (L)\","
    },
    {
      "name": "\"value\"",
      "value": "\"9.5 (4.75 per Drawer)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Basket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"280\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"470\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"385\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0622356280815\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Non-Slip Feet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "28",
  "sku": "EY901840",
  "name": "Tefal 8.3L 2700W Dual Zone 7 in 1 Digital Air Fryer - Black | EY901840",
  "description": "2 Air Fryers in 1\r\nWith two different sized drawers (5.2L/3.1L), Easy Fry Dual gives you a single and dual air fryer in one compact footprint. Heat the small drawer on its own (and save energy) or use both to cook two foods, two ways, at once!\r\nSingles or Doubles\r\nThe small drawer is perfect for single portions. Extra guests? Double up with the XL drawer - the combined 8.3L capacity feeds up to 8! Or cook a main and a side and SYNC the finish to ensure everything is ready at the same time.\r\nCook Faster and Save Energy\r\nGet that crispy crunch and taste you love in less time. With the Easy Fry Dual air fryer you can prepare a wide variety of meals 40% faster than in a conventional oven, whilst saving up to 70% energy.40% faster cooking with less energy than a conventional oven, external test cooking 1000g of frozen French fries, compared to a Tefal convection oven. Up to 70% energy saving with air fryers by Tefal vs conventional oven Energy Class A. Tests conducted in 2022 on frozen fries.\r\nMore than an Air Fryer\r\nNot just for chips, this double air fryer roasts succulent chicken and veg, sears seafood and steaks, and even bakes cakes. Fancy dehydrating fruit for snacks? It does that, too. 8 programs eliminate guesswork, so get creative!\r\nDouble Capacity\r\nNo need for multiple appliances! Create a full meal in your Easy Fry Dual air fryer. That’ll save on the washing-up. How about juicy ribs and crispy onion rings in 25 minutes? Delish. For more easy meal ideas, tap the free Tefal app.\r\nNo Preheat Needed\r\nExclusive Extra Crisp air frying technology means there's no need for preheating. Simply choose from 8 automatic programs or set your own temperature (40-200°C) and time.\r\n2 Drawers. 2 Sizes. 2 Temperatures:\r\n3.2L Drawer:\r\nOnly heat what you need with the smaller drawer\r\n5.2L Drawer:\r\nThe XL drawer fits a whole roast chicken!\r\nReady for Solo Meals or Family Feasts:\r\n5.2L: For Large Ingredients & Big Portions. Fits Whole Roast Chicken\r\n3.1L: For Smaller Portions & Solo Meals. Only Heat What You Need\r\n7 in 1 Cooking Programmes:\r\nFries:\r\n180°C / 25 Mins\r\nChicken:\r\n200°C / 10 Mins\r\nFish:\r\n220°C / 8 Mins\r\nDessert:\r\n160°C / 16 Mins\r\nVegetables:\r\n200°C / 22 Mins\r\nDehydrate:\r\n40°C / 8 Hours\r\nManual Mode\r\nExclusive Extra Crisp Technology\r\n360° air circulation for the crispiest results.\r\nMain and Side Dish Finish at Same Time With Sync Finish\r\nJuicy Roast Pork and Crackling\r\nCook With 99% Less Added Fat\r\nRoast Dinner Ready\r\n1.4kg chicken and sides all ready at the same time using Sync.\r\nCook Separately. Eat Together With Sync Finish\r\nAutomatically times your dishes to finish cooking at the same time.\r\nNot Your Average Dual Zone\r\nFit your roast joint or pizza in the XXL drawer with zero compromise.\r\nFries: Extra Crisp Technology\r\nEasy Fry's clever air circulation gives you deliciously crispy results with 99% less added fat.\r\nFish\r\nDelicately roasted flakey fish fillets.\r\nRoasted Chicken\r\nSucculent roast chicken with crispy skin.\r\nDessert\r\nMake savoury goodies like bread but also make treats like cakes and cookies.\r\nVegetables\r\nTender, juicy vegetables.\r\nDehydrate\r\nWant to save money and make your own snacks? Dehydrate fruits, meats and veggies for delicious on the go snacks.\r\nHealthy Cooking Inspiration: Less Oil\r\nFried foods without the guilt - deliciously crispy results with 99% less added fat.\r\nFree Tefal App\r\n100s of recipes on the free app - never run out of inspiration.",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 149.99,
  "image": "https://www.did.ie/cdn/shop/files/EY901840-1_5000x.jpg?v=1696356197",
  "brand": "Tefal",
  "rating": 4.7,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tefal\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power (W)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2700\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Shut-off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Basket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"420\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"306\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Zone\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Drawers\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Functions\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Portions\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Non-Stick\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Plastic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"220\""
    }
  ]
},
{
  "id": "29",
  "sku": "AF500UK",
  "name": "Ninja 10.4L 2470W Foodi FlexDrawer Air Fryer - Black | AF500UK",
  "description": "Ninja Foodi FlexDrawer Air Fryer 10.4L | AF500UK\r\nCook using up to 45% less energy than an oven\r\nIntroducing Ninja Foodi FlexDrawer, the extra-large capacity air fryer that adapts to fit every meal.\r\nCook in 2 independent cooking zones with Ninja’s signature Dual Zone Technology, or remove the divider to cook larger foods in the 10.4L MegaZone.\r\nFlexDrawer transforms from DualZone to MegaZone\r\nCook 2 foods, 2 ways in 2 independent cooking zones\r\nRemove the divider to create an extra-large 10.4L MegaZone\r\nFit larger foods including a whole 2kg leg of lamb with roast vegetables, traybake meals and more\r\nQuick family-size meals: Up to 65% faster than fan ovens\r\nAir Fry: Up to 75% less fat than traditional frying methods\r\n7 cooking functions: Max Crisp, Air Fry, Roast, Bake, Reheat, Dehydrate, Prove\r\nNon-stick, dishwasher safe drawer, divider and crisper plates\r\nWant to cook 2 foods at the same time?\r\nNinja’s signature Dual Zone Technology lets you use 2 different cooking functions, times and temperatures in each zone – both finish cooking at the same time!\r\nFrom roast chicken and air fried chips, to baked salmon and Mediterranean vegetables, you can enjoy freshly-cooked mains and sides together with the SYNC function – no need to use different appliances or let your side go cold while your main finishes cooking! It’s also perfect for catering to different dietary requirements or tastes, so you can still eat together. You can also use the MATCH function to copy the same settings across both zones.\r\nEach 5.2L zone fits up to a 2kg chicken or up to 1.5kg of fries.\r\nExpand your menu\r\nThere are plenty of reasons to cook in an air fryer, from healthier frying to lower energy usage than an oven†. But sometimes when you’re cooking for lots of people, it can be a struggle to fit everything into one appliance.\r\nWith the extra-large 10.4L MegaZone, now you can enjoy plenty of room to fit those larger foods you might usually cook in the oven. Simply remove the divider to transform 2 zones into 1 large cooking drawer.\r\nEasily fit a whole 2kg leg of lamb with roast vegetables, a 2.3kg rolled shoulder of pork with crispy potatoes, or one-dish traybake meals such as halloumi and butternut squash, toad-in-the-hole in a roasting dish, your favourite koftas and kebab skewers, and so much more.\r\nQuickly create delicious meals for 8+ people\r\nUp to 65% faster than fan ovens, you can have a complete meal ready in under half the time.\r\nPerfect for feeding a large household, this is also Ninja’s best air fryer for entertaining friends and family, fitting enough food for 8+ people – or just make enough for yourself!\r\nMore than an air fryer with 7 ways to cook:\r\nAIR FRY\r\nusing little to no oil and denjoy perfectly crispy results – up to 75% less fat than traditional frying methods**. Perfect for everything from homemade wedges, crispy pork belly strips, teriyaki salmon and fresh broccoli florets to samosas, frittatas and golden toasted sandwiches.\r\nMAX CRISP\r\ncirculates temperatures of 240°C to evenly cook and crisp frozen foods in minutes. Perfect for French fries, chicken wings, nuggets and other frozen favourites.\r\nROAST\r\na whole chicken, leg of lamb, beef topside or vegan wellington alongside root vegetables for a family-size roast dinner, any day of the week. Plus, easily customise your perfect traybake meal – pick any protein, vegetable and marinade/seasoning to create your own MegaZone masterpiece.\r\nBAKE\r\neverything from loaf cakes, brownies, blondies and fruit crumbles to homemade bread, pies and tarts.\r\nREHEAT\r\nleftovers to gently restore that fresh-out-of-the-oven crispiness. Perfect for pizza, spring rolls and more.\r\nDEHYDRATE\r\ningredients at a low heat to create dried fruit snacks, vegetable crisps, beef jerky, homemade dried herbs and garnishes.\r\nPROVE\r\ndough in the perfect environment for it to rest and rise, for elevated home baking.\r\nEasy to use\r\nEasily select your cooking functions, times and temperatures with a touch screen control panel and simple function dial. This versatile air fryer includes 2x crisper plates to ensure hot air gets underneath food for even, crispy results.\r\nThe air fryer also switches to low-power Standby Mode after 10 minutes without interaction.\r\nGet started immediately with the included Chef-created recipe guide, packed with air fryer recipes and inspiration.\r\nEasy to clean\r\nThe 10.4L FlexDrawer, divider and 2x crisper plates are all non-stick and dishwasher safe for easy cleaning.\r\nNinja guarantee\r\nCook with confidence - We offer a 2-year guarantee upon registration with Ninja for your peace of mind (UK & ROI only).\r\nCook in 2 independent zones\r\nWant to cook 2 different foods at the same time? With Dual Zone Technology you can cook in 2 independent zones. Mix and match cooking programs, times and temperatures - both zones finish cooking at the same time thanks to the handy SYNC function!\r\nOr unlock extra-large cooking capacity\r\nEasily fit larger foods in the spacious 10.4L MegaZone, such as a 2kg leg of lamb with roast vegetables, a 2.3kg rolled shoulder of pork with crispy potatoes, one-dish traybake meals, toad-in-the-hole, koftas or kebab skewers, and so much more. Perfect for feeding a crowd.\r\nQuick family-size meals\r\nCooking up to 65% faster than fan ovens, this family-size air fryer makes it quick and easy to feed a crowd.\r\nVersatile: 7 ways to cook\r\nWant a healthier way to fry? Air Fry using little to no oil – up to 75% less fat than traditional frying methods. More than an Air Fryer, you can also use Max Crisp, Roast, Bake, Reheat, Dehydrate and Prove functions to create complete meals, sides, snacks, bakes and desserts.\r\n7 Cooling functions\r\nAir Fry, Max Crisp, Roast, Bake, Reheat, Dehydrate, Prove\r\nFlexDrawer transforms from DualZone to MegaZone\r\nCook in 2 independent zones or 1 extra-large drawer.\r\nFlexdrawer adapts to fit every meal\r\nRemove the divider to transform 2 independent cooking zones into 1 MegaZone\r\nUnlock extra-large capacity\r\nCook large foods & family-size meals in one 10.4L drawer.\r\nCook 8+ portions\r\nPerfect for entertaining, large households & feeding a crowd.\r\nBox Contains:\r\nMain unit 2470W\r\n1 x 10.4L Non-stick drawers\r\n1 x Divider\r\n2 x Non-stick crisper plates\r\nInstruction booklet\r\nInspiration guide",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 319.99,
  "image": "https://www.did.ie/cdn/shop/files/MicrosoftTeams-image_d86fcc8e-a5e5-456b-9802-82f4523281d8_5000x.png?v=1701852990",
  "brand": "Ninja",
  "rating": 4.9,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"2470W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Knob & Button\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Basket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"DualZone to MegaZone\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"415\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"290\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"9.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0622356269568\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Non-Slip Feet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pre-Set Functions\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max Crisp, Air Fry, Roast, Reheat, Dehydrate, Bake, Prove\""
    }
  ]
},
{
  "id": "30",
  "sku": "FN101UK",
  "name": "Ninja CRISPi 4-in-1 Portable Glass Air Fryer - Cyber Space | FN101UK",
  "description": "Meet the Ninja CRISPi 4-in-1 Portable Glass Air Fryer Cooking System, the power of a full sized air fryer, now in a portable cooking system. Simply snap the lightweight, handheld 1700-watt PowerPod onto one of the glass cooking containers to create family-size meals and personal portions with 4 cooking functions. Plus, cook with up to 50% less energy than a fan oven.\r\nPortable Design:\r\nCook on countertop surfaces, anywhere you can plug in. Built to be portable, this small air fryer is perfect for compact kitchen spaces and less cluttered worktops.\r\nOne Pod, Multiple Functions:\r\nThis all-in-one complete cooking system has 4 functions – Air Fry, Roast, Keep Warm and Recrisp. Heated air up to 185°C evenly cooks and crisps your food, while non-stick Crisper Plates ensure all-around airflow. Plus, revive leftovers for a freshly-cooked finish, perfect for helping you to reduce food waste.\r\nGlass Cooking Surface:\r\nIntroducing Ninja TempWare thermal-shock resistant glass containers. Cook without PFAS, and watch your food cook thanks to the transparent glass air fryer design.\r\nFamily Meals. Personal Portions. Swappable Containers:\r\nSwap between the 3.8L large container for bigger portions, and the 1.4L small container for smaller portions or cooking sides. Cook a personal meal in under 15 minutes, or cook a whole 1.2kg chicken and vegetables. The CRISPi PowerPod senses which TempWare container you’re using and adjusts the cooking temperature accordingly. Perfect for small or big-batch cooking, meal-prepping, snacks, party food, and so much more.\r\nPrep, Cook, Serve & Store:\r\nYou can marinate and prepare your food directly in the glass containers, then attach the PowerPod to cook when you’re ready to eat. Easy-grip handles let you serve directly to the table, without needing to transfer to a serving dish. Want to save leftovers, or meal-prep for later? Just add one of the included BPA-free lids – the smaller container includes a leak-resistant snap-lock lid to take your meal on-the-go, mess-free. Do it all in one container to save on washing up.\r\nCook Using Little To No Oil:\r\nUp to 75% less fat using the Air Fry function – perfect for healthier fried food and crispy cooking.\r\nFixed Heat Protection:\r\nCook and serve safely on granite, laminate, quartz, butcher block, marble and more. The TempWare glass containers feature durable, heat-resistant feet engineered to protect surfaces, and the PowerPod has heat-resistant prongs so you can set it down safely.\r\nDishwasher Safe Parts:\r\nThe glass containers, adaptor and lids are dishwasher safe for easy cleaning. Nests for easy storage: The containers and pod nest together in your cupboard for neat storage.\r\nBuilt to be portable\r\nThis small air fryer is perfect for cooking on countertop surfaces, anywhere you can plug in. Simply snap the lightweight, handheld 1700-watt PowerPod onto one of the TempWare glass cooking containers. Built to be portable, it’s perfect for smaller kitchen spaces and less cluttered worktops.\r\n4-in-1 functionality\r\nOne pod, multiple functions: Air Fry, Roast, Keep Warm and Recrisp. Up to 185°C heated air evenly cooks and crisps your food to perfection. Plus, revive leftovers for a freshly-cooked finish.\r\nThermal-shock resistant glass containers\r\nIntroducing Ninja TempWare glass air fryer containers. Cook without PFAS, and watch your food cook thanks to the transparent glass design.\r\nFamily meals. Personal portions. Swappable containers\r\nSwap between the 3.8L large container for bigger portions, and the 1.4L small container for smaller portions or cooking sides. Cook a personal meal in under 15 minutes, or a whole 1.2kg chicken and vegetables. Perfect for small or big-batch cooking, meal-prepping, snacks, party food, and so much more.\r\nBox Contains:\r\n1700W Power Pod with UK plug\r\n2 x TempWare Glass Containers (1.4L & 3.8L)\r\n2 x Non-Stick Crisper Plates (Large and Small)\r\nPowerPod Adaptor\r\n2 x Storage Lids (Large and Small)",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 149.99,
  "image": "https://www.did.ie/cdn/shop/files/FN101UK-1_7de11399-2190-48a2-a9b4-cb21752b97d2_5000x.jpg?v=1741848002",
  "brand": "Ninja",
  "rating": 4.4,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cyber Space Blue\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1700W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (L)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.4 & 3.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Thermostat\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Basket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"304\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"340\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"345\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"622356307727\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pre-Set Functions\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fry, ReCrisp, Roast, Keep Warm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.9\""
    }
  ]
},
{
  "id": "31",
  "sku": "AF300UK",
  "name": "Ninja 7.6L 2400W Dual Zone Air Fryer - Grey | AF300UK",
  "description": "2 Independent Cooking Zones\r\nDifferent foods, different times, different programs – both ready at the same time! With 2 separate cooking drawers, you can Sync or Match cooking programs and times for total versatility. Extra-large 7.6L capacity feeds up to 8 people. Each drawer fits up to 1kg of fries.\r\nUp to 75% Faster Than Fan Ovens\r\nEnjoy delicious food, cooked in under half the time of a fan oven. Perfect when you need to get dinner on the table quickly Tested against fish fingers and sausages, including preheat.\r\nUp to 75% Less Fat\r\nThan traditional frying methods**. Using little to no oil, super-hot air is evenly circulated around your food to quickly cook and crisp with a delicious golden finish. **Tested against deep fried, hand-cut French fries.\r\nMore Than an Air Fryer\r\nGet creative with 6 ways to cook-Air Fry, Max Crisp, Roast, Bake, Reheat and Dehydrate. Customise with variable temperature controls. Cook from frozen to crispy in minutes.\r\nThe air fryer that cooks 2 foods, 2 ways, and finishes at the same time.\r\nMore than an air fryer. 6 ways to cook-Max Crisp, Roast, Bake, Reheat, Dehydrate and Air Fry.\r\n2 Independent Cooking Zones\r\nWhen it comes to cooking, timing is everything. The Ninja Foodi Dual Zone 7.6L Air Fryer does the thinking and timing for you. Cook 2 different foods with different temperatures, times and settings in 2 separate cooking drawers – and have both ready to serve at exactly the same time using the SYNC feature! More people to feed? MATCH settings across both zones to make double the amount of food in the same amount of time!\r\nSYNC\r\nWant to cook two different foods using different times, temperatures and programs? Use different settings in each drawer with the Sync feature – both are ready to serve at the same time!\r\nWant to Roast in one drawer and Air Fry in the other? No problem! Different cooking times for fish fingers and fries? Both finish cooking at the same time, so you can enjoy freshly-cooked mains and sides together-no need to use different appliances or let your side go cold while your main finishes cooking!\r\nWhether it’s chicken breasts and fluffy roast potatoes, baked salmon and Mediterranean vegetables or juicy beef burgers and golden chips, your perfect pairing is just moments away.\r\nCooking for two different dietary requirements? Cater for everyone by cooking vegetarian food in one drawer and meat in the other.\r\nMATCH\r\nCooking for extra guests or feeding the whole family? Use the Match feature to double your serving size, with the same cooking program and time in both drawers.\r\nCook the same food in both zones to make twice the amount of food in the same amount of time! Or easily cook two different foods with the same cooking instructions.\r\nJust cooking for yourself? No problem-you can cook in a single drawer. Each non-stick, dishwasher-safe 3.8L drawer fits up to 1kg of fries.\r\nMore Than an Air Fryer\r\nUp to 75% faster than fan ovens, quickly and easily create a delicious variety of meals that the whole family will love.\r\nAir Fry\r\nUp 75% less fat than traditional frying methods**. Enjoy guilt-free fried favourites using little to no oil. From delicious chicken wings, fishcakes, burgers and sausages to chunky chips. Air frying evenly circulates super-hot air around food to remove excess moisture and give it a delicious golden finish.\r\nMax Crisp\r\nCook from frozen to crispy in minutes. Temperatures up to 240°C evenly cook and crisp your favourite frozen foods. From breaded scampi and chicken nuggets to golden French fries, onion rings and more. Perfect for quick, delicious dinners.\r\nRoast\r\nNot just for Sundays, enjoy your favourite roast meat, fish and vegetables any day of the week. From salmon fillets, golden chicken breasts and roast pork chops with crispy crackling to fluffy roast potatoes, balsamic-roasted tomatoes and sweet potato hash.\r\nBake\r\nEasily cook pasta bakes, fish pies and flaky fish with crispy toppings, or enjoy freshly-baked bread and homemade sweet treats, from muffins and brownies to cakes and cookies.\r\nDehydrate\r\nCreate delicious dried fruit snacks, from apple to mango, banana to pineapple. Enjoy homemade vegetable crisps, beef jerky, and even make your own dried herbs.\r\nReheat\r\nRestore leftovers to that delicious fresh-out-of-the-oven finish, perfect for reviving leftover pizza, quiche, spring rolls and more.\r\nThe easy-to-use digital control panel with a countdown timer makes it easy to see how much cooking time is left.\r\nVariable temperature controls let you make every snack and meal just how you like it. The innovative Auto-Adjust Fan automatically changes speeds based on the cooking function selected.\r\nWashing up is easy thanks to non-stick, dishwasher-safe parts.\r\nAccessories Included:\r\n1 x Air Fryer Unit 2400W\r\n2 x Non-Stick Crisper Plates\r\n2 x Non-Stick Drawers\r\nInstruction Booklet\r\nInspiration Guide",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 239.99,
  "image": "https://www.did.ie/cdn/shop/products/ninja-7-6l-2400w-dual-zone-air-fryer-grey-or-af300uk-did-electrical-1_c3d672c2-9da4-410f-b401-4c987fc6f6bf_5000x.jpg?v=1656336586",
  "brand": "Ninja",
  "rating": 4.7,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fryer Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Fryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Food Capacity (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touch\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max Crisp, 6 cooking functions, Non-slip feet\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Timer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dishwasher Safe\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Thermostat\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Basket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"375\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"350\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"315\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.2000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0622356236133\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "32",
  "sku": "MO201UK",
  "name": "Ninja Artisan Electric Outdoor Pizza Oven & Air Fryer - Grey | MO201UK",
  "description": "Introducing the outdoor pizza oven with no-turn pizzas in 3 minutes or less, and even baking at the push of a button. The 4-in-1 Ninja Artisan Electric Outdoor Pizza Oven & Air Fryer is the ultimate sidekick for all your outdoor entertainment, with Pizza, Bake, Air Fry & Prove functions, and a Pizza Peel to easily load and unload breads and pizzas from the oven.\r\nArtisan pizza in 3 minutes or less: Make restaurant-quality 12 inch pizzas in 3 minutes or less with even leoparding on crusts and gooey cheese – no turning necessary. Perfect for pizza parties, make 3 back-to-back 12 inch pizzas in 10 minutes.\r\n5 pizza settings: Choose from 5 different settings to satisfy any craving; Artisan, Thin Crust, New York, Pan and Custom.\r\nArtisan: Chewy, puffy crust that’s spotted with crispy bubbles\r\nThin Crust: Thin, stretched pizza with a crispy crust\r\nNew York: Large, foldable crust with light browning\r\nPan/Chicago: Thick chewy crusts, baked in a deep dish or pan\r\nCustom: Turn your favourite packaged pizza into a masterpiece\r\nFull meals outdoors: Cook and warm your sides in your Ninja pizza oven at the same time your main is cooking – char burgers on your grill while baking focaccia or air frying chicken wings in your oven.\r\nBring the pizzeria home with crispy crusts and perfectly melted toppings, enjoy bakery-quality cakes, cookies and fluffy breads, Air Fry healthier meals or sides in a flash, and even prove pizza doughs and breads right at home.\r\nNo flame, full control: Electric heat unlocks Complete Temperature Control with a wide range of temperatures up to 370°C and easy-to-use digital controls. Expand your horizons and cook more outdoors without the fuss of a live flame. Plus, no messy wood-burning or gas flare-ups mean this pizza oven is balcony and patio friendly.\r\nChef’s View Window: Watch your creations come to life through the Chef's View Window on the door of the oven, and turn on an interior light at the touch of a button to see food cooking.\r\nFeed a crowd: Fits a 12 inch pizza, 12 inch/30cm baking tray, 6 chicken breasts, 1.3kg of chicken wings or French fries, or a large sourdough loaf.\r\nProfessional proving: The key to the perfect bread or pizza is making sure your dough is properly proved. Remove the guesswork with the Prove function – a 30°C setting that brings your dough to the optimal temperature for bakery quality results.\r\nBuilt to withstand the Great British weather: This electric pizza & bread oven is weather resistant so you can store outdoors. We recommend using our Ninja Artisan Oven Cover to keep your oven safe from the elements.\r\nBox Contains:\r\nMain Unit\r\nBake tray\r\nAir Fry Basket\r\nPizza Stone\r\nPizza peel (requires assembly)",
  "category": "Appliances > Small Appliances > Air Fryer",
  "price": 249.99,
  "image": "https://www.did.ie/cdn/shop/files/MO201UK-1_534c4cdb-62f0-40e9-a586-76e4371fb357_5000x.jpg?v=1751027740",
  "brand": "Ninja",
  "rating": 4.8,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Oven Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Single\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fuel Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Electric\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"420\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"590\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"320\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"11.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"622356320566\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.5 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wattage\","
    },
    {
      "name": "\"value\"",
      "value": "\"1760 W\""
    }
  ]
},
{
  "id": "33",
  "sku": "UE75U7000FKXXU",
  "name": "Samsung U7000F 75\" 4K Smart TV - Black | UE75U7000FKXXU",
  "description": "Click here for more information on the EU Data Act and Samsung products.\r\nPicture Quality\r\nGreater clarity guaranteed - Crystal Processor 4K\r\nExperience enhanced 4K picture and crystal-clear sound with our Crystal Processor. Enjoy your favourite movies, shows and sports with quality visuals and sound.\r\nFeel the reality of the world on screen - 4K Resolution\r\nMake out the small details in every scene. 4K UHD resolution has 4x more pixels than regular FHD resolution — creating sharp, ultra-realistic images.\r\nMore about Picture Quality\r\nDepth and detail in every scene - HDR powered by HDR10+\r\nExperience depth and detail in every single frame. By dynamically optimising each scene, you can see dark dramas in new light and bright worlds in greater clarity. Whatever you're watching, watch it in greater depth and detail.\r\nYour visuals, boosted - 4K Upscaling\r\nEnjoy 4K picture quality for viewing your favourite movies, shows and YouTube videos. See everything upscaled into clearer, brighter and better picture.\r\nShows your content's true colours - PurColour\r\nSamsung's PurColour improves the quality of any image, uncovers hidden details, and helps show your content's true colours. See impressive colour, every time you watch.\r\nEnhanced depth - Contrast Enhancer\r\nEnjoy striking images with enhanced depth and colour contrast ratio.\r\nSound\r\nSamsung TVs and soundbars, the perfect harmony - Samsung Q-Symphony\r\nBoost your viewing experience with integrated sound from your TV and soundbar. Why let a soundbar or TV work solo when you can amp up your entertainment with even more powerful speakers that work together seamlessly, for a fully immersive sound experience.\r\nSound that tracks the action on-screen - Object Tracking Sound Lite\r\nHear onscreen action amplified from left-to-right as your entertainment unfolds. So you can hear a car fly along your screen or the crowd cheering all around you.\r\nTailored sound, so you hear every detail - Adaptive Sound\r\nExperience optimised audio for your viewing with every element of dialogue, music and sound effects individually tailored to what you're watching. Hear every word of a whispered exchange and feel every blast in a blockbuster set piece.\r\nDesign\r\nSlim in style, tidy in set-up - MetalStream Design\r\nOur MetalStream Design takes inspiration from aircraft engineering, using a single sheet of metal to create a slim, seamless and modern aesthetic. With a smooth back and clutter-free cabling, it looks great from all angles.\r\nGaming Experience\r\nGame all day - no console needed - Gaming Hub\r\nSamsung Gaming Hub brings together the biggest console and streaming games from Xbox and other industry-leading partners, all in on one place. With no downloads, storage limits or console required, just turn on your TV and play.\r\nStay one step ahead - Motion Xcelerator\r\nExperience clear picture and smooth performance with Motion Xcelerator. Samsung’s clear motion rate algorithms predict and automatically compensate frames, so your picture adapts as fast as your game.\r\nTizen OS Smart TV\r\nTailored recommendations from your favourite apps - Smart TV Powered by Tizen OS\r\nSpend less time searching and more time watching. With BBC iPlayer, Netflix, Disney+, YouTube, Xbox and more, get personalised recommendations and instant access to the latest shows and movies on the best streaming apps. Plus access to 1,000s of extra TV Shows and Movies on Samsung TV Plus - all for free.\r\nEntertainment for every day. Always for free - Samsung TV Plus\r\nWatch 1000s of TV shows and movies, all for free, anytime, anywhere you want with Samsung TV Plus. Get instant access to live and on demand entertainment like The Graham Norton Show and Poldark. Stream the latest news on Sky News and catch-up on kids shows, sports highlights and more with no strings attached.\r\nKeeping your private information private - Samsung Knox Security\r\nWith today's TVs holding your passwords and private payment information, Samsung Knox Security keeps your data protected with multi-layered security, constant system monitoring and updates and the automatic blocking of harmful attacks. Stay secured, stay entertained.\r\nSmart Experience\r\nOne place. All your smart devices - SmartThings\r\nConnect and control all your smart devices from your TV and phone. Program your smart heating, set your smart washer, get alerts when your food is ready, monitor your video doorbell! Make life easier for all your smart device routines with the simplicity of the SmartThings app.\r\nMonitor and reduce your energy consumption - AI Energy Mode\r\nSave energy with AI Energy Mode and SmartThings. With AI Energy Mode, your TV adjusts the brightness depending on the content you are watching and the surrounding light levels in your room to reduce overall energy consumption. Then, you can monitor the energy usage of your TV and other compatible devices through Map View on your TV.\r\nMore about SmartThings\r\nControl your TV from your phone - Quick Remote\r\nUse your smartphone as your remote. With Quick Remote, use your smartphone to change channels, adjust the volume, and more.\r\nSet your hands free - Universal Gestures\r\nTurn your wrist into the remote. Universal Gestures lets you control your TV with simple motions of your Galaxy Watch. Whether you're working out, cooking, or multitasking, easily control your TV with intuitive gestures.\r\nKey Features:\r\nSamsung Q-Symphony\r\nAudio Pre-selection Descriptor\r\nOTS Lite\r\nAdaptive Sound\r\nSamsung TV Plus\r\nWeb Browser\r\nSmartThings Hub / Matter Hub / IoT-Sensor Functionality / Quick Remote\r\nSamsung Health\r\nDaily+\r\nStorage Share\r\nClick to Search\r\nAuto Game Mode (ALLM)\r\nVRR\r\nHGiG\r\nGaming Hub\r\nAnalog Tuner\r\nTV Key Support\r\nAnynet+ (HDMI-CEC)\r\nEmbeded POP\r\nEPG\r\nIP Control\r\nEco Sensor\r\nAuto Power Saving\r\nFull Motion Slim Wall Mount Support (Y22)\r\nBox Contains:\r\nRemote Controller Model - TM1240A\r\nUser Manual\r\nPower Cable\r\nUE75U7000FKXXU",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 899.99,
  "image": "https://www.did.ie/cdn/shop/files/UE75U7000FKXXU-1_5000x.jpg?v=1757481256",
  "brand": "Samsung",
  "rating": 4.4,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"U7000F\""
    },
    {
      "name": "\"name\"",
      "value": "\"Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Metal Stream\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tizen\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"75\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dynamic Contrast\","
    },
    {
      "name": "\"value\"",
      "value": "\"HDR, HDR 10+, Mega Contrast\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motion Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"Motion Xcelerator\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"Filmmaker Mode\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"20W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption per Year\","
    },
    {
      "name": "\"value\"",
      "value": "\"191 kWh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"138\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"199 kWh/1000h\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Power Off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K 60Hz (for HDMI 1/2/3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wireless LAN Built-In\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1668.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"77\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"957.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"22.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806097277804\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K (3840 x 2160)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Upscaling\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Upscaling\""
    },
    {
      "name": "\"name\"",
      "value": "\"Micro Dimming\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD Dimming\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Booster\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"2CH\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bixby\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (Voice Ready)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Works with AI Speaker\","
    },
    {
      "name": "\"value\"",
      "value": "\"Alexa, Google Assistant\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi Device Experience\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mobile to TV, Sound Mirroring, Wireless TV On\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Broadcasting\","
    },
    {
      "name": "\"value\"",
      "value": "\"DVB-T2C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes(5.3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Audio Return Channel\","
    },
    {
      "name": "\"value\"",
      "value": "\"eARC/ARC\""
    },
    {
      "name": "\"name\"",
      "value": "\"RF In (Terrestrial / Cable input)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1/1(Common Use for Terrestrial)/0\""
    },
    {
      "name": "\"name\"",
      "value": "\"CI Slot\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bezel Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 Bezel-less\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Basic Feet\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Color\","
    },
    {
      "name": "\"value\"",
      "value": "\"Titan Gray\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motor Impaired Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Slow Button Repeat, Remote Control App\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hearing Impaired Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Closed Caption (Subtitle), Multi-output Audio, Sign Language Zoom\""
    },
    {
      "name": "\"name\"",
      "value": "\"Low Vision Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Audio Description, Zoom Menu and Text, High Contrast, SeeColors, Color Inversion, Grayscale, Auto Picture Off\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Supply\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC220-240V~ 50/60Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (Max)\","
    },
    {
      "name": "\"value\"",
      "value": "\"220 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand (Basic) (WxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1250 x 280\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand (Minimum) (WxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"793 x 280\""
    },
    {
      "name": "\"name\"",
      "value": "\"Set Size with Stand (WxHxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1668.1 x 1005.9 x 280\""
    },
    {
      "name": "\"name\"",
      "value": "\"VESA Spec (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"400 x 300\""
    },
    {
      "name": "\"name\"",
      "value": "\"Set Weight with Stand (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"22.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Zigbee / Thread Module\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dongle Support\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security Update Period (At least 5 years)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 December 2030\""
    }
  ]
},
{
  "id": "34",
  "sku": "OLED65G54LW.AEK",
  "name": "LG evo G5 65\" UHD Smart TV - OLED65G54LW.AEK",
  "description": "Our most brilliant alpha 11 AI Processor Gen2 for the best viewing experience\r\nalpha 11 AI Processor Gen2 upscales visuals to 4K quality with stunning colour and brightness. AI engines perceive objects with pixel-level precision to enhance picture quality for the best viewing experience possible.\r\n3X brighter visuals with Brightness Booster Ultimate\r\nThe alpha 11 Al Processor Gen2's new Light Boosting Algorithm and Light Control Architecture deliver up to three times brighter visuals.\r\nTitle reads, Experience Perfect Black OLED, only with LG OLED.\r\nPerfect Black even in bright or dark spaces\r\nPerfect Black is UL-verified and delivers true black levels to enhance perceived brightness and contrast, whether it's bright or dark around you.\r\nPerfect Colour\r\n100% Colour Volume and 100% Colour Fidelity certified. Enjoy accurate, vibrant colours on a reflection-free screen even in sunlight or dark environments.\r\nAI Picture Pro brings every frame to life\r\nAI Super Upscaling, AI Perceived Object Enhancer, and OLED Dynamic Tone Mapping analyze each frame's elements to enhance resolution, brightness, depth, and clarity.\r\nThe next generation of LG AI TV\r\nAI Magic Remote completes the AI experience\r\nControl your TV easily with AI magic remote — no extra device needed! With a motion sensor and scroll wheel, point and click to use it like an air mouse or simply speak for voice commands.\r\nAI Voice ID\r\nLG AI Voice ID recognizes each user's unique voice signature and offers personalized recommendations the moment you speak.\r\nAI Search\r\nAsk your TV anything. Built-in AI recognizes your voice and swiftly provides personalized recommendations to your requests. You can also get additional results and solutions with Microsoft Copilot.\r\nAI Chatbot\r\nInteract with the AI Chatbot through your AI Magic Remote and address all concerns from configuring settings to troubleshooting. AI can understand user intent and will provide immediate solutions.\r\nAI Concierge\r\nOne short press on the AI button on your remote opens up your AI Concierge which provides customized keywords and recommendations based on your search and watching history.\r\nAI Picture Wizard\r\nAdvanced algorithms learn your preferences by going through 1.6 billion image possibilities. Based on your selections, your TV creates a personalized picture just for you.\r\nAI Sound Wizard\r\nChoose the audio you like from a selection of sound clips. From 40 million parameters, AI creates a tailored sound profile tuned to your preferences.\r\nJust say “Hi LG” to start interacting with your TV\r\nYour TV’s AI is always ready for your requests. Without even pressing a button, simply say “Hi LG”, it prompts the AI to start listening for your requests.\r\nNew upgrades for 5 years with award-winning webOS Re:New Program\r\nGet full upgrades and enjoy the benefits of the latest features and software. A CES Innovation Awardee for the cybersecurity category, feel safe knowing webOS keeps your privacy and data, secure.\r\nHome Hub, the all-in-one platform for your smart home\r\nSeamlessly manage various LG home appliances, alongside your Google Home devices and more. Experience the ultimate convenience of controlling your whole home through a single, intuitive dashboard.\r\nAI Sound Pro fine-tunes your sound for impact\r\nMost optimal sound with AI Object Remastering\r\nHear every sound element effortlessly with AI-balanced audio. AI Object Remastering extracts voices, music, and audio SFX to optimize for clarity, delivering the best sound experience possible.\r\nEnrich your sound with LG TV and LG Soundbar\r\nWOW Orchestra, immersive sound through perfect synergy\r\nLG OLED TVs and LG Soundbars are the perfect match, made to work harmoniously together to provide multi-surround sound environments.\r\nOne Wall Design\r\nWhen you mount your TV to the wall, its narrow bezels and seamless design ensure that there is no gap.\r\nMaximize the fun, use multiple screens with Multi View\r\nMake the most of your TV with Multi View. Mirror your devices through Google Cast and AirPlay. Split your screen into two separate views for seamless multi-screen entertainment.\r\nStream a variety of content Free\r\nLG's exclusive streaming service, LG Channels, puts a wide selection of live and on-demand channels at your fingertips for free.\r\nCost-free. Contract-free. Cable-free\r\nAll you need to do is tune in and start watching without worrying about hidden costs or installing a set-top box.\r\nGaming Portal turns your TV into the ultimate gaming hub\r\nPlay thousands of games directly on your LG TV with access to GeForce NOW, Amazon Luna, Blacknut, Boosteroid and now Xbox app! Enjoy a wide variety of gaming experiences—from AAA titles with gamepad to casual games playable with your remote.\r\nUltimate Gameplay\r\nExperience peak gaming with G-Sync compatibility, 165Hz VRR, 0.1ms Pixel Response Time, AMD FreeSync Premium, and ClearMR 10000 certification. Get your game on without lag or motion blur.\r\nBest OLED TV for Movies\r\nWatch movies come to life in your home cinema through FILMMAKER MODE with Ambient Light Compensation that adjusts to environmental lighting for picture quality that meets top filmmaker standards.\r\nDolby Vision & Ambient FILMMAKER MODE\r\nExperience cinema as the director intended with Dolby Vision and FILMMAKER MODE with Ambient Light Compensation that adapts to surroundings and keeps visuals as close as possible to its original form.\r\nDolby Atmos\r\nLet lifelike surround sound move all around you, making you feel like you're in the center of all the action.\r\nKey Features:\r\n4K picture quality, AI upscaled visual, and surround sound from the alpha 11 AI Processor Gen2\r\nTrue black levels in every pixel create stunning contrast, depth, and detail\r\n100% Colour Fidelity for accurate lifelike colours. 100% Colour Volume for richer hues\r\nUp to 3X brighter visuals vs. conventional OLED TVs from Brightness Booster Ultimate\r\nNew AI button, voice controls, drag and drop functions on the AI Magic Remote\r\nWOW Interface lets you control sound easier from your TV\r\nOLED65G54LW.AEK",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 2699.99,
  "image": "https://www.did.ie/cdn/shop/files/image_81_5000x.png?v=1750127980",
  "brand": "LG",
  "rating": 4.8,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"LG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"G5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120Hz Native (VRR 165Hz)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"webOS 25\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motion Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED Motion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"85\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"222 kWh/1000h\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K 120Hz, eARC, VRR, ALLM, QMS, QFT\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Version 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Audio Out (optical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1441\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"24.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"826\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"22\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806096398418\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Ultra HD (3,840 x 2,160)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Colour Gamut\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED Colour\""
    },
    {
      "name": "\"name\"",
      "value": "\"AI Genre Selection\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (SDR/HDR)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"α11 AI Processor 4K Gen2\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDR (High Dynamic Range)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dolby Vision / HDR10 / HLG\""
    },
    {
      "name": "\"name\"",
      "value": "\"AI Upscaling\","
    },
    {
      "name": "\"value\"",
      "value": "\"α11 AI Super Upscaling 4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"HFR (High Frame Rate)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K 120 fps (HDMI, RF, USB)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 modes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimming Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pixel Dimming\""
    },
    {
      "name": "\"name\"",
      "value": "\"VRR (Variable Refresh Rate)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (Up to 165Hz)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Response Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Less than 0.1ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"The security update is supported until\","
    },
    {
      "name": "\"value\"",
      "value": "\"31/12/2029\""
    },
    {
      "name": "\"name\"",
      "value": "\"WiSA Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (Up to 2.1 Channel)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Surround Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (2 Way Playback)\""
    },
    {
      "name": "\"name\"",
      "value": "\"AI Sound\","
    },
    {
      "name": "\"value\"",
      "value": "\"α11 AI Sound Pro (Virtual 11.1.2 Up-mix)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Codec\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, WMA, apt-X (Refer to manual)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Direction\","
    },
    {
      "name": "\"value\"",
      "value": "\"Down Firing\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker System\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.2 channel\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Audio Return Channel\","
    },
    {
      "name": "\"value\"",
      "value": "\"eARC (HDMI 2)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (v 5.3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RF Input (Antenna/Cable)\","
    },
    {
      "name": "\"value\"",
      "value": "\"x2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (Wi-Fi 6)\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Dimensions with Stand (WxHxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1441 x 865/910 x 263\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Stand (WxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"485 x 263\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Weight with Stand (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"26.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"VESA Mounting (WxH)\","
    },
    {
      "name": "\"value\"",
      "value": "\"300 x 300\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Supply (Voltage, Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC 100~240V 50-60Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Analog TV Reception\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital TV Reception\","
    },
    {
      "name": "\"value\"",
      "value": "\"DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)\""
    }
  ]
},
{
  "id": "35",
  "sku": "50UA75006LA.AEK",
  "name": "LG UA75 50\" 4K HDR Smart TV - Charcoal Black | 50UA75006LA.AEK",
  "description": "The LG UA75 50\" TV brings your favorite shows and movies to life with vibrant detail and stunning clarity, thanks to its 4K Ultra HD resolution. At the core is the powerful α7 AI Processor, which works behind the scenes to optimize both picture and sound quality for an enhanced viewing experience. It also ensures smooth and responsive navigation, so you can browse menus effortlessly. Planning a movie night? The TV’s smart webOS platform gives you access to a wide selection of streaming apps, including Netflix, Disney+, and Apple TV+. Just search for what you feel like watching—and enjoy the show with some popcorn!\r\nHDR technology enhances contrast and color, bringing out more depth and realism in every scene\r\nFilmmaker Mode lets you experience movies exactly as the director intended, with true-to-source picture settings\r\nGame Optimiser automatically adjusts settings for the best possible graphics and sound while gaming\r\nPowered by the intelligent α7 AI Processor with AI Super Upscaling, this 50\" 4K TV delivers enhanced picture and sound for a truly immersive experience. Filmmaker Mode ensures movies are displayed just as the director intended. With a 60 Hz refresh rate and three HDMI 2.0 ports, it’s built for smooth performance and easy connectivity. Enjoy seamless access to your favorite content through LG’s webOS smart platform, and experience lifelike visuals with support for HDR10 and Hybrid Log-Gamma (HLG).\r\n50UA75006LA.AEK",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 399.99,
  "image": "https://www.did.ie/cdn/shop/files/50UA75006LA.AEK_1_5000x.jpg?v=1750127928",
  "brand": "LG",
  "rating": 4.7,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"LG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Charcoal Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"UA75\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"webOS 25\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dynamic Contrast\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dynamic Tone Mapping\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Super Upscaling\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"Vivid, Standard, Cinema, Sports, Game, Filmmaker, (ISF)Expert(Bright Room), (ISF)Expert(Dark Room)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"20 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speakers\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound Mode Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"AI Sound Pro (Virtual 9.1.2 Up-mix)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"F\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"99 kWh/1000h\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"HDMI 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wireless LAN Built-In\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Audio Out (optical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1122\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"67.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"654\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"9.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806096353028\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "36",
  "sku": "UE65U7000FKXXU",
  "name": "Samsung U7000F 65\" 4K Smart TV - Black | UE65U7000FKXXU",
  "description": "Click here for more information on the EU Data Act and Samsung products.\r\nPicture Quality\r\nGreater clarity guaranteed - Crystal Processor 4K\r\nExperience enhanced 4K picture and crystal-clear sound with our Crystal Processor. Enjoy your favourite movies, shows and sports with quality visuals and sound.\r\nFeel the reality of the world on screen - 4K Resolution\r\nMake out the small details in every scene. 4K UHD resolution has 4x more pixels than regular FHD resolution — creating sharp, ultra-realistic images.\r\nMore about Picture Quality\r\nDepth and detail in every scene - HDR powered by HDR10+\r\nExperience depth and detail in every single frame. By dynamically optimising each scene, you can see dark dramas in new light and bright worlds in greater clarity. Whatever you're watching, watch it in greater depth and detail.\r\nYour visuals, boosted - 4K Upscaling\r\nEnjoy 4K picture quality for viewing your favourite movies, shows and YouTube videos. See everything upscaled into clearer, brighter and better picture.\r\nShows your content's true colours - PurColour\r\nSamsung's PurColour improves the quality of any image, uncovers hidden details, and helps show your content's true colours. See impressive colour, every time you watch.\r\nEnhanced depth - Contrast Enhancer\r\nEnjoy striking images with enhanced depth and colour contrast ratio.\r\nSound\r\nSamsung TVs and soundbars, the perfect harmony - Samsung Q-Symphony\r\nBoost your viewing experience with integrated sound from your TV and soundbar. Why let a soundbar or TV work solo when you can amp up your entertainment with even more powerful speakers that work together seamlessly, for a fully immersive sound experience.\r\nSound that tracks the action on-screen - Object Tracking Sound Lite\r\nHear onscreen action amplified from left-to-right as your entertainment unfolds. So you can hear a car fly along your screen or the crowd cheering all around you.\r\nTailored sound, so you hear every detail - Adaptive Sound\r\nExperience optimised audio for your viewing with every element of dialogue, music and sound effects individually tailored to what you're watching. Hear every word of a whispered exchange and feel every blast in a blockbuster set piece.\r\nDesign\r\nSlim in style, tidy in set-up - MetalStream Design\r\nOur MetalStream Design takes inspiration from aircraft engineering, using a single sheet of metal to create a slim, seamless and modern aesthetic. With a smooth back and clutter-free cabling, it looks great from all angles.\r\nGaming Experience\r\nGame all day - no console needed - Gaming Hub\r\nSamsung Gaming Hub brings together the biggest console and streaming games from Xbox and other industry-leading partners, all in on one place. With no downloads, storage limits or console required, just turn on your TV and play.\r\nStay one step ahead - Motion Xcelerator\r\nExperience clear picture and smooth performance with Motion Xcelerator. Samsung’s clear motion rate algorithms predict and automatically compensate frames, so your picture adapts as fast as your game.\r\nTizen OS Smart TV\r\nTailored recommendations from your favourite apps - Smart TV Powered by Tizen OS\r\nSpend less time searching and more time watching. With BBC iPlayer, Netflix, Disney+, YouTube, Xbox and more, get personalised recommendations and instant access to the latest shows and movies on the best streaming apps. Plus access to 1,000s of extra TV Shows and Movies on Samsung TV Plus - all for free.\r\nEntertainment for every day. Always for free - Samsung TV Plus\r\nWatch 1000s of TV shows and movies, all for free, anytime, anywhere you want with Samsung TV Plus. Get instant access to live and on demand entertainment like The Graham Norton Show and Poldark. Stream the latest news on Sky News and catch-up on kids shows, sports highlights and more with no strings attached.\r\nKeeping your private information private - Samsung Knox Security\r\nWith today's TVs holding your passwords and private payment information, Samsung Knox Security keeps your data protected with multi-layered security, constant system monitoring and updates and the automatic blocking of harmful attacks. Stay secured, stay entertained.\r\nSmart Experience\r\nOne place. All your smart devices - SmartThings\r\nConnect and control all your smart devices from your TV and phone. Program your smart heating, set your smart washer, get alerts when your food is ready, monitor your video doorbell! Make life easier for all your smart device routines with the simplicity of the SmartThings app.\r\nMonitor and reduce your energy consumption - AI Energy Mode\r\nSave energy with AI Energy Mode and SmartThings. With AI Energy Mode, your TV adjusts the brightness depending on the content you are watching and the surrounding light levels in your room to reduce overall energy consumption. Then, you can monitor the energy usage of your TV and other compatible devices through Map View on your TV.\r\nMore about SmartThings\r\nControl your TV from your phone - Quick Remote\r\nUse your smartphone as your remote. With Quick Remote, use your smartphone to change channels, adjust the volume, and more.\r\nSet your hands free - Universal Gestures\r\nTurn your wrist into the remote. Universal Gestures lets you control your TV with simple motions of your Galaxy Watch. Whether you're working out, cooking, or multitasking, easily control your TV with intuitive gestures.\r\nKey Features:\r\nSamsung Q-Symphony\r\nAudio Pre-selection Descriptor\r\nOTS Lite\r\nAdaptive Sound\r\nSamsung TV Plus\r\nWeb Browser\r\nSmartThings Hub / Matter Hub / IoT-Sensor Functionality / Quick Remote\r\nSamsung Health\r\nDaily+\r\nStorage Share\r\nClick to Search\r\nAuto Game Mode (ALLM)\r\nVRR\r\nHGiG\r\nGaming Hub\r\nAnalog Tuner\r\nTV Key Support\r\nAnynet+ (HDMI-CEC)\r\nEmbeded POP\r\nEPG\r\nIP Control\r\nEco Sensor\r\nAuto Power Saving\r\nFull Motion Slim Wall Mount Support (Y22)\r\nBox Contains:\r\nRemote Controller Model - TM1240A\r\nUser Manual\r\nPower Cable\r\nUE65U7000FKXXU",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 649.99,
  "image": "https://www.did.ie/cdn/shop/files/UE65U7000FKXXU-1_5000x.jpg?v=1757481257",
  "brand": "Samsung",
  "rating": 4.9,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"U7000F\""
    },
    {
      "name": "\"name\"",
      "value": "\"Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Metal Stream\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tizen\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dynamic Contrast\","
    },
    {
      "name": "\"value\"",
      "value": "\"HDR, HDR 10+, Mega Contrast\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motion Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"Motion Xcelerator\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"Filmmaker Mode\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"20W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption per Year\","
    },
    {
      "name": "\"value\"",
      "value": "\"151 kWh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"109\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"161 kWh/1000h\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Power Off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K 60Hz (for HDMI 1/2/3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wireless LAN Built-In\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1444.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"831.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806097277750\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K (3840 x 2160)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Upscaling\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Upscaling\""
    },
    {
      "name": "\"name\"",
      "value": "\"Micro Dimming\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD Dimming\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Booster\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"2CH\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bixby\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (Voice Ready)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Works with AI Speaker\","
    },
    {
      "name": "\"value\"",
      "value": "\"Alexa, Google Assistant\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi Device Experience\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mobile to TV, Sound Mirroring, Wireless TV On\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Broadcasting\","
    },
    {
      "name": "\"value\"",
      "value": "\"DVB-T2C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes(5.3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Audio Return Channel\","
    },
    {
      "name": "\"value\"",
      "value": "\"eARC/ARC\""
    },
    {
      "name": "\"name\"",
      "value": "\"RF In (Terrestrial / Cable input)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1/1(Common Use for Terrestrial)/0\""
    },
    {
      "name": "\"name\"",
      "value": "\"CI Slot\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bezel Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 Bezel-less\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Basic Feet\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Color\","
    },
    {
      "name": "\"value\"",
      "value": "\"Titan Gray\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motor Impaired Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Slow Button Repeat, Remote Control App\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hearing Impaired Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Closed Caption (Subtitle), Multi-output Audio, Sign Language Zoom\""
    },
    {
      "name": "\"name\"",
      "value": "\"Low Vision Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Audio Description, Zoom Menu and Text, High Contrast, SeeColors, Color Inversion, Grayscale, Auto Picture Off\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Supply\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC220-240V~ 50/60Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (Max)\","
    },
    {
      "name": "\"value\"",
      "value": "\"170 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand (Basic) (WxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1004.6 x 222\""
    },
    {
      "name": "\"name\"",
      "value": "\"Set Size with Stand (WxHxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1444.1 x 882.2 x 222\""
    },
    {
      "name": "\"name\"",
      "value": "\"VESA Spec (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"200 x 200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Set Weight with Stand (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Zigbee / Thread Module\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dongle Support\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security Update Period (At least 5 years)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 December 2030\""
    }
  ]
},
{
  "id": "37",
  "sku": "OLED65C54LA.AEK",
  "name": "LG Evo AI C5 65\" 4K OLED Smart TV  | OLED65C54LA.AEK",
  "description": "Key Features\r\nOLED evo Display with Brightness Booster\r\nSelf-lit OLED pixels provide perfect blacks and infinite contrast.\r\nBrightness Booster technology enhances luminance for vivid visuals, even in well-lit environments.\r\n100% Colour Fidelity and Colour Volume ensure accurate and rich color reproduction.\r\nα9 AI Processor Gen8\r\nAdvanced AI processing optimizes picture and sound quality in real-time.\r\nAI Super Upscaling enhances lower-resolution content to near-4K quality.\r\nAI Picture Pro and AI Sound Pro deliver personalized viewing and listening experiences.\r\nHDR Support\r\nCompatible with Dolby Vision, HDR10, and HLG formats for a dynamic range of brightness and color.\r\nFilmmaker Mode preserves the director's intent by maintaining original aspect ratios and frame rates.\r\nGaming Capabilities\r\nSupports 4K resolution at 144Hz refresh rate for smooth and responsive gameplay.\r\nNVIDIA G-SYNC and AMD FreeSync Premium compatibility reduce screen tearing and stuttering.\r\nGame Optimizer and Dashboard provide quick access to gaming settings.\r\nSmart Features with webOS 25\r\nUser-friendly interface with access to a wide range of streaming services and applications.\r\nAI Concierge offers personalized content recommendations based on viewing habits.\r\nVoice control through built-in Amazon Alexa and compatibility with Google Assistant.\r\nApple AirPlay 2 and HomeKit support for seamless integration with Apple devices.\r\nAudio Performance\r\n2.2-channel speaker system with a total output of 40W delivers clear and immersive sound.\r\nAI Sound Pro up-mixes audio to virtual 11.1.2 channels for a surround sound experience.\r\nSupports Dolby Atmos and DTS:X (pass-through) for high-quality audio formats.\r\nConnectivity Options\r\n4 x HDMI 2.1 ports with eARC support for high-bandwidth audio and video.\r\n3 x USB 2.0 ports for media playback and recording.\r\nOptical digital audio output and headphone jack for external audio devices.\r\nWi-Fi 6 and Bluetooth 5.3 for wireless connectivity.\r\nDesign and Dimensions\r\nUltra-slim profile with minimal bezels for a sleek and modern appearance.\r\nDimensions without stand: 1441 x 826 x 45.1 mm.\r\nWeight without stand: 16.6 kg.\r\nVESA mount compatible (300 x 200 mm) for flexible installation options.\r\nEnergy Efficiency\r\nEnergy efficiency class: F.\r\nPower consumption (SDR): 97W.\r\nPower consumption (HDR): 211W.\r\nStandby power consumption: 0.5W.\r\nOLED65C54LA.AEK",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 1999.99,
  "image": "https://www.did.ie/cdn/shop/files/1_7e2dd0b9-f04d-4bf3-b1dd-174d421c4ad0_5000x.png?v=1755611978",
  "brand": "LG",
  "rating": 4.4,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"LG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"Evo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ultra Slim\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"webOS 24\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"supports 4K 120Hz, eARC, VRR, ALLM, QMS (4 port)\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Version 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"PC in\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Audio Out (optical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1441\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"826\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Dimensions with Stand (WxHxD)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1441 x 880 x 230\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Stand (WxD)\","
    },
    {
      "name": "\"value\"",
      "value": "\"470 x 230\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Direction\","
    },
    {
      "name": "\"value\"",
      "value": "\"Down Firing\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"α9 AI Processor 4K Gen8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Colour Gamut\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED Colour\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Ultra HD (3,840 x 2,160)\""
    }
  ]
},
{
  "id": "38",
  "sku": "UE50U7000FKXXU",
  "name": "Samsung U7000F 50\" 4K Smart TV - Black | UE50U7000FKXXU",
  "description": "Click here for more information on the EU Data Act and Samsung products.\r\nPicture Quality\r\nGreater clarity guaranteed - Crystal Processor 4K\r\nExperience enhanced 4K picture and crystal-clear sound with our Crystal Processor. Enjoy your favourite movies, shows and sports with quality visuals and sound.\r\nFeel the reality of the world on screen - 4K Resolution\r\nMake out the small details in every scene. 4K UHD resolution has 4x more pixels than regular FHD resolution — creating sharp, ultra-realistic images.\r\nMore about Picture Quality\r\nDepth and detail in every scene - HDR powered by HDR10+\r\nExperience depth and detail in every single frame. By dynamically optimising each scene, you can see dark dramas in new light and bright worlds in greater clarity. Whatever you're watching, watch it in greater depth and detail.\r\nYour visuals, boosted - 4K Upscaling\r\nEnjoy 4K picture quality for viewing your favourite movies, shows and YouTube videos. See everything upscaled into clearer, brighter and better picture.2\r\nShows your content's true colours - PurColour\r\nSamsung's PurColour improves the quality of any image, uncovers hidden details, and helps show your content's true colours. See impressive colour, every time you watch.\r\nEnhanced depth - Contrast Enhancer\r\nEnjoy striking images with enhanced depth and colour contrast ratio.\r\nSound\r\nSamsung TVs and soundbars, the perfect harmony - Samsung Q-Symphony\r\nBoost your viewing experience with integrated sound from your TV and soundbar. Why let a soundbar or TV work solo when you can amp up your entertainment with even more powerful speakers that work together seamlessly, for a fully immersive sound experience.\r\nSound that tracks the action on-screen - Object Tracking Sound Lite\r\nHear onscreen action amplified from left-to-right as your entertainment unfolds. So you can hear a car fly along your screen or the crowd cheering all around you.\r\nTailored sound, so you hear every detail - Adaptive Sound\r\nExperience optimised audio for your viewing with every element of dialogue, music and sound effects individually tailored to what you're watching. Hear every word of a whispered exchange and feel every blast in a blockbuster set piece.\r\nDesign\r\nSlim in style, tidy in set-up - MetalStream Design\r\nOur MetalStream Design takes inspiration from aircraft engineering, using a single sheet of metal to create a slim, seamless and modern aesthetic. With a smooth back and clutter-free cabling, it looks great from all angles.\r\nGaming Experience\r\nGame all day - no console needed - Gaming Hub\r\nSamsung Gaming Hub brings together the biggest console and streaming games from Xbox and other industry-leading partners, all in on one place. With no downloads, storage limits or console required, just turn on your TV and play.\r\nStay one step ahead - Motion Xcelerator\r\nExperience clear picture and smooth performance with Motion Xcelerator. Samsung’s clear motion rate algorithms predict and automatically compensate frames, so your picture adapts as fast as your game.\r\nTizen OS Smart TV\r\nTailored recommendations from your favourite apps - Smart TV Powered by Tizen OS\r\nSpend less time searching and more time watching. With BBC iPlayer, Netflix, Disney+, YouTube, Xbox and more, get personalised recommendations and instant access to the latest shows and movies on the best streaming apps. Plus access to 1,000s of extra TV Shows and Movies on Samsung TV Plus - all for free.\r\nEntertainment for every day. Always for free - Samsung TV Plus\r\nWatch 1000s of TV shows and movies, all for free, anytime, anywhere you want with Samsung TV Plus. Get instant access to live and on demand entertainment like The Graham Norton Show and Poldark. Stream the latest news on Sky News and catch-up on kids shows, sports highlights and more with no strings attached.\r\nKeeping your private information private - Samsung Knox Security\r\nWith today's TVs holding your passwords and private payment information, Samsung Knox Security keeps your data protected with multi-layered security, constant system monitoring and updates and the automatic blocking of harmful attacks. Stay secured, stay entertained.\r\nSmart Experience\r\nOne place. All your smart devices - SmartThings\r\nConnect and control all your smart devices from your TV and phone. Program your smart heating, set your smart washer, get alerts when your food is ready, monitor your video doorbell! Make life easier for all your smart device routines with the simplicity of the SmartThings app.\r\nMonitor and reduce your energy consumption - AI Energy Mode\r\nSave energy with AI Energy Mode and SmartThings. With AI Energy Mode, your TV adjusts the brightness depending on the content you are watching and the surrounding light levels in your room to reduce overall energy consumption. Then, you can monitor the energy usage of your TV and other compatible devices through Map View on your TV.\r\nMore about SmartThings\r\nControl your TV from your phone - Quick Remote\r\nUse your smartphone as your remote. With Quick Remote, use your smartphone to change channels, adjust the volume, and more.\r\nSet your hands free - Universal Gestures\r\nTurn your wrist into the remote. Universal Gestures lets you control your TV with simple motions of your Galaxy Watch. Whether you're working out, cooking, or multitasking, easily control your TV with intuitive gestures.\r\nKey Features:\r\nWeb Browser\r\nSamsung TV Plus\r\nAdaptive Sound\r\nAudio Pre-selection Descriptor\r\nSamsung Q-Symphony\r\nTV Key Support\r\nSamsung Health\r\nDaily+\r\nStorage Share\r\nAuto Game Mode (ALLM)\r\nAnynet+ (HDMI-CEC)\r\nVRR\r\nAnalog Tuner\r\nEmbeded POP\r\nEco Sensor\r\nEPG\r\nAuto Power Saving\r\nIP Control\r\nHGiG\r\nFull Motion Slim Wall Mount Support (Y22)\r\nWebcam Support\r\nBox Contains:\r\nRemote Controller Model - TM1240A\r\nUser Manual\r\nPower Cable\r\nUE50U7000FKXXU",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 429.99,
  "image": "https://www.did.ie/cdn/shop/files/UE50U7000FKXXU-1_5000x.jpg?v=1757135376",
  "brand": "Samsung",
  "rating": 4.7,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"U7000F\""
    },
    {
      "name": "\"name\"",
      "value": "\"Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Metal Stream\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tizen\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Native Contrast\","
    },
    {
      "name": "\"value\"",
      "value": "\"High Contrast\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dynamic Contrast\","
    },
    {
      "name": "\"value\"",
      "value": "\"HDR, HDR 10+\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motion Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"Motion Xcelerator\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"Filmmaker Mode\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"20 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption per Year\","
    },
    {
      "name": "\"value\"",
      "value": "\"96 kWh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"69\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"112 kWh/1000h\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Power Off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wireless LAN Built-In\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1110.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"643.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806097277576\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"3840 x 2160\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Crystal Processor 4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Micro Dimming\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD Dimming\""
    },
    {
      "name": "\"name\"",
      "value": "\"Contrast Enhancer\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Upscaling\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Upscaling\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Booster\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Object Tracking Sound\","
    },
    {
      "name": "\"value\"",
      "value": "\"OTS Lite\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"2CH\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bixby\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (Voice Ready)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Works with AI Speaker\","
    },
    {
      "name": "\"value\"",
      "value": "\"Alexa\""
    },
    {
      "name": "\"name\"",
      "value": "\"SmartThings Hub / Matter Hub / IoT-Sensor Functionality / Quick Remote\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi Device Experience\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mobile to TV, Sound Mirroring, Wireless TV On\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Broadcasting\","
    },
    {
      "name": "\"value\"",
      "value": "\"DVB-T2C\""
    },
    {
      "name": "\"name\"",
      "value": "\"CI (Common Interface)\","
    },
    {
      "name": "\"value\"",
      "value": "\"CI+(1.4)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes(5.3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI (High Frame Rate)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K 60Hz (for HDMI 1/2/3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Audio Return Channel\","
    },
    {
      "name": "\"value\"",
      "value": "\"eARC/ARC\""
    },
    {
      "name": "\"name\"",
      "value": "\"RF In (Terrestrial / Cable input)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1/1(Common Use for Terrestrial)/0\""
    },
    {
      "name": "\"name\"",
      "value": "\"CI Slot\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bezel Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 Bezel-less\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Basic Feet\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Titan Gray\""
    },
    {
      "name": "\"name\"",
      "value": "\"Low Vision Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Audio Description, Zoom Menu and Text, High Contrast, SeeColors, Color Inversion, Grayscale\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hearing Impaired Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Closed Caption (Subtitle), Multi-output Audio, Sign Language Zoom\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motor Impaired Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Slow Button Repeat, Remote Control App\""
    },
    {
      "name": "\"name\"",
      "value": "\"Contrast\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mega Contrast\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Supply\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC220-240V~ 50/60Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (Max)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand (Basic) (WxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"747 x 199\""
    },
    {
      "name": "\"name\"",
      "value": "\"VESA Spec (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"200 x 200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Set Size with Stand (WxHxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1110.8 x 695.1 x 199\""
    },
    {
      "name": "\"name\"",
      "value": "\"Set Weight with Stand (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security Update Period (At least 5 years from launch of product)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 December 2030\""
    },
    {
      "name": "\"name\"",
      "value": "\"Zigbee / Thread Module\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dongle Support\""
    }
  ]
},
{
  "id": "39",
  "sku": "ARTV32HD",
  "name": "NordMende 32\" 720P Flat LED HD Smart TV - Black | ARTV32HD",
  "description": "Internet Apps Include:\r\nNetflix\r\nDisney Plus\r\nAmazon Prime\r\nYoutube\r\nSubscription may be Required to Access some Apps\r\nSaorview needs aerial feed\r\nSatellite needs dish feed\r\nRecord needs USB key or HDD",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 169.99,
  "image": "https://www.did.ie/cdn/shop/files/ARTV32HD-1_d682dbf7-e0db-4c31-b21c-15d7464cc452_5000x.jpg?v=1716189446",
  "brand": "NordMende",
  "rating": 4.8,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nordmende\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tivo Smart Tv\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Flat LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"32\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"HD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"26\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"26W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Play and Record\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Class for High Dynamic Range (HDR)\","
    },
    {
      "name": "\"value\"",
      "value": "\"G\""
    },
    {
      "name": "\"name\"",
      "value": "\"On Mode Power Demand in HDR\","
    },
    {
      "name": "\"value\"",
      "value": "\"45W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Networked Standby Mode Power Demand\","
    },
    {
      "name": "\"value\"",
      "value": "\"2W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Size Ratio\","
    },
    {
      "name": "\"value\"",
      "value": "\"16 : 9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution (pixels)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1366 x 768\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dolby Atmos\""
    },
    {
      "name": "\"name\"",
      "value": "\"Tv Bracket Size (vesa)(mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"75 x 75\""
    },
    {
      "name": "\"name\"",
      "value": "\"Satellite Tuner\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Model Year\","
    },
    {
      "name": "\"value\"",
      "value": "\"2024\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wireless Mirroring Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hotel Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDR10\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Panel Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"LCD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Supply Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Internal\""
    }
  ]
},
{
  "id": "40",
  "sku": "ARTV55UHD",
  "name": "NordMende 55\" 4K HDR Flat LED Smart TV - Black | ARTV55UHD",
  "description": "Alexa enabled\r\nThe voice-enabled assistant can be used to switch the TV on and off, change and select channels or inputs, and adjust volume.\r\nUsers only need to connect to Alexa once via the service's app.\r\nAlexa device required to use this functionality.\r\nDisplay:\r\n4K Dolby Vision\r\nMemc micro-dimming\r\nSuper-resolution\r\nUltra HD 4K\r\nAudio\r\nDolby audio Processing\r\nDTS - Dolby Trusurround\r\nSmart TV\r\nCompatible with google home\r\nInternet apps include\r\nRTE player\r\nYoutube\r\nNetflix\r\nAmazon Prime\r\nBroadcasting\r\nWorks with saorview\r\nSatellite tuner\r\nPVR ready - usb recording\r\nWireless mirroring display\r\nKey Features:\r\nHotel mode\r\nOne button Netflix start",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 399.99,
  "image": "https://www.did.ie/cdn/shop/files/ARTV55UHD-1_d63595cb-a926-490c-acdc-bca7beb5583e_5000x.jpg?v=1712053623",
  "brand": "NordMende",
  "rating": 4.4,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"NordMende\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tivo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Flat LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K HDR\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dynamic Contrast\","
    },
    {
      "name": "\"value\"",
      "value": "\"HDR 10+\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178 degrees\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178 degrees\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"F\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"77\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Satellite Tuner\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"RTE Player\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"VESA Size (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"200 x 200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memc Micro-Dimming\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hotel Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Recording\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wireless Mirroring Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"PVR Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "41",
  "sku": "OLED48C54LA.AEK",
  "name": "LG C54 48\" 4K OLED Evo AI Smart TV | OLED48C54LA.AEK",
  "description": "Next-level visual detail with the brilliant alpha 9 AI Processor Gen8\r\nOur processor's AI engine analyzes and upscales every frame in detail. By recognizing faces, it delivers not only 4K visual quality, but enhanced facial expressions and depth.\r\nApprox.1.7x NPU Greater AI Neural Processing\r\n1.7x CPU Faster Operation\r\n2.1x GPU Improved Graphics\r\nExperience Perfect Black OLED, only with LG OLED\r\nPerfect Black even in bright or dark spaces\r\nPerfect Black is UL-verified and delivers true black levels to enhance perceived brightness and contrast, whether it's bright or dark around you.\r\nPerfect Colour\r\n100% Colour Volume and 100% Colour Fidelity certified. Enjoy accurate, vibrant colours even in sunlight or dark environments.\r\nAI Picture Pro brings every frame to life\r\nAI Super Upscaling and OLED Dynamic Tone Mapping analyze each frame's elements to enhance resolution, brightness, depth, and clarity.\r\nAI Magic Remote completes the AI experience\r\nControl your TV easily with AI magic remote — no extra device needed! With a motion sensor and scroll wheel, point and click to use it like an air mouse or simply speak for voice commands.\r\nAI Voice ID\r\nLG AI Voice ID recognizes each user's unique voice signature and offers personalized recommendations the moment you speak.\r\nAI Search\r\nAsk your TV anything. Built-in AI recognizes your voice and swiftly provides personalized recommendations to your requests. You can also get additional results and solutions with Microsoft Copilot.\r\nAI Chatbot\r\nInteract with the AI Chatbot through your AI Magic Remote and address all concerns from configuring settings to troubleshooting. AI can understand user intent and will provide immediate solutions.\r\nAI Concierge\r\nOne short press on the AI button on your remote opens up your AI Concierge which provides customized keywords and recommendations based on your search and watching history.\r\nAI Picture Wizard\r\nAdvanced algorithms learn your preferences by going through 1.6 billion image possibilities. Based on your selections, your TV creates a personalized picture just for you.\r\nAI Sound Wizard\r\nChoose the audio you like from a selection of sound clips. From 40 million parameters, AI creates a tailored sound profile tuned to your preferences.\r\nJust say “Hi LG” to start interacting with your TV\r\nYour TV’s AI is always ready for your requests. Without even pressing a button, simply say “Hi LG”, it prompts the AI to start listening for your requests.\r\nNew upgrades for 5 years with award-winning webOS Re:New Program\r\nGet full upgrades and enjoy the benefits of the latest features and software. A CES Innovation Awardee for the cybersecurity category, feel safe knowing webOS keeps your privacy and data, secure.\r\nHome Hub, the all-in-one platform for your smart home\r\nSeamlessly manage various LG home appliances, alongside your Google Home devices and more. Experience the ultimate convenience of controlling your whole home through a single, intuitive dashboard.\r\nAI Sound Pro fine-tunes your sound for impact\r\nVoice clarity with Al Voice Remastering\r\nNo more clumsy volume adjustments to hear dialogue during loud scenes. Al Voice Remastering extracts and enhances each voice from the audio mix so every conversation can be easily understood.\r\nDynamic Sound Booster powered by Al Processor\r\nAl processing enhances TV sound for a more powerful sound experience.\r\nAll-encompassing surround sound with virtual 11.1.2 channels\r\nGet the surround sound experience with just your LG TV. Al uses deep learning algorithms to make it feel as if sound is coming from 11.1.2 channels all around you.\r\nEnrich your sound with LG TV and LG Soundbar\r\nWOW Orchestra, immersive sound through perfect synergy\r\nLG OLED TVs and LG Soundbars are the perfect match, made to work harmoniously together to provide multi-surround sound environments.\r\nUltra Slim Design\r\nYour TV’s sleek frame redefines a modern look and makes viewing more immersive.\r\nMaximize the fun, use multiple screens with Multi View\r\nMake the most of your TV with Multi View. Mirror your devices through Google Cast and AirPlay. Split your screen into two separate views for seamless multi-screen entertainment.\r\nStream a variety of content. Free\r\nLG's exclusive streaming service, LG Channels, puts a wide selection of live and on-demand channels at your fingertips for free.\r\nCost-free. Contract-free. Cable-free\r\nAll you need to do is tune in and start watching without worrying about hidden costs or installing a set-top box.\r\nNo Payment\r\nNo Subscription\r\nNo Set-top\r\nGaming Portal turns your TV into the ultimate gaming hub\r\nPlay thousands of games directly on your LG TV with access to GeForce NOW, Amazon Luna, Blacknut, Boosteroid and now Xbox app! Enjoy a wide variety of gaming experiences—from AAA titles with gamepad to casual games playable with your remote.\r\nUltimate Gameplay\r\nExperience peak gaming with G-Sync compatibility, 144Hz VRR, 0.1ms Pixel Response Time, AMD FreeSync Premium, and ClearMR 9000 certification. Get your game on without lag or motion blur.\r\nBest OLED TV for Movies\r\nWatch movies come to life in your home cinema through FILMMAKER MODE with Ambient Light Compensation that adjusts to environmental lighting for picture quality that meets top filmmaker standards.\r\nDolby Vision & Ambient FilmMaker Mode\r\nExperience cinema as the director intended with Dolby Vision and FILMMAKER MODE with Ambient Light Compensation that adapts to surroundings and keeps visuals as close as possible to its original form.\r\nDolby Atmos\r\nLet lifelike surround sound move all around you, making you feel like you're in the center of all the action.\r\nMade with the environment in mind\r\nTrusted global institutions have recognized LG TV's eco-conscious efforts. Now certified for resource efficiency by Intertek.\r\nKey Features:\r\n4K picture quality, upscaled visual and surround sound from the alpha 9 AI Processor Gen8\r\nTrue black levels in every pixel create stunning contrast, depth, and detail\r\n100% Colour Fidelity for accurate lifelike colours. 100% Colour Volume for richer hues\r\nBrighter visuals from the new light boosting algorithm of Brightness Booster\r\nNew AI button, voice controls, drag and drop functions on the AI Magic Remote\r\nBox Contains:\r\nRemote Magic Remote MR25GA\r\nPower Cable (TV Attached)\r\nOLED48C54LA.AEK",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 1349.99,
  "image": "https://www.did.ie/cdn/shop/files/OLED48C54LA.AEK-1_5000x.jpg?v=1749942973",
  "brand": "LG",
  "rating": 4.8,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"LG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"C54\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120 Native (VRR 144)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"webOS 25\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"48\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"α9 AI Processor 4K Gen8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motion Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED Motion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"Filmmaker Mode\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"40W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"64\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"115 kWh/1000h\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Under 0.5W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"4ea (supports 4K 120Hz, eARC, VRR, ALLM, QMS)\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Audio Out (optical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1071\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"46.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"618\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806096353868\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Ultra HD (3,840 x 2,160)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Colour Gamut\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED Colour\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Dimensions with Stand (WxHxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1071 x 675 x 230\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Stand (WxD) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"470 x 230\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV Weight with Stand (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"VESA Mounting (WxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"300 x 200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Response Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Less than 0.1ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"AI Genre Selection\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (SDR/HDR)\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDR (High Dynamic Range)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dolby Vision / HDR10 / HLG\""
    },
    {
      "name": "\"name\"",
      "value": "\"AI Upscaling\","
    },
    {
      "name": "\"value\"",
      "value": "\"α9 AI Super Upscaling 4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"HFR (High Frame Rate)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K 120 fps (HDMI, RF, USB)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dynamic Tone Mapping\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (OLED Dynamic Tone Mapping Pro)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 modes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimming Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pixel Dimming\""
    },
    {
      "name": "\"name\"",
      "value": "\"LG Sound Sync\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound Mode Share\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Surround Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (2 Way Playback)\""
    },
    {
      "name": "\"name\"",
      "value": "\"AI Sound\","
    },
    {
      "name": "\"value\"",
      "value": "\"α9 AI Sound Pro (Virtual 11.1.2 Up-mix)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clear Voice Pro\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (AI Voice Remastering)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker System\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.2 channel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Direction\","
    },
    {
      "name": "\"value\"",
      "value": "\"Down Firing\""
    },
    {
      "name": "\"name\"",
      "value": "\"AI Acoustic Tuning\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Codec\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC4, AC3(Dolby Digital), EAC3, HE-AAC, AAC, MP2, MP3, PCM, WMA, apt-X (Refer to manual)\""
    },
    {
      "name": "\"name\"",
      "value": "\"WOW Orchestra\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Analog TV Reception\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital TV Reception\","
    },
    {
      "name": "\"value\"",
      "value": "\"DVB-T2/T (Terrestrial), DVB-C (Cable), DVB-S2/S (Satellite)\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Audio Return Channel\","
    },
    {
      "name": "\"value\"",
      "value": "\"eARC (HDMI 2)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (v 5.3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes (Wi-Fi 6)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RF Input (Antenna/Cable)\","
    },
    {
      "name": "\"value\"",
      "value": "\"x2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Supply (Voltage, Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"AC 100~240V 50-60Hz\""
    }
  ]
},
{
  "id": "42",
  "sku": "K65XR80PU",
  "name": "Sony Bravia 8 65\" 4K UHD Smart TV - Dark Silver | K65XR80PU",
  "description": "Aesthetic slimness, blends in beautifully\r\nThe perfect centrepiece for your living space with slim styling that harmonises in any environment, lifelike pictures and atmospheric sound.\r\nDesign\r\nHarmonic Presence. Slim and chic for your living space.\r\nTakes centre stage in any room. Our new slim and thin TV design graces your living space with shapes, materials, colours and surface treatments that blend beautifully with interior décor, walls and home theatre products.\r\nSlim One Slate. Beautiful from everywhere.\r\nSleek and seamless. Our Slim One Slate concept fuses screen and bezel into a single slate, maximising your experience. Its flush one-piece back accentuates the sleek lines and thin profile of the TV.\r\nSeamlessly blends into your wall\r\nBecomes part of your room. With our slim bezel, a thin profile and side edges coloured and treated to blend with walls, this TV is a natural for wall mounting.\r\nVibration finish. Harmonises with your home.\r\nDesigned with an almost invisible bezel. Its naturally warm, smudge-resistant texture blends seamlessly with interior decor, walls and BRAVIA Theatre.\r\nPerfectly integrates TV and soundbar, almost no stand visible\r\nCleverly concealed. Our Underlay Stand is a thin, flat steel plate designed with a metallic hairline finish. Stack BRAVIA Theatre on top of the stand and it virtually disappears.\r\nMulti-purpose stand fits your style\r\nAbsolute flexibility. Our 4-way stand gives you the choice of an outside position, an inside position for smaller shelves or two soundbar positions to meet your viewing preference.\r\nClutter-free from every angle\r\nNo unsightly cables trailing across tabletops. The rear cover keeps wires neatly hidden for a clutter-free look from the front, back and sides.\r\nPicture\r\nPure black OLED, bright and beautiful\r\nBrilliant pictures. We’ve taken the infinite blacks and stunning detail of OLED for astonishing texture and realism.\r\nOver 8 million self-lit pixels, intense brightness and contrast\r\nThe pinnacle of precision. Our OLED screen individually and expertly controls 8 million self-illuminating pixels, turning each one on or off to dark and light for deeper blacks and more dazzling colours.\r\nEvery scene brighter with brilliant colour and contrast\r\nMore colour and contrast in highlights. With a high luminance panel (1) and temperature sensor (2), this TV with XR Contrast Booster precisely controls light for brighter pure black pictures.\r\nOver a billion vivid, real-world colours\r\nSee the world’s colours with all the vibrance of real life. Our XR Triluminos Pro reproduces over a billion of them with the subtle differences from saturation and hue that enables natural shades in every detail.\r\nClear pictures. Refined and upscaled to 4K.\r\nYour favourite films, enhanced and enriched with extra detail. XR Clear Image uses a custom database of textures to intelligently convert any content to near 4K quality, whatever the source.\r\nEven fast-moving action stays clear and blur-free\r\nAll the action, free of blur and judder. XR OLED Motion detects and analyses visual elements on successive frames, then creates and inserts extra frames between the originals for smoother scenes.\r\nUnmatched realism with XR Processor\r\nPowered for precision. Our XR Processor features a scene recognition system that detects and analyses data with flawless accuracy, then optimises the picture for ultimate realism.\r\nBeautiful colours from any angle\r\nWatching TV from the sides is now as satisfying as from the centre. Our OLED panel keeps colours consistent and true, wherever you're watching.\r\nBring cinematic pictures home\r\nDive into cinema-like visuals at home. Our home entertainment picture quality expertise helps us faithfully reproduce the creator’s vision with Studio Calibrated modes developed through collaboration with Sony and the world’s top streaming services.\r\nSound\r\nScreen speaker, always cinematic\r\nBring cinema home. Actuators behind the screen vibrate and turn it into a speaker that delivers clear and immersive sound from the centre with the same sound structure as the cinema. The newly equipped tweeter brings out the surround feel to provide a cinema-like experience.\r\nSound from the screen, precisely matching action\r\nSound and pictures, perfectly in sync. Acoustic Surface Audio + with tweeter turns every part of the screen into a powerful speaker that emits sound from exactly the right place in the scene. Hear dialogue straight from the actor and bring the theater-like experience to your home.\r\nCrystal clear voice. Precise dialogue.\r\nNo more muffled voices. Our new Voice Zoom 3 recognises human dialogue through AI machine learning and amplifies or reduces its volume so even small dialogue sounds loud and clear. Works with our home theatre products too.\r\nIntelligent processing upscales ordinary stereo sound to extraordinary 3D surround.\r\nBe immersed. Our 3D Surround Upscaling creates virtual surround from above and the sides using just the TV speakers. Even 2ch and 5.1ch audio is upscaled to immersive 5.1.2ch sound. What's more, Dolby Atmos and DTS:X support provides unforgettable spatial sound.\r\nHome Entertainment\r\nWith BRAVIA Theatre, home becomes cinema\r\nFill every corner of your room with soul-stirring cinematic sound. Pairing BRAVIA with BRAVIA Theatre brings the emotion and excitement of a movie theatre home, an unmatched audio-visual experience.\r\nAll-round cinematic, go beyond conventional virtual surround sound\r\nIt’s nothing short of revolutionary. Our 360 Spatial Sound Mapping technology creates phantom speakers beyond physical speakers for a cinema-like layout and true movie theatre entertainment at home.\r\nSound precisely matches what's on screen\r\nSound is adjusted as one integrated speaker system. Acoustic Center Sync enables our home theatre equipment to use BRAVIA as a centre speaker so that sound comes from the screen rather than just the soundbar.\r\nReady for 360 Spatial Sound Personalizer\r\nTailor your Dolby Atmos and DTS:X experience by combining our wearable speaker or BRAVIA Theatre U with BRAVIA for spatial surround. Works with some Sony Headphones too.\r\nControl your BRAVIA Theatre effortlessly\r\nEasily control features such as sound field and volume using just the TV remote. With an integrated UI, soundbar sound settings automatically appear on the BRAVIA Quick Settings menu.\r\nSony | BRAVIA Connect app\r\nControl BRAVIA and BRAVIA Theatre from your smartphone. With the BRAVIA Connect app, you can adjust volume and settings and even check your set up without using the remote or on screen men\r\nHDMI connection. Easier for everyone.\r\nNever again have trouble connecting your soundbar and TV via HDMI. Tactile dots on the ARC/ACS terminal makes linking up easier for everyone.\r\nSingle view, simultaneous sound\r\nOur TV with simultaneous sound output lets you listen to a show on your headphones while your partner listens to the same show through the TV speakers. You can also change the volume using Bluetooth devices separately.\r\nSmart - Entertainment you love. With help from Google.\r\nGoogle TV brings together movies, shows, and more from across your apps and subscriptions and organises them just for you.\r\nEco - Love entertainment. Love the planet.\r\nGreat pictures and sound should never compromise the environment. We work tirelessly to help reduce our impact on the planet.\r\nGame - Game time. Be invincible.\r\nBRAVIA captures the awesome graphics and soundscapes of today’s games. Want more? Pair with a PlayStation5 console for absolute immersion.\r\nKey Features:\r\nConnectivity\r\nBluetooth Profile Support - Version 5.3,HID (mouse/keyboard connectivity)/HOGP (Low Energy device connectivity)/SPP(Serial Port Profile)/A2DP (stereo audio)/AVRCP (AV remote control)\r\nChromecast Built-In\r\nApple Airplay\r\nApple Homekit\r\nBravia Sync (Including HDMI-CEC)\r\nSimultaneous Sound Output with TV Speaker - Bluetooth A2DP Device\r\nSound (Processing)\r\nDolby Audio Format Support - Dolby Audio, Dolby Atmos\r\nDTS Audio Format Support - DTS Digital Surround, DTS Express, DTS-HD Master Audio, DTS-HD High Resolution Audio, DTS :X\r\n3D Surround Upscaling\r\nReady for 360 Spatial Sound Personalizer\r\nAcoustic Center Sync\r\nSoftware\r\nEco Dashboard\r\nVoice Search\r\nBuilt-In Mic Switch\r\nElectronic Program Guide (EPG)\r\nControl Menu\r\nInternet Browser\r\nApplication Store - Google Play Store\r\nOn/Off Timer\r\nSleep Timer\r\nTeletext\r\nAuto Calibration with Calman\r\nAccessibility\r\nScreen Reader\r\nAudio Description (Audio Key)\r\nColour Inversion\r\nClosed Caption - Subtitle\r\nText Magnification\r\nAccessibility Shortcut\r\nVoice Search\r\nMenu Timeout Setting\r\nPower-On Volume Settings\r\nTalkback\r\nSwitch Access\r\nBox Contains:\r\nAC Power Cord\r\nBatteries\r\nOperating Instructions\r\nQuick Setup Guide\r\nRemote Control\r\nTable Top Stand\r\nUSB Type-C Cable\r\nVoice Remote Control\r\nK65XR80PU",
  "category": "Appliances > Home Appliances > Smart TV",
  "price": 2299.99,
  "image": "https://www.did.ie/cdn/shop/files/K65XR80PU-1_5000x.jpg?v=1746454321",
  "brand": "Sony",
  "rating": 4.7,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Sony\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dark Silver\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bravia 8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Seamless Edge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Saorview Approved\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Irish Digital Ready\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"Is Smart TV?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Has Wifi?\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (right/left)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178 Degrees\""
    },
    {
      "name": "\"name\"",
      "value": "\"Viewing Angle (up/down)\","
    },
    {
      "name": "\"value\"",
      "value": "\"178 Degrees\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Mode Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"Vivid, Standard, Cinema, Professional, Calm, Photo, IMAX Enhanced, Dolby Vision (Vivid/Bright/Dark/Game), FPS game, RTS game\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"50W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speakers\","
    },
    {
      "name": "\"value\"",
      "value": "\"5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption kWh/1000h\","
    },
    {
      "name": "\"value\"",
      "value": "\"83\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption - On Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"110 kWh/1000h\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (standby)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K120/eARC/VRR/ALLM/SBTM(Source-Based Tone Mapping)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ethernet\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"PC in\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Audio Out (optical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1442\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"37\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"829\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"22.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"4548736164840\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimension of TV With Stand (Narrow Position) (W X H X D)\","
    },
    {
      "name": "\"value\"",
      "value": "\"144.2 × 85.5 × 24.8 cm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimension of TV With Stand (Soundbar Position) (W X H X D)\","
    },
    {
      "name": "\"value\"",
      "value": "\"144.2 × 90.9 x 24.8 cm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Width (Standard Position) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1244\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Width (Soundbar Position) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1244\""
    },
    {
      "name": "\"name\"",
      "value": "\"Vesa Hole Pitch (W X H)\","
    },
    {
      "name": "\"value\"",
      "value": "\"300 x 300\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight of TV With Stand (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"23.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Standard\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi Certified 802.11a/b/g/n/ac/ax\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4GHz/5GHz/6GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rf Input (Terrestrial/Cable)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"IF Input (Satellite)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDCP\","
    },
    {
      "name": "\"value\"",
      "value": "\"HDCP2.3(for HDMI1/2/3/4)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"3840 x 2160\""
    },
    {
      "name": "\"name\"",
      "value": "\"Picture Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"XR Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Contrast Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"XR Contrast Booster 15, Dynamic Contrast Enhancer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour Enhancement\","
    },
    {
      "name": "\"value\"",
      "value": "\"XR TRILUMINOS PRO, Live Colour Technology\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Acoustic Surface Audio+, Sound Positioning Tweeter\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Configuration\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 x Actuator, 2 x Tweeter, 1 x Subwoofer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Smart TV\","
    },
    {
      "name": "\"value\"",
      "value": "\"Google TV\""
    },
    {
      "name": "\"name\"",
      "value": "\"On-Board Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"32GB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Consumption (Networked Standby Mode)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.00W(Wi-Fi) / 2.00W(LAN) / 0.50W(CEC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Requirements (Voltage/Frequency)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50 Hz, 220 V - 240 V AC\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Saving Mode / Back Light Off Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stand Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"4way position(Outside/Inside/Ouside for Soundbar/Inside for Soundbar)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Tuners (Terrestrial/Cable)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2(Digital)/1(Analog)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Tuners (Sat)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"TV System (Analog)\","
    },
    {
      "name": "\"value\"",
      "value": "\"B/G,D/K\""
    },
    {
      "name": "\"name\"",
      "value": "\"CI+\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "43",
  "sku": "E1504GA-NJ9096W",
  "name": "Asus Vivobook Go 15 Intel Core i3 15.6\" 8GB/128GB Laptop - Cool Silver | E1504GA-NJ9096W",
  "description": "It’s light. It’s compact. It’s the ASUS Vivobook Go 15 OLED, and it’s designed to make you productive and keep you entertained wherever you go! With its 180° lay-flat hinge, physical webcam shield and loads of thoughtful design features including a gorgeous OLED display Vivobook Go 15 OLED is the laptop that sets you free!\r\nDisplay - Clearly superior display\r\nVivobook Go 15 OLED has stunningly crisp and clear visuals, with a reduced risk of eye strain during long viewing sessions thanks to its TUV Rheinland eye-care certified OLED panel. The NanoEdge slim-bezel design gives you more screen space for multitasking and immersive viewing.\r\nASUS OLED Display - 5 reasons to choose ASUS OLED laptops\r\n100% DCI-P3 best-in-class color gamut\r\nVivid displays for precise creativity, color work and vibrant visual entertainment.\r\n70% less harmful blue light\r\nWith lower harmful blue-light levels, OLED offers better eye care and sleep quality.\r\nClearer images at any brightness\r\nRich colors even at low brightness — always stunning.\r\nDisplayHDR True Black 500\r\nThe deep blacks allow you to see previously unseen details in dark movie scenes.\r\n0.2 ms fast response time on any laptop\r\nUp to 50 times faster response time for smooth action.\r\nPerformance - Missions accomplished!\r\nVivobook Go 15 OLED is powered by up to an Intel Core i3-N305 processor, 8 GB of speedy DDR4 memory and 512 GB of storage to help you complete all your productivity missions.\r\nBattery - Fast charging\r\nVivobook Go 15 OLED supports fast charging, so you can charge a low battery to 60% in as little as 49 minutes. You’ll be up and running quicker than ever!\r\nAudio - A new perspective on laptop audio\r\nDesigned with help from the audio experts at Dirac, a professional audio solution provider, the audio system delivers the most immersive, clear, and balanced sound experience you’ve ever heard on a PC, laptop or tablet. You’ll hear a wider and deeper soundscape than you could imagine, unleashing the full audio potential of your laptop.\r\nVolume Booster - Upgrade your audio experience\r\nASUS Audio Booster uses unique audio algorithms to boost audio volume up to 1.5x and take your audio experience to the next level.\r\n180° Hinge - Wide open for sharing\r\nVivobook Go 15 OLED features a precision-engineered, 180° lay-flat hinge that makes it easy to share content or collaborate with others.\r\nErgoSense - ASUS ErgoSense keyboard, comfortable typing experience\r\nYour comfort is our highest priority. That’s why the ASUS ErgoSense keyboard has an incredibly satisfying feel, with the optimum key bounce and travel calculated with fine-tuned precision. Experience the ErgoSense keyboard and you’ll soon find yourself cruising effortlessly through your work.\r\nFull-sized keyboard 19.05 mm\r\nThe full-size 19.05 mm key pitch is the same as a desktop keyboard so you can whizz through your work with superb typing comfort and accuracy.\r\nDished key caps 0.2 mm\r\nThe 0.2 mm key-cap dish is designed to match the shape of your fingertips so your fingers are gently guided to the ideal contact point with the keys.\r\nLong key travel 1.4 mm\r\nThe long 1.4 mm key travel lets you type without having to use too much force. And the special ASUS-designed rubber dome guarantees your click force is met with just the right tactile bump you need for a nice grip.\r\n0.1 mm key cap relief\r\nWhen fully depressed, the keys on the ErgoSense keyboard don’t sink below the level of the keyboard deck. The key caps remain at least 0.1 mm above the chassis surface, providing you with a comfortable, ergonomic typing experience.\r\nEnhanced number key layout\r\nBlitz through data-crunching tasks with the enhanced number key layout! This features hotkeys for the calculator, CE and +/- functions, along with increased spacing to match the full-size key pitch for more intuitive number entry.\r\nOptimal click ratio: Engineered to perfection\r\nThe feel of a keyboard depends on the crucial ratio between the peak force (also known as the actuation force) and the contact force. Peak force occurs when you press down on the key and reach the maximum force that the key’s underlying rubber dome can withstand without deflecting. Contact force occurs when the bottom of the key touches the circuit board to trigger an electronic signal, which in turn generates the action appropriate to the key. To achieve the most natural feel for a keyboard, ASUS keyboard experts have scientifically determined that the optimal ergonomic click ratio for a key is between 45-60%. These forces are precisely measured and tuned using the ASUS-designed rubber domes beneath the keys.\r\nUser Experience - User friendly design\r\nUnlock with one touch\r\nAccessing your device has never been easier or more secure! With the optional fingerprint sensor5 in the touchpad and Windows Hello, there’s no need to type in your password every time — all you need is a single touch!\r\nPhysical webcam privacy shield\r\nVivobook Go 15 OLED takes your privacy and security seriously. There’s an integrated privacy shield that slides over the webcam for instant privacy, shielding you from prying eyes and disturbances.\r\nConnectivity - Perfect in every detail\r\nVivobook Go 15 OLED keeps you fully connected with its comprehensive I/O ports. There are a USB-C 3.2 Gen 1 port, a USB 3.2 Gen 1 Type-A ports, a USB 2.0 port, HDMI output and an audio combo jack so it’s easy to connect all your existing peripherals, displays and projectors.\r\nWiFi - Fine-tuned with ASUS WiFi Master technology\r\nVivobook Go 15 OLED offers a comprehensive range of wireless connectivity. WiFi 6E (802.11ax) allows you to load online content in the blink of an eye.\r\nMilitary-grade - World’s most strictly tested US military-grade laptop durability\r\nASUS laptops are engineered with extraordinary toughness meet the exacting US MIL-STD-810H military-grade standard, undergoing 12 rigorous test methods and 26 punishing test procedures — exceeding industry standards. The upshot is a range of products that are renowned for reliability and durability. These factors also inherently benefit longevity and thus sustainability, so you can work, travel or relax with the confidence that your ASUS laptop is ready for the real world — today, and long into the future.\r\nShock Test\r\nVibration Test\r\nHigh Temperature Test\r\nLow Temperature Test\r\nSand and Dust Test\r\nAltitude Test\r\nFreeze and Thaw Test\r\nHumidity Test\r\nTemperature Shock Test\r\nSolar Radiation Test\r\nMechanical Vibration Test\r\nExplosive Atmosphere Test\r\nAI Noise Cancelation - Next-level AI noise-canceling audio technology\r\nTo provide exceptional remote-working and video-conferencing experiences, features ASUS AI Noise-Canceling Technology that employs machine learning in order to isolate unwanted noise from human speech. This technology helps to filter out ambient noise for optimum group conference-call quality. The ASUS AI Noise-Canceling Microphone feature in the MyASUS app can filter out ambient noise so you’ll hear what everyone else is saying.\r\nConference Call - Conference calls with more possibilities\r\nConference calls can be single-presenter or multi-presenter, gathered around a single laptop with voices coming from various directions. With the upgraded system enabled via the MyASUS app, it detects and optimizes audio from either one direction or from all directions ensuring top conference call audio quality.\r\nSingle presenter conference call\r\nSingle-presenter conference call mode can filter out noise and other voices, and ensures only the voice in front of laptop can be heard. When you switch on the Target Speaker Tracking mode it can even target and track new talkers within a 180° arc, making the feature ideal for recording large groups as well as for individuals.\r\nMulti-presenter conference call\r\nMulti-presenter conference call mode filters out ambient noise whilst identifying multiple voices from all directions and distances, so all voices can be heard more clearly.\r\n3DNR - Standout webcam effect ASUS 3DNR\r\nASUS 3D Noise Reduction (3DNR) Technology significantly upgrades the webcam image clarity for clearer conference calls.\r\nSoftware - Truly personalized workflow\r\nMyASUS hosts a collection of handy ASUS apps and tools that help you get more out of your laptop. GlideX is a powerful cross-device screen-sharing solution. ScreenXpert helps you to manage app windows across displays connected to your ASUS PC, giving you full control of your workflow!\r\nMyASUS\r\nMyASUS provides easy access to ASUS apps that are designed to help you maintain your system, update your software, optimize your PC’s performance, and contact ASUS for after-sales support.\r\nGlideX\r\nGlideX is a cross-device screen-sharing solution, with Mirror and Extend features that give you a bigger and better space for work and play. The Unify Control feature lets you use a single mouse and keyboard set to control different devices from one PC, across different OSes, so you don’t need to switch between devices. GlideX optimizes your workflow in the blink of an eye!\r\nScreenXpert for ASUS PCs\r\nScreenXpert for ASUS PCs which you can download from Microsoft Store or find in your PC’s Start menu helps you to manage app windows across displays connected to your ASUS PC and puts you in full control of your workflow!\r\nKey Features:\r\nKeyboard & Touchpad\r\nChiclet Keyboard, 1.4mm Key-travel, Precision touchpad\r\nBacklit Chiclet Keyboard, 1.4mm Key-travel, Precision touchpad\r\nMyASUS Features\r\nSystem diagnosis\r\nBattery health charging\r\nSplendid\r\nTru2Life\r\nFunction key lock\r\nWiFi SmartConnect\r\nLink to MyASUS\r\nTaskFirst\r\nLive update\r\nAI Noise Canceling\r\nMicrosoft Office\r\n1-Month trial for new Microsoft 365 customers. Credit card required.",
  "category": "Laptops & Gaming > Laptops",
  "price": 449.99,
  "image": "https://www.did.ie/cdn/shop/files/E1504GA-NJ9096W-1_5000x.jpg?v=1757603621",
  "brand": "Asus",
  "rating": 4.9,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Asus\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cool Silver\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.6\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"FHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1920 x 1080\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Windows 11 Pro\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"1x HDMI 1.4, 1x 3.5mm Combo Audio Jack, 1x DC-in\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"720p HD Camera with Privacy Shutter, Array Microphone\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i3-N305\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"3rd Level Cache (MB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel UHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"1x USB 2.0 Type-A, 1x USB 3.2 Gen 1 Type-A, 1x USB 3.2 Gen 1 Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"360.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"232.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.63\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\","
    },
    {
      "name": "\"value\"",
      "value": "\"UFS 2.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\","
    },
    {
      "name": "\"value\"",
      "value": "\"DDR4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aspect Ratio\","
    },
    {
      "name": "\"value\"",
      "value": "\"16:9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cortana Voice-Recognition\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Network and Communication\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 6E(802.11ax) (Dual band) 1*1, Bluetooth 5.3 Wireless Card\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built-in Apps\","
    },
    {
      "name": "\"value\"",
      "value": "\"MyASUS, ScreenXpert, GlideX\""
    },
    {
      "name": "\"name\"",
      "value": "\"Military Grade\","
    },
    {
      "name": "\"value\"",
      "value": "\"US MIL-STD 810H military-grade standard\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ecolabels & Compliances\","
    },
    {
      "name": "\"value\"",
      "value": "\"RoHS, REACH\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security\","
    },
    {
      "name": "\"value\"",
      "value": "\"Trusted Platform Module (Firmware TPM), McAfee\""
    }
  ]
},
{
  "id": "44",
  "sku": "SUM5606WA-RJ090W",
  "name": "Asus Zenbook S 16 AMD Ryzen AI 9 16\" 24GB/1TB Laptop - Scandinavian White | SUM5606WA-RJ090W",
  "description": "Key Features:\r\n78Wh Long-lasting Battery\r\nBig Sound 6 Speakers with Dolby Atmos\r\nPrivacy Protection - Window Passkey Microsoft Pluton IR Webcam\r\nTouchpad Smart Gesture\r\nQuiet Ambient Cooling\r\n3522 CNC machine cooling vents",
  "category": "Laptops & Gaming > Laptops",
  "price": 1599.99,
  "image": "https://www.did.ie/cdn/shop/files/UM5606_White_view-03__2400x2400_47f6d364-7ccd-4825-abb1-dcb44dfadff9_5000x.jpg?v=1754241469",
  "brand": "Asus",
  "rating": 4.4,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Asus\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Scandinavian White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2880 x 1800\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Windows 11 Home\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 x HDMI 2.1 TMDS, 1 x 3.5mm Combo Audio Jack, SD 4.0 card reader\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"FHD Camera with IR Function to Support Windows Hello and Array Microphone\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Ryzen AI 9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Ryzen AI 9 365\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"24\""
    },
    {
      "name": "\"name\"",
      "value": "\"No. of Memory Slots\","
    },
    {
      "name": "\"value\"",
      "value": "\"1x M.2 2280 PCIe 4.0x4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 TB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Radeon 880M\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intergrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 x USB 3.2 Gen 2 Type-A (data speed up to 10Gbps), 2 x USB 4.0 Gen 3 Type-C with support for display / power delivery (data speed up to 40Gbps)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi-Card Reader\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatible Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"SD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"4-cell Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"353.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"11.9 ~ 12.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"243.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"4711387615355\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"LCD Cover-material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aluminum\""
    },
    {
      "name": "\"name\"",
      "value": "\"LCD Cover-color\","
    },
    {
      "name": "\"value\"",
      "value": "\"Scandinavian White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Top Case-material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aluminum\""
    },
    {
      "name": "\"name\"",
      "value": "\"Top Case-color\","
    },
    {
      "name": "\"value\"",
      "value": "\"Scandinavian White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Keyboard Color\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bottom Case-material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aluminum\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bottom Case-color\","
    },
    {
      "name": "\"value\"",
      "value": "\"Scandinavian White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Military Grade\","
    },
    {
      "name": "\"value\"",
      "value": "\"US MIL-STD 810H military-grade standard\""
    },
    {
      "name": "\"name\"",
      "value": "\"Touch Panel\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touch Screen\""
    },
    {
      "name": "\"name\"",
      "value": "\"Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"3K (2880 x 1800) OLED 16:10 aspect ratio\""
    },
    {
      "name": "\"name\"",
      "value": "\"Response Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.2ms response time\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate\","
    },
    {
      "name": "\"value\"",
      "value": "\"120 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brightness\","
    },
    {
      "name": "\"value\"",
      "value": "\"400nits\""
    },
    {
      "name": "\"name\"",
      "value": "\"Peak Brightness\","
    },
    {
      "name": "\"value\"",
      "value": "\"500nits HDR peak brightness\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Gamut\","
    },
    {
      "name": "\"value\"",
      "value": "\"100% DCI-P3 color gamut\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gamut Mapping\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Contrast Ratio\","
    },
    {
      "name": "\"value\"",
      "value": "\"1,000,000:1\""
    },
    {
      "name": "\"name\"",
      "value": "\"VESA Certified\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color depth\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.07 Billion Colors\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pantone\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pantone Validated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glare\","
    },
    {
      "name": "\"value\"",
      "value": "\"Glossy Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Low Blue Light\","
    },
    {
      "name": "\"value\"",
      "value": "\"70% Less Harmful Blue Light\""
    },
    {
      "name": "\"name\"",
      "value": "\"TÜV Rheinland-certified\","
    },
    {
      "name": "\"value\"",
      "value": "\"TÜV Rheinland-certified\""
    },
    {
      "name": "\"name\"",
      "value": "\"SGS Eye Care Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"SGS Eye Care Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen-to-body Ratio\","
    },
    {
      "name": "\"value\"",
      "value": "\"90%\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stylus Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"With stylus support\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Ryzen AI 9 365 Processor 2.0GHz (34MB Cache, up to 5.0GHz, 10 cores, 20 Threads), AMD XDNA NPU up to 50TOPS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display HDR\","
    },
    {
      "name": "\"value\"",
      "value": "\"True Black 500\""
    },
    {
      "name": "\"name\"",
      "value": "\"Discrete/Share\","
    },
    {
      "name": "\"value\"",
      "value": "\"Share\""
    },
    {
      "name": "\"name\"",
      "value": "\"Neural Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD XDNA NPU up to 50TOPS\""
    },
    {
      "name": "\"name\"",
      "value": "\"On Board Memory\","
    },
    {
      "name": "\"value\"",
      "value": "\"24GB LPDDR5X on board\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\","
    },
    {
      "name": "\"value\"",
      "value": "\"1TB M.2 NVMe PCIe 4.0 SSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"On Board Wireless\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 7(802.11be) (Tri-band)2*2 + Bluetooth 5.4 Wireless Card\""
    },
    {
      "name": "\"name\"",
      "value": "\"Keyboard Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Backlit Chiclet Keyboard\""
    },
    {
      "name": "\"name\"",
      "value": "\"With Copilot key\""
    },
    {
      "name": "\"name\"",
      "value": "\"Touchpad\","
    },
    {
      "name": "\"value\"",
      "value": "\"Precision Touchpad\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"TYPE-C, 65W AC Adapter, Output: 20V DC, 3.25A, 65W, Input: 100-240V AC 50/60GHz universal\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"78WHrs, 2S2P, 4-cell Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security\","
    },
    {
      "name": "\"value\"",
      "value": "\"IR webcam with Windows Hello support, Microsoft Pluton security processor, Trusted Platform Module (Firmware TPM)\""
    },
    {
      "name": "\"name\"",
      "value": "\"MyASUS feature\","
    },
    {
      "name": "\"value\"",
      "value": "\"System diagnosis, Battery health charging, Fan Profile, Splendid, Function key lock, WiFi SmartConnect , Link to MyASUS, TaskFirst, Live update, ASUS OLED Care, AI Noise Canceling\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built-in Apps\","
    },
    {
      "name": "\"value\"",
      "value": "\"StoryCube, MyASUS, ScreenXpert, GlideX\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ecolabels & Compliances\","
    },
    {
      "name": "\"value\"",
      "value": "\"EPEAT Gold, Energy star 8.0, RoHS, REACH\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (without Battery) (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.20\""
    }
  ]
},
{
  "id": "45",
  "sku": "82XB0093UK",
  "name": "Lenovo IdeaPad Slim Intel Core i3 15.6\" 8GB/128GB Laptop - Arctic Grey | 82XB0093UK",
  "description": "Responsive, with powerful performance\r\nEngineered with military-grade quality, the IdeaPad Slim 3i Gen 8 laptop is ideal for on-the-go work, school, or entertainment. Powered by up to 13th Gen Intel Core processors, this 15″ device boasts speedy responsiveness for all your apps—so you can multitask to your heart’s content. Plus, huge amounts of storage mean you can save your entire multimedia library on your PC without compromise.\r\nMilitary-grade durability\r\nWhether you’re heading to the library, the coffeeshop, the airport terminal, or anywhere in between, you can trust that this sturdy device is made to last. At 10% slimmer than the previous generation, the IdeaPad Slim 3i Gen 8 laptop easily slips into your backpack or travel bag. It’s engineered to withstand shock, dust, and harsh travel conditions—while looking great in your choice of colours.\r\nImmerse yourself in the experience\r\nWith its narrow bezels and stunning display, the IdeaPad Slim 3i Gen 8 is sure to turn heads—even while yours stays focused on the 15\" high-def wide-angle view. TUV Certified Low Blue Light helps avoid eye fatigue. What’s more, Dolby Audio ensures you’ll enjoy premium sound on a videocall, watching a movie, or just listening to your favorite tunes with the user-facing speakers.\r\nNo waiting required\r\nYou need to trust that your device can keep up when you’re on the go. With its rapid-charging technology, the IdeaPad Slim 3i Gen 8 laptop delivers 2 hours of use on a 15-minute charge. And when it comes to your privacy and protection, we’ve got you covered. The webcam includes a privacy shutter, so you can ensure you’re off-camera when you want to be. But perhaps best of all is the optional fingerprint reader that’s integrated with the power button, which lets you instantly log in and boot up securely with just the touch of your finger.\r\nSmart features work for you\r\nBased on use, the IdeaPad Slim 3i Gen 8 laptop automatically adjusts to optimize performance, extend battery life, and lower thermals to run more efficiently with Smart Power. Smart Wireless technology seamlessly detects any interruption in connectivity and troubleshoots dynamically to reconnect you in real time. What’s more, smart security features safeguard your most sensitive files and prevent unauthorized access and file stealing. Even delete all of your BIOS data when transferring to a new PC. When it comes to security, we’ve got you covered.\r\nBox Contains:\r\nIdeaPad Slim 3i Gen 8 laptop\r\n65W power adapter\r\nQuick Start Guide",
  "category": "Laptops & Gaming > Laptops",
  "price": 479.99,
  "image": "https://www.did.ie/cdn/shop/files/A1-IdeaPadSlim3i_03977cdc-1348-45d4-bb5c-9d0f6176e767_5000x.jpg?v=1760098169",
  "brand": "Lenovo",
  "rating": 4.7,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lenovo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Arctic Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.6\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"FHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1920 x 1080\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Windows 11 Home in S mode 64\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 x HDMI 1.4, 1 x Combo of 3.5mm Stereo Headphone Output, 1 x SD Card Reader, DC-in Jack (Round)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"1080p FHD with webcam privacy shutter, Dual-array mic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i3-N305\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel UHD Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 x USB-A 3.2 Gen 1, 1 x USB-C 3.2 Gen 1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi-Card Reader\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatible Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"SD Card Reader\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Polymer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimension\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"359.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"236\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"198153998418\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LPDDR5-4800MT/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"UFS 3.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.6\\\" FHD (1920 x 1080), IPS, Anti-Glare, Non-Touch, 45%NTSC, 300 nits, 60Hz, Narrow Bezel\""
    },
    {
      "name": "\"name\"",
      "value": "\"AC Adapter / Power Supply\","
    },
    {
      "name": "\"value\"",
      "value": "\"65 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pointing Device\","
    },
    {
      "name": "\"value\"",
      "value": "\"ClickPad\""
    },
    {
      "name": "\"name\"",
      "value": "\"Keyboard\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey - English (UK)\""
    },
    {
      "name": "\"name\"",
      "value": "\"WIFI\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 6 2x2 AX & Bluetooth 5.1 or above\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"47WHr polymer, Supports rapid-charging technology (15 minutes = 2 hours’ runtime)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dolby Audio, 2 x 1.5W Front-facing speakers\""
    },
    {
      "name": "\"name\"",
      "value": "\"WiFi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to WiFi 6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"5.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Certifications / Registries\","
    },
    {
      "name": "\"value\"",
      "value": "\"ENERGY STAR 8.0, EPEAT Silver where applicable\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security\","
    },
    {
      "name": "\"value\"",
      "value": "\"Optional: Fingerprint reader integrated with power button, Self-healing BIOS, Natural File Guard password protection for hard drive\""
    },
    {
      "name": "\"name\"",
      "value": "\"Preloaded Software\","
    },
    {
      "name": "\"value\"",
      "value": "\"Alexa, Lenovo Utility, Lenovo Vantage, McAfee LiveSafe, Microsoft Office 365 (trial), Windows 11 Home, Windows 11 Pro\""
    }
  ]
},
{
  "id": "46",
  "sku": "X13-UK-T103",
  "name": "T1A Refurbished Lenovo ThinkPad X13 Yoga Gen 1 13.3\" Intel Core i5 16GB/256GB Laptop - Black | X13-UK-T103",
  "description": "Key Features\r\nThis lightweight and powerful 13.3-inch laptop is perfect for professionals on the go. Its rugged design and top-notch security features make it a reliable choice for any work environment.\r\nProcessor:\r\nPowered by an\r\nAMD Ryzen™ 5 PRO 5650U Processor\r\n, delivering fast and responsive performance for multitasking and demanding applications.\r\nMemory & Storage:\r\nComes with\r\n16GB of LPDDR4X-4266MHz\r\nsoldered memory for smooth operation and a\r\n512GB M.2 PCIe SSD\r\nfor quick boot times and ample storage.\r\nDisplay:\r\nThe\r\n13.3\" WUXGA (1920 x 1200) IPS Anti-Glare\r\nscreen offers a clear and vibrant visual experience with a 16:10 aspect ratio, providing more vertical screen space for productivity.\r\nPortability & Durability:\r\nWeighing in at just\r\n1.26kg\r\n, the ThinkPad X13 Gen 1 is built for mobility. It has been tested against 12 military-grade requirements to ensure it can withstand extreme conditions.\r\nEnhanced Security:\r\nKeep your data safe with integrated security features, including a\r\nPower-on Fingerprint Reader\r\nand a webcam privacy shutter.\r\nConnectivity:\r\nStay connected with\r\nWi-Fi 6\r\nand a range of ports including HDMI 2.0 and multiple USB-C and USB-A ports. The backlit keyboard makes it easy to work in low-light conditions.",
  "category": "Laptops & Gaming > Laptops",
  "price": 379.99,
  "image": "https://www.did.ie/cdn/shop/files/L-X13-UK-T003_2_5000x.png?v=1760456362",
  "brand": "T1A",
  "rating": 4.8,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"T1A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"13.3\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Windows 11 Pro\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 x HDMI 2.0, 2 x Thunderbolt 4, 1 x Combo Headphone/mic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i5 10310U\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel UHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 x USB 3.2 Gen 1 (3.1 Gen 1) Type-A, 1 x USB Sleep-and-Charge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium Polymer (LiPo)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"305\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"213.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Touchscreen\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Panel type\","
    },
    {
      "name": "\"value\"",
      "value": "\"IPS\""
    },
    {
      "name": "\"name\"",
      "value": "\"LED Backlight\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Native aspect ratio\","
    },
    {
      "name": "\"value\"",
      "value": "\"16:10\""
    },
    {
      "name": "\"name\"",
      "value": "\"RGB colour space\","
    },
    {
      "name": "\"value\"",
      "value": "\"sRGB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour gamut\","
    },
    {
      "name": "\"value\"",
      "value": "\"100%\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Cores\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Threads\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Boost Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.4 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Cache\","
    },
    {
      "name": "\"value\"",
      "value": "\"6 MB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Cache Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Smart Cache\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LPDDR4x-SDRAM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Clock Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"4266 MHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Channels\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dual-channel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage Media\","
    },
    {
      "name": "\"value\"",
      "value": "\"SSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of SSDs installed\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Chip\","
    },
    {
      "name": "\"value\"",
      "value": "\"Realtek ALC3286\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dolby Audio\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Built-in Speakers\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Microphones\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi standards\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 6 (802.11ax)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Intel Thunderbolt 4\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Type-C Display Port Alternate Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Accelerometer, Proximity Sensor, Gyroscope\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pointing Device\","
    },
    {
      "name": "\"value\"",
      "value": "\"ThinkPad UltraNav\""
    },
    {
      "name": "\"name\"",
      "value": "\"Keyboard Backlit\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Spill-resistant Keyboard\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Keyboard Layout\","
    },
    {
      "name": "\"value\"",
      "value": "\"QWERTY\""
    },
    {
      "name": "\"name\"",
      "value": "\"Keyboard Language\","
    },
    {
      "name": "\"value\"",
      "value": "\"UK English\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System Architecture\","
    },
    {
      "name": "\"value\"",
      "value": "\"64-bit\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Type-C Charging Port\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Power Delivery (USB PD)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cable Lock Slot Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Kensington\""
    },
    {
      "name": "\"name\"",
      "value": "\"Trusted Platform Module (TPM) Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Password Protection Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Power on, Supervisor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature (T-T)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 - 35 °C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage Temperature (T-T)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 - 43 °C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Relative Humidity (H-H)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8 - 95%\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage Relative Humidity (H-H)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 - 95%\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Shipping Altitude\","
    },
    {
      "name": "\"value\"",
      "value": "\"3048 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Certification\","
    },
    {
      "name": "\"value\"",
      "value": "\"ENERGY STAR 8.0, TCO, EPEAT, Gold, RoHS, Intel Evo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Certification\","
    },
    {
      "name": "\"value\"",
      "value": "\"MIL-STD-810G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sustainability Certificates\","
    },
    {
      "name": "\"value\"",
      "value": "\"ENERGY STAR, EPEAT Gold, TCO\""
    }
  ]
},
{
  "id": "47",
  "sku": "MW1L3B/A",
  "name": "Apple MacBook Air M4 15\" 16GB/256GB Laptop - Midnight | MW1L3B/A",
  "description": "MacBook Air Speed of lightness\r\nMacBook Air is the world’s most popular laptop for a reason. Actually, for a lot of reasons. It delivers up to 18 hours of battery life. The M4 chip unlocks a whole new level of performance for work and play. Apple Intelligence is built in to help you get things done effortlessly. And it now comes in a stunning Sky Blue colour. With the perfectly portable MacBook Air, you’ll be ready to take on just about anything, anywhere.\r\nDesign - Built to Go Places\r\nRemarkably light and just over 11 millimetres thin, MacBook Air fits easily into your on‑the‑go lifestyle and your bag. MacBook Air with M4 is made with over 50 per cent recycled materials and has a durable recycled aluminium enclosure.\r\nWith up to 18 hours of battery life, you can get work done anywhere you go\r\nThe impressive display on MacBook Air makes TV, movies and games look truly striking\r\nIncredibly light and thin, MacBook Air fits easily in your backpack\r\nPerformance and battery life M4. The chip that zips\r\nMultitasker. Multifaster. MacBook Air with M4 brings even more speed and fluidity to everything you do, like working between loads of apps and tabs, editing videos, or playing games like Sid Meier’s Civilization VII. All with a silent, fanless design.\r\nNeural Engine. Blazing fast for AI. Thanks to the faster Neural Engine in the M4 chip, MacBook Air has even more powerful AI capabilities to enhance everything you do. From automatic camera frame centring to AI image upscaling to running the latest large language models, you’ll be more productive and creative than ever.\r\nLive a full battery life. MacBook Air has up to 18 hours of battery life. And it supports fast charging, getting up to 50 per cent in just 30 minutes. So you can power through anything you’re working on without worrying about your battery.\r\n23x faster than fastest Intel‑based MacBook Air\r\nUp to 2x faster than MacBook Air (M1)\r\nUp to 18 hrs battery life\r\nM4. The chip that zips\r\nApple silicon combines a powerful CPU, GPU, memory and more on a single chip, making all your apps — from Microsoft 365 Copilot to Adobe Creative Cloud — run faster while requiring less power.\r\nThe M4 chip in MacBook Air makes graphics and gaming look better than ever. With second-generation hardware-accelerated ray tracing, you get more realistic images for truly immersive gaming. And Dynamic Caching drives a huge performance boost for pro apps and games. So everything you do feels less like work and more like play.\r\nApple Intelligence. Do more. Effort less\r\nApple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.\r\nWriting Tools\r\nUse Apple Intelligence to proofread your text and rewrite different versions until the tone and wording are just right, and summarise selected text with a click. Or use Compose to tap directly into ChatGPT to create content from scratch.\r\nImage Playground\r\nCreate fun, original images based on a description, a concept, or even a person from your Photos library.\r\nSiri\r\nSiri can help you like never before, drawing on your personal context by using the information on your device to help find what you’re looking for — like a presentation file shared with you in an email weeks ago. Siri can even tap into ChatGPT to bring answers straight to you. No account needed.\r\nGreat powers come with great privacy\r\nApple Intelligence is designed to protect your privacy at every step. It’s integrated into the core of your Mac through on-device processing. So it’s aware of your personal information without collecting your personal information.\r\nAnd with groundbreaking Private Cloud Compute, Apple Intelligence can draw on larger server-based models, running on Apple silicon, to handle more complex requests for you while protecting your privacy.\r\nMac + iPhone Dream team\r\nIf you love iPhone, you’ll love Mac. Mac is designed to be just as easy to learn as iPhone. Whether you’re copying text on your iPhone to paste on your Mac or locating devices with Find My when you use Mac with iPhone, they work together like magic.\r\nUniversal Clipboard. Copy text, images, photos and videos on your iPhone and paste to your Mac or vice versa\r\nAnswer calls and texts. Your calls and texts come straight to your laptop, so there’s no need to switch devices when you’re in the zone\r\nScan documents. Use your iPhone to take a picture or scan a document and have it automatically appear on your MacBook Air\r\nNew to Mac?\r\nSetup is a breeze. Easily move files, apps and more from your old PC or Mac. And if you need any help, Apple Support is always just an online chat or phone call away\r\nAccess files anywhere with iCloud. iCloud lets you store all your photos, contacts and documents so they’re available on all your devices. Start a to-do list on your iPhone and tick off items on your MacBook Air — and so much more\r\nPacked with powerful apps. Mac comes with apps like FaceTime, Freeform and Keynote that let you get to work creating and collaborating on your next big idea\r\nMac is built to last. Made with durable recycled aluminium enclosures, Mac laptops are ready for just about anything. And free macOS software updates help your Mac work reliably and securely for years to come\r\nNever used a Mac? No problem. Switching to Mac from PC is quick and easy\r\nMacOS Let your apps fly\r\nWith tens of thousands of apps optimised for Apple silicon, all your favourites run lightning fast in macOS, including Microsoft 365 Copilot, Adobe Creative Cloud and Google Workspace with Gemini. And regular, free macOS software updates keep things running smoothly.\r\nDisplay Love at every sight\r\nThe Liquid Retina display on MacBook Air supports 1 billion colours and has up to 2x the resolution of comparable PC laptops. Photos and videos pop with rich contrast and sharp detail, and text appears super-crisp.\r\n500 nits of brightness. Work comfortably in a range of lighting environments\r\nP3 wide colour. Enjoy an accurate and vivid range of colours for viewing and editing photos and videos\r\nTrue Tone technology. True Tone adjusts the warmth of your display to match the ambient light, for a more natural viewing experience\r\nCamera and audio When you move, it moves\r\nCentre Stage\r\nStay in frame during video calls, even as you move around or when more people join your frame.\r\nDesk View\r\nShare a top-down view of your workspace while staying onscreen — great if you’re tutoring online or showing off your latest project.\r\nThree-mic array\r\nMacBook Air provides enhanced voice clarity in audio and video calls while minimising background noise.\r\nImmersive sound system\r\nThe speakers on MacBook Air support Spatial Audio along with Dolby Atmos, so you can enjoy a three-dimensional soundstage for music and movies.\r\nPorts and Connectivity Become well connected\r\nThe MagSafe charging cable attaches and detaches magnetically in case anyone trips over it. Two Thunderbolt 4 ports let you connect high-speed accessories and charge your Mac. The headphone jack supports high‑impedance headphones. And Wi‑Fi 6E provides up to 2x faster throughput compared with Wi‑Fi 6.\r\nTurn MacBook Air into the perfect workspace by connecting up to two external displays. The extra screen space makes working with multiple documents or apps a breeze.\r\nSecurity Hold down the fort with just a finger\r\nThe backlit Magic Key­board comes with full-height function keys and Touch ID, giving you a fast, easy and secure way to unlock your Mac, sign in to accounts and authorise payments for purchases — all at the touch of your finger.\r\nKey Features:\r\nChip\r\nApple M4 chip\r\n10‑core CPU with 4 perform­ance cores and 6 efficiency cores\r\n10‑core GPU\r\nHardware-accelerated ray tracing\r\n16-core Neural Engine\r\n120GB/s memory bandwidth\r\nMedia Engine\r\nHardware-accelerated H.264, HEVC, ProRes and ProRes RAW\r\nVideo decode engine\r\nVideo encode engine\r\nProRes encode and decode engine\r\nAV1 decode\r\nDisplay\r\nLiquid Retina display\r\n15.3-inch (diagonal) LED-backlit display with IPS technology\r\n2880x1864 native resolution at 224 pixels per inch\r\n500 nits brightness\r\nColour\r\nSupport for 1 billion colours\r\nWide colour (P3)\r\nTrue Tone technology\r\nBattery and Power\r\nUp to 18 hours video streaming\r\nUp to 15 hours wireless web\r\nBuilt-in 66.5‑watt‑hour lithium‑polymer battery\r\n35W Dual USB‑C Port Power Adapter\r\nUSB-C to MagSafe 3 Cable\r\nFast-charge capable with 70W USB-C Power Adapter\r\nDisplay Support\r\nSimultaneously supports full native resolution on the built-in display at 1 billion colours and:\r\nUp to two external displays with up to 6K resolution at 60Hz\r\nThunderbolt 4 digital video output\r\nSupport for native DisplayPort 1.4 output over USB-C\r\nKeyboard and Trackpad\r\nBacklit Magic Keyboard with:78 (US) or 79 (ISO) keys including 12 full‑height function keys and 4 arrow keys in an inverted “T” arrangement\r\nTouch ID\r\nAmbient light sensor\r\nForce Touch trackpad for precise cursor control and pressure‑sensing capabilities; enables Force clicks, accelerators, pressure‑sensitive drawing and Multi‑Touch gestures\r\nCamera\r\n12MP Center Stage camera with support for Desk View\r\n1080p HD video recording\r\nAdvanced image signal processor with computational video\r\nAudio\r\nSix-speaker sound system with force-cancelling woofers\r\nSupport for Spatial Audio when playing music or video with Dolby Atmos on built-in speakers\r\nSpatial Audio with dynamic head tracking when using supported models of AirPods, AirPods Pro and AirPods Max\r\nThree-mic array with directional beamforming\r\nVoice Isolation and Wide Spectrum microphone modes\r\nEnhanced voice clarity in audio and video calls\r\n3.5mm headphone jack with advanced support for high‑impedance headphones\r\nOperating Requirements\r\nLine voltage: 100V to 240V AC\r\nFrequency: 50Hz to 60Hz\r\nOperating temperature: 10° to 35° C (50° to 95° F)\r\nStorage temperature: –25° to 45° C (–13° to 113° F)\r\nRelative humidity: 0% to 90% non‑condensing\r\nOperating altitude: tested up to 3,000 metres (10,000 feet)\r\nMaximum storage altitude: 4,500 metres (15,000 feet)\r\nMaximum shipping altitude: 10,500 metres (35,000 feet)\r\nBox Contains:\r\n15-inch MacBook Air\r\n35W Dual USB‑C Port Power Adapter\r\nUSB-C to MagSafe 3 Cable (2m)",
  "category": "Laptops & Gaming > Laptops",
  "price": 1349.99,
  "image": "https://www.did.ie/cdn/shop/files/MacBook_Air_15-inch_M4_Midnight_PDP_Image_Position_1__GBEN_5000x.jpg?v=1741601521",
  "brand": "Apple",
  "rating": 4.4,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Midnight\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.3\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Liquid Retina\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2880 x 1864\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"macOS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"MagSafe 3 Charging Port\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP Center Stage camera, Three-mic array with directional beamforming\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"M4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 x Thunderbolt 4 (USB-C)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium‑Polymer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (up to)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"340.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"11.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"237.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.51\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB-C Ports Support for\","
    },
    {
      "name": "\"value\"",
      "value": "\"Charging, DisplayPort, Thunderbolt 4 (up to 40Gb/s), USB 4 (up to 40Gb/s)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playback\","
    },
    {
      "name": "\"value\"",
      "value": "\"HEVC, H.264, AV1, ProRes, HDR with Dolby Vision, HDR10+/HDR10, HLG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Playback\","
    },
    {
      "name": "\"value\"",
      "value": "\"AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus and Dolby Atmos\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi‑Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi‑Fi 6E (802.11ax)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"V5.3\""
    }
  ]
},
{
  "id": "48",
  "sku": "7N078ES#ABU",
  "name": "HP 255 G9 AMD Ryzen 7 15.6\" 16GB/512GB Laptop - Black | 7N078ES#ABU",
  "description": "Unparalleled Visuals with Full HD IPS Display\r\nImmerse yourself in a world of vibrant visuals on the HP 255 G9 7N078ES#ABU laptop's 15.6-inch Full HD IPS screen. The IPS technology ensures wide viewing angles and vivid colors, making it a visual treat for content creators, professionals, and entertainment enthusiasts alike.\r\nPowerful AMD Ryzen 7 5825U Processor\r\nExperience blazing-fast performance with the AMD Ryzen 7 5825U Processor. Tailored for efficiency and power, this processor ensures seamless multitasking, smooth application launches, and a responsive computing experience for users who demand speed and reliability.\r\nAmple Memory for Seamless Multitasking\r\nNavigate through your tasks effortlessly with the abundant 16GB of RAM. Whether you're running multiple applications, handling data-intensive projects, or multitasking between work and entertainment, the ample memory ensures a seamless and efficient computing experience.\r\nSwift Data Access and Spacious Storage\r\nBenefit from quick data access and ample storage with the 512GB SSD. This solid-state drive not only enhances overall system responsiveness but also provides sufficient space for your files, documents, multimedia, and more.\r\nImmersive Graphics with AMD Radeon\r\nElevate your visual experience with the AMD Radeon Graphics. Whether you're editing images, enjoying multimedia content, or engaging in casual gaming, the dedicated graphics ensure stunning visuals and smooth performance, enhancing every aspect of your digital experience.\r\nModern and User-Friendly Windows 11 Home\r\nStep into the future of operating systems with Windows 11 Home. Enjoy a modern and user-friendly interface, enhanced security features, and a seamless digital environment that perfectly complements the advanced hardware of the HP 255 G9, creating an optimal computing experience for users of all backgrounds.",
  "category": "Laptops & Gaming > Laptops",
  "price": 699.99,
  "image": "https://www.did.ie/cdn/shop/files/7N078ES_ABU-1_5000x.webp?v=1717742458",
  "brand": "HP",
  "rating": 4.8,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"HP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.6\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"FHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1920 x 1080\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Windows 11 Home\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB, HDMI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ryzen 7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Ryzen 7 5825U\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.00 - 4.50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"No. of Memory Slots\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"512\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Radeon\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 x USB 3.0, 1 x USB Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0197497366709\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"60\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"DDR4 - 3200\""
    },
    {
      "name": "\"name\"",
      "value": "\"ROM Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"SSD\""
    }
  ]
},
{
  "id": "49",
  "sku": "SM1605YA-MB296W",
  "name": "Asus Vivobook 16 AMD Ryzen 7 16\" 16GB/512GB Laptop - Silver | SM1605YA-MB296W",
  "description": "Enhance Your View\r\nExperience seamless performance with the powerful ASUS Vivobook 16 — a feature-rich laptop designed for convenience and comfort. It boasts a 180° lay-flat hinge, a physical webcam shield, and dedicated function keys for mic control. Prioritizing your well-being, ASUS Antimicrobial Guard Plus protects frequently touched surfaces, while the larger touchpad offers enhanced ease of use. Get ready to enjoy the effortless power and smooth functionality of the Vivobook 16.",
  "category": "Laptops & Gaming > Laptops",
  "price": 749.99,
  "image": "https://www.did.ie/cdn/shop/files/SM1605YA-MB296W-2_c7a3dbee-09e9-490b-a087-cd2f87dedd55_5000x.jpg?v=1758096404",
  "brand": "Asus",
  "rating": 4.7,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Asus\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silver\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"WUXGA\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1920 x 1200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Windows 11 Home\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Ryzen 7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Ryzen 7 7730U\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"512\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Radeon\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"4711387615270\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMD Ryzen 7 7730U (16MB Cache, 2GHz)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"DDR4-SDRAM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"SSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"WLAN\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "50",
  "sku": "82XJ001EUK",
  "name": "Lenovo IdeaPad Slim 3 MediaTek Kompanio 14\" 8GB/128GB Chromebook - Abyss Blue | 82XJ001EUK",
  "description": "",
  "category": "Laptops & Gaming > Laptops",
  "price": 229.99,
  "image": "https://www.did.ie/cdn/shop/files/82XJ001EUK-3_30883162-34b0-4824-a90d-19a65601b73f_5000x.jpg?v=1758088692",
  "brand": "Lenovo",
  "rating": 4.9,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lenovo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Abyss Blue\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"FHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1920 x 1080\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"ChromeOS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 x Headphone / microphone combo jack (3.5mm), 1 x microSD card reader\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"FHD 1080p with Privacy Shutter, 2 x Array Microphone\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"MediaTek\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"MediaTek Kompanio\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"MediaTek Kompanio 520\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mali-G52 2EE MC2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 x USB 3.2 Gen 1, 1 x USB-C 3.2 Gen 1 (support data transfer, Power Delivery 3.0 and DisplayPort 1.1a)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi-Card Reader\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatible Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"MicroSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"221.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0197529702598\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"MediaTek Kompanio 520 (8C, 2x A76 @2.05GHz + 6x A55 @2.0GHz)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LPDDR4x-3600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"eMMC 5.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Chip\","
    },
    {
      "name": "\"value\"",
      "value": "\"High Definition (HD) Audio\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speakers\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stereo speakers, 2W x2, optimized with Waves MaxxAudio\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"47 Wh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Adapter\","
    },
    {
      "name": "\"value\"",
      "value": "\"45 W USB-C (3-pin)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\\\" FHD (1920x1080) TN 250nits Anti-glare, 45% NTSC\""
    },
    {
      "name": "\"name\"",
      "value": "\"Keyboard\","
    },
    {
      "name": "\"value\"",
      "value": "\"Non-backlit, English (UK)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Touchpad\","
    },
    {
      "name": "\"value\"",
      "value": "\"Buttonless Mylar surface multi-touch touchpad, 69 x 104 mm (2.72 x 4.09 inches)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Surface Treatment\","
    },
    {
      "name": "\"value\"",
      "value": "\"Texture Painting\""
    },
    {
      "name": "\"name\"",
      "value": "\"Case Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"PC-ABS + 15% Talc (Top), PC-ABS + 15% Talc (Bottom)\""
    },
    {
      "name": "\"name\"",
      "value": "\"WLAN + Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi 6, 802.11ax 2x2 + BT5.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security Chip\","
    },
    {
      "name": "\"value\"",
      "value": "\"Google Security Chip H1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Physical Locks\","
    },
    {
      "name": "\"value\"",
      "value": "\"Kensington Nano Security Slot, 2.5 x 6 mm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Green Certifications\","
    },
    {
      "name": "\"value\"",
      "value": "\"ENERGY STAR 8.0, EPEAT Gold Registered, ErP Lot 6/26, RoHS compliant\""
    }
  ]
},
{
  "id": "51",
  "sku": "NP750XGJ-KG1UK",
  "name": "Samsung Galaxy Book4 Intel Core i3 15.6\" 8GB/256GB Laptop - Grey | NP750XGJ-KG1UK",
  "description": "",
  "category": "Laptops & Gaming > Laptops",
  "price": 599.99,
  "image": "https://www.did.ie/cdn/shop/files/NP750XGJ-KG1UK-3_9045cf39-ca22-451b-8c71-b5a947d0ee1d_5000x.jpg?v=1758096718",
  "brand": "Samsung",
  "rating": 4.4,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.6\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1920 x 1080\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Windows 11 Home\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 x Headphone out/Mic-in Combo, 1 x RJ45 (LAN), 1 x HDMI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"720p HD Camera & Internal Dual Array Digital Mic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i3-1315U\""
    },
    {
      "name": "\"name\"",
      "value": "\"Clock Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"3rd Level Cache (MB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"No. of Memory Slots\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Graphics Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel UHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"HDMI\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 x USB Type-C, 2 x USB3.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi-Card Reader\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatible Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"MicroSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"356.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"229.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.55\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806095645735\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Intel Core i3-1315U (1.2 GHz up to 4.5 GHz 10 MB L3 Cache)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.6\\\" FHD LED Display (1920 x 1080), Anti-Glare\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"8 GB LPDDR4x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"256 GB NVMe SSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multimedia\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stereo Speakers ( 2 W x 2 ), Dolby Atmos\""
    },
    {
      "name": "\"name\"",
      "value": "\"Network\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth v5.2, Wi-Fi 6 (Gig+), 802.11 ax 2x2, Gigabit Ethernet [10/100/1000]\""
    },
    {
      "name": "\"name\"",
      "value": "\"Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pro keyboard with Numeric key, Clickpad\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security\","
    },
    {
      "name": "\"value\"",
      "value": "\"Security Slot, TPM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"54 Wh, 45 W USB Type-C Adapter\""
    }
  ]
},
{
  "id": "52",
  "sku": "MW123B/A",
  "name": "Apple MacBook Air M4 13\" 16GB/256GB  Laptop - Midnight | MW123B/A",
  "description": "",
  "category": "Laptops & Gaming > Laptops",
  "price": 1249.99,
  "image": "https://www.did.ie/cdn/shop/files/MacBook_Air_13-inch_M4_Midnight_PDP_Image_Position_1__GBEN_5000x.jpg?v=1755611922",
  "brand": "Apple",
  "rating": 4.7,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Midnight\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"13.6\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Liquid Retina\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2560 x 1664\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"macOS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ports, Slots & Chassis\","
    },
    {
      "name": "\"value\"",
      "value": "\"MagSafe 3 Charging Port\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built in Camera & Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP Center Stage camera, Three-mic array with directional beamforming\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"M4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Disk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hard Drive (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256\""
    },
    {
      "name": "\"name\"",
      "value": "\"Optical Drive & Graphics\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Integrated\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity & Networking\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 x Thunderbolt 4 (USB-C)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium‑Polymer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (up to)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"304.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"11.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"215\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.24\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB-C Ports Support for\","
    },
    {
      "name": "\"value\"",
      "value": "\"Charging, DisplayPort, Thunderbolt 4 (up to 40Gb/s), USB 4 (up to 40Gb/s)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playback\","
    },
    {
      "name": "\"value\"",
      "value": "\"HEVC, H.264, AV1, ProRes, HDR with Dolby Vision, HDR10+/HDR10, HLG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Playback\","
    },
    {
      "name": "\"value\"",
      "value": "\"AAC, MP3, Apple Lossless, FLAC, Dolby Digital, Dolby Digital Plus and Dolby Atmos\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi‑Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi‑Fi 6E (802.11ax)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"V5.3\""
    }
  ]
},
{
  "id": "53",
  "sku": "JBLPBCLUB120UK",
  "name": "JBL PartyBox Club 120 Portable Bluetooth Party Speaker - Black | JBLPBCLUB120UK",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 329.99,
  "image": "https://www.did.ie/cdn/shop/files/JBLPBCLUB120UK-2_5000x.jpg?v=1741849171",
  "brand": "JBL",
  "rating": 4.8,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"JBL\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Party Speaker\""
    },
    {
      "name": "\"name\"",
      "value": "\"Splashproof\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"160W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (up to hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"288\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"297\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"570\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"11.05\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"1200130009709\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dynamic Frequency Response Range (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"40 Hz - 20 kHz (-6dB)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"5.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time (Hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"3.5\""
    }
  ]
},
{
  "id": "54",
  "sku": "JBLCHARGE6BLK",
  "name": "JBL Charge 6 Portable Bluetooth Speaker - Black | JBLCHARGE6BLK",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 199.99,
  "image": "https://www.did.ie/cdn/shop/files/JBLCHARGE6BLK-1_5000x.webp?v=1748529710",
  "brand": "JBL",
  "rating": 4.4,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"JBL\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Portable Speaker\""
    },
    {
      "name": "\"name\"",
      "value": "\"Splashproof\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"30 W + 15 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion polymer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (up to hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"24\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"228.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"94\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"98.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.96\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transducers\","
    },
    {
      "name": "\"value\"",
      "value": "\"53 mm x 93 mm woofer, 20 mm tweeter\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"30 W RMS for woofer, 15 W RMS for tweeter\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 - 20 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Current\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 A (Max)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency Response\","
    },
    {
      "name": "\"value\"",
      "value": "\"56 Hz - 20 kHz (-6 dB)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Signal-To-Noise Ratio\","
    },
    {
      "name": "\"value\"",
      "value": "\"> 80 dB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Operation Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"45 °C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connection Ports\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C (in / out) (USB cable not included)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"5.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Profile\","
    },
    {
      "name": "\"value\"",
      "value": "\"A2DP 1.4, AVRCP 1.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Modulation\","
    },
    {
      "name": "\"value\"",
      "value": "\"GFSK, p/4 DQPSK, 8DPSK\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Frequency Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400 MHz - 2483.5 MHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"< 15 dBm (EIRP)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion polymer 34 Wh (equivalent to 7.2 V /4722 mAh)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charge Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 hours (12 - 20 V / 3 A)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Music Play Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to 24 hours of playtime plus 4 hours with Playtime Boost (dependent on volume level and audio content)\""
    }
  ]
},
{
  "id": "55",
  "sku": "PLAYFM",
  "name": "Roberts Play FM/MW/LW Portable Radio - Black | PLAYFM",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 29.99,
  "image": "https://www.did.ie/cdn/shop/files/PLAYFM-1_5f9bb462-83ec-4211-b6cf-df9be362a178_5000x.png?v=1702387358",
  "brand": "Roberts",
  "rating": 4.8,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Roberts\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Source\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery & Mains\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AA\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Radio Tuner\","
    },
    {
      "name": "\"value\"",
      "value": "\"FM, LW, MW\""
    },
    {
      "name": "\"name\"",
      "value": "\"Portable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"174\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"110\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.393\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"5038301311452\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    }
  ]
},
{
  "id": "56",
  "sku": "MOVE2UK1BLKR2",
  "name": "Sonos Move 2 Portable Bluetooth Smart Speaker - Black | MOVE2UK1BLKR2",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 499.99,
  "image": "https://www.did.ie/cdn/shop/files/Prima_3qHero_Black_5000x.jpg?v=1746427778",
  "brand": "Sonos",
  "rating": 4.7,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Sonos\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth\""
    },
    {
      "name": "\"name\"",
      "value": "\"Splashproof\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Speakers\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"45W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"AUX\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (up to hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"24\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"160\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"127\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"241\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built-in Assistant\","
    },
    {
      "name": "\"value\"",
      "value": "\"Amazon Alexa\""
    },
    {
      "name": "\"name\"",
      "value": "\"Built-In Microphone\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50/60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100-240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Source\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery\""
    }
  ]
},
{
  "id": "57",
  "sku": "HW-LS60D/XU",
  "name": "Samsung HW-LS60D Music Frame Wireless Smart Bluetooth Speaker - Black | HW-LS60D/XU",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 279.99,
  "image": "https://www.did.ie/cdn/shop/files/HW-LS60D-XU-1_4a77a795-58cd-4973-8f1f-f5c7f5a0b9af_5000x.jpg?v=1724831526",
  "brand": "Samsung",
  "rating": 4.9,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wireless\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Adaptive, Music, Standard\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Speakers\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"18W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"353\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"143.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"364.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806095465050\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "58",
  "sku": "JBLFLIP7BLK",
  "name": "JBL Flip 7 Portable Bluetooth Speaker - Black | JBLFLIP7BLK",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 149.99,
  "image": "https://www.did.ie/cdn/shop/files/JBLFLIP7BLK-2_5000x.webp?v=1748529415",
  "brand": "JBL",
  "rating": 4.4,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"JBL\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Portable Speaker\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 W + 25 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion polymer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (up to hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"182.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"71.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"69.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.56\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"1200130019272\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transducers\","
    },
    {
      "name": "\"value\"",
      "value": "\"45 x 80 mm woofer/1.75 x 3\\\" , 16 mm tweeter/ 0.6\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"25 W RMS for woofer, 10 W RMS for tweeter\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency Response\","
    },
    {
      "name": "\"value\"",
      "value": "\"60 Hz -  20k Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Signal-To-Noise Ratio\","
    },
    {
      "name": "\"value\"",
      "value": "\"> 80 dB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion polymer 17.28 Wh (equivalent to 3.6V /4800mAh)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charge Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.5 hours (5V / 3A)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Operation Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"45°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"5.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Profile\","
    },
    {
      "name": "\"value\"",
      "value": "\"A2DP 1.4, AVRCP 1.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Frequency Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400 MHz - 2483.5 MHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"= 14 dBm (EIRP)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Modulation\","
    },
    {
      "name": "\"value\"",
      "value": "\"GFSK, p/4 DQPSK, 8DPSK\""
    }
  ]
},
{
  "id": "59",
  "sku": "VSC-550BT-BLK",
  "name": "Victrola Built-in Stereo Bluetooth Portable Suitcase Record Player | VSC-550BT-BLK",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 89.99,
  "image": "https://www.did.ie/cdn/shop/files/victrola-built-in-stereo-bluetooth-portable-suitcase-record-player-map-print-or-vsc-550bt-p4-did-electrical-1_800x_d3be141f-5b57-437e-968c-9cbf0338ff94_5000x.webp?v=1760541807",
  "brand": "Victrola",
  "rating": 4.7,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Victrola\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Turntable\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stereo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Record player with 3-speed belt driven turntable, RCA Aux-in and headphone jack, Built-in stereo speakers\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"AUX\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"353.0600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256.5400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"127\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0816203013842\""
    }
  ]
},
{
  "id": "60",
  "sku": "JBLFLIPES2",
  "name": "JBL Flip Essential 2 Portable Bluetooth Speaker | JBLFLIPES2",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 109.99,
  "image": "https://www.did.ie/cdn/shop/files/JBL-222_5000x.jpg?v=1720094357",
  "brand": "JBL",
  "rating": 4.8,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"JBL\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speaker Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Portable Speaker\""
    },
    {
      "name": "\"name\"",
      "value": "\"Splashproof\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (db)\","
    },
    {
      "name": "\"value\"",
      "value": "\">80\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"20W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium ion Polymer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (up to hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"175\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"70\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"68\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.52\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6925281928840\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transducer\","
    },
    {
      "name": "\"value\"",
      "value": "\"44 x 80 mm / 1.73 x 3.15\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency Response\","
    },
    {
      "name": "\"value\"",
      "value": "\"65 Hz - 20 kHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cable Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C Charging Cable\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cable Length (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"5.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Profiles\","
    },
    {
      "name": "\"value\"",
      "value": "\"A2DP 1.3, AVRCP 1.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400 MHz - 2483.5 MHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitted Modulation\","
    },
    {
      "name": "\"value\"",
      "value": "\"GFSK, π/4 DQPSK, 8DPSK\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"≤ 9 dBm (EIRP)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Operation Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"45 °C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charge Time (Hours)\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    }
  ]
},
{
  "id": "61",
  "sku": "ZOOMBOXFMBK",
  "name": "Roberts Zoombox Built-in CD Player FM/AM Radio - Black | ZOOMBOXFMBK",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 69.99,
  "image": "https://www.did.ie/cdn/shop/files/ZOOMBOXFMBK-1_5000x.jpg?v=1720618713",
  "brand": "Roberts",
  "rating": 4.4,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Roberts\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Source\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery & Mains\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Radio Tuner\","
    },
    {
      "name": "\"value\"",
      "value": "\"FM/AM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Portable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"230\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"205\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"116\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.320\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"05038301312404\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stereo\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "62",
  "sku": "LSHDABBLKUK",
  "name": "Majority Little Shelford Portable DAB+/FM Radio - Black | LSHDABBLKUK",
  "description": "",
  "category": "Audio & Video > Speakers",
  "price": 59.99,
  "image": "https://www.did.ie/cdn/shop/files/LSHDABBLKUK-1_3457f9fe-dffe-4064-9159-00714ebe5a16_5000x.jpg?v=1725520753",
  "brand": "Majority",
  "rating": 4.8,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Majority\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Source\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery & Mains\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"4 x AA\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Radio Tuner\","
    },
    {
      "name": "\"value\"",
      "value": "\"DAB, DAB+, FM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Alarm Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Portable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"130\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"170\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.76\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"5060508075523\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 Years\""
    }
  ]
},
{
  "id": "63",
  "sku": "HD436SLUK",
  "name": "Shark FlexStyle 4-In-1 Air Styler & Hair Dryer - Stone | HD436SLUK",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 319.99,
  "image": "https://www.did.ie/cdn/shop/files/HD436SLUK-1_5000x.jpg?v=1741844917",
  "brand": "Shark",
  "rating": 4.7,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Shark\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stone\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Air Styler & Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.44\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"343\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.700\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0622356322294\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power (kW)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1650\""
    }
  ]
},
{
  "id": "64",
  "sku": "514298-01",
  "name": "Dyson Supersonic Nural Hair Dryer - Ceramic Patina & Topaz | 514298-01",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 349.99,
  "image": "https://www.did.ie/cdn/shop/files/514298-01-1_464ac977-ddbc-475f-bcd6-2468262e4a7f_5000x.jpg?v=1716975273",
  "brand": "Dyson",
  "rating": 4.9,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dyson\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ceramic Patina/Topaz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Temperature Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Air Flow (I/s)\","
    },
    {
      "name": "\"value\"",
      "value": "\"13.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessories\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessories Included\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wave+Curl Diffuser, Flyaway Attachment, Styling Concentrator, Wide Tooth Comb, Gentle air attachment\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"101.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"78.74\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"254\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.86\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years Parts and Labor\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120\""
    },
    {
      "name": "\"name\"",
      "value": "\"Negative Ions\","
    },
    {
      "name": "\"value\"",
      "value": "\"Help Reduce Static\""
    }
  ]
},
{
  "id": "65",
  "sku": "LANAIBLOWHITE",
  "name": "Lanaiblo 2400W Hair Dryer - White | LANAIBLOWHITE",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 99.99,
  "image": "https://www.did.ie/cdn/shop/products/lanaiblo-2400w-hair-dryer-white-or-lanaiblowhite-did-electrical-1_e5b5f142-4b71-459c-8e79-9aca0cb01f51_5000x.jpg?v=1656332814",
  "brand": "Lanaiblo",
  "rating": 4.4,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lanaiblo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Barrel Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tourmaline - Ceramic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heating Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ionic and ceramic- tourmaline technology\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ceramic Coated\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "66",
  "sku": "LANAIBLOBLACK",
  "name": "Lanaiblo 2400W Hair Dryer - Black | LANAIBLOBLACK",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 99.99,
  "image": "https://www.did.ie/cdn/shop/products/lanaiblo-2400w-hair-dryer-black-or-lanaibloblack-did-electrical_e1cfee66-059e-482a-8b7a-174694b63fee_5000x.jpg?v=1656332815",
  "brand": "Lanaiblo",
  "rating": 4.7,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lanaiblo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Barrel Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tourmaline - Ceramic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heating Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ionic Technology\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ceramic Coated\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "67",
  "sku": "599004-01",
  "name": "Dyson Supersonic Nural Hair Dryer - Vinca Blue & Topaz | 599004-01",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 349.99,
  "image": "https://www.did.ie/cdn/shop/files/599004-01-1_5000x.jpg?v=1750127939",
  "brand": "Dyson",
  "rating": 4.8,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dyson\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Vinca Blue & Topaz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76.97\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"97.84\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"288.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.68\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Air Flow\","
    },
    {
      "name": "\"value\"",
      "value": "\"13.3 l/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Negative ions\","
    },
    {
      "name": "\"value\"",
      "value": "\"Help reduce static\""
    }
  ]
},
{
  "id": "68",
  "sku": "AC9140",
  "name": "Remington Proluxe 2400W Hair Dryer - Rose Gold | AC9140",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 41.99,
  "image": "https://www.did.ie/cdn/shop/products/remington-proluxe-2400w-hair-dryer-rose-gold-or-ac9140-did-electrical-1_df2e34aa-3ebc-4efa-bb4a-697a05641684_5000x.jpg?v=1656167213",
  "brand": "Remington",
  "rating": 4.4,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remington\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Rose Gold\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heating Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"OPTI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Temperature Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Air Filter\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessories\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessories Included\","
    },
    {
      "name": "\"value\"",
      "value": "\"Concentrators, Diffuser\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.5800\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"213\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"93\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"290\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 Years\""
    }
  ]
},
{
  "id": "69",
  "sku": "HD301UK",
  "name": "Shark SpeedStyle 1700W Hair Dryer - Silk | HD301UK",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 119.99,
  "image": "https://www.did.ie/cdn/shop/files/HD301UK-2_5000x.jpg?v=1739348852",
  "brand": "Shark",
  "rating": 4.8,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Shark\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silk\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"110 °C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1700\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.44\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"165\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"201\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Motor Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"DC\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level\","
    },
    {
      "name": "\"value\"",
      "value": "\"83 dB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Concentrator Nozzle\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Portable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "70",
  "sku": "LANAIBLOPINK",
  "name": "Lanaiblo 2400W Hair Dryer - Pink | LANAIBLOPINK",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 109.99,
  "image": "https://www.did.ie/cdn/shop/products/lanaiblo-2400w-hair-dryer-pink-or-lanaiblopink-did-electrical-1_4986aa81-000e-4b43-aae2-05dd58c3d8f0_5000x.jpg?v=1656332814",
  "brand": "Lanaiblo",
  "rating": 4.7,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lanaiblo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pink\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Barrel Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tourmaline - Ceramic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heating Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ionic Technology\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ceramic Coated\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "71",
  "sku": "D3010",
  "name": "Remington Power Dry 2000W Hair Dryer - Black | D3010",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 21.99,
  "image": "https://www.did.ie/cdn/shop/products/remington-power-dry-2000w-hair-dryer-black-or-d3010-did-electrical-1_b5c80bb7-d29e-4cc0-b200-f4e072bc9bdc_5000x.jpg?v=1656167213",
  "brand": "Remington",
  "rating": 4.9,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remington\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heating Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ceramic Ionic grille\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Temperature Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Air Filter\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Ceramic Coated\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessories\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessories Included\","
    },
    {
      "name": "\"value\"",
      "value": "\"Concentrator\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.6500\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"86\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"187\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"266\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 Years\""
    }
  ]
},
{
  "id": "72",
  "sku": "113279-01",
  "name": "Dyson Supersonic Hair Dryer with Straight+Wavy - Prussian Blue & Rich Copper | 113279-01",
  "description": "",
  "category": "Appliances > Small Appliances > Hair Dryer",
  "price": 399.99,
  "image": "https://www.did.ie/cdn/shop/files/113279-01-1_5000x.jpg?v=1757394779",
  "brand": "Dyson",
  "rating": 4.4,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dyson\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Prussian Blue & Rich Copper\""
    },
    {
      "name": "\"name\"",
      "value": "\"Product Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hair Dryer & Hair Straightener\""
    },
    {
      "name": "\"name\"",
      "value": "\"Styler Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Speed Settings\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Watts (w)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1600\""
    },
    {
      "name": "\"name\"",
      "value": "\"Feature\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.62\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Shot Button\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76.97\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"97.84\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"288.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.675\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"5025155117866\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Air Flow\","
    },
    {
      "name": "\"value\"",
      "value": "\"13.3 l/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Negative ions\","
    },
    {
      "name": "\"value\"",
      "value": "\"Help Reduce Static\""
    }
  ]
},
{
  "id": "73",
  "sku": "CP.FP.00000184.01",
  "name": "DJI Neo Drone - White | CP.FP.00000184.01",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 199.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.FP.00000184.01-4_100869e4-07b5-40ef-8c64-2b5240fe7678_5000x.jpg?v=1741846847",
  "brand": "DJI",
  "rating": 4.7,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shutter Speed (secs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Video: 1/8000-1/30 s, Photo: 1/8000-1/10 s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flying Height (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flight Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"22\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Subject Tracking\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Single-Axis Mechanical Gimbal (Tilt)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\""
    },
    {
      "name": "\"name\"",
      "value": "\"Focal Length\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.6 m to ∞\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aperture\","
    },
    {
      "name": "\"value\"",
      "value": "\"f/2.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1435\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"157\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"130\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.135\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565988362\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 17 mins with the Propeller Guards\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Hovering Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 18 mins (approx. 17 mins with the Propeller Guards)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Distance (Km)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"8 m/s (Level 4)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C0 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"1/2\\\" Image Sensor\""
    },
    {
      "name": "\"name\"",
      "value": "\"ISO Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"100-6400 (Auto), 100-6400 (Manual)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Still Photography Modes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Single/Timed Shot\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"75Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"exFAT\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Normal\""
    },
    {
      "name": "\"name\"",
      "value": "\"EIS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supports RockSteady, HorizonBalancing, and turning stabilization off\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mechanical Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -120° to 120°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controllable Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -90° to 60°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.01°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Roll Correction\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supports correction of footage recorded on Neo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensing Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Downward visual positioning\""
    },
    {
      "name": "\"name\"",
      "value": "\"Downward\","
    },
    {
      "name": "\"value\"",
      "value": "\"Precise Hovering Range: 0.5-10 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Environment\","
    },
    {
      "name": "\"value\"",
      "value": "\"Downward: Non-reflective, discernible surfaces with diffuse reflectivity of >20% (such as walls, trees, or people), Adequate lighting (lux > 15, normal indoor lighting conditions)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11a/b/g/n/ac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Effective Operating Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"50 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth 5.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"< 10 dBm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 45 g\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"When Using the Two-Way Charging Hub (60W max charging power): Approx. 60 minutes to charge three batteries simultaneously from 0% to 100%; When Directly Charging Neo (15W max charging power): Approx. 50 minutes to charge from 0% to 100%\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Nominal Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.3 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.6 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Energy\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.5 Wh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended Charger\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI 65W Portable Charger, USB Power Delivery charger\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V 3 A, 9 V 3 A, 12 V 3 A, 15 V 3 A, 20 V 3 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Output (charging)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V, 2 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 Batteries Charged Simultaneously\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatibility\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI Neo Intelligent Flight Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + Galileo + BeiDou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"O4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"With DJI RC-N3 Remote Controller: Up to 1080p/60fps, With DJI Goggles 3 plus DJI RC Motion 3/DJI FPV Remote Controller 3: Up to 1080p/60fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Communication Bandwidth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max 40 MHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Transmission Distance (unobstructed, free of interference)\","
    },
    {
      "name": "\"value\"",
      "value": "\"FCC: 10 km, CE: 6 km, SRRC: 6 km, MIC: 6 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Download Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi: 25 MB/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lowest Latency: With DJI RC-N3 Remote Controller: Approx. 120 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"50Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Antennas\","
    },
    {
      "name": "\"value\"",
      "value": "\"Two antennas, 1T2R\""
    }
  ]
},
{
  "id": "74",
  "sku": "CP.FP.00000185.01",
  "name": "DJI Neo Drone Fly More Combo - White | CP.FP.00000185.01",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 359.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.FP.00000185.01-4_1c7e6572-9b53-4ec3-9519-01ca8ca17ba2_5000x.jpg?v=1734953323",
  "brand": "DJI",
  "rating": 4.8,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shutter Speed (secs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Video: 1/8000-1/30 s, Photo: 1/8000-1/10 s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flying Height (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flight Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"22\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Subject Tracking\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Single-Axis Mechanical Gimbal (Tilt)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\""
    },
    {
      "name": "\"name\"",
      "value": "\"Focal Length\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.6 m to ∞\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aperture\","
    },
    {
      "name": "\"value\"",
      "value": "\"f/2.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1435\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"157\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"130\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.135\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565988294\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 17 mins with the Propeller Guards\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Hovering Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 18 mins (approx. 17 mins with the Propeller Guards)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Distance (Km)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"8 m/s (Level 4)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C0 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"1/2\\\" Image Sensor\""
    },
    {
      "name": "\"name\"",
      "value": "\"ISO Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"100-6400 (Auto), 100-6400 (Manual)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Still Photography Modes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Single/Timed Shot\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"75Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"exFAT\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Normal\""
    },
    {
      "name": "\"name\"",
      "value": "\"EIS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supports RockSteady, HorizonBalancing, and turning stabilization off\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mechanical Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -120° to 120°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controllable Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -90° to 60°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.01°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Roll Correction\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supports correction of footage recorded on Neo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensing Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Downward visual positioning\""
    },
    {
      "name": "\"name\"",
      "value": "\"Downward\","
    },
    {
      "name": "\"value\"",
      "value": "\"Precise Hovering Range: 0.5-10 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Environment\","
    },
    {
      "name": "\"value\"",
      "value": "\"Downward: Non-reflective, discernible surfaces with diffuse reflectivity of >20% (such as walls, trees, or people), Adequate lighting (lux > 15, normal indoor lighting conditions)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11a/b/g/n/ac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Effective Operating Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"50 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth 5.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"< 10 dBm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 45 g\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"When Using the Two-Way Charging Hub (60W max charging power): Approx. 60 minutes to charge three batteries simultaneously from 0% to 100%; When Directly Charging Neo (15W max charging power): Approx. 50 minutes to charge from 0% to 100%\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Nominal Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.3 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.6 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Energy\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.5 Wh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended Charger\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI 65W Portable Charger, USB Power Delivery charger\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V 3 A, 9 V 3 A, 12 V 3 A, 15 V 3 A, 20 V 3 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Output (charging)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V, 2 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"3 Batteries Charged Simultaneously\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatibility\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI Neo Intelligent Flight Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + Galileo + BeiDou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"O4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"With DJI RC-N3 Remote Controller: Up to 1080p/60fps, With DJI Goggles 3 plus DJI RC Motion 3/DJI FPV Remote Controller 3: Up to 1080p/60fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Communication Bandwidth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max 40 MHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Transmission Distance (unobstructed, free of interference)\","
    },
    {
      "name": "\"value\"",
      "value": "\"FCC: 10 km, CE: 6 km, SRRC: 6 km, MIC: 6 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Download Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi: 25 MB/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lowest Latency: With DJI RC-N3 Remote Controller: Approx. 120 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"50Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Antennas\","
    },
    {
      "name": "\"value\"",
      "value": "\"Two antennas, 1T2R\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Max Operating Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Without Charging Any Mobile Device: 3.5 hours, When Charging a Mobile Device: 1.5 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Charging Time (Hr)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Charging Type (V, A)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5, 2\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Battery Capacity (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2600\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Weight (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.320\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Dimensions (WxDxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"150x104.2x45.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC-N3 Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    }
  ]
},
{
  "id": "75",
  "sku": "CP.MA.00000735.04",
  "name": "DJI Mini 4 Pro Fly More Combo DJI RC 2 - White | CP.MA.00000735.04",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 1149.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.MA.00000735.04-4_3bb906ae-604e-4472-bf64-09af6343fd64_5000x.jpg?v=1734953388",
  "brand": "DJI",
  "rating": 4.4,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shutter Speed (secs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP Photo: 1/16000-2 s (2.5-8 s for simulated long exposure), 48MP Photo: 1/8000-2 s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flying Height (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"34\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12, 48\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Angle Lens\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Subject Tracking\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"3-Axis Mechanical Gimbal (Tilt, Roll, Pan)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\""
    },
    {
      "name": "\"name\"",
      "value": "\"Focal Length\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 m to ∞\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aperture\","
    },
    {
      "name": "\"value\"",
      "value": "\"f/1.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"microSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2590\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"373\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"298\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"101\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.249\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565969101\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Folded Dimensions (without propellers) (DxWxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"148x94x64\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Hovering Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"30 Mins\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Distance\","
    },
    {
      "name": "\"value\"",
      "value": "\"18 km (with Intelligent Flight Battery and measured while flying at 40.7 kph in a windless environment at 20 meters above sea level)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.7 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Pitch Angle\","
    },
    {
      "name": "\"value\"",
      "value": "\"35°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + Galileo + BeiDou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C0 (EU), with the option to apply for C1 (EU) in the DJI Fly app.\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Image Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"8064×6048\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG/DNG (RAW)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4 (MPEG-4 AVC/H.264, HEVC/H.265)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"H.264/H.265: 150 Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Mode and Sampling Method\","
    },
    {
      "name": "\"value\"",
      "value": "\"Normal: 8-bit 4:2:0 (H.264/H.265)\""
    },
    {
      "name": "\"name\"",
      "value": "\"HLG/D-Log M\","
    },
    {
      "name": "\"value\"",
      "value": "\"10-bit 4:2:0 (H.265)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"exFAT\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP Photo: 1-3x, 4K: 1-3x, FHD: 1-4x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mechanical Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -135° to 80°, Roll: -135° to 45°, Pan: -30° to 30°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controllable Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -90° to 60°, Roll: -90° or 0°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.01°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensing Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Omnidirectional binocular vision system, supplemented with a 3D infrared sensor at the bottom of the aircraft\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"O4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4000-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Transmission Distance (unobstructed, free of interference)\","
    },
    {
      "name": "\"value\"",
      "value": "\"FCC: 20 km, CE: 10 km, SRRC: 10 km, MIC: 10 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lowest Latency\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aircraft + Remote Controller: approx. 120 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Antenna\","
    },
    {
      "name": "\"value\"",
      "value": "\"4 antennas, 2T4R\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatible Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI Mini 4 Pro Intelligent Flight Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 77.9 g\""
    },
    {
      "name": "\"name\"",
      "value": "\"Nominal Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.32\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Energy (Wh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18.96\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"70 minutes (with the DJI 30W USB-C Charger and the battery mounted to the aircraft), 58 minutes (with the DJI 30W USB-C Charger and the battery inserted into the Two-Way Charging Hub)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended Charger\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI 30W USB-C Charger or other USB Power Delivery chargers (30 W)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Hub Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"5V 3A, 9V 3A, 12V 3A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Hub Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-A: Max Voltage: 5 V; Max Current: 2 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Three batteries charged in sequence.\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatibility\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI Mini 4 Pro Intelligent Flight Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards\","
    },
    {
      "name": "\"value\"",
      "value": "\"SanDisk Extreme PRO 32GB V30 U3 A1 microSDHC, Lexar 1066x 64GB V30 U3 A2 microSDXC, Lexar 1066x 128GB V30 U3 A2 microSDXC, Lexar 1066x 256GB V30 U3 A2 microSDXC, Lexar 1066x 512GB V30 U3 A2 microSDXC, Kingston Canvas GO! Plus 64GB V30 U3 A2 microSDXC, Kingston Canvas GO! Plus 128GB V30 U3 A2 microSDXC, Kingston Canvas React Plus 64GB V90 U3 A1 microSDXC, Kingston Canvas React Plus 128GB V90 U3 A1 microSDXC, Kingston Canvas React Plus 256GB V90 U3 A1 microSDXC, Samsung EVO Plus 512GB V30 U3 A2 microSDXC\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Video Transmission Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4000-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Operating Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Without charging any mobile device: 6 hours, When charging a mobile device: 3.5 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Supported Mobile Device Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"180×86×10 mm (L×W×H)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.5 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"It is recommended to use a 5V/2A charger\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Battery Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"18.72 Wh (3.6 V, 2600 mAh × 2)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported Mobile Device Port Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lightning, USB-C, Micro-USB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Guaranteed Software Updates Until\","
    },
    {
      "name": "\"value\"",
      "value": "\"2026/12/31\""
    }
  ]
},
{
  "id": "76",
  "sku": "CP.MA.00000814.01",
  "name": "DJI Air 3S (RC-N3) Drone - Grey | CP.MA.00000814.01",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 1119.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.MA.00000814.01-4_4c7634af-2df0-4905-8715-78fc947d90f5_5000x.jpg?v=1741845764",
  "brand": "DJI",
  "rating": 4.8,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flying Height (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"6000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flight Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"42\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Angle Lens\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Subject Tracking\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Slow Motion Recording\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"MicroSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4276\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"266.11\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325.47\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"106\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.724\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565989949\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Ascent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Descent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Horizontal Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"At sea level, in windless conditions: 21 m/s, At sea level, with 6 m/s tailwind, while flying in the same direction as the wind: 27 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Hovering Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"41\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"12 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Pitch Angle\","
    },
    {
      "name": "\"value\"",
      "value": "\"36°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + Galileo + BeiDou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hovering Accuracy Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Vertical: ±0.1 m (with vision positioning), ±0.5 m (with satellite positioning); Horizontal:±0.3 m (with vision positioning), ±0.5 m (with satellite positioning)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C1 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 1-inch CMOS, 50MP Effective Pixels, Medium Tele Camera: 1/1.3-inch CMOS, 48MP Effective Pixels\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Image Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 8192×6144, Medium Tele Camera: 8064×6048\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG/DNG (RAW)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4 (MPEG-4 AVC/H.264, HEVC/H.265)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"H.264/H.265: 130 Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"exFAT\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 1-2.9x, Medium Tele Camera: 3-9x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stabilization\","
    },
    {
      "name": "\"value\"",
      "value": "\"3-axis mechanical gimbal (tilt, roll, pan)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mechanical Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -135° to 70°, Roll: -50° to 50°, Pan: -27° to 27°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controllable Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -90° to 60°, Pan: -5° to 5°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.0037°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensing Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Omnidirectional binocular vision system, supplemented with forward-facing LiDAR and an infrared sensor at the bottom of the aircraft\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"O4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote Controller: 1080p/30fps, 1080p/60fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4000-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4 GHz: <33 dBm (FCC), <20 dBm (CE/SRRC/MIC); 5.1 GHz: <23 dBm (CE); 5.8 GHz: <33 dBm (FCC), <30 dBm (SRRC), <14 dBm (CE)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Transmission Distance\","
    },
    {
      "name": "\"value\"",
      "value": "\"FCC: 20 km, CE: 10 km, SRRC: 10 km, MIC: 10 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lowest Latency\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aircraft + Remote Controller: Approx. 120 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Antenna\","
    },
    {
      "name": "\"value\"",
      "value": "\"6 antennas, 2T4R\""
    },
    {
      "name": "\"name\"",
      "value": "\"Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11 a/b/g/n/ac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth 5.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"< 10 dBm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Capacity (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4276\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.247\""
    },
    {
      "name": "\"name\"",
      "value": "\"Nominal Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion 4S\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy (Wh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"62.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 80 minutes (with DJI 65W Portable Charger), Approx. 60 minutes (with DJI 100W USB-C Power Adapter and Battery Charging Hub)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charger Rated Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI 65W Portable Charger: 65 W, DJI 100W USB-C Power Adapter: 100 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Car Charger Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"12.7-16 V, 6.5 A, rated voltage 14 V (DC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Car Charger Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C: 5V, 5A 9V, 5A 12V, 5 A; 15V, 4.3 A; 20V, 3.25A; 5-20V, 3.25A\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB-A\","
    },
    {
      "name": "\"value\"",
      "value": "\"5V, 2A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Power (W)\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"More - DJI RC-N3 RC\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Operating Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Without Charging Any Mobile Device: 3.5 hours, When Charging a Mobile Device: 1.5 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Supported Mobile Device Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"180×86×10 mm (L×W×H)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"It is recommended to use a 5V/2A charger.\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"9.36 Wh (3.6 V, 2600 mAh)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 320 g\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\","
    },
    {
      "name": "\"value\"",
      "value": "\"104.2×150×45.2 mm (L×W×H)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported Mobile Device Port Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lightning, USB-C, Micro-USB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4000-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4 GHz: <33 dBm (FCC), <20 dBm (CE/SRRC/MIC); 5.1 GHz: <23 dBm (CE); 5.8 GHz: <33 dBm (FCC), <14 dBm (CE), <30 dBm (SRRC)\""
    }
  ]
},
{
  "id": "77",
  "sku": "CP.MA.00000816.01",
  "name": "DJI Air 3S Fly More Combo (RC 2) Drone - Grey | CP.MA.00000816.01",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 1629.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.MA.00000816.01-3_8cb5c29a-4ab4-407e-88aa-9d934ac92396_5000x.jpg?v=1741846009",
  "brand": "DJI",
  "rating": 4.7,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flying Height (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"6000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flight Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"42\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Angle Lens\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Subject Tracking\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Slow Motion Recording\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"MicroSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4276\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"266.11\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325.47\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"106\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.724\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565989932\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Ascent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Descent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Horizontal Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"At sea level, in windless conditions: 21 m/s, At sea level, with 6 m/s tailwind, while flying in the same direction as the wind: 27 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Hovering Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"41\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"12 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Pitch Angle\","
    },
    {
      "name": "\"value\"",
      "value": "\"36°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + Galileo + BeiDou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hovering Accuracy Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Vertical: ±0.1 m (with vision positioning), ±0.5 m (with satellite positioning); Horizontal:±0.3 m (with vision positioning), ±0.5 m (with satellite positioning)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C1 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 1-inch CMOS, 50MP Effective Pixels, Medium Tele Camera: 1/1.3-inch CMOS, 48MP Effective Pixels\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Image Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 8192×6144, Medium Tele Camera: 8064×6048\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG/DNG (RAW)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4 (MPEG-4 AVC/H.264, HEVC/H.265)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"H.264/H.265: 130 Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"exFAT\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 1-2.9x, Medium Tele Camera: 3-9x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stabilization\","
    },
    {
      "name": "\"value\"",
      "value": "\"3-axis mechanical gimbal (tilt, roll, pan)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mechanical Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -135° to 70°, Roll: -50° to 50°, Pan: -27° to 27°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controllable Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -90° to 60°, Pan: -5° to 5°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.0037°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensing Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Omnidirectional binocular vision system, supplemented with forward-facing LiDAR and an infrared sensor at the bottom of the aircraft\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"O4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote Controller: 1080p/30fps, 1080p/60fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4000-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4 GHz: <33 dBm (FCC), <20 dBm (CE/SRRC/MIC); 5.1 GHz: <23 dBm (CE); 5.8 GHz: <33 dBm (FCC), <30 dBm (SRRC), <14 dBm (CE)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Transmission Distance\","
    },
    {
      "name": "\"value\"",
      "value": "\"FCC: 20 km, CE: 10 km, SRRC: 10 km, MIC: 10 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lowest Latency\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aircraft + Remote Controller: Approx. 120 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Antenna\","
    },
    {
      "name": "\"value\"",
      "value": "\"6 antennas, 2T4R\""
    },
    {
      "name": "\"name\"",
      "value": "\"Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11 a/b/g/n/ac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth 5.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"< 10 dBm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Capacity (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4276\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.247\""
    },
    {
      "name": "\"name\"",
      "value": "\"Nominal Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion 4S\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy (Wh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"62.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 80 minutes (with DJI 65W Portable Charger), Approx. 60 minutes (with DJI 100W USB-C Power Adapter and Battery Charging Hub)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charger Rated Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI 65W Portable Charger: 65 W, DJI 100W USB-C Power Adapter: 100 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Car Charger Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"12.7-16 V, 6.5 A, rated voltage 14 V (DC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Car Charger Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C: 5V, 5A 9V, 5A 12V, 5 A; 15V, 4.3 A; 20V, 3.25A; 5-20V, 3.25A\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB-A\","
    },
    {
      "name": "\"value\"",
      "value": "\"5V, 2A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Power (W)\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"More - Battery Charging Hub\""
    },
    {
      "name": "\"name\"",
      "value": "\"Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C: 5-20 V, max 5 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Output (power accumulation)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery Port: 12-17.2 V, 3.5 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Output (charging)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery Port: 12-17.2 V, max 5 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Output (USB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C: 5V, 3A; 9V, 5A; 12V, 5A; 15V, 5A; 20V, 4.1A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Three batteries charged in sequence\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatibility\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI Air 3S Intelligent Flight Battery\""
    }
  ]
},
{
  "id": "78",
  "sku": "CP.MA.00000815.01",
  "name": "DJI Air 3S Fly More Combo (RC-N3) Drone - Grey | CP.MA.00000815.01",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 1419.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.MA.00000815.01-3_84c5bbd1-f5d4-42c3-9288-290e1fa8dce6_5000x.jpg?v=1741845965",
  "brand": "DJI",
  "rating": 4.9,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flying Height (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"6000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flight Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"42\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Angle Lens\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Subject Tracking\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Slow Motion Recording\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"MicroSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4276\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"266.11\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325.47\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"106\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.724\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565989925\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Ascent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Descent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Horizontal Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"At sea level, in windless conditions: 21 m/s, At sea level, with 6 m/s tailwind, while flying in the same direction as the wind: 27 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Hovering Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"41\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"12 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Pitch Angle\","
    },
    {
      "name": "\"value\"",
      "value": "\"36°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + Galileo + BeiDou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hovering Accuracy Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Vertical: ±0.1 m (with vision positioning), ±0.5 m (with satellite positioning); Horizontal:±0.3 m (with vision positioning), ±0.5 m (with satellite positioning)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C1 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 1-inch CMOS, 50MP Effective Pixels, Medium Tele Camera: 1/1.3-inch CMOS, 48MP Effective Pixels\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Image Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 8192×6144, Medium Tele Camera: 8064×6048\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG/DNG (RAW)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4 (MPEG-4 AVC/H.264, HEVC/H.265)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"H.264/H.265: 130 Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"exFAT\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wide-Angle Camera: 1-2.9x, Medium Tele Camera: 3-9x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stabilization\","
    },
    {
      "name": "\"value\"",
      "value": "\"3-axis mechanical gimbal (tilt, roll, pan)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mechanical Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -135° to 70°, Roll: -50° to 50°, Pan: -27° to 27°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controllable Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -90° to 60°, Pan: -5° to 5°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.0037°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensing Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Omnidirectional binocular vision system, supplemented with forward-facing LiDAR and an infrared sensor at the bottom of the aircraft\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"O4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote Controller: 1080p/30fps, 1080p/60fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4000-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4 GHz: <33 dBm (FCC), <20 dBm (CE/SRRC/MIC); 5.1 GHz: <23 dBm (CE); 5.8 GHz: <33 dBm (FCC), <30 dBm (SRRC), <14 dBm (CE)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Transmission Distance\","
    },
    {
      "name": "\"value\"",
      "value": "\"FCC: 20 km, CE: 10 km, SRRC: 10 km, MIC: 10 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lowest Latency\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aircraft + Remote Controller: Approx. 120 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Antenna\","
    },
    {
      "name": "\"value\"",
      "value": "\"6 antennas, 2T4R\""
    },
    {
      "name": "\"name\"",
      "value": "\"Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11 a/b/g/n/ac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth 5.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"< 10 dBm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Capacity (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4276\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.247\""
    },
    {
      "name": "\"name\"",
      "value": "\"Nominal Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion 4S\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy (Wh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"62.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 80 minutes (with DJI 65W Portable Charger), Approx. 60 minutes (with DJI 100W USB-C Power Adapter and Battery Charging Hub)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charger Rated Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI 65W Portable Charger: 65 W, DJI 100W USB-C Power Adapter: 100 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Car Charger Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"12.7-16 V, 6.5 A, rated voltage 14 V (DC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Car Charger Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C: 5V, 5A 9V, 5A 12V, 5 A; 15V, 4.3 A; 20V, 3.25A; 5-20V, 3.25A\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB-A\","
    },
    {
      "name": "\"value\"",
      "value": "\"5V, 2A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Power (W)\","
    },
    {
      "name": "\"value\"",
      "value": "\"65\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"More - Battery Charging Hub\""
    },
    {
      "name": "\"name\"",
      "value": "\"Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C: 5-20 V, max 5 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Output (power accumulation)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery Port: 12-17.2 V, 3.5 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Output (charging)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Battery Port: 12-17.2 V, max 5 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Output (USB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-C: 5V, 3A; 9V, 5A; 12V, 5A; 15V, 5A; 20V, 4.1A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Three batteries charged in sequence\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatibility\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI Air 3S Intelligent Flight Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"More - DJI RC-N3 RC\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Operating Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Without Charging Any Mobile Device: 3.5 hours, When Charging a Mobile Device: 1.5 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Supported Mobile Device Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"180×86×10 mm (L×W×H)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"It is recommended to use a 5V/2A charger.\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"9.36 Wh (3.6 V, 2600 mAh)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 320 g\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\","
    },
    {
      "name": "\"value\"",
      "value": "\"104.2×150×45.2 mm (L×W×H)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported Mobile Device Port Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lightning, USB-C, Micro-USB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4000-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4 GHz: <33 dBm (FCC), <20 dBm (CE/SRRC/MIC); 5.1 GHz: <23 dBm (CE); 5.8 GHz: <33 dBm (FCC), <14 dBm (CE), <30 dBm (SRRC)\""
    }
  ]
},
{
  "id": "79",
  "sku": "CP.MA.00000797.01",
  "name": "DJI Mini 4K Fly More Combo Drone - White | CP.MA.00000797.01",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 449.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.MA.00000797.01-5_1c1c0ae2-8ae6-408e-a464-ddcccd0e1826_5000x.jpg?v=1741845720",
  "brand": "DJI",
  "rating": 4.4,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Indoor & Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flight Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"3-Axis Mechanical Gimbal (Tilt, Roll, and Pan)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\""
    },
    {
      "name": "\"name\"",
      "value": "\"Focal Length\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 m to ∞\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aperture\","
    },
    {
      "name": "\"value\"",
      "value": "\"f/2.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"microSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2250\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"245\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"289\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"56\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.246\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565980397\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Distance\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.7 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Ascent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Descent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"3.5 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Horizontal Speed (at sea level, no wind)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Takeoff Altitude\","
    },
    {
      "name": "\"value\"",
      "value": "\"4000 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 Mins\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.7 m/s (Level 5)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Pitch Angle\","
    },
    {
      "name": "\"value\"",
      "value": "\"40°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"0° to 40° C (32° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + GLONASS + Galileo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C0 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shutter Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Electronic Shutter: 4-1/8000 s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Image Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"4000 × 3000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG/DNG (RAW)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4 (MPEG-4 AVC/H.264)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"100Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"FAT32 (= 32 GB), exFAT (> 32 GB)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K: 2x, 2.7K: 3x, FHD: 4x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Normal\""
    },
    {
      "name": "\"name\"",
      "value": "\"QuickShots Modes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dronie, Helix, Rocket, Circle, and Boomerang\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Environment\","
    },
    {
      "name": "\"value\"",
      "value": "\"Downward: Surfaces with Discernible Patterns, Diffuse Reflectivity >20% (e.g., Walls, Trees, People), and Adequate Lighting (lux >15)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.01°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Downward\","
    },
    {
      "name": "\"value\"",
      "value": "\"Precise Hovering Range: 0.5-10 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI O2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote Controller: 720p/30fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lowest Latency\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 200 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight (g)\","
    },
    {
      "name": "\"value\"",
      "value": "\"82.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Nominal Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.7 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.8 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.32 Wh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V 3 A, 9 V 3 A, 12 V 3 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-A: Max Voltage: 5 V; Max Current: 2 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Three batteries charged in sequence\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 16 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"SanDisk Extreme\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 32 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung PRO Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Samsung EVO Plus\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Industrial\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Pro V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Pro V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 633x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 667x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 64 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung PRO Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Samsung EVO Plus\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 633x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 667x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 1000x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar High Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Toshiba EXCERIA M303 V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Netac Pro V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 128 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung EVO Plus\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Plus V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Plus V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 633x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 667x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 1000x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar High Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Toshiba EXCERIA M303 V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Netac Pro V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 256GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Remote Controller Max Operating Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI RC-N1C - Without Charging Any Mobile Device: 4 hours, When Charging a Mobile Device: 2 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Supported Mobile Device Size (WxDxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"180 × 86 × 10\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz: <26 dBm (FCC), <20 dBm (CE/SRRC/MIC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"5.725-5.850 GHz\","
    },
    {
      "name": "\"value\"",
      "value": "\"<26 dBm (FCC), <23 dBm (SRRC), <14 dBm (CE)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions Folded (without propellers) (mm) (W×D×H)\","
    },
    {
      "name": "\"value\"",
      "value": "\"138 x 81 x 58\""
    }
  ]
},
{
  "id": "80",
  "sku": "CP.FP.00000150.04",
  "name": "DJI Avata 2 Fly More Combo Drone - Black | CP.FP.00000150.04",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 1219.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.FP.00000150.04-1_19ca2460-af3a-489b-ba1f-7d752d58193b_5000x.jpg?v=1739350460",
  "brand": "DJI",
  "rating": 4.7,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shutter Speed (secs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Video: 1/8000-1/30 s, Photo: 1/8000-1/50 s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flying Height (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"23\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"46\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K (4∶3): 3840×2880@30/50/60fps, 4K (16∶9): 3840×2160@30/50/60/100fps, 2.7K (4∶3): 2688×2016@30/50/60fps, 2.7K (16∶9): 2688×1512@30/50/120fps, 1080p (4∶3): 1440×1080@30/50/120fps, 1080p (16∶9): 1920×1080@30/50/120fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mechanical Gimbal\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aperture\","
    },
    {
      "name": "\"value\"",
      "value": "\"f/2.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"MicroSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2150\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"212\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"185\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"64\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.377\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565980083\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Ascent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"6 m/s (Normal mode), 9 m/s (Sport mode)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Descent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"6 m/s (Normal mode), 9 m/s (Sport mode)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Horizontal Speed (near sea level, no wind)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8 m/s (Normal mode), 16 m/s (Sport mode), 27 m/s (Manual mode)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Takeoff Altitude (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Hovering Time (min)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 21\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Distance (Km)\","
    },
    {
      "name": "\"value\"",
      "value": "\"13\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.7 m/s (Level 5)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + Galileo + BeiDou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hovering accuracy range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Vertical:±0.1 m (with vision positioning), ±0.5 m (with GNSS positioning); Horizontal:±0.3 m (with vision positioning), ±1.5 m (with GNSS positioning)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C1 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"1/1.3-inch image sensor, Effective Pixels: 12 MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\","
    },
    {
      "name": "\"value\"",
      "value": "\"‌FOV: 155°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Format Equivalent\","
    },
    {
      "name": "\"value\"",
      "value": "\"12 mm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Focus\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.6 m to ∞\""
    },
    {
      "name": "\"name\"",
      "value": "\"ISO Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"100-25600 (Auto), 100-25600 (Manual)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Image Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"4000×2256 (16∶9), 4000×3000 (4∶3)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Still Photography Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Single shot\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4 (H.264/H.265)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"130 Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"exFAT\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Standard, D-Log M\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera FOV\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supports normal mode, wide-angle mode, and ultra-wide-angle mode\""
    },
    {
      "name": "\"name\"",
      "value": "\"EIS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supports RockSteady 3.0+ and HorizonSteady Can be disabled\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stabilization\","
    },
    {
      "name": "\"value\"",
      "value": "\"Single-axis mechanical gimbal (tilt)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Mechanical Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -95° to 90°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controllable Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tilt: -85° to 80°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.01°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Electronic Roll Axis\","
    },
    {
      "name": "\"value\"",
      "value": "\"Real-time screen correction is unavailable during recording, but can be applied to the footage recorded on the drone.\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensing Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Downward and backward visual positioning\""
    },
    {
      "name": "\"name\"",
      "value": "\"Downward\","
    },
    {
      "name": "\"value\"",
      "value": "\"ToF Effective Measurement Height: 10 m, Precise Hovering Range: 0.3-10 m, Measurement Range: 0.3-20 m, FOV: Horizontal 78°, Vertical 78°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Backward\","
    },
    {
      "name": "\"value\"",
      "value": "\"Measurement Range: 0.5-20 m, FOV: Horizontal 78°, Vertical 78°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Environment\","
    },
    {
      "name": "\"value\"",
      "value": "\"Diffuse reflective surfaces with discernible patterns, diffuse reflectivity > 20% (such as concrete pavement), Adequate lighting (lux > 15, normal indoor lighting conditions)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"O4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"1080p@30/50/60/100fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.170-5.250 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Communication Bandwidth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max 60 MHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Transmission Distance (unobstructed, free of interference)\","
    },
    {
      "name": "\"value\"",
      "value": "\"FCC: 13 km, CE: 10 km, SRRC: 10 km, MIC: 10 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Download Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Wi-Fi: 30 MB/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"60Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Antennas\","
    },
    {
      "name": "\"value\"",
      "value": "\"4 antennas, 2T4R\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11a/b/g/n/ac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Protocol\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth 5.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"<10 dBm\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.145\""
    },
    {
      "name": "\"name\"",
      "value": "\"Standard Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"14.76 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"17 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy\","
    },
    {
      "name": "\"value\"",
      "value": "\"31.7 Wh@0.5C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Hub Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"5-20 V, max 3 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Hub Output (power accumulation)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max 65 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Hub Output (charging)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Max 17 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Hub Output (USB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V, 2 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Three batteries charged in sequence.\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Hub Compatibility\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI Avata 2 Intelligent Flight Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Max Operating Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 10 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"0° to 50° C (32° to 122° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Charging Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V, 2 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Battery Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"2600 mAh\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Weight (Kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"240\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Dimensions (WxDxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"165×119×62\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"RC Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400 GHz: ＜26 dBm (FCC), ＜20 dBm (CE/SRRC/MIC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Guaranteed Software Updates Until\","
    },
    {
      "name": "\"value\"",
      "value": "\"2026/12/31\""
    }
  ]
},
{
  "id": "81",
  "sku": "CP.MA.00000732.04",
  "name": "DJI Mini 4 Pro RC2 Wi-Fi Drone | CP.MA.00000732.04",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 1019.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.MA.00000732.04-01_5000x.jpg?v=1715952910",
  "brand": "DJI",
  "rating": 4.8,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wide Angle Lens\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Subject Tracking\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Slow Motion Recording\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aperture\","
    },
    {
      "name": "\"value\"",
      "value": "\"f/1.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wifi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live Streaming\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"6200\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"06941565969040\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"App Controller\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Automatic Exposure Bracketing, 4K HD Video Recording\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Control Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"20000 m\""
    }
  ]
},
{
  "id": "82",
  "sku": "CP.MA.00000798.01",
  "name": "DJI Mini 4K Drone - White | CP.MA.00000798.01",
  "description": "",
  "category": "Drones & Cameras > Drones",
  "price": 309.99,
  "image": "https://www.did.ie/cdn/shop/files/CP.MA.00000798.01-5_06d0a9bd-7ba8-4b7f-aa84-779d354ab557_5000x.jpg?v=1734952378",
  "brand": "DJI",
  "rating": 4.4,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Suitable For\","
    },
    {
      "name": "\"value\"",
      "value": "\"Indoor & Outdoor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Rotors\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote control\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aircraft Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Flight Time (mins)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flight Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Still Resolution (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gimbal\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Stabilisation\","
    },
    {
      "name": "\"value\"",
      "value": "\"3-Axis Mechanical Gimbal (Tilt, Roll, and Pan)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lens\""
    },
    {
      "name": "\"name\"",
      "value": "\"Focal Length\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 m to ∞\""
    },
    {
      "name": "\"name\"",
      "value": "\"Aperture\","
    },
    {
      "name": "\"value\"",
      "value": "\"f/2.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card\","
    },
    {
      "name": "\"value\"",
      "value": "\"microSD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery (mAh)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2250\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rechargeable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"245\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"289\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"56\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.246\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6941565980359\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Distance\","
    },
    {
      "name": "\"value\"",
      "value": "\"15.7 km\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Ascent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Descent Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"3.5 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Horizontal Speed (at sea level, no wind)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16 m/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Takeoff Altitude\","
    },
    {
      "name": "\"value\"",
      "value": "\"4000 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Flight Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 Mins\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Wind Speed Resistance\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.7 m/s (Level 5)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Pitch Angle\","
    },
    {
      "name": "\"value\"",
      "value": "\"40°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"0° to 40° C (32° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Global Navigation Satellite System\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS + GLONASS + Galileo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C0 (EU)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shutter Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"Electronic Shutter: 4-1/8000 s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Image Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"4000 × 3000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Photo Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"JPEG/DNG (RAW)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4 (MPEG-4 AVC/H.264)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Video Bitrate\","
    },
    {
      "name": "\"value\"",
      "value": "\"100Mbps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Supported File System\","
    },
    {
      "name": "\"value\"",
      "value": "\"FAT32 (= 32 GB), exFAT (> 32 GB)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K: 2x, 2.7K: 3x, FHD: 4x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Normal\""
    },
    {
      "name": "\"name\"",
      "value": "\"QuickShots Modes\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dronie, Helix, Rocket, Circle, and Boomerang\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Control Speed (tilt)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100°/s\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Environment\","
    },
    {
      "name": "\"value\"",
      "value": "\"Downward: Surfaces with Discernible Patterns, Diffuse Reflectivity >20% (e.g., Walls, Trees, People), and Adequate Lighting (lux >15)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Angular Vibration Range\","
    },
    {
      "name": "\"value\"",
      "value": "\"±0.01°\""
    },
    {
      "name": "\"name\"",
      "value": "\"Downward\","
    },
    {
      "name": "\"value\"",
      "value": "\"Precise Hovering Range: 0.5-10 m\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Transmission System\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI O2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Live View Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"Remote Controller: 720p/30fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz, 5.725-5.850 GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lowest Latency\","
    },
    {
      "name": "\"value\"",
      "value": "\"Approx. 200 ms\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Weight (g)\","
    },
    {
      "name": "\"value\"",
      "value": "\"82.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Nominal Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.7 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Charging Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.8 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Li-ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.32 Wh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"5° to 40° C (41° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Input\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 V 3 A, 9 V 3 A, 12 V 3 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Charging Hub Output\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB-A: Max Voltage: 5 V; Max Current: 2 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Three batteries charged in sequence\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 16 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"SanDisk Extreme\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 32 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung PRO Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Samsung EVO Plus\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Industrial\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Pro V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Pro V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 633x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 667x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 64 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung PRO Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Samsung EVO Plus\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 633x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 667x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 1000x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar High Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Toshiba EXCERIA M303 V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Netac Pro V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 128 GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung EVO Plus\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Plus V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"SanDisk Extreme Plus V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 633x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 667x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar 1000x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lexar High Endurance\""
    },
    {
      "name": "\"name\"",
      "value": "\"Toshiba EXCERIA M303 V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Netac Pro V30 A1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended microSD Cards 256GB\","
    },
    {
      "name": "\"value\"",
      "value": "\"SanDisk Extreme V30 A2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Remote Controller Max Operating Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"DJI RC-N1C - Without Charging Any Mobile Device: 4 hours, When Charging a Mobile Device: 2 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Supported Mobile Device Size (WxDxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"180 × 86 × 10\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"-10° to 40° C (14° to 104° F)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Transmitter Power (EIRP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.400-2.4835 GHz: <26 dBm (FCC), <20 dBm (CE/SRRC/MIC)\""
    },
    {
      "name": "\"name\"",
      "value": "\"5.725-5.850 GHz\","
    },
    {
      "name": "\"value\"",
      "value": "\"<26 dBm (FCC), <23 dBm (SRRC), <14 dBm (CE)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions Folded (without propellers) (mm) (W×D×H)\","
    },
    {
      "name": "\"value\"",
      "value": "\"138 x 81 x 58\""
    }
  ]
},
{
  "id": "83",
  "sku": "SES500BTR4GUK",
  "name": "Sage Bambino Plus 1.9L Coffee Machine - Black Truffle | SES500BTR4GUK",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 399.99,
  "image": "https://www.did.ie/cdn/shop/products/sage-bambino-plus-1-9l-coffee-machine-black-truffle-or-ses500btr4guk-did-electrical_e2488c48-6fbe-4dc1-96c4-f2dba717c038_5000x.jpg?v=1656167982",
  "brand": "Sage",
  "rating": 4.8,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Sage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black Truffle\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pump\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.48L\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Buttons\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Coffee, Milk froth\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1600 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Level Indicator\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk Frother\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Micro foam milk texturing, 3 second heat up time, Low pressure pre-infusion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Corded\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"310.0000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"320.0000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"310.0000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"9312432031882\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    }
  ]
},
{
  "id": "84",
  "sku": "BES875UK",
  "name": "Sage The Barista Express Bean to Cup Coffee Machine - Brushed Stainless Steel | BES875UK",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 549.99,
  "image": "https://www.did.ie/cdn/shop/products/sage-the-barista-express-bean-to-cup-coffee-machine-brushed-stainless-steel-or-bes875uk-did-electrical-1_f57df13a-a48d-4d4a-99c5-a22e06b745cd_5000x.jpg?v=1656168073",
  "brand": "Sage",
  "rating": 4.7,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Sage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Brushed Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bean to Cup\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cappuccino, Coffee, Espresso, Latte, Long black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.45L\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Knob & Button\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"310\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.6000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1850W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Gradually increases water pressure, Automatically adjusts water temperatures, Single or double shots\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"900\""
    },
    {
      "name": "\"name\"",
      "value": "\"Corded\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Shut off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bar Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Reservoir\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Grinder\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Cup Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Drip Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk Frother\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    }
  ]
},
{
  "id": "85",
  "sku": "ECAM450.86.T",
  "name": "DeLonghi Eletta Explore Bean to Cup Coffee Machine with Cold Brew Technology - Titanium | ECAM450.86.T",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 899.99,
  "image": "https://www.did.ie/cdn/shop/files/ECAM450.86.T-1_5000x.jpg?v=1685712913",
  "brand": "DeLonghi",
  "rating": 4.9,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DeLonghi\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Titanium\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Metal, Plastic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bean to Cup\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cappuccino, Coffee, Hot Water, Brew, Americano\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Glass\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touch\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1450\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bar Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"19\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Cup Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Drip Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk Frother\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cold Brew Technology\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Corded\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"260\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"450\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"385\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"11.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8004399026186\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Beans Container Capacity (g)\","
    },
    {
      "name": "\"value\"",
      "value": "\"300\""
    },
    {
      "name": "\"name\"",
      "value": "\"Grounds Container Capacity (n)\","
    },
    {
      "name": "\"value\"",
      "value": "\"14\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50-60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Finishing\","
    },
    {
      "name": "\"value\"",
      "value": "\"Painted Plastic with Metal Parts\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"3.5\\\" TFT Colour\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk System\","
    },
    {
      "name": "\"value\"",
      "value": "\"LatteCrema Hot Technology, LatteCrema Cool Technology\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cup Holder\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Twin Shot\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bean Adapt Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Liftable Drip Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cold Extraction Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Possibility to Use Water Filter\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Programmable Water Hardness\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Possibility to Use Pre-ground Coffee\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "86",
  "sku": "SES875BTR2GUK1",
  "name": "Sage The Barista Express Bean to Cup Coffee Machine - Black Truffle | SES875BTR2GUK1",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 559.99,
  "image": "https://www.did.ie/cdn/shop/products/SES875BTR2GUK1-1_5000x.jpg?v=1675835418",
  "brand": "Sage",
  "rating": 4.4,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Sage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black Truffle\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bean to Cup\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cappuccino, Coffee, Espresso, Latte, Long black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.45L\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Knob & Button\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1850W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Shut off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bar Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Reservoir\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Grinder\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Cup Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Drip Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk Frother\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Gradually increases water pressure, Automatically adjusts water temperatures, Single or double shots\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"900\""
    },
    {
      "name": "\"name\"",
      "value": "\"Corded\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"325\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"310\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10.6000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"9312432032056\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    }
  ]
},
{
  "id": "87",
  "sku": "EC230.BK",
  "name": "De'Longhi Stilosa Barista Espresso Machine & Cappuccino Maker - Black | EC230.BK",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 109.99,
  "image": "https://www.did.ie/cdn/shop/products/delonghi-stilosa-1l-manual-pump-espresso-coffee-maker-black-or-ec230-bk-did-electrical-1_5000x.jpg?v=1656149034",
  "brand": "DeLonghi",
  "rating": 4.7,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cappuccino, Espresso, Milk froth\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DeLonghi\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Plastic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pump\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Knob & Button\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless steal boiler heating system, Cappuccino milk system, Removable 1L water tank, Two tiered drip tray\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Corded\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Shut off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bar Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"15\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Level Indicator\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Reservoir\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Drip Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"205\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"343\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"285\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.3000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    }
  ]
},
{
  "id": "88",
  "sku": "SES880BSS2GUK",
  "name": "Sage The Barista Touch Bean to Cup Coffee Machine - Brushed Stainless Steel | SES880BSS2GUK",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 999.99,
  "image": "https://www.did.ie/cdn/shop/products/sage-the-barista-touch-bean-to-cup-coffee-machine-brushed-stainless-steel-or-ses880bss2guk-did-electrical_bfe69d56-749d-414c-ac15-e195271da3cf_5000x.jpg?v=1656168093",
  "brand": "Sage",
  "rating": 4.8,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Sage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Brushed Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bean to Cup\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.48L\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Digital Display\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touch\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Coffee, Espresso\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1680W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Grinder\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Cup Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk Frother\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Automatic cleaning function, Gradually increases water pressure\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Corded\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"322\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"394\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"407\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"9312432028943\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    }
  ]
},
{
  "id": "89",
  "sku": "ES701UK",
  "name": "Ninja Luxe Café Pro Coffee Machine - Black & Stainless Steel | ES701UK",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 729.99,
  "image": "https://www.did.ie/cdn/shop/files/ES701UK-9_5000x.jpg?v=1749843349",
  "brand": "Ninja",
  "rating": 4.4,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ninja\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black & Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bean to Cup\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"9 Espresso Styles, 4 Coffee Styles, 7 Drink Sizes & 5 Froth Presets\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1650\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Integrated Grinder\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Cup Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk Frother\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Corded\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1100\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"337\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"355\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"377\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"17.25\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"622356289818\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hot Water Temp\","
    },
    {
      "name": "\"value\"",
      "value": "\"60°C, 80°C, 95°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bean Hopper (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.250\""
    },
    {
      "name": "\"name\"",
      "value": "\"Froth Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Manual & Automatic\""
    }
  ]
},
{
  "id": "90",
  "sku": "EDG210.BBUNDL",
  "name": "Nescafé DolceGusto Piccolo XS Pod Coffee Machine by De'Longhi - Value Bundle - Black | EDG210.BBUNDL",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 35.99,
  "image": "https://www.did.ie/cdn/shop/files/Image01_HERO_5000x.png?v=1754474233",
  "brand": "DeLonghi",
  "rating": 4.8,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DeLonghi\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pod\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hot & Cold Espresso\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1340-1600 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"230\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bar Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"15\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"140\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"270\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"280\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"50/60 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Saving Function\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Multi-beverage\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Manual\""
    }
  ]
},
{
  "id": "91",
  "sku": "ENV120.GY",
  "name": "DeLonghi VertuoNext Nespresso Coffee Machine - Grey | ENV120.GY",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 84.99,
  "image": "https://www.did.ie/cdn/shop/files/ENV120.GY-1_f9984b98-ee02-4b7f-af71-aac5691d2ba5_5000x.jpg?v=1743578467",
  "brand": "DeLonghi",
  "rating": 4.7,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DeLonghi\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Grey\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Plastic with Metal Details\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pod\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Espresso, Double Espresso, Alto, Mug/Coffee, Gran Lungo, Pour Over Coffee Style\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Buttons\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1260 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"220 - 240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Shut off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"142\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"429\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"319\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8004399034327\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"50-60 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Pump Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"Centrifusion Technology\""
    },
    {
      "name": "\"name\"",
      "value": "\"Used Capsule Container\","
    },
    {
      "name": "\"value\"",
      "value": "\"6 up to 10\""
    },
    {
      "name": "\"name\"",
      "value": "\"Flow Stop\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Descaling Alert\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Eco-Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Power Off After 2 Min\""
    },
    {
      "name": "\"name\"",
      "value": "\"Heat-Up Time\","
    },
    {
      "name": "\"value\"",
      "value": "\"30 sec\""
    }
  ]
},
{
  "id": "92",
  "sku": "ECKG6820.M",
  "name": "DeLonghi Dedica Pump Coffee Machine Bundle | ECKG6820.M",
  "description": "",
  "category": "Appliances > Small Appliances > Coffee Machine",
  "price": 289.99,
  "image": "https://www.did.ie/cdn/shop/products/delonghi-dedica-pump-coffee-machine-bundle-or-eckg6820-m-did-electrical-1_5000x.jpg?v=1656148876",
  "brand": "DeLonghi",
  "rating": 4.9,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"DeLonghi\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silver\""
    },
    {
      "name": "\"name\"",
      "value": "\"Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Machine Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pump\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Coffee Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cappuccino, Latte, Milk froth\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Tank Capacity (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Buttons x 3 Single Espresso, Double Espresso & Steam\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"350 ml\""
    },
    {
      "name": "\"name\"",
      "value": "\"Carafe Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power\","
    },
    {
      "name": "\"value\"",
      "value": "\"1350 W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage (v)\","
    },
    {
      "name": "\"value\"",
      "value": "\"220 - 240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Functions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Reservoir\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Milk Frother\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Shut off\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bar Pressure\","
    },
    {
      "name": "\"value\"",
      "value": "\"15\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Level Indicator\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Removable Drip Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Features\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cord Length (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"149\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"330\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"305\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\","
    },
    {
      "name": "\"value\"",
      "value": "\"8004399020139\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8004399020139\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"Variable Cup Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to 130mm for Mugs\""
    }
  ]
},
{
  "id": "93",
  "sku": "MZB0KOAEU",
  "name": "Xiaomi Redmi 15C 128GB 4G Smartphone - Midnight Black | MZB0KOAEU",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 139.99,
  "image": "https://www.did.ie/cdn/shop/files/MZB0KOAEU-1_94633dc5-7f39-4f70-8995-dd2d903d2ce6_5000x.jpg?v=1760039735",
  "brand": "Xiaomi",
  "rating": 4.4,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Xiaomi\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Midnight Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"Redmi 15C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Virtual proximity sensor, Ambient light sensor, Accelerometer, Electronic compass\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"4G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Water & Dust Proof (IP64 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.9\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1600 x 720\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"1080p\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"MediaTek\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chipset\","
    },
    {
      "name": "\"value\"",
      "value": "\"MediaTek Helio G81-Ultra\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to 22\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Memory Card Slots\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Compatible Memory Cards\","
    },
    {
      "name": "\"value\"",
      "value": "\"SD\""
    },
    {
      "name": "\"name\"",
      "value": "\"External Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1TB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"NFC Enabled\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Headphone Jack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"79.47\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.99\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"171.56\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.205\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6932554444860\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"CPU\","
    },
    {
      "name": "\"value\"",
      "value": "\"Cortex-A75+Cortex-A55Max CPU frequency: 2.0GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPU\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mali-G52 MC2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Octa-core\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage & RAM Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"eMMC 5.1 + LPDDR4X\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refresh Rate\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to 120Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brightness\","
    },
    {
      "name": "\"value\"",
      "value": "\"660 nits (typ), 810 nits HBM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"6000mAh (typ)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging\","
    },
    {
      "name": "\"value\"",
      "value": "\"33W Fast Charging, USB Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security\","
    },
    {
      "name": "\"value\"",
      "value": "\"Side Fingerprint Sensor, AI Face Unlock\""
    },
    {
      "name": "\"name\"",
      "value": "\"Navigation & Positioning\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS, Glonass, Galileo, Beidou\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio\","
    },
    {
      "name": "\"value\"",
      "value": "\"3.5mm Headphone Jack\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio playback\","
    },
    {
      "name": "\"value\"",
      "value": "\"aac, m4a, mp4, 3gp, ts, amr, awb, mid, midi, smf, rttf, xmf, rtx, ota, imy, mp3, ogg, oga, wav, flac, mkv(opus)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video playback\","
    },
    {
      "name": "\"value\"",
      "value": "\"ts, mp4, 3gp, mkv, webm, MPEG2, H.263, MPEG4, H.264, H.265, VP8, VP9, VC1\""
    },
    {
      "name": "\"name\"",
      "value": "\"User Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Xiaomi HyperOS 2\""
    }
  ]
},
{
  "id": "94",
  "sku": "5109CAHG",
  "name": "Honor 400 Smart 128GB 5G Smartphone - Desert Gold | 5109CAHG",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 179.99,
  "image": "https://www.did.ie/cdn/shop/files/5109CAHG-1_5000x.jpg?v=1760076680",
  "brand": "Honor",
  "rating": 4.7,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Honor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Desert Gold\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"400\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Gravity Sensor, Fingerprint Sensor, Compass, Acceleration Sensor, Ambient Light Sensor, Proximity Sensor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano + Nano\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Water & Dust Proof (IP65 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"TFT LCD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.77\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1610 x 720\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50 + 2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"1080p\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"Qualcomm Snapdragon\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chipset\","
    },
    {
      "name": "\"value\"",
      "value": "\"Qualcomm Snapdragon 6s Gen 3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium-ion Polymer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android 15\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"NFC Enabled\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"76.8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.24\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"166.89\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.206\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"6936520876341\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Eye Comfort Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"Eye Comfort/Dynamic Dimming\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color\","
    },
    {
      "name": "\"value\"",
      "value": "\"16.7 million colors, 85%NTSC\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brightness\","
    },
    {
      "name": "\"value\"",
      "value": "\"850nit(HBM)/700nit(Typical)\""
    },
    {
      "name": "\"name\"",
      "value": "\"CPU Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Octa-core\""
    },
    {
      "name": "\"name\"",
      "value": "\"CPU Dominant Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"2xA78@2.3GHz, 6xA55@2.0GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPU\","
    },
    {
      "name": "\"value\"",
      "value": "\"Qualcomm Adreno GPU A619\""
    },
    {
      "name": "\"name\"",
      "value": "\"User Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Magic OS 9.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Zoom Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"8X Digital Zoom\""
    },
    {
      "name": "\"name\"",
      "value": "\"Image Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"8160x6120\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Flashlight\","
    },
    {
      "name": "\"value\"",
      "value": "\"Rear single LED flash\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - Capture Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Portrait(including beauty mode and bokeh), Time-lapse, Night, Video, Slow-Mo, High-Res, Panorama, PRO, Photo\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"50MP Main Camera(f/1.8)+2MP Depth Camera(f/2.4)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"5 MP Camera (f/2.2 aperture)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera - Video Shooting\","
    },
    {
      "name": "\"value\"",
      "value": "\"1080P 30fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera - Image Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2592X1944\""
    },
    {
      "name": "\"name\"",
      "value": "\"Focus Mode\","
    },
    {
      "name": "\"value\"",
      "value": "\"Portrait(including beauty mode and bokeh), Photo, Video\""
    },
    {
      "name": "\"name\"",
      "value": "\"Face Recognition\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera - Video Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1920x1080\""
    },
    {
      "name": "\"name\"",
      "value": "\"Capacity\","
    },
    {
      "name": "\"value\"",
      "value": "\"6350mAh (rated value), 6500 mAh (typical value)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wired Charging\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supported 35W\""
    },
    {
      "name": "\"name\"",
      "value": "\"Standard Charger\","
    },
    {
      "name": "\"value\"",
      "value": "\"35W HONOR SuperCharge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Network Standard\","
    },
    {
      "name": "\"value\"",
      "value": "\"GSM/WCDMA/4G(LTE FDD)/4G(LTE TDD)/5G(NR)\""
    },
    {
      "name": "\"name\"",
      "value": "\"WLAN\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11 a/b/g/n/ac, supports 2.4GHz and 5GHz WLAN, supports WLAN hotspot and WLAN direct connection.\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supported BLE, SBC, AAC, LDAC, aptX, aptX HD\""
    },
    {
      "name": "\"name\"",
      "value": "\"PC Data Sync\","
    },
    {
      "name": "\"value\"",
      "value": "\"Computer need install HonorSuite\""
    },
    {
      "name": "\"name\"",
      "value": "\"OTG\","
    },
    {
      "name": "\"value\"",
      "value": "\"The maximum output current is 1.5A/5V\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB\","
    },
    {
      "name": "\"value\"",
      "value": "\"Type-C, USB 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Earjack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Type C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Positioning\","
    },
    {
      "name": "\"value\"",
      "value": "\"Supports BeiDou(B1I+B1C), GPS (L1), GLONASS (G1), Galileo(E1), A-GNSSsupports cellular network positioning and WLAN network positioning\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video\","
    },
    {
      "name": "\"value\"",
      "value": "\"*.3gp, *.mp4, *.webm, *.mkv\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio\","
    },
    {
      "name": "\"value\"",
      "value": "\"*.mp3, *.amr, *.awb, *.3gp, *.mp4, *.m4a, *.aac, *.wav, *.ogg, *.flac, *.mkv\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sound Effect\","
    },
    {
      "name": "\"value\"",
      "value": "\"HONOR Sound 7.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stereo\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    }
  ]
},
{
  "id": "95",
  "sku": "MG6J4QN/A",
  "name": "Apple iPhone 17 256GB Smartphone - Black | MG6J4QN/A",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 979.99,
  "image": "https://www.did.ie/cdn/shop/files/iPhone_17_Black_PDP_Image_Position_1__GBEN_5000x.jpg?v=1757600792",
  "brand": "Apple",
  "rating": 4.8,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"iPhone 17\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Face ID, Barometer, High Dynamic Range Gyro, High-g Accelerometer, Proximity Sensor, Dual Ambient Light Sensors\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"eSIM + eSIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Water & Dust Proof (IP68 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Super Retina\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.3\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2622 x 1206\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48MP + 48MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chipset\","
    },
    {
      "name": "\"value\"",
      "value": "\"A19\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to 30\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium‑ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS 26\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"NFC Enabled\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"71.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.95\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"149.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.177\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0195950643510\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aluminium design, Ceramic Shield 2 front, Colour‑infused glass back (Black, Mist Blue, Sage, Lavender)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Splash, Water and Dust Resistant\","
    },
    {
      "name": "\"value\"",
      "value": "\"Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chip Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"A19 chip 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU with Neural Accelerators, 16‑core Neural Engine, Hardware-accelerated ray tracing\""
    },
    {
      "name": "\"name\"",
      "value": "\"Face ID\","
    },
    {
      "name": "\"value\"",
      "value": "\"Enabled by True­Depth technology in the Center Stage front camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Peace of Mind\","
    },
    {
      "name": "\"value\"",
      "value": "\"Emergency SOS via satellite, Crash Detection\""
    },
    {
      "name": "\"name\"",
      "value": "\"Location\","
    },
    {
      "name": "\"value\"",
      "value": "\"Precision dual-frequency GPS (GPS, GLONASS, Galileo, QZSS, BeiDou and NavIC), Digital compass, Wi‑Fi, Mobile data, iBeacon micro-location\""
    },
    {
      "name": "\"name\"",
      "value": "\"Action Button Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silent mode, Focus, Camera, Visual Intelligence, Torch, Voice Memo, Recognise Music, Magnifier, Controls, Shortcut or Accessi­bility\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera Controls\","
    },
    {
      "name": "\"value\"",
      "value": "\"Exposure, Depth, Zoom, Cameras, Styles, Tone\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB-C Connector with Support for\","
    },
    {
      "name": "\"value\"",
      "value": "\"Char­ging, DisplayPort, USB 2 (up to 480Mb/s)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Apple Pay\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pay with your iPhone using Face ID in shops, within apps and on the web, Complete purchases made with Apple Pay on your Mac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rating for Hearing Aids\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hearing Aid Compatible\""
    },
    {
      "name": "\"name\"",
      "value": "\"System Requirements\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple Account (required for some features), Internet access\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    }
  ]
},
{
  "id": "96",
  "sku": "MYE73QN/A",
  "name": "Apple iPhone 16 128GB Smartphone - Black | MYE73QN/A",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 849.99,
  "image": "https://www.did.ie/cdn/shop/files/iPhone_16_Black_PDP_Image_Position_1b__GBEN_5000x.jpg?v=1725916410",
  "brand": "Apple",
  "rating": 4.4,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"iPhone 16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Face ID, Barometer, High Dynamic Range Gyro, High-G Accelerometer, Proximity Sensor, Dual Ambient Light Sensors\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano and eSim\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Splash, Water and Dust Resistant (IP68 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"OLED Super Retina XDR\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.1\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2556 x 1179 Pixel Resolution at 460 PPI\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K HDR\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"A18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"22\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium-Ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS 18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"NFC Enabled\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"71.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.80\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"147.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.170\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    }
  ]
},
{
  "id": "97",
  "sku": "SM-A566BZKCEUB",
  "name": "Samsung Galaxy A56 256GB 5G Smartphone - Graphite | SM-A566BZKCEUB",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 484.99,
  "image": "https://www.did.ie/cdn/shop/files/SM-A566BZKCEUB-1_28165b91-ff70-4169-b127-4bda3b44c6ac_5000x.jpg?v=1743573053",
  "brand": "Samsung",
  "rating": 4.8,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Graphite\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"Galaxy A56\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Accelerometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Light Sensor, Virtual Proximity Sensing\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano + eSim\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Water & Dust Proof (IP67 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Super AMOLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.7\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1080 x 2340\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50MP + 12MP + 5MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Ultra HD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"Octa-Core\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"29\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"77.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"162.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.198\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806095982847\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Depth (Main Display)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16M\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Refresh Rate\","
    },
    {
      "name": "\"value\"",
      "value": "\"120 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"CPU Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.9GHz, 2.6GHz, 1.9GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - F Number (Multiple)\","
    },
    {
      "name": "\"value\"",
      "value": "\"F1.8 , F2.2 , F2.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera - F Number\","
    },
    {
      "name": "\"value\"",
      "value": "\"F2.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"Digital Zoom up to 10x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Recording Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD 4K (3840 x 2160)@30fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Slow Motion\","
    },
    {
      "name": "\"value\"",
      "value": "\"240fps @HD\""
    },
    {
      "name": "\"name\"",
      "value": "\"SIM Slot Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"SIM 1 + SIM 2, SIM 1 + eSIM, Dual eSIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Infra\","
    },
    {
      "name": "\"value\"",
      "value": "\"2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD\""
    },
    {
      "name": "\"name\"",
      "value": "\"SIM size\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano-SIM (4FF), Embedded-SIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Location Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS, Glonass, Beidou, Galileo, QZSS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Earjack\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth v5.3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11a/b/g/n/ac/ax 2.4GHz+5GHz, HE80, MIMO, 1024-QAM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Direct\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"PC Sync.\","
    },
    {
      "name": "\"value\"",
      "value": "\"Smart Switch (PC version)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Form Factor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touchscreen Bar\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playing Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Playing Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Hearing Aid Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android Audio Streaming for Hearing Aid(ASHA)\""
    },
    {
      "name": "\"name\"",
      "value": "\"SmartThings Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Size (Main_Display)\","
    },
    {
      "name": "\"value\"",
      "value": "\"170.1mm (6.7\\\" full rectangle) / 165.5mm (6.5\\\" rounded corners)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security Update Period (Valid until)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 March 2032\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Capacity (mAh, Typical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5000\""
    }
  ]
},
{
  "id": "98",
  "sku": "SM-A366BZKGEUB",
  "name": "Samsung Galaxy A36 256GB 5G Smartphone - Black | SM-A366BZKGEUB",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 384.99,
  "image": "https://www.did.ie/cdn/shop/files/SM-A366BZKGEUB-1_3327439e-22a8-47b2-bde6-5504e508c954_5000x.jpg?v=1743573004",
  "brand": "Samsung",
  "rating": 4.7,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"Galaxy A36\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Accelerometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Light Sensor, Virtual Proximity Sensing\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano + eSim\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Water & Dust Proof (IP67 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Super AMOLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.7\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"1080 x 2340\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50MP + 8MP + 5MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K Ultra HD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"Octa-Core\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"29\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"256\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"78.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"162.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.195\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806095984070\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"CPU Speed\","
    },
    {
      "name": "\"value\"",
      "value": "\"2.4GHz, 1.8GHz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Refresh Rate\","
    },
    {
      "name": "\"value\"",
      "value": "\"120 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Color Depth (Main Display)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16M\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - F Number (Multiple)\","
    },
    {
      "name": "\"value\"",
      "value": "\"F1.8 , F2.2 , F2.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"Digital Zoom up to 10x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Recording Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD 4K (3840 x 2160)@30fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Slow Motion\","
    },
    {
      "name": "\"value\"",
      "value": "\"240fps @HD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera - F Number\","
    },
    {
      "name": "\"value\"",
      "value": "\"F2.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"SIM size\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano-SIM (4FF), Embedded-SIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"SIM Slot Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"SIM 1 + SIM 2 / SIM 1 + eSIM / Dual eSIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Infra\","
    },
    {
      "name": "\"value\"",
      "value": "\"2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB 2.0\""
    },
    {
      "name": "\"name\"",
      "value": "\"Location Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS, Glonass, Beidou, Galileo, QZSS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Earjack\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11a/b/g/n/ac/ax 2.4GHz+5GHz, HE80, MIMO, 1024-QAM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Direct\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth v5.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"PC Sync\","
    },
    {
      "name": "\"value\"",
      "value": "\"Smart Switch (PC version)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Form Factor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touchscreen Bar\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Capacity (mAh, Typical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playing Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playing Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD 4K (3840 x 2160)@30fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Playing Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Hearing Aid Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android Audio Streaming for Hearing Aid(ASHA)\""
    },
    {
      "name": "\"name\"",
      "value": "\"SmartThings Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security Update Period (Valid until)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 March 2031\""
    }
  ]
},
{
  "id": "99",
  "sku": "SM-A176BZKAEUB",
  "name": "Samsung Galaxy A17 128GB 5G Smartphone - Black | SM-A176BZKAEUB",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 239.99,
  "image": "https://www.did.ie/cdn/shop/files/SM-A176_GalaxyA17_5G_Black_Front_5000x.jpg?v=1755664401",
  "brand": "Samsung",
  "rating": 4.9,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"Galaxy A17\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"IP45\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Super AMOLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.7\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"Exynos\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chipset\","
    },
    {
      "name": "\"value\"",
      "value": "\"Exynos 1330\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"77.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"164.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.216\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806097642671\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.7\\\" FHD+ Super AMOLED Infinity-U, (19.5:9), Upto 90 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera\","
    },
    {
      "name": "\"value\"",
      "value": "\"Ultra wide: 5MP; Wide: 50MP, Optical Image, Stabilisation; Macro: 2MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Durability\","
    },
    {
      "name": "\"value\"",
      "value": "\"Corning Gorilla Glass 7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"5000 mAh\""
    },
    {
      "name": "\"name\"",
      "value": "\"Charging\","
    },
    {
      "name": "\"value\"",
      "value": "\"25W Fast Charging, Fast Wireless Charging 2.0\""
    }
  ]
},
{
  "id": "100",
  "sku": "SM-S931BDBDEUB",
  "name": "Samsung Galaxy S25 128GB Smartphone - Navy | SM-S931BDBDEUB",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 919.99,
  "image": "https://www.did.ie/cdn/shop/files/sm-s931_galaxys25_front_navy_241108_5000x.jpg?v=1737635402",
  "brand": "Samsung",
  "rating": 4.4,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Samsung\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Navy\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"Galaxy S25\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Light Sensor, Proximity Sensor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano-SIM (4FF), Embedded-SIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Water Proof (IP68 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"AMOLED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.2\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2340 x 1080\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50MP + 10MP + 12MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"8K UHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"Snapdragon\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Speed (GHz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4.47 - 3.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chipset\","
    },
    {
      "name": "\"value\"",
      "value": "\"Snapdragon 8 Elite\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"RAM (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"NFC Enabled\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"70.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"146.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.162\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8806095852393\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"CPU Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Octa-Core\""
    },
    {
      "name": "\"name\"",
      "value": "\"Technology (Main Display)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Dynamic AMOLED 2X\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour Depth (Main Display)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16M\""
    },
    {
      "name": "\"name\"",
      "value": "\"Max Refresh Rate (Main Display) (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"120\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - F Number (Multiple)\","
    },
    {
      "name": "\"value\"",
      "value": "\"F1.8, F2.4, F2.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - Auto Focus\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - OIS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - Zoom\","
    },
    {
      "name": "\"value\"",
      "value": "\"Optical Zoom 3x, Optical quality Zoom 2x (Enabled by Adaptive Pixel sensor) , Digital Zoom up to 30x\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera - F Number\","
    },
    {
      "name": "\"value\"",
      "value": "\"F2.2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Camera - Auto Focus\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Camera - Flash\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Recording Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD 8K (7680 x 4320) @30fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Slow Motion\","
    },
    {
      "name": "\"value\"",
      "value": "\"240fps @FHD, 120fps @FHD, 120fps @UHD\""
    },
    {
      "name": "\"name\"",
      "value": "\"Available Storage (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"92.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"SIM Slot Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"SIM 1 + SIM 2 / SIM 1 + eSIM / Dual eSIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB 3.2 Gen 1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Location Technology\","
    },
    {
      "name": "\"value\"",
      "value": "\"GPS, Glonass, Beidou, Galileo, QZSS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Earjack\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB Type-C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"802.11a/b/g/n/ac/ax/be 2.4GHz+5GHz+6GHz, EHT320, MIMO, 4096-QAM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi Direct\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"Bluetooth v5.4\""
    },
    {
      "name": "\"name\"",
      "value": "\"PC Sync.\","
    },
    {
      "name": "\"value\"",
      "value": "\"Smart Switch (PC version)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Form Factor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Touchscreen Bar\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playback Time (Hours)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to 29\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Capacity (mAh, Typical)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4000\""
    },
    {
      "name": "\"name\"",
      "value": "\"Stereo Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playing Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Playing Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"UHD 8K (7680 x 4320)@60fps\""
    },
    {
      "name": "\"name\"",
      "value": "\"Audio Playing Format\","
    },
    {
      "name": "\"value\"",
      "value": "\"MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE\""
    },
    {
      "name": "\"name\"",
      "value": "\"Samsung DeX Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth Hearing Aid Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Android Audio Streaming for Hearing Aid(ASHA)\""
    },
    {
      "name": "\"name\"",
      "value": "\"SmartThings Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Security Update Period (Valid until)\","
    },
    {
      "name": "\"value\"",
      "value": "\"31 January 2032\""
    }
  ]
},
{
  "id": "101",
  "sku": "MD1R4QN/A",
  "name": "Apple iPhone 16e 128GB Smartphone - White | MD1R4QN/A",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 669.99,
  "image": "https://www.did.ie/cdn/shop/files/iPhone_16e_White_PDP_Image_Position_1__GBEN_5000x.jpg?v=1740143579",
  "brand": "Apple",
  "rating": 4.7,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"iPhone 16e\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Face ID, Barometer, High Dynamic Range Gyro, High-g Accelerometer, Proximity Sensor, Dual Ambient Light Sensors\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Nano + eSIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Splash, Water and Dust Resistant Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Super Retina XDR\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.1\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2532 x 1170\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor Model\","
    },
    {
      "name": "\"value\"",
      "value": "\"A18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chipset\","
    },
    {
      "name": "\"value\"",
      "value": "\"A18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium‑ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"128\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS 18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"NFC Enabled\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"B\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"71.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"7.80\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"146.7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.167\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0195950051209\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual eSIM Support\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rating for Hearing Aids\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hearing Aid Compatible\""
    },
    {
      "name": "\"name\"",
      "value": "\"Char­ging\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB‑C Connector\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Transfer\","
    },
    {
      "name": "\"value\"",
      "value": "\"USB 2 (up to 480Mb/s)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Peace of Mind\","
    },
    {
      "name": "\"value\"",
      "value": "\"Emergency SOS via Satellite, Crash Detection\""
    },
    {
      "name": "\"name\"",
      "value": "\"Face ID\","
    },
    {
      "name": "\"value\"",
      "value": "\"Enabled by True­Depth Camera for Facial Recognition\""
    },
    {
      "name": "\"name\"",
      "value": "\"Action button features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silent Mode, Focus, Camera, Visual Intelligence, Torch, Voice Memo, Recognise Music, Translate, Magnifier, Controls, Shortcut or Accessibility\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessibility\","
    },
    {
      "name": "\"value\"",
      "value": "\"Built-In Accessibility Features Supporting Vision, Mobility, Hearing, Speech and Cognitive Needs Help You Get the Most Out of Your iPhone In the Ways That Work Best for You.\""
    }
  ]
},
{
  "id": "102",
  "sku": "MG8P4QN/A",
  "name": "Apple iPhone 17 Pro 1TB Smartphone - Silver | MG8P4QN/A",
  "description": "",
  "category": "Smartphones & Tech > Mobile Phones",
  "price": 1839.99,
  "image": "https://www.did.ie/cdn/shop/files/iPhone_17_Pro_Silver_PDP_Image_Position_1__GBEN_315de4f5-2c14-46f5-96c8-6bbb3af11df5_5000x.jpg?v=1757599359",
  "brand": "Apple",
  "rating": 4.8,
  "reviews": 89,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silver\""
    },
    {
      "name": "\"name\"",
      "value": "\"Series\","
    },
    {
      "name": "\"value\"",
      "value": "\"iPhone 17 Pro\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sensor\","
    },
    {
      "name": "\"value\"",
      "value": "\"Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, High-g Accelerometer, Proximity Sensor, Dual Ambient Light Sensors\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dual Sim\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Sim Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"nano-SIM + eSIM or eSIM + eSIM\""
    },
    {
      "name": "\"name\"",
      "value": "\"3G/4G/5G\","
    },
    {
      "name": "\"value\"",
      "value": "\"5G\""
    },
    {
      "name": "\"name\"",
      "value": "\"Water Resistent\","
    },
    {
      "name": "\"value\"",
      "value": "\"Water & Dust Proof (IP68 rating)\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Super Retina\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Size\","
    },
    {
      "name": "\"value\"",
      "value": "\"6.3\\\"\""
    },
    {
      "name": "\"name\"",
      "value": "\"Screen Resolution\","
    },
    {
      "name": "\"value\"",
      "value": "\"2622 x 1206\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Front Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rear Facing (MP)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48MP + 48MP + 48MP\""
    },
    {
      "name": "\"name\"",
      "value": "\"Video Capture Quality\","
    },
    {
      "name": "\"value\"",
      "value": "\"4K\""
    },
    {
      "name": "\"name\"",
      "value": "\"Processor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chipset\","
    },
    {
      "name": "\"value\"",
      "value": "\"A19 Pro\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Life (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Up to 31\""
    },
    {
      "name": "\"name\"",
      "value": "\"Battery Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Lithium‑ion\""
    },
    {
      "name": "\"name\"",
      "value": "\"Storage\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Memory (GB)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1TB\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS\""
    },
    {
      "name": "\"name\"",
      "value": "\"Operating System Version\","
    },
    {
      "name": "\"value\"",
      "value": "\"iOS 26\""
    },
    {
      "name": "\"name\"",
      "value": "\"Connectivity\""
    },
    {
      "name": "\"name\"",
      "value": "\"NFC Enabled\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wi-Fi\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Bluetooth\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"GPS\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB Interface\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"71.9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"8.75\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"150\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.204\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"0195950628371\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Design\","
    },
    {
      "name": "\"value\"",
      "value": "\"Aluminium unibody, Ceramic Shield 2 front, Ceramic Shield back\""
    },
    {
      "name": "\"name\"",
      "value": "\"Display Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Super Retina XDR display, 6.3‑inch (diagonal) all‑screen OLED display, 2622x1206-pixel resolution at 460 ppi\""
    },
    {
      "name": "\"name\"",
      "value": "\"Splash, Water and Dust Resistant\","
    },
    {
      "name": "\"value\"",
      "value": "\"Rated IP68 (maximum depth of 6 metres up to 30 minutes) under IEC standard 60529\""
    },
    {
      "name": "\"name\"",
      "value": "\"Chip Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"A19 Pro chip, 6‑core CPU with 2 performance and 4 efficiency cores, 6‑core GPU with Neural Accelerators, 16‑core Neural Engine, Hardware‑accelerated ray tracing\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power and Battery\","
    },
    {
      "name": "\"value\"",
      "value": "\"Video playback Up to 31 hours, Video playback (streamed) Up to 28 hours\""
    },
    {
      "name": "\"name\"",
      "value": "\"Face ID\","
    },
    {
      "name": "\"value\"",
      "value": "\"Enabled by True­Depth Technology in the Center Stage Front Camera\""
    },
    {
      "name": "\"name\"",
      "value": "\"Peace of Mind\","
    },
    {
      "name": "\"value\"",
      "value": "\"Emergency SOS via satellite, Crash Detection\""
    },
    {
      "name": "\"name\"",
      "value": "\"Location\","
    },
    {
      "name": "\"value\"",
      "value": "\"Precision dual-frequency GPS (GPS, GLONASS, Galileo, QZSS, BeiDou and NavIC), Digital compass, Wi‑Fi, Mobile Data, iBeacon micro-location\""
    },
    {
      "name": "\"name\"",
      "value": "\"Action button features\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silent mode, Focus, Camera, Visual Intelligence, Torch, Voice Memo, Recognise Music, Magnifier, Controls, Shortcut or Accessi­bility\""
    },
    {
      "name": "\"name\"",
      "value": "\"Camera controls\","
    },
    {
      "name": "\"value\"",
      "value": "\"Exposure, Depth, Zoom, Cameras, Styles, Tone\""
    },
    {
      "name": "\"name\"",
      "value": "\"USB-C connector with support for\","
    },
    {
      "name": "\"value\"",
      "value": "\"Char­ging, DisplayPort, USB 3 (up to 10Gb/s)\""
    },
    {
      "name": "\"name\"",
      "value": "\"MagSafe and Wireless Charging\","
    },
    {
      "name": "\"value\"",
      "value": "\"MagSafe wireless charging up to 25W, Qi2 wireless charging up to 25W, Magnet array, Alignment magnet, Accessory Identification NFC, Magnetometer\""
    },
    {
      "name": "\"name\"",
      "value": "\"Apple Pay\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pay with your iPhone using Face ID in shops, within apps and on the web, Complete purchases made with Apple Pay on your Mac\""
    },
    {
      "name": "\"name\"",
      "value": "\"Accessi­bility\","
    },
    {
      "name": "\"value\"",
      "value": "\"Built-in accessibility features supporting vision, mobility, hearing, speech and cognitive needs help you get the most out of your iPhone — in the ways that work best for you\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rating for Hearing Aids\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hearing Aid Compatible\""
    },
    {
      "name": "\"name\"",
      "value": "\"System Requirements\","
    },
    {
      "name": "\"value\"",
      "value": "\"Apple Account (required for some features), Internet access\""
    },
    {
      "name": "\"name\"",
      "value": "\"Syncing to a Mac or PC requires\","
    },
    {
      "name": "\"value\"",
      "value": "\"macOS Catalina 10.15 or later using the Finder, macOS High Sierra 10.13 to macOS Mojave 10.14.6 using iTunes 12.8 or later, Windows 10 or later using iTunes 12.12.10 or later\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"A\""
    }
  ]
},
{
  "id": "103",
  "sku": "T45514MLW-E",
  "name": "Thor 241L Freestanding Larder Fridge - White | T45514MLW-E",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 299.99,
  "image": "https://www.did.ie/cdn/shop/files/T45514MLW-E-1_5000x.jpg?v=1739348390",
  "brand": "Thor",
  "rating": 4.4,
  "reviews": 102,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Thor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Reversible Door\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"241\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Salad Box\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"103\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"39\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"16°C - 38°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"540\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"550\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1440\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"38\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"5391503419174\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Interior Light\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Simple Controls\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"Subtropical, Tropical\""
    }
  ]
},
{
  "id": "104",
  "sku": "HOLHS58EBHK",
  "name": "Hoover 127L Undercounter Fridge - Black | HOLHS58EBHK",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 279.99,
  "image": "https://www.did.ie/cdn/shop/files/HOLHS58EBHK-1_48541eeb-6679-475c-a00c-dfab34bf3787_5000x.jpg?v=1751030448",
  "brand": "Hoover",
  "rating": 4.8,
  "reviews": 111,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Hoover\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Undercounter\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"127\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Salad Box\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"112\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"39\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"16°C - 38°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"550\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"580\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"850\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"26\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8059019080017\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cooling System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Static\""
    },
    {
      "name": "\"name\"",
      "value": "\"Defrost Process Fridge Section\","
    },
    {
      "name": "\"value\"",
      "value": "\"Manual\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gasket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pull\""
    },
    {
      "name": "\"name\"",
      "value": "\"Light\","
    },
    {
      "name": "\"value\"",
      "value": "\"Standard\""
    },
    {
      "name": "\"name\"",
      "value": "\"Current\","
    },
    {
      "name": "\"value\"",
      "value": "\"<10 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"50 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"Internal control panel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controls\","
    },
    {
      "name": "\"value\"",
      "value": "\"Mechanic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Temperature Adjustable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Refrigerator\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Shelves Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Crystal clear plastic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shelves Finish\","
    },
    {
      "name": "\"value\"",
      "value": "\"Silver frame\""
    },
    {
      "name": "\"name\"",
      "value": "\"Handles\","
    },
    {
      "name": "\"value\"",
      "value": "\"Comfortable external handle\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Hinge\","
    },
    {
      "name": "\"value\"",
      "value": "\"Right-mounted\""
    },
    {
      "name": "\"name\"",
      "value": "\"Total Number of Door Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"N, ST\""
    },
    {
      "name": "\"name\"",
      "value": "\"Acoustical Noise Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    }
  ]
},
{
  "id": "105",
  "sku": "SC-46W",
  "name": "HCK 48L Freestanding Beverage Cooler - Black | SC-46W",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 169.99,
  "image": "https://www.did.ie/cdn/shop/files/SC-46W-2_dd04a7f5-1ff5-4800-91fe-768076ff909c_5000x.jpg?v=1758099564",
  "brand": "HCK",
  "rating": 4.7,
  "reviews": 152,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"HCK\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"48\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"D\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"61\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"39\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"16°C - 32°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"430\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"475\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"510\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"18\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    }
  ]
},
{
  "id": "106",
  "sku": "T4554FMLW/2",
  "name": "Thor 107L Undercounter Fridge - White | T4554FMLW/2",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 229.99,
  "image": "https://www.did.ie/cdn/shop/products/T4554FMLW2-1_5000x.webp?v=1685147407",
  "brand": "Thor",
  "rating": 4.9,
  "reviews": 98,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Thor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Undercounter\""
    },
    {
      "name": "\"name\"",
      "value": "\"Reversible Door\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"94\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Salad Box\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dairy Compartment\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"137\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"39\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"549\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"557\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"845\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"5391503417828\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years Parts & Labour\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Failure Safe Storage (hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"9\""
    },
    {
      "name": "\"name\"",
      "value": "\"Manual Ice Box Defrost\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frozen Food Capacity (Litre)\","
    },
    {
      "name": "\"value\"",
      "value": "\"13\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Dairy Compartments\","
    },
    {
      "name": "\"value\"",
      "value": "\"3\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Salad Crispers\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Freezer Compartment Star Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"4*\""
    },
    {
      "name": "\"name\"",
      "value": "\"Internal Light\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Extra Deep Door Storage\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Settling Period After Transport (Hrs)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Minimum Operating Temperature (celsius)\","
    },
    {
      "name": "\"value\"",
      "value": "\"16\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Operating Temperature (celsius)\","
    },
    {
      "name": "\"value\"",
      "value": "\"38\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended Space Behind the Unit (cm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Cable Length (m)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1.7\""
    }
  ]
},
{
  "id": "107",
  "sku": "T4474MDW",
  "name": "Thor 80L Auto Defrost Undercounter Fridge - White | T4474MDW",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 189.99,
  "image": "https://www.did.ie/cdn/shop/files/T4474MDW-1_5000x.webp?v=1694710158",
  "brand": "Thor",
  "rating": 4.4,
  "reviews": 88,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Thor\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Undercounter\""
    },
    {
      "name": "\"name\"",
      "value": "\"Reversible Door\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"68\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Salad Box\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"F\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption (kWh/24h)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.471\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"172\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"41\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"475\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"445\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"845\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"20.5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"5391503418177\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years Parts & Labour\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Light\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Auto Defrost\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Freezer  Compartment Volume (L)\","
    },
    {
      "name": "\"value\"",
      "value": "\"12\""
    },
    {
      "name": "\"name\"",
      "value": "\"Freezer Star Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"4*\""
    },
    {
      "name": "\"name\"",
      "value": "\"Freezing Capacity (kg/24h)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Temperature Rise Value (h)\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"ST, N\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Voltage (V)\","
    },
    {
      "name": "\"value\"",
      "value": "\"220 - 240\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Frequency (Hz)\","
    },
    {
      "name": "\"value\"",
      "value": "\"50\""
    },
    {
      "name": "\"name\"",
      "value": "\"Lamp Rated Power (W)\","
    },
    {
      "name": "\"value\"",
      "value": "\"2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Rated Current (A)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption E16 (kWh/24h)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.220\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Consumption E32 (kWh/24h)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.722\""
    },
    {
      "name": "\"name\"",
      "value": "\"Space Required in Use (WxDxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"675 x 545 x 945\""
    },
    {
      "name": "\"name\"",
      "value": "\"Overall Space Required in Use (WxDxH) (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"860 x 930 x 945\""
    }
  ]
},
{
  "id": "108",
  "sku": "SW8 2Q XR UK",
  "name": "Whirlpool 368L Tall Larder Freestanding Fridge - Stainless Steel | SW8 2Q XR UK",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 699.99,
  "image": "https://www.did.ie/cdn/shop/files/SW82QXRUK-1_5000x.jpg?v=1714384505",
  "brand": "Whirlpool",
  "rating": 4.7,
  "reviews": 97,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Whirlpool\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Reversible Door\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"368\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"7\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"119\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"37\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature ºC)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 - 43\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"595\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"630\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1875\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8003437054006\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Refrigeration Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Tall Larder Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Hinge System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Right Reversible\""
    },
    {
      "name": "\"name\"",
      "value": "\"Interior Light Switch\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Interior Light Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Maximum Connection (kW)\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Fridge Drawers\","
    },
    {
      "name": "\"value\"",
      "value": "\"1\""
    },
    {
      "name": "\"name\"",
      "value": "\"Special Features\","
    },
    {
      "name": "\"value\"",
      "value": "\"6th Sense\""
    },
    {
      "name": "\"name\"",
      "value": "\"Special Programmes or Functions\","
    },
    {
      "name": "\"value\"",
      "value": "\"Fast Cooling\""
    },
    {
      "name": "\"name\"",
      "value": "\"Style\","
    },
    {
      "name": "\"value\"",
      "value": "\"Modern\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Index(EEI)\","
    },
    {
      "name": "\"value\"",
      "value": "\"100\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"Extended Temperate, Temperate, Subtropical, Tropical\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fresh Food\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended Temperature Setting for Optimised Food Storage (ºC)\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Class (Light)\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Defrosting Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Manual Defrost\""
    },
    {
      "name": "\"name\"",
      "value": "\"Airborne Acoustical Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    }
  ]
},
{
  "id": "109",
  "sku": "BDC44BK",
  "name": "Belling 44L Freestanding Tabletop Drinks Cooler Fridge - Black | BDC44BK",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 197.99,
  "image": "https://www.did.ie/cdn/shop/files/BDC44BK-1_d1a1ee86-a01a-4eae-86e8-e7dc32ce5a8b_5000x.jpg?v=1716189616",
  "brand": "Belling",
  "rating": 4.8,
  "reviews": 94,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Belling\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Black\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Table Top\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"44\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"78\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"40\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature (ºC)\","
    },
    {
      "name": "\"value\"",
      "value": "\"10 - 38\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"470\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"440\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"495\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fit Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Efficiency Index (EEI)\","
    },
    {
      "name": "\"value\"",
      "value": "\"125\""
    },
    {
      "name": "\"name\"",
      "value": "\"Airborne Acoustical Noise Emission Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fresh Food\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Recommended Temperature Setting for Optimised Food Storage (ºC)\","
    },
    {
      "name": "\"value\"",
      "value": "\"5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Defrosting Type (Fridge/Freezer)\","
    },
    {
      "name": "\"value\"",
      "value": "\"Manual defrost\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate class\","
    },
    {
      "name": "\"value\"",
      "value": "\"extended temperate, temperate, subtropical\""
    },
    {
      "name": "\"name\"",
      "value": "\"Power Source\","
    },
    {
      "name": "\"value\"",
      "value": "\"Main\""
    }
  ]
},
{
  "id": "110",
  "sku": "HAMS518EWK",
  "name": "Haier 316L Built-in Fridge - White | HAMS518EWK",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 679.99,
  "image": "https://www.did.ie/cdn/shop/files/HAMS518EWK-8_5000x.jpg?v=1758637196",
  "brand": "Haier",
  "rating": 4.4,
  "reviews": 101,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Haier\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Built-in\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"316\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"4\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Wine Rack\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Salad Box\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Egg Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"114\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"39\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"16°C - 38°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"540\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"545\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1769\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"58\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"8059019079127\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 Years\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cooling System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Static vented\""
    },
    {
      "name": "\"name\"",
      "value": "\"Defrost Process Fridge Section\","
    },
    {
      "name": "\"value\"",
      "value": "\"Automatic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Gasket\","
    },
    {
      "name": "\"value\"",
      "value": "\"Pull\""
    },
    {
      "name": "\"name\"",
      "value": "\"Light\","
    },
    {
      "name": "\"value\"",
      "value": "\"LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Current\","
    },
    {
      "name": "\"value\"",
      "value": "\"0.8 A\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frequency\","
    },
    {
      "name": "\"value\"",
      "value": "\"50 Hz\""
    },
    {
      "name": "\"name\"",
      "value": "\"Voltage\","
    },
    {
      "name": "\"value\"",
      "value": "\"220-240 V\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"External control panel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Controls\","
    },
    {
      "name": "\"value\"",
      "value": "\"Electronic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Temperature Adjustable\","
    },
    {
      "name": "\"value\"",
      "value": "\"Refrigerator\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Shelves Material\","
    },
    {
      "name": "\"value\"",
      "value": "\"Crystal clear plastic\""
    },
    {
      "name": "\"name\"",
      "value": "\"Shelves Finish\","
    },
    {
      "name": "\"value\"",
      "value": "\"Metal Frame\""
    },
    {
      "name": "\"name\"",
      "value": "\"Cover Door Installation System\","
    },
    {
      "name": "\"value\"",
      "value": "\"Slided-mounted\""
    },
    {
      "name": "\"name\"",
      "value": "\"Door Hinge\","
    },
    {
      "name": "\"value\"",
      "value": "\"Right-mounted\""
    },
    {
      "name": "\"name\"",
      "value": "\"Total Number of Door Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Adjustable Shelves in Fridge\","
    },
    {
      "name": "\"value\"",
      "value": "\"4+2\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"Temperate, Subtropical\""
    },
    {
      "name": "\"name\"",
      "value": "\"Acoustical Noise Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    }
  ]
},
{
  "id": "111",
  "sku": "LRS3DE39X",
  "name": "Electrolux 395L Freestanding Larder Fridge - Stainless Steel | LRS3DE39X",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 749.99,
  "image": "https://www.did.ie/cdn/shop/files/LRS3DE39X-1_f8f98fe9-a7a6-4183-91d3-1509ed089edc_5000x.jpg?v=1758095325",
  "brand": "Electrolux",
  "rating": 4.8,
  "reviews": 115,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Electrolux\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"Stainless Steel\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"395\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"6\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Salad Box\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Egg Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"122\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"40\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"10°C - 43°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"595\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"650\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1860\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"Extended Temperate,\""
    },
    {
      "name": "\"name\"",
      "value": "\"Temperate, Subtropical, Tropical\""
    }
  ]
},
{
  "id": "112",
  "sku": "LRS3DE39W",
  "name": "Electrolux 600 395L Freestanding Fridge - White | LRS3DE39W",
  "description": "",
  "category": "Appliances > Home Appliances > Fridge",
  "price": 699.99,
  "image": "https://www.did.ie/cdn/shop/files/LRS3DE39W-1_6bfcf81c-9bd7-4267-bdc9-79912776156f_5000x.jpg?v=1751567434",
  "brand": "Electrolux",
  "rating": 4.7,
  "reviews": 157,
  "inStock": true,
  "specifications": [
    {
      "name": "\"name\"",
      "value": "\"General\""
    },
    {
      "name": "\"name\"",
      "value": "\"Brand\","
    },
    {
      "name": "\"value\"",
      "value": "\"Electrolux\""
    },
    {
      "name": "\"name\"",
      "value": "\"Colour\","
    },
    {
      "name": "\"value\"",
      "value": "\"White\""
    },
    {
      "name": "\"name\"",
      "value": "\"Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"Freestanding\""
    },
    {
      "name": "\"name\"",
      "value": "\"Frost Free\","
    },
    {
      "name": "\"value\"",
      "value": "\"Smart Frost\""
    },
    {
      "name": "\"name\"",
      "value": "\"Reversible Door\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Open Door Alert\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Capacity Net (l)\","
    },
    {
      "name": "\"value\"",
      "value": "\"395\""
    },
    {
      "name": "\"name\"",
      "value": "\"Number of Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"5\""
    },
    {
      "name": "\"name\"",
      "value": "\"Glass Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Salad Box\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Egg Tray\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Adjustable Shelves\","
    },
    {
      "name": "\"value\"",
      "value": "\"Yes\""
    },
    {
      "name": "\"name\"",
      "value": "\"Environmental\""
    },
    {
      "name": "\"name\"",
      "value": "\"Energy Rating\","
    },
    {
      "name": "\"value\"",
      "value": "\"E\""
    },
    {
      "name": "\"name\"",
      "value": "\"Annual Energy Consumption (kWh/a)\","
    },
    {
      "name": "\"value\"",
      "value": "\"122\""
    },
    {
      "name": "\"name\"",
      "value": "\"Noise Level (dBa)\","
    },
    {
      "name": "\"value\"",
      "value": "\"40\""
    },
    {
      "name": "\"name\"",
      "value": "\"Required Room Temperature\","
    },
    {
      "name": "\"value\"",
      "value": "\"10°C - 43°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Dimensions\""
    },
    {
      "name": "\"name\"",
      "value": "\"Width (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"595\""
    },
    {
      "name": "\"name\"",
      "value": "\"Depth (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"650\""
    },
    {
      "name": "\"name\"",
      "value": "\"Height (mm)\","
    },
    {
      "name": "\"value\"",
      "value": "\"1860\""
    },
    {
      "name": "\"name\"",
      "value": "\"Weight (kg)\","
    },
    {
      "name": "\"value\"",
      "value": "\"60\""
    },
    {
      "name": "\"name\"",
      "value": "\"Meta Information\""
    },
    {
      "name": "\"name\"",
      "value": "\"EAN Code\","
    },
    {
      "name": "\"value\"",
      "value": "\"7333394035208\""
    },
    {
      "name": "\"name\"",
      "value": "\"Main\""
    },
    {
      "name": "\"name\"",
      "value": "\"Warranty\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Year\""
    },
    {
      "name": "\"name\"",
      "value": "\"More\""
    },
    {
      "name": "\"name\"",
      "value": "\"Climate Class\","
    },
    {
      "name": "\"value\"",
      "value": "\"SN, N, ST, T\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge - Recommended Temp\","
    },
    {
      "name": "\"value\"",
      "value": "\"4°C\""
    },
    {
      "name": "\"name\"",
      "value": "\"Fridge Light Type\","
    },
    {
      "name": "\"value\"",
      "value": "\"1 Top LED\""
    },
    {
      "name": "\"name\"",
      "value": "\"Egg Trays\","
    },
    {
      "name": "\"value\"",
      "value": "\"2 For 8 Eggs\""
    },
    {
      "name": "\"name\"",
      "value": "\"Control Position\","
    },
    {
      "name": "\"value\"",
      "value": "\"Top\""
    }
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