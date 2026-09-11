import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteData } from '../../data/siteData';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6 bg-white p-2 rounded inline-flex">
               <img src={siteData.company.logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {siteData.company.description}
            </p>
            <div className="flex gap-4">
              <a 
                href={siteData.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors" 
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a 
                href={siteData.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-accent transition-colors" 
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={siteData.social.youtube} className="text-gray-300 hover:text-accent transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 uppercase tracking-wider text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.path} className="text-gray-300 hover:text-white hover:underline transition-all">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 uppercase tracking-wider text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>
                  <a href={`tel:${siteData.contact.phone}`} className="hover:text-white block">{siteData.contact.phone}</a>
                  <a href={`https://wa.me/91${siteData.contact.whatsapp}`} className="hover:text-white block text-sm">WA: {siteData.contact.whatsapp}</a>
                </span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-white break-all">{siteData.contact.email}</a>
              </li>
              <li className="flex gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="leading-relaxed">{siteData.location.address}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 uppercase tracking-wider text-accent">Business Hours</h3>
            <ul className="space-y-3">
              {siteData.businessHours.map((hour, idx) => (
                <li key={idx} className="flex justify-between text-gray-300 border-b border-gray-700 pb-2">
                  <span>{hour.day}</span>
                  <span className={hour.hours.toLowerCase() === 'closed' ? 'text-accent' : ''}>{hour.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} {siteData.company.name}. Designed & Developed by{' '}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent hover:text-white transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
