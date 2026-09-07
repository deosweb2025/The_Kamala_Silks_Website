import heroBannerOne from '../assets/images/hero banner image.jpeg';
import heroBannerTwo from '../assets/images/hero banner image 2.jpeg';
import heroBannerThree from '../assets/images/hero banner image 3.jpeg';

export const siteData = {
  company: {
    name: "The Kamala Silks",
    tagline: "Handcrafted with Authenticity",
    description: "Premium handcrafted silk, tasar, matka, and katha stitch sarees, kurties, khadi, and cotton shirts.",
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
      title: "Premium Sarees",
      description: "Exquisite collection of Silk, Tasar, and Matka sarees.",
    },
    {
      id: "s2",
      title: "Katha Stitch",
      description: "Authentic handcrafted Katha stitch sarees with intricate designs.",
    },
    {
      id: "s3",
      title: "Kurties & Khadi",
      description: "Comfortable and elegant Kurties and Khadi wear.",
    },
    {
      id: "s4",
      title: "Cotton Shirts",
      description: "High-quality traditional cotton shirts.",
    }
  ],

  products: [
    {
      id: "p1",
      name: "Classic Matka Silk",
      category: "Saree",
      image: "/images/pic1.jpeg",
      description: "Premium quality Matka silk saree with traditional borders.",
      fabric: "Pure Matka Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
    },
    {
      id: "p2",
      name: "Handwoven Tasar",
      category: "Saree",
      image: "/images/pic2.jpeg",
      description: "Elegant Tasar silk for special occasions.",
      fabric: "Handwoven Tasar Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
    },
    {
      id: "p3",
      name: "Katha Stitch Masterpiece",
      category: "Saree",
      image: "/images/pic3.jpeg",
      description: "Intricate Katha stitch work on pure silk.",
      fabric: "Pure Silk",
      dimensions: "6.5 Meters",
      care: "Gentle hand wash / Dry clean",
    },
    {
      id: "p4",
      name: "Traditional Khadi Saree",
      category: "Saree",
      image: "/images/pic4.jpeg",
      description: "Comfortable khadi saree for everyday elegance.",
      fabric: "Premium Khadi Cotton",
      dimensions: "5.5 Meters",
      care: "Machine wash cold",
    },
    {
      id: "p5",
      name: "Premium Saree Collection",
      category: "Saree",
      image: "/images/pic5.jpeg",
      description: "A beautiful addition to your wardrobe.",
      fabric: "Blended Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
    },
    {
      id: "p6",
      name: "Elegant Wear",
      category: "Saree",
      image: "/images/pic6.jpeg",
      description: "Perfect for any festive occasion.",
      fabric: "Matka Silk",
      dimensions: "6.5 Meters",
      care: "Dry clean only",
    },
    {
      id: "p7",
      name: "Festive Collection",
      category: "Saree",
      image: "/images/pic7.jpeg",
      description: "Rich textures and vibrant colors.",
      fabric: "Pure Silk",
      dimensions: "6.5 Meters",
      care: "Dry clean only",
    },
    {
      id: "p8",
      name: "Handcrafted Wonder",
      category: "Saree",
      image: "/images/pic8.jpeg",
      description: "Woven with precision and care.",
      fabric: "Tasar Silk",
      dimensions: "6.5 Meters (with blouse piece)",
      care: "Dry clean only",
    }
  ],

  gallery: [
    { type: "image", src: "/images/pic1.jpeg" },
    { type: "image", src: "/images/pic2.jpeg" },
    { type: "image", src: "/images/pic3.jpeg" },
    { type: "image", src: "/images/pic4.jpeg" },
    { type: "image", src: "/images/pic5.jpeg" },
    { type: "image", src: "/images/pic6.jpeg" },
    { type: "image", src: "/images/pic7.jpeg" },
    { type: "image", src: "/images/pic8.jpeg" },
    { type: "image", src: "/images/pic9.jpeg" },
    { type: "image", src: "/images/pic10.jpeg" },
    { type: "image", src: "/images/pic11.jpeg" },
    { type: "image", src: "/images/pic12.jpeg" },
    { type: "image", src: "/images/pic13.jpeg" },
    { type: "image", src: "/images/pic14.jpeg" },
    { type: "image", src: "/images/pic15.jpeg" },
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
