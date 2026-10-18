// ─────────────────────────────────────────────────────────────────────────
// MENU DATA — All items, prices, images, and testimonials below are demo
// content for a fictional restaurant. Replace with the client's real menu.
// ─────────────────────────────────────────────────────────────────────────
import type { MenuItem, GalleryImage, Testimonial } from "../types";

export const menuCategories = [
  "Rice & Local Favourites",
  "Soups & Swallows",
  "Grills & Suya",
  "Small Chops & Starters",
  "Drinks",
  "Desserts",
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "jollof-rice",
    slug: "jollof-rice",
    name: "Signature Jollof Rice",
    category: "Rice & Local Favourites",
    description:
      "Smoky party-style jollof rice cooked in a rich tomato-pepper base, served with grilled chicken and fried plantain.",
    price: 8500,
    image:
      "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["spicy", "halal"],
    availability: "available",
    featured: true,
  },
  {
    id: "fried-rice",
    slug: "fried-rice",
    name: "Garden Fried Rice",
    category: "Rice & Local Favourites",
    description:
      "Wok-tossed fried rice with mixed vegetables, prawns, and liver, garnished with spring onions.",
    price: 9000,
    image:
      "https://images.pexels.com/photos/19792090/pexels-photo-19792090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["halal"],
    availability: "available",
  },
  {
    id: "jollof-chicken-combo",
    slug: "jollof-chicken-combo",
    name: "Jollof & Chicken Combo",
    category: "Rice & Local Favourites",
    description:
      "A hearty plate of jollof rice with peppered chicken, coleslaw, and a side of fried plantain.",
    price: 12000,
    image:
      "https://images.pexels.com/photos/40262791/pexels-photo-40262791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["spicy", "halal"],
    availability: "available",
    featured: true,
  },
  {
    id: "ofada-rice",
    slug: "ofada-rice",
    name: "Ofada Rice & Ayamase",
    category: "Rice & Local Favourites",
    description:
      "Traditional ofada rice served with a fiery green-pepper ayamase sauce and assorted meats.",
    price: 10000,
    image:
      "https://images.pexels.com/photos/8166269/pexels-photo-8166269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["spicy", "halal"],
    availability: "available",
  },
  {
    id: "egusi-soup",
    slug: "egusi-soup",
    name: "Egusi Soup",
    category: "Soups & Swallows",
    description:
      "Rich melon-seed soup with leafy greens, assorted meats, and stockfish, served with your choice of swallow.",
    price: 11000,
    image:
      "https://images.pexels.com/photos/37648018/pexels-photo-37648018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["halal", "gluten-free"],
    availability: "available",
    featured: true,
  },
  {
    id: "pounded-yam-egusi",
    slug: "pounded-yam-egusi",
    name: "Pounded Yam & Egusi",
    category: "Soups & Swallows",
    description:
      "Smooth pounded yam paired with our signature egusi soup, assorted meats, and dry fish.",
    price: 12000,
    image:
      "https://images.pexels.com/photos/633627/pexels-photo-633627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["halal", "gluten-free"],
    availability: "available",
    featured: true,
  },
  {
    id: "banga-soup",
    slug: "banga-soup",
    name: "Banga Soup & Starch",
    category: "Soups & Swallows",
    description:
      "Delta-style palm-fruit extract soup with fresh catfish and spices, served with soft starch.",
    price: 13000,
    image:
      "https://images.pexels.com/photos/17733757/pexels-photo-17733757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["halal", "gluten-free"],
    availability: "limited",
  },
  {
    id: "okra-soup",
    slug: "okra-soup",
    name: "Okra Soup",
    category: "Soups & Swallows",
    description:
      "Wholesome okra soup with assorted meats and stockfish, served with eba or pounded yam.",
    price: 10500,
    image:
      "https://images.pexels.com/photos/20004804/pexels-photo-20004804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["halal", "gluten-free"],
    availability: "available",
  },
  {
    id: "suya-beef",
    slug: "suya-beef",
    name: "Beef Suya",
    category: "Grills & Suya",
    description:
      "Char-grilled beef skewers rubbed with a spicy yaji pepper mix, served with onions and tomatoes.",
    price: 7500,
    image:
      "https://images.pexels.com/photos/5840330/pexels-photo-5840330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["spicy", "gluten-free"],
    availability: "available",
    featured: true,
  },
  {
    id: "grilled-chicken",
    slug: "grilled-chicken",
    name: "Peppered Grilled Chicken",
    category: "Grills & Suya",
    description:
      "Half chicken marinated in scotch-bonnet pepper sauce, char-grilled and served with plantain.",
    price: 9500,
    image:
      "https://images.pexels.com/photos/37076319/pexels-photo-37076319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["spicy", "gluten-free"],
    availability: "available",
  },
  {
    id: "grilled-fish",
    slug: "grilled-fish",
    name: "Whole Grilled Croaker Fish",
    category: "Grills & Suya",
    description:
      "Fresh croaker fish marinated in herbs and pepper, grilled whole and served with pepper sauce.",
    price: 14000,
    image:
      "https://images.pexels.com/photos/12932683/pexels-photo-12932683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["gluten-free"],
    availability: "available",
  },
  {
    id: "suya-chicken",
    slug: "suya-chicken",
    name: "Chicken Suya",
    category: "Grills & Suya",
    description:
      "Tender chicken thigh skewers coated in our signature yaji spice blend, grilled over open flame.",
    price: 7000,
    image:
      "https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["spicy", "gluten-free"],
    availability: "available",
  },
  {
    id: "puff-puff",
    slug: "puff-puff",
    name: "Puff Puff",
    category: "Small Chops & Starters",
    description:
      "Golden-fried sweet dough balls, crisp on the outside and fluffy within. Served in a stack of eight.",
    price: 4000,
    image:
      "https://images.pexels.com/photos/13915068/pexels-photo-13915068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["vegetarian"],
    availability: "available",
  },
  {
    id: "moi-moi",
    slug: "moi-moi",
    name: "Moi Moi",
    category: "Small Chops & Starters",
    description:
      "Steamed bean pudding with peppers, onions, and boiled egg, wrapped in traditional banana leaf.",
    price: 4500,
    image:
      "https://images.pexels.com/photos/37624176/pexels-photo-37624176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["vegetarian", "gluten-free"],
    availability: "available",
  },
  {
    id: "plantain-chips",
    slug: "plantain-chips",
    name: "Fried Plantain",
    category: "Small Chops & Starters",
    description:
      "Crispy fried ripe plantain slices served with a mild pepper dip.",
    price: 3500,
    image:
      "https://images.pexels.com/photos/27556970/pexels-photo-27556970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["vegan", "gluten-free"],
    availability: "available",
  },
  {
    id: "pepper-soup",
    slug: "pepper-soup",
    name: "Catfish Pepper Soup",
    category: "Small Chops & Starters",
    description:
      "Light, aromatic pepper soup with fresh catfish, calabash nutmeg, and scent leaves.",
    price: 8000,
    image:
      "https://images.pexels.com/photos/9324621/pexels-photo-9324621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["spicy", "gluten-free"],
    availability: "available",
  },
  {
    id: "zobo-drink",
    slug: "zobo-drink",
    name: "Zobo (Hibiscus Drink)",
    category: "Drinks",
    description:
      "Refreshing chilled hibiscus infusion with ginger, pineapple, and a hint of mint.",
    price: 2500,
    image:
      "https://images.pexels.com/photos/8851226/pexels-photo-8851226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["vegan", "gluten-free"],
    availability: "available",
  },
  {
    id: "chapman",
    slug: "chapman",
    name: "Chapman Cocktail",
    category: "Drinks",
    description:
      "Nigeria's signature non-alcoholic cocktail with grenadine, citrus, cucumber, and angostura bitters.",
    price: 3500,
    image:
      "https://images.pexels.com/photos/36630828/pexels-photo-36630828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["vegetarian", "gluten-free"],
    availability: "available",
  },
  {
    id: "palm-wine",
    slug: "palm-wine",
    name: "Fresh Palm Wine",
    category: "Drinks",
    description:
      "Naturally sweet palm wine tapped fresh, served chilled in a traditional calabash cup.",
    price: 3000,
    image:
      "https://images.pexels.com/photos/34599382/pexels-photo-34599382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["vegan", "gluten-free"],
    availability: "limited",
  },
  {
    id: "chocolate-cake",
    slug: "chocolate-cake",
    name: "Chocolate Fondant",
    category: "Desserts",
    description:
      "Warm dark-chocolate fondant with a molten centre, served with vanilla ice cream.",
    price: 5500,
    image:
      "https://images.pexels.com/photos/5172006/pexels-photo-5172006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    dietary: ["vegetarian"],
    availability: "available",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Nigerian jollof rice with grilled chicken skewers and roasted fish",
    category: "dishes",
    width: 940,
    height: 650,
  },
  {
    id: "g2",
    src: "https://images.pexels.com/photos/37648018/pexels-photo-37648018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Traditional African soup with meat and vegetables in a leaf-shaped bowl",
    category: "dishes",
    width: 940,
    height: 650,
  },
  {
    id: "g3",
    src: "https://images.pexels.com/photos/40262791/pexels-photo-40262791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Grilled chicken with jollof rice and sautéed vegetables",
    category: "dishes",
    width: 940,
    height: 650,
  },
  {
    id: "g4",
    src: "https://images.pexels.com/photos/633627/pexels-photo-633627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Traditional Nigerian dish on a red plate with vegetable stew",
    category: "dishes",
    width: 940,
    height: 650,
  },
  {
    id: "g5",
    src: "https://images.pexels.com/photos/5840330/pexels-photo-5840330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Chicken skewers grilling over hot charcoal",
    category: "grills",
    width: 940,
    height: 650,
  },
  {
    id: "g13",
    src: "https://images.pexels.com/photos/31374532/pexels-photo-31374532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Close-up of meat skewers grilling over an outdoor barbecue with smoke rising",
    category: "grills",
    width: 940,
    height: 650,
  },
  {
    id: "g14",
    src: "https://images.pexels.com/photos/2104568/pexels-photo-2104568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Elegant table setting with wine glasses and a candle for dinner ambiance",
    category: "atmosphere",
    width: 940,
    height: 650,
  },
  {
    id: "g15",
    src: "https://images.pexels.com/photos/53438/table-restaurant-furniture-glass-53438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Stylish restaurant table setting with wine glasses and warm ambient lighting",
    category: "interior",
    width: 940,
    height: 650,
  },
  {
    id: "g6",
    src: "https://images.pexels.com/photos/15689896/pexels-photo-15689896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Chef preparing a dish in a dimly lit professional kitchen",
    category: "preparation",
    width: 940,
    height: 650,
  },
  {
    id: "g7",
    src: "https://images.pexels.com/photos/17318176/pexels-photo-17318176.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Two chefs working together in a professional kitchen",
    category: "preparation",
    width: 940,
    height: 650,
  },
  {
    id: "g8",
    src: "https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Elegant restaurant interior with wooden furniture and warm lighting",
    category: "interior",
    width: 940,
    height: 650,
  },
  {
    id: "g9",
    src: "https://images.pexels.com/photos/35833817/pexels-photo-35833817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Warm restaurant interior with wooden tables and soft lighting",
    category: "interior",
    width: 940,
    height: 650,
  },
  {
    id: "g10",
    src: "https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Luxurious table setup with wine glasses and candle holders",
    category: "atmosphere",
    width: 940,
    height: 650,
  },
  {
    id: "g11",
    src: "https://images.pexels.com/photos/11794317/pexels-photo-11794317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Warmly lit restaurant interior with set tables and wine glasses",
    category: "atmosphere",
    width: 940,
    height: 650,
  },
  {
    id: "g12",
    src: "https://images.pexels.com/photos/27556970/pexels-photo-27556970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Crispy fried plantains served on a white plate",
    category: "dishes",
    width: 940,
    height: 650,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Chidinma O.",
    role: "Demo testimonial — Fictional guest",
    quote:
      "The jollof rice is the best I have had in Abuja. The atmosphere is elegant and the service is impeccable.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Emeka N.",
    role: "Demo testimonial — Fictional guest",
    quote:
      "A beautiful blend of tradition and modernity. The suya was perfectly spiced and the presentation was stunning.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Aisha B.",
    role: "Demo testimonial — Fictional guest",
    quote:
      "We celebrated my mother's birthday here and everything was flawless. The pounded yam and egusi transported me home.",
    rating: 5,
  },
];
