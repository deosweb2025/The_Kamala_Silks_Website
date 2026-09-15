import heroBannerOne from '../assets/images/hero banner image.png';
import heroBannerTwo from '../assets/images/hero banner image 2.png';
import heroBannerThree from '../assets/images/hero banner image 3.png';

export const siteData = {
  company: {
    name: "The Kamala Silks",
    tagline: "Handcrafted with Authenticity",
    description: "Premium handcrafted silk, tasar, matka, and katha stitch sarees, kurties, khadi, cotton shirts, raw silk thaan, and 100% pure authentic Murshidabad silk.",
    logo: "/logo.jpeg",
    manufacturerNote: "We are the sole manufacturers of all our sareess starting from our experienced weavers weaving and stitching the threads to experienced printers printing the sareess to give them an elegant look. From soil to garments, we are the pillars for exclusive Silk sarees. Being the manufacturers we provide the best quality of Silk sareess at a challenging cheapest rate.",
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
    email: "rhnswarnakar@gmail.com",
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
    instagram: "https://www.instagram.com/kamalasilks350/",
    facebook: "https://www.facebook.com/profile.php?id=61594377927252",
    youtube: "#",
  },

  services: [
    {
      id: "s1",
      title: "Pure Silks & Raw Thaan",
      badge: "Primary Speciality",
      description: "Specialised in Murshidabad Silk printed sarees, Murshidabad Silk raw thaan, Bishnupuri Silk printed sarees, Tasar gachi printed sarees & raw thaan, Tasar kethe printed sarees & raw thaan, Garad sarees, and Silk Matka Printed Sarees.",
      items: [
        "Murshidabad Silk printed sarees",
        "Murshidabad Silk raw thaan",
        "Bishnupuri Silk printed sarees",
        "Tasar gachi printed sarees and raw thaan",
        "Tasar kethe printed sarees and raw thaan",
        "Garad sarees",
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

  featuredProductIds: ["p1", "p2", "p22", "p26"],

  products: [
    {
      id: "p1",
      name: "Single ply pure Murshidabad Silk sarees (without blouse piece)",
      category: "Saree",
      image: "/images/pic1.webp",
      description: "Premium single ply pure Murshidabad silk sarees with traditional borders and natural luster.",
      fabric: "Single Ply Pure Murshidabad Silk",
      dimensions: "5.5 Meters (without blouse piece)",
      care: "Dry clean only",
      price: "₹3000"
    },
    {
      id: "p2",
      name: "Double ply Silk Kethe sarees (with blouse piece)",
      category: "Saree",
      image: "/images/pic2.webp",
      description: "Exquisite double ply silk kethe sarees for special occasions with authentic handwork.",
      fabric: "Double Ply Silk Kethe",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4600"
    },
    {
      id: "p3",
      name: "Single ply pure Murshidabad Silk sarees (without blouse piece)",
      category: "Saree",
      image: "/images/pic3.webp",
      description: "Authentic single ply pure Murshidabad silk sarees featuring handcrafted artistry.",
      fabric: "Single Ply Pure Murshidabad Silk",
      dimensions: "5.5 Meters (without blouse piece)",
      care: "Gentle hand wash / Dry clean",
      price: "₹3000"
    },
    {
      id: "p4",
      name: "Double ply pure Murshidabad Silk sarees (with blouse piece)",
      category: "Saree",
      image: "/images/pic4.webp",
      description: "Comfortable and opulent double ply pure Murshidabad silk sarees with matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p5",
      name: "Double ply pure Murshidabad Silk sarees (with blouse piece)",
      category: "Saree",
      image: "/images/pic5.webp",
      description: "A beautiful addition to your wardrobe in double ply pure Murshidabad silk.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p6",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic6.webp",
      description: "Perfect for any festive occasion, crafted in pure double ply Murshidabad silk with handcrafted batik artwork and matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p7",
      name: "Single ply pure Murshidabad Silk sarees (without blouse piece)",
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
      name: "Double ply pure Murshidabad Silk sarees (with blouse piece)",
      category: "Saree",
      image: "/images/pic8.webp",
      description: "Woven with precision and care in double ply pure Murshidabad silk.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4000"
    },
    {
      id: "p9",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic9.webp",
      description: "A fine example of handwoven heritage double ply pure Murshidabad silk with authentic hand batik print and matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p10",
      name: "Single ply pure Murshidabad Silk sarees (without blouse piece)",
      category: "Saree",
      image: "/images/pic10.webp",
      description: "Vibrant single ply pure Murshidabad silk sarees with graceful drape and natural shine.",
      fabric: "Single Ply Pure Murshidabad Silk",
      dimensions: "5.5 Meters (without blouse piece)",
      care: "Dry clean only",
      price: "₹3000"
    },
    {
      id: "p11",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic16.webp",
      description: "Exquisite double ply pure Murshidabad silk saree that makes a royal statement with handcrafted batik print and matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p12",
      name: "Pure Silk Shirt",
      category: "Shirt",
      image: "/images/pic17.webp",
      description: "Premium pure silk shirt tailored for all-day breathability, effortless elegance, and timeless comfort.",
      fabric: "100% Pure Silk",
      dimensions: "Standard Tailored Fit (M, L, XL, XXL)",
      care: "Gentle hand wash / Dry clean",
      price: "₹1500"
    },
    {
      id: "p13",
      name: "Pure Silk Shirt",
      category: "Shirt",
      image: "/images/pic18.webp",
      description: "Handcrafted pure silk shirt tailored from fine handloom silk yarns with a smooth, regal finish.",
      fabric: "100% Pure Silk",
      dimensions: "Standard Tailored Fit (M, L, XL, XXL)",
      care: "Gentle hand wash / Dry clean",
      price: "₹1500"
    },
    {
      id: "p14",
      name: "Double ply Silk Kethe sarees (with blouse piece)",
      category: "Saree",
      image: "/images/pic19.webp",
      description: "Authentic double ply silk kethe sarees featuring handcrafted needlework and running stitch motifs with matching blouse piece.",
      fabric: "Double Ply Silk Kethe",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4600"
    },
    {
      id: "p15",
      name: "Double ply Silk Kethe sarees (with blouse piece)",
      category: "Saree",
      image: "/images/pic20.webp",
      description: "Exquisite double ply silk kethe sarees woven with precision and heritage elegance with matching blouse piece.",
      fabric: "Double Ply Silk Kethe",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4600"
    },
    {
      id: "p16",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic21.webp",
      description: "Authentic double ply hand batik print pure Murshidabad silk saree crafted with rich traditional artwork and matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p17",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic22.webp",
      description: "Artisanal hand batik print on pure Murshidabad double ply silk with vibrant motifs and natural luster.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p18",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic23.webp",
      description: "Exquisite double ply pure Murshidabad silk saree with traditional hand batik craft and matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p19",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic24.webp",
      description: "Handcrafted double ply pure Murshidabad silk saree featuring intricate hand batik prints and heirloom texture.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p20",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic25.webp",
      description: "Royal double ply pure Murshidabad silk saree with handcrafted batik artwork and matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p21",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic26.webp",
      description: "Vibrant double ply hand batik print pure Murshidabad silk saree tailored for festive elegance with matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p22",
      name: "Double ply Hand batik print pure Murshidabad Silk Saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic27.webp",
      description: "Masterpiece double ply hand batik printed pure Murshidabad silk saree with timeless drape and matching blouse piece.",
      fabric: "Double Ply Pure Murshidabad Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4200"
    },
    {
      id: "p23",
      name: "Double ply one color Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic28.webp",
      description: "Classic double ply monochrome Bishnupuri silk saree offering understated elegance with a rich drape and matching blouse piece.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹3500"
    },
    {
      id: "p24",
      name: "Double ply one color Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic29.webp",
      description: "Solid tone double ply Bishnupuri pure silk saree handwoven to perfection with vibrant single-color luster and matching blouse piece.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹3500"
    },
    {
      id: "p25",
      name: "Double ply one color Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic30.webp",
      description: "Sophisticated one color double ply Bishnupuri silk saree with a silky smooth touch, ideal for formal and festive celebrations.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹3500"
    },
    {
      id: "p26",
      name: "Double ply one color Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic31.webp",
      description: "Graceful solid shade double ply Bishnupuri silk saree celebrating the beauty of handloom pure silk with matching blouse piece.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹3500"
    },
    {
      id: "p27",
      name: "Double ply one color Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic32.webp",
      description: "Refined single color double ply Bishnupuri silk saree delivering unmatched comfort, heritage texture, and matching blouse piece.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹3500"
    },
    {
      id: "p28",
      name: "Double ply one color Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic33.webp",
      description: "Timeless solid color double ply Bishnupuri silk saree with subtle sheen and graceful drape, complete with matching blouse piece.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹3500"
    },
    {
      id: "p29",
      name: "Double ply one color Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic34.webp",
      description: "Vibrant one color double ply Bishnupuri silk saree handspun from fine silk yarns for timeless allure with matching blouse piece.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹3500"
    },
    {
      id: "p30",
      name: "Double ply 3D printed Bishnupuri Silk Sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic35.webp",
      description: "Innovative double ply 3D printed Bishnupuri silk saree blending cutting-edge visual motifs with traditional pure handloom silk and matching blouse piece.",
      fabric: "Double Ply Bishnupuri Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4400"
    },
    {
      id: "p31",
      name: "Gachi Tasar acid hand print saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic36.webp",
      description: "Authentic pure Gachi Tasar silk saree adorned with intricate acid hand print artwork, rich texture, and matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p32",
      name: "Gachi Tasar acid hand print saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic37.webp",
      description: "Artisanal Gachi Tasar silk saree featuring vibrant acid hand block motifs and organic handloom sheen, complete with matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p33",
      name: "Gachi Tasar acid hand print saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic38.webp",
      description: "Traditional pure Gachi Tasar acid hand printed saree handwoven by master weavers with timeless elegance and matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p34",
      name: "Gachi Tasar acid hand print saree (with blouse piece)",
      category: "Saree",
      image: "/images/pic39.webp",
      description: "Exquisite hand-printed pure Gachi Tasar saree celebrated for its natural golden hue, artisanal motifs, and matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p35",
      name: "Jori Tasar with block print (with blouse piece)",
      category: "Saree",
      image: "/images/pic40.webp",
      description: "Graceful pure Jori Tasar silk saree adorned with handcrafted block prints, regal texture, and matching blouse piece.",
      fabric: "Pure Jori Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹5200"
    },
    {
      id: "p36",
      name: "Gachi Tasar Block print sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic41.webp",
      description: "Traditional pure Gachi Tasar silk saree decorated with artistic hand block prints, earthy luster, and matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p37",
      name: "Gachi Tasar Block print sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic42.webp",
      description: "Exquisite hand block printed pure Gachi Tasar silk saree featuring timeless ethnic motifs and matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p38",
      name: "Gachi Tasar Block print sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic43.webp",
      description: "Authentic Gachi Tasar silk saree adorned with intricate hand block prints, natural golden sheen, and matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p39",
      name: "Gachi Tasar Block print sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic44.webp",
      description: "Artisanal block-printed pure Gachi Tasar silk saree woven with generational heritage and complete with matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
    },
    {
      id: "p40",
      name: "Gachi Tasar Block print sari (with blouse piece)",
      category: "Saree",
      image: "/images/pic45.webp",
      description: "Masterpiece pure Gachi Tasar silk saree featuring rich hand block printed patterns, regal drape, and matching blouse piece.",
      fabric: "Pure Gachi Tasar Silk",
      dimensions: "6.35 Meters (with blouse piece)",
      care: "Dry clean only",
      price: "₹4800"
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
    { type: "image", src: "/images/pic16.webp" },
    { type: "image", src: "/images/pic17.webp" },
    { type: "image", src: "/images/pic18.webp" },
    { type: "image", src: "/images/pic19.webp" },
    { type: "image", src: "/images/pic20.webp" },
    { type: "image", src: "/images/pic21.webp" },
    { type: "image", src: "/images/pic22.webp" },
    { type: "image", src: "/images/pic23.webp" },
    { type: "image", src: "/images/pic24.webp" },
    { type: "image", src: "/images/pic25.webp" },
    { type: "image", src: "/images/pic26.webp" },
    { type: "image", src: "/images/pic27.webp" },
    { type: "image", src: "/images/pic28.webp" },
    { type: "image", src: "/images/pic29.webp" },
    { type: "image", src: "/images/pic30.webp" },
    { type: "image", src: "/images/pic31.webp" },
    { type: "image", src: "/images/pic32.webp" },
    { type: "image", src: "/images/pic33.webp" },
    { type: "image", src: "/images/pic34.webp" },
    { type: "image", src: "/images/pic35.webp" },
    { type: "image", src: "/images/pic36.webp" },
    { type: "image", src: "/images/pic37.webp" },
    { type: "image", src: "/images/pic38.webp" },
    { type: "image", src: "/images/pic39.webp" },
    { type: "image", src: "/images/pic40.webp" },
    { type: "image", src: "/images/pic41.webp" },
    { type: "image", src: "/images/pic42.webp" },
    { type: "image", src: "/images/pic43.webp" },
    { type: "image", src: "/images/pic44.webp" },
    { type: "image", src: "/images/pic45.webp" },
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
    { type: "video", src: "/videos/videos20.mp4" },
    { type: "video", src: "/videos/videos21.mp4" },
    { type: "video", src: "/videos/videos22.mp4" },
    { type: "video", src: "/videos/videos23.mp4" },
    { type: "video", src: "/videos/videos24.mp4" },
    { type: "video", src: "/videos/videos25.mp4" },
    { type: "video", src: "/videos/videos26.mp4" },
    { type: "video", src: "/videos/videos27.mp4" },
    { type: "video", src: "/videos/videos28.mp4" },
    { type: "video", src: "/videos/videos29.mp4" },
    { type: "video", src: "/videos/videos30.mp4" },
    { type: "video", src: "/videos/videos31.mp4" },
    { type: "video", src: "/videos/videos32.mp4" },
    { type: "video", src: "/videos/videos33.mp4" },
    { type: "video", src: "/videos/videos34.mp4" },
    { type: "video", src: "/videos/videos35.mp4" },
    { type: "video", src: "/videos/videos36.mp4" },
    { type: "video", src: "/videos/videos37.mp4" },
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
