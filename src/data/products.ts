export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  features: string[];
  specifications: {
    dimensions: string;
    thickness: string;
    finish: string;
    material: string;
  };
}

export const products: Product[] = [
  // Slat Wall Panels (8 products)
  {
    id: "slat-oak-natural",
    name: "Oak Natural Slat Panel",
    category: "Slat Wall Panels",
    price: 245,
    description: "Premium natural oak slat wall panel with authentic wood grain. Perfect for creating warm, inviting interiors with acoustic benefits.",
    image: "slat-oak",
    features: ["Natural wood texture", "Acoustic properties", "Easy installation", "Durable finish"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "Natural Oak",
      material: "MDF with oak veneer"
    }
  },
  {
    id: "slat-walnut",
    name: "Walnut Slat Panel",
    category: "Slat Wall Panels",
    price: 265,
    description: "Luxurious walnut slat panels featuring rich, dark tones. Ideal for upscale residential and commercial spaces.",
    image: "slat-oak",
    features: ["Rich walnut tones", "Sound dampening", "Premium quality", "Elegant appearance"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "Dark Walnut",
      material: "MDF with walnut veneer"
    }
  },
  {
    id: "slat-white-wash",
    name: "White Wash Slat Panel",
    category: "Slat Wall Panels",
    price: 235,
    description: "Contemporary white wash finish slat panels. Brings brightness and modern Scandinavian style to any space.",
    image: "slat-oak",
    features: ["Bright finish", "Modern design", "Versatile styling", "Light reflecting"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "White Wash",
      material: "MDF with ash veneer"
    }
  },
  {
    id: "slat-black-oak",
    name: "Black Oak Slat Panel",
    category: "Slat Wall Panels",
    price: 255,
    description: "Dramatic black oak slat panels for bold, contemporary interiors. Creates striking visual impact.",
    image: "slat-oak",
    features: ["Bold appearance", "Contemporary style", "Premium finish", "Statement piece"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "Black Oak",
      material: "MDF with stained oak veneer"
    }
  },
  {
    id: "slat-gray-oak",
    name: "Gray Oak Slat Panel",
    category: "Slat Wall Panels",
    price: 245,
    description: "Modern gray oak slat panels offering a perfect balance between warm and cool tones.",
    image: "slat-oak",
    features: ["Neutral tones", "Versatile design", "Modern aesthetic", "Easy maintenance"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "Gray Oak",
      material: "MDF with gray oak veneer"
    }
  },
  {
    id: "slat-beech",
    name: "Beech Slat Panel",
    category: "Slat Wall Panels",
    price: 240,
    description: "Light beech wood slat panels with subtle grain patterns. Perfect for Scandinavian and minimalist designs.",
    image: "slat-oak",
    features: ["Light wood tone", "Subtle grain", "Natural beauty", "Scandinavian style"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "Natural Beech",
      material: "MDF with beech veneer"
    }
  },
  {
    id: "slat-mahogany",
    name: "Mahogany Slat Panel",
    category: "Slat Wall Panels",
    price: 275,
    description: "Rich mahogany slat panels with deep reddish-brown tones. Brings luxury and warmth to interiors.",
    image: "slat-oak",
    features: ["Luxury finish", "Rich color", "Premium wood", "Timeless elegance"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "Mahogany",
      material: "MDF with mahogany veneer"
    }
  },
  {
    id: "slat-charcoal",
    name: "Charcoal Slat Panel",
    category: "Slat Wall Panels",
    price: 250,
    description: "Deep charcoal slat panels for ultra-modern spaces. Creates sophisticated, dramatic interiors.",
    image: "slat-oak",
    features: ["Deep charcoal", "Ultra-modern", "Dramatic effect", "Premium quality"],
    specifications: {
      dimensions: "2800 x 600 mm",
      thickness: "18 mm",
      finish: "Charcoal",
      material: "MDF with stained finish"
    }
  },

  // High Gloss MDF Panels (8 products)
  {
    id: "high-gloss-white",
    name: "High Gloss White Panel",
    category: "High Gloss MDF Panels",
    price: 200,
    description: "Ultra-smooth high gloss white MDF panel with mirror-like finish. Perfect for modern, bright interiors.",
    image: "high-gloss-white",
    features: ["Mirror finish", "Easy to clean", "Light reflecting", "Modern style"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "High Gloss White",
      material: "High gloss acrylic on MDF"
    }
  },
  {
    id: "high-gloss-black",
    name: "High Gloss Black Panel",
    category: "High Gloss MDF Panels",
    price: 200,
    description: "Sophisticated high gloss black panel with deep, reflective surface. Creates luxury ambiance.",
    image: "high-gloss-white",
    features: ["Deep black finish", "Reflective surface", "Luxury appearance", "Modern elegance"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "High Gloss Black",
      material: "High gloss acrylic on MDF"
    }
  },
  {
    id: "high-gloss-gray",
    name: "High Gloss Gray Panel",
    category: "High Gloss MDF Panels",
    price: 200,
    description: "Contemporary gray high gloss panel. Versatile neutral that complements any design scheme.",
    image: "high-gloss-white",
    features: ["Neutral gray", "Versatile", "Contemporary", "Easy maintenance"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "High Gloss Gray",
      material: "High gloss acrylic on MDF"
    }
  },
  {
    id: "high-gloss-pearl",
    name: "High Gloss Pearl Matrix",
    category: "High Gloss MDF Panels",
    price: 200,
    description: "Elegant pearl matrix finish with subtle shimmer. Adds sophistication to any space.",
    image: "high-gloss-white",
    features: ["Pearl shimmer", "Elegant finish", "Unique texture", "Premium quality"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Pearl Matrix",
      material: "High gloss acrylic on MDF"
    }
  },
  {
    id: "high-gloss-graphite",
    name: "High Gloss Graphite Panel",
    category: "High Gloss MDF Panels",
    price: 200,
    description: "Deep graphite high gloss panel with metallic undertones. Perfect for contemporary designs.",
    image: "high-gloss-white",
    features: ["Metallic undertones", "Deep color", "Contemporary", "Sophisticated"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "High Gloss Graphite",
      material: "High gloss acrylic on MDF"
    }
  },
  {
    id: "high-gloss-cream",
    name: "High Gloss Cream Panel",
    category: "High Gloss MDF Panels",
    price: 200,
    description: "Warm cream high gloss panel. Brings softness and warmth to modern interiors.",
    image: "high-gloss-white",
    features: ["Warm tones", "Soft appearance", "Elegant", "Inviting"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "High Gloss Cream",
      material: "High gloss acrylic on MDF"
    }
  },
  {
    id: "high-gloss-navy",
    name: "High Gloss Navy Panel",
    category: "High Gloss MDF Panels",
    price: 210,
    description: "Rich navy blue high gloss panel. Bold statement piece for modern spaces.",
    image: "high-gloss-white",
    features: ["Bold navy blue", "Statement piece", "Deep color", "Modern luxury"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "High Gloss Navy",
      material: "High gloss acrylic on MDF"
    }
  },
  {
    id: "high-gloss-champagne",
    name: "High Gloss Champagne Panel",
    category: "High Gloss MDF Panels",
    price: 210,
    description: "Luxurious champagne finish with golden undertones. Creates opulent, elegant interiors.",
    image: "high-gloss-white",
    features: ["Golden undertones", "Luxurious", "Elegant", "Premium finish"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "High Gloss Champagne",
      material: "High gloss acrylic on MDF"
    }
  },

  // Soft Touch MDF Panels (7 products)
  {
    id: "soft-touch-black",
    name: "Soft Touch Black Panel",
    category: "Soft Touch MDF Panels",
    price: 220,
    description: "Velvety matte black panel with soft-touch finish. Fingerprint resistant and elegant.",
    image: "soft-touch-black",
    features: ["Soft-touch surface", "Fingerprint resistant", "Velvety matte", "Premium feel"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Soft Touch Black",
      material: "Soft-touch coating on MDF"
    }
  },
  {
    id: "soft-touch-white",
    name: "Soft Touch White Panel",
    category: "Soft Touch MDF Panels",
    price: 220,
    description: "Pure white soft-touch panel with smooth, pleasant surface. Modern and sophisticated.",
    image: "soft-touch-black",
    features: ["Smooth surface", "Modern white", "Anti-fingerprint", "Pleasant touch"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Soft Touch White",
      material: "Soft-touch coating on MDF"
    }
  },
  {
    id: "soft-touch-taupe",
    name: "Soft Touch Taupe Panel",
    category: "Soft Touch MDF Panels",
    price: 220,
    description: "Warm taupe soft-touch panel. Perfect balance of sophistication and warmth.",
    image: "soft-touch-black",
    features: ["Warm neutral", "Sophisticated", "Soft finish", "Versatile"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Soft Touch Taupe",
      material: "Soft-touch coating on MDF"
    }
  },
  {
    id: "soft-touch-anthracite",
    name: "Soft Touch Anthracite Panel",
    category: "Soft Touch MDF Panels",
    price: 220,
    description: "Deep anthracite gray with velvety soft-touch finish. Modern industrial elegance.",
    image: "soft-touch-black",
    features: ["Industrial elegance", "Deep gray", "Velvety finish", "Modern"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Soft Touch Anthracite",
      material: "Soft-touch coating on MDF"
    }
  },
  {
    id: "soft-touch-stone",
    name: "Soft Touch Stone Panel",
    category: "Soft Touch MDF Panels",
    price: 220,
    description: "Natural stone gray soft-touch panel. Brings organic feel to contemporary spaces.",
    image: "soft-touch-black",
    features: ["Natural gray", "Organic feel", "Soft texture", "Contemporary"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Soft Touch Stone",
      material: "Soft-touch coating on MDF"
    }
  },
  {
    id: "soft-touch-sand",
    name: "Soft Touch Sand Panel",
    category: "Soft Touch MDF Panels",
    price: 220,
    description: "Warm sand beige soft-touch panel. Creates calming, inviting environments.",
    image: "soft-touch-black",
    features: ["Warm beige", "Calming", "Soft surface", "Inviting"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Soft Touch Sand",
      material: "Soft-touch coating on MDF"
    }
  },
  {
    id: "soft-touch-midnight",
    name: "Soft Touch Midnight Panel",
    category: "Soft Touch MDF Panels",
    price: 230,
    description: "Deep midnight blue soft-touch panel. Bold statement for luxury interiors.",
    image: "soft-touch-black",
    features: ["Midnight blue", "Bold statement", "Luxury feel", "Unique color"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Soft Touch Midnight",
      material: "Soft-touch coating on MDF"
    }
  },

  // Techno Matt MDF Panels (7 products)
  {
    id: "techno-matt-gray",
    name: "Techno Matt Gray Panel",
    category: "Techno Matt MDF Panels",
    price: 190,
    description: "Ultra-modern techno matt gray panel with fingerprint-resistant surface. Perfect for contemporary kitchens and bathrooms.",
    image: "techno-matt-gray",
    features: ["Fingerprint resistant", "Ultra-modern", "Easy maintenance", "Contemporary"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Techno Matt Gray",
      material: "Anti-fingerprint coating on MDF"
    }
  },
  {
    id: "techno-matt-white",
    name: "Techno Matt White Panel",
    category: "Techno Matt MDF Panels",
    price: 190,
    description: "Clean white techno matt panel. Combines modern aesthetics with practical functionality.",
    image: "techno-matt-gray",
    features: ["Clean white", "Practical", "Modern", "Low maintenance"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Techno Matt White",
      material: "Anti-fingerprint coating on MDF"
    }
  },
  {
    id: "techno-matt-black",
    name: "Techno Matt Black Panel",
    category: "Techno Matt MDF Panels",
    price: 190,
    description: "Deep black techno matt panel. Sophisticated finish without glossy reflections.",
    image: "techno-matt-gray",
    features: ["Deep black", "No reflections", "Sophisticated", "Modern matte"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Techno Matt Black",
      material: "Anti-fingerprint coating on MDF"
    }
  },
  {
    id: "techno-matt-concrete",
    name: "Techno Matt Concrete Panel",
    category: "Techno Matt MDF Panels",
    price: 200,
    description: "Industrial concrete gray techno matt panel. Brings urban aesthetic to interiors.",
    image: "techno-matt-gray",
    features: ["Concrete look", "Urban aesthetic", "Industrial style", "Textured appearance"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Techno Matt Concrete",
      material: "Anti-fingerprint coating on MDF"
    }
  },
  {
    id: "techno-matt-bronze",
    name: "Techno Matt Bronze Panel",
    category: "Techno Matt MDF Panels",
    price: 210,
    description: "Metallic bronze techno matt panel. Adds warmth and luxury to modern spaces.",
    image: "techno-matt-gray",
    features: ["Metallic bronze", "Warm tones", "Luxury finish", "Unique"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Techno Matt Bronze",
      material: "Anti-fingerprint coating on MDF"
    }
  },
  {
    id: "techno-matt-copper",
    name: "Techno Matt Copper Panel",
    category: "Techno Matt MDF Panels",
    price: 210,
    description: "Contemporary copper techno matt panel. Statement piece for bold interiors.",
    image: "techno-matt-gray",
    features: ["Copper finish", "Bold statement", "Contemporary", "Eye-catching"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Techno Matt Copper",
      material: "Anti-fingerprint coating on MDF"
    }
  },
  {
    id: "techno-matt-silver",
    name: "Techno Matt Silver Panel",
    category: "Techno Matt MDF Panels",
    price: 200,
    description: "Sleek silver techno matt panel. Modern metallic finish for contemporary designs.",
    image: "techno-matt-gray",
    features: ["Metallic silver", "Sleek finish", "Modern design", "Contemporary"],
    specifications: {
      dimensions: "2800 x 2070 mm",
      thickness: "18 mm",
      finish: "Techno Matt Silver",
      material: "Anti-fingerprint coating on MDF"
    }
  },
];

export const categories = [
  {
    name: "Slat Wall Panels",
    description: "Natural wood slat panels with acoustic properties",
    productCount: 8
  },
  {
    name: "High Gloss MDF Panels",
    description: "Mirror-finish panels for modern, bright interiors",
    productCount: 8
  },
  {
    name: "Soft Touch MDF Panels",
    description: "Velvety matte finish with fingerprint resistance",
    productCount: 7
  },
  {
    name: "Techno Matt MDF Panels",
    description: "Contemporary anti-fingerprint panels",
    productCount: 7
  }
];
