import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User, AtSign, PhoneCall, Tag, ShoppingBag, Ruler, MessageSquare, Send } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import { siteData } from '../data/siteData';

const inputClass = "w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all shadow-sm font-sans text-sm";
const labelClass = "block text-sm font-semibold text-secondary mb-2 group-focus-within/field:text-accent transition-colors";

const Field = ({ label, icon: Icon, children }) => (
  <div className="group/field">
    <label className={labelClass}>
      <span className="flex items-center gap-2">
        {Icon && <Icon className="w-3.5 h-3.5 text-accent/70" />}
        {label}
      </span>
    </label>
    {children}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    productInterest: '',
    occasion: '',
    budget: '',
    preferredContact: 'WhatsApp',
    enquiry: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productQuery = params.get('product');
    if (productQuery) {
      setFormData(prev => ({ ...prev, productInterest: productQuery }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `🛍️ *New Enquiry — The Kamala Silks Website*

*👤 Name:* ${formData.name}
*📞 Phone:* ${formData.phone || 'Not provided'}
*📧 Email:* ${formData.email || 'Not provided'}
*🏙️ City / Location:* ${formData.city || 'Not provided'}

*🛒 Product Interest:* ${formData.productInterest || 'Not specified'}
*🎉 Occasion:* ${formData.occasion || 'Not specified'}
*💰 Budget Range:* ${formData.budget || 'Not specified'}
*📬 Preferred Contact:* ${formData.preferredContact}

*💬 Message:*
${formData.enquiry || '(No message provided)'}`;

    const whatsappUrl = `https://wa.me/91${siteData.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', city: '',
        productInterest: '', occasion: '', budget: '',
        preferredContact: 'WhatsApp', enquiry: '',
      });
    }, 4000);
  };

  return (
    <div className="w-full">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch for enquiries and support" 
        bgImage="/images/contact-hero-bg.webp"
        badge="GET IN TOUCH WITH US"
        breadcrumb="Contact Us"
      />

      <section className="py-24 relative overflow-hidden bg-gray-50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: 'url("/images/texture.webp")' }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative group"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-colors duration-500 pointer-events-none" />

              <h2 className="text-3xl font-heading font-bold text-primary mb-1">Send an Enquiry</h2>
              <p className="text-secondary/60 font-sans text-sm mb-8">
                Fill the form and we'll connect with you directly on WhatsApp.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">Enquiry Sent!</h3>
                  <p className="text-secondary/70 font-sans">WhatsApp has opened with your details. We'll respond shortly!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Row 1: Name + City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full Name *" icon={User}>
                      <input
                        type="text" name="name" id="name"
                        value={formData.name} onChange={handleChange}
                        required placeholder="e.g. Priya Sharma"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="City / Location" icon={MapPin}>
                      <input
                        type="text" name="city" id="city"
                        value={formData.city} onChange={handleChange}
                        placeholder="e.g. Kolkata"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Email Address" icon={AtSign}>
                      <input
                        type="email" name="email" id="email"
                        value={formData.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone / WhatsApp *" icon={PhoneCall}>
                      <input
                        type="tel" name="phone" id="phone"
                        value={formData.phone} onChange={handleChange}
                        required placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  {/* Product Interest */}
                  <Field label="Product You're Interested In" icon={ShoppingBag}>
                    <select
                      name="productInterest" id="productInterest"
                      value={formData.productInterest} onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">-- Select a product type --</option>
                      <option>Matka Silk Saree</option>
                      <option>Tasar Silk Saree</option>
                      <option>Katha Stitch Saree</option>
                      <option>Khadi Saree</option>
                      <option>Cotton Saree</option>
                      <option>Blended Silk Saree</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </Field>

                  {/* Row 3: Occasion + Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Occasion" icon={Tag}>
                      <select
                        name="occasion" id="occasion"
                        value={formData.occasion} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">-- Select occasion --</option>
                        <option>Wedding / Bridal</option>
                        <option>Festival / Puja</option>
                        <option>Party / Celebration</option>
                        <option>Everyday / Casual</option>
                        <option>Gift</option>
                        <option>Other</option>
                      </select>
                    </Field>
                    <Field label="Budget Range" icon={Ruler}>
                      <select
                        name="budget" id="budget"
                        value={formData.budget} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">-- Select budget --</option>
                        <option>Under ₹2,000</option>
                        <option>₹2,000 – ₹5,000</option>
                        <option>₹5,000 – ₹10,000</option>
                        <option>₹10,000 – ₹20,000</option>
                        <option>Above ₹20,000</option>
                      </select>
                    </Field>
                  </div>

                  {/* Preferred Contact */}
                  <Field label="Preferred Way to Contact You" icon={PhoneCall}>
                    <div className="flex gap-3 flex-wrap">
                      {['WhatsApp', 'Phone Call', 'Email'].map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer text-sm font-medium transition-all ${
                            formData.preferredContact === opt
                              ? 'bg-primary text-white border-primary shadow-md'
                              : 'bg-gray-50 text-secondary border-gray-200 hover:border-accent/40'
                          }`}
                        >
                          <input
                            type="radio" name="preferredContact" value={opt}
                            checked={formData.preferredContact === opt}
                            onChange={handleChange}
                            className="hidden"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </Field>

                  {/* Message */}
                  <Field label="Additional Message" icon={MessageSquare}>
                    <textarea
                      name="enquiry" id="enquiry" rows="4"
                      value={formData.enquiry} onChange={handleChange}
                      placeholder="Tell us more — specific colour, design preference, quantity needed, etc."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-accent transition-all shadow-lg hover:shadow-accent/30 text-base hover:-translate-y-1 active:translate-y-0"
                  >
                    <Send className="w-5 h-5" />
                    Send Enquiry via WhatsApp
                  </button>

                  <p className="text-center text-xs text-secondary/40 font-sans">
                    Your details will be sent directly to our WhatsApp. We never share your information.
                  </p>
                </form>
              )}
            </motion.div>

            {/* ── Contact Info & Map ── */}
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
                    {
                      icon: Phone, title: "Phone",
                      content: (
                        <>
                          <a href={`tel:${siteData.contact.phone}`} className="hover:text-accent transition-colors">{siteData.contact.phone}</a>
                          <br />
                          <a href={`https://wa.me/91${siteData.contact.whatsapp}`} className="hover:text-accent transition-colors">WhatsApp: {siteData.contact.whatsapp}</a>
                        </>
                      )
                    },
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
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Kamala Silks Location Map"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700 relative z-0"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
