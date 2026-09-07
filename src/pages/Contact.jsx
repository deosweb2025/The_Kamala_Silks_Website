import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import { siteData } from '../data/siteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: ''
  });
  const location = useLocation();

  useEffect(() => {
    // Check if there is a product query parameter
    const params = new URLSearchParams(location.search);
    const productQuery = params.get('product');
    if (productQuery) {
      setFormData(prev => ({ ...prev, enquiry: `I would like to enquire about: ${productQuery}` }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `*New Enquiry from Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*Message:*
${formData.enquiry}`;

    const whatsappUrl = `https://wa.me/91${siteData.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', phone: '', enquiry: '' });
  };

  return (
    <div className="w-full">
      <PageHeader title="Contact Us" subtitle="Get in touch for enquiries and support" />
      
      <section className="py-24 relative overflow-hidden bg-gray-50">
        {/* Subtle background texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: 'url("/images/texture.jpg")' }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative group"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Send an Enquiry</h2>
              <p className="text-secondary/70 mb-8">Fill out the form below and we will connect with you via WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group/field">
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2 group-focus-within/field:text-accent transition-colors">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="group/field">
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2 group-focus-within/field:text-accent transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="group/field">
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2 group-focus-within/field:text-accent transition-colors">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="group/field">
                  <label htmlFor="enquiry" className="block text-sm font-medium text-secondary mb-2 group-focus-within/field:text-accent transition-colors">Message</label>
                  <textarea 
                    id="enquiry" 
                    name="enquiry" 
                    rows="4"
                    value={formData.enquiry}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none shadow-sm"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-accent transition-all shadow-lg hover:shadow-accent/30 text-lg hover:-translate-y-1 active:translate-y-0"
                >
                  Connect via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-10"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Visit Our Store</h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, title: "Address", content: siteData.location.address },
                    { icon: Phone, title: "Phone", content: <><a href={`tel:${siteData.contact.phone}`} className="hover:text-accent transition-colors">{siteData.contact.phone}</a><br/><a href={`https://wa.me/91${siteData.contact.whatsapp}`} className="hover:text-accent transition-colors">WhatsApp: {siteData.contact.whatsapp}</a></> },
                    { icon: Mail, title: "Email", content: <a href={`mailto:${siteData.contact.email}`} className="hover:text-accent transition-colors">{siteData.contact.email}</a> }
                  ].map((info, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all cursor-default"
                    >
                      <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0 flex items-center justify-center">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-lg mb-1">{info.title}</h4>
                        <p className="text-secondary/80 leading-relaxed">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-xl border border-white relative group">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10" />
                <iframe 
                  src={siteData.location.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Kamala Silks Location Map"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700 relative z-0"
                ></iframe>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
