import heroBannerOne from '../assets/images/hero banner image.webp';
import heroBannerTwo from '../assets/images/hero banner image 2.webp';
import heroBannerThree from '../assets/images/hero banner image 3.webp';

export const siteData = {
  company: {
    name: "The Kamala Silks",
    tagline: "Handcrafted with Authenticity",
    description: "Premium handcrafted silk, tasar, matka, and katha stitch sarees, kurties, khadi, cotton shirts, raw silk thaan, and 100% pure authentic Murshidabad silk.",
    logo: "/logo.png",
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],

  contact: {
    phone: "9434202637",
    email: "jayantaswarnakar76@gmail.com",
    whatsapp: "9475019835",
  },

  location: {
    address: "1/A BABUPARA, GORABAZAR, BERHAMPUR, MURSHIDABAD, West Bengal, 742101",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116744.17066928097!2d88.1818223940176!3d24.08639257613669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9797435f3dfd9%3A0x6a2185c7cb7ba3eb!2sBerhampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709876543210!5m2!1sen!2sin", // Generic Berhampore map embed
  },
  
  businessHours: [
    { day: "Tuesday", hours: "Closed" },
    { day: "Other Days", hours: "11:00 AM - 9:00 PM" }
  ],

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },

  services: [
    {
      id: "s1",
      title: "Pure Silks & Raw Thaan",
      badge: "Primary Speciality",
      description: "Specialised in Murshidabad Silk printed saris, Murshidabad Silk raw thaan, Bishnupuri Silk printed saris, Tasar gachi printed saris & raw thaan, Tasar kethe printed saris & raw thaan, Garad saris, and Silk Matka Printed Sarees.",
      items: [
        "Murshidabad Silk printed saris",
        "Murshidabad Silk raw thaan",
        "Bishnupuri Silk printed saris",
        "Tasar gachi printed saris and raw thaan",
        "Tasar kethe printed saris and raw thaan",
        "Garad saris",
        "Silk Matka Printed Saree"
      ]
    },
    {
      id: "s2",
      title: "Katha Stitch Sarees",
      badge: "Secondary Speciality",
      description: "Authentic handcrafted Katha stitch sarees featuring intricate generational needlework and storytelling motifs on pure handloom silk.",
      items: [
        "Authentic handcrafted Katha stitch sarees",
        "Generational rural Bengal needlework",
        "Intricate storytelling folkloric motifs"
      ]
    },
    {
      id: "s3",
      title: "Kurties & Khadi",
      badge: "Artisanal Wear",
      description: "Comfortable and elegant Kurties and Khadi wear crafted from natural handspun yarns.",
    },
    {
      id: "s4",
      title: "Cotton Shirts",
      badge: "Handloom Comfort",
      description: "High-quality traditional cotton shirts tailored for all-day comfort and sophistication.",
    }
  ],

  products: [
    {
      id: "p1",
      name: "Single ply pure Murshidabad Silk Sari (without blouse piece)",
      category: "Saree",
      image: "/images/pic1.webp",
      description: "Premium single ply pure Murshidabad silk sari with traditional borders and natural luster.",
      fabric: "Single Ply Pure Murshidabad Silk",
      dimensions: "5.5 Meters (without blouse piece)",
      care: "Dry clean only",
      price: "₹3000"
    },
    {
      id: "p2",
      name: "Double ply Silk Kethe Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic2.webp",
      description: "Exquisite double ply silk kethe sari for special occasions with authentic handwork.",
      fabric: "Double Ply Silk Kethe",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4600"
    },
    {
      id: "p3",
      name: "Single ply pure Murshidabad Silk Sari (without blouse piece)",
      category: "Saree",
      image: "/images/pic3.webp",
      description: "Authentic single ply pure Murshidabad silk sari featuring handcrafted artistry.",
      fabric: "Single Ply Pure Murshidabad Silk",
      dimensions: "5.5 Meters (without blouse piece)",
      care: "Gentle hand wash / Dry clean",
      price: "₹3000"
    },
    {
      id: "p4",
      name: "Double ply pure Murshidabad Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic4.webp",
      description: "Comfortable and opulent double ply pure Murshidabad silk sari with matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p5",
      name: "Double ply pure Murshidabad Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic5.webp",
      description: "A beautiful addition to your wardrobe in double ply pure Murshidabad silk.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p6",
      name: "Double ply pure Murshidabad Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic6.webp",
      description: "Perfect for any festive occasion, crafted in pure double ply Murshidabad silk.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p7",
      name: "Single ply pure Murshidabad Silk Sari (without blouse piece)",
      category: "Saree",
      image: "/images/pic7.webp",
      description: "Rich textures and vibrant colors in single ply pure Murshidabad silk.",
      fabric: "Single Ply Pure Murshidabad Silk",
      dimensions: "5.5 Meters (without blouse piece)",
      care: "Dry clean only",
      price: "₹3000"
    },
    {
      id: "p8",
      name: "Double ply pure Murshidabad Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic8.webp",
      description: "Woven with precision and care in double ply pure Murshidabad silk.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p9",
      name: "Double ply pure Murshidabad Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic9.webp",
      description: "A fine example of handwoven heritage double ply pure Murshidabad silk.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p10",
      name: "Single ply pure Murshidabad Silk Sari (without blouse piece)",
      category: "Saree",
      image: "/images/pic10.webp",
      description: "Vibrant single ply pure Murshidabad silk sari with graceful drape and natural shine.",
      fabric: "Single Ply Pure Murshidabad Silk",
      dimensions: "5.5 Meters (without blouse piece)",
      care: "Dry clean only",
      price: "₹3000"
    },
    {
      id: "p11",
      name: "Double ply pure Murshidabad Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic16.webp",
      description: "Exquisite double ply pure Murshidabad silk sari that makes a royal statement.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    }
  ],

  gallery: [
    { type: "image", src: "/images/pic1.webp" },
    { type: "image", src: "/images/pic2.webp" },
    { type: "image", src: "/images/pic3.webp" },
    { type: "image", src: "/images/pic4.webp" },
    { type: "image", src: "/images/pic5.webp" },
    { type: "image", src: "/images/pic6.webp" },
    { type: "image", src: "/images/pic7.webp" },
    { type: "image", src: "/images/pic8.webp" },
    { type: "image", src: "/images/pic9.webp" },
    { type: "image", src: "/images/pic10.webp" },
    { type: "image", src: "/images/pic11.webp" },
    { type: "image", src: "/images/pic12.webp" },
    { type: "image", src: "/images/pic13.webp" },
    { type: "image", src: "/images/pic14.webp" },
    { type: "image", src: "/images/pic15.webp" },
    { type: "video", src: "/videos/video1.mp4" },
    { type: "video", src: "/videos/videos2.mp4" },
    { type: "video", src: "/videos/videos3.mp4" },
    { type: "video", src: "/videos/video4.mp4" },
    { type: "video", src: "/videos/video5.mp4" },
    { type: "video", src: "/videos/videos6.mp4" },
    { type: "video", src: "/videos/video7.mp4" },
    { type: "video", src: "/videos/videos7.mp4" },
    { type: "video", src: "/videos/video8.mp4" },
    { type: "video", src: "/videos/videos8.mp4" },
    { type: "video", src: "/videos/video9.mp4" },
    { type: "video", src: "/videos/videos9.mp4" },
    { type: "video", src: "/videos/video10.mp4" },
  ],
  
  heroSlides: [
    {
      id: 1,
      image: heroBannerOne,
      title: "Timeless Elegance",
      subtitle: "Discover the finest collection of handcrafted silk sarees.",
    },
    {
      id: 2,
      image: heroBannerTwo,
      title: "Authentic Katha Stitch",
      subtitle: "Woven with passion, tailored with tradition.",
    },
    {
      id: 3,
      image: heroBannerThree,
      title: "Heritage Woven Since Generations",
      subtitle: "Celebrate timeless craftsmanship with The Kamala Silks.",
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Anjali M.",
      text: "The quality of the silk sarees is unmatched. Truly premium feel and authentic designs."
    },
    {
      id: "t2",
      name: "Priya S.",
      text: "Their Katha stitch collection is beautiful. I get compliments every time I wear it."
    },
    {
      id: "t3",
      name: "Rohan D.",
      text: "Excellent service and a wonderful collection of traditional wear."
    }
  ]
};
