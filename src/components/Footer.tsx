import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-2 group">
              <Activity className="h-8 w-8 text-brand transition-transform group-hover:scale-110" />
              <span className="font-bold text-2xl text-white tracking-tight">Live Right Chiro</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Empowering your health journey through personalized chiropractic care, holistic wellness, and specialized recovery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center">
            <div className="space-y-6">
              <h3 className="text-white font-bold uppercase tracking-wider text-sm">Services</h3>
              <ul className="space-y-4 text-base">
                <li><Link to="/" className="hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Back Pain</Link></li>
                <li><Link to="/" className="hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Neck Pain</Link></li>
                <li><Link to="/" className="hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Postural Care</Link></li>
                <li><Link to="/" className="hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Pediatric</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 text-brand flex-shrink-0" />
                <span className="text-lg">1500 Benson Road S Suite 202, Renton, WA 98055</span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 text-brand flex-shrink-0" />
                <a href="tel:+12067950126" className="text-lg hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-900 rounded">(206) 795-0126</a>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 text-brand flex-shrink-0" />
                <a href="mailto:info@liverightchiro.com" className="text-lg hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-900 rounded">info@liverightchiro.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Compliance Section */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-base font-medium">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-gray-900 rounded px-2"
              aria-label="View our Privacy Policy"
            >
              Privacy Policy
            </Link>

            <div className="hidden md:block w-px h-6 bg-white/20" aria-hidden="true" />

            <Link
              to="/health-data-privacy"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-gray-900 rounded px-2"
              aria-label="View our Washington State Consumer Health Data Privacy Policy"
            >
              Consumer Health Data Privacy Policy
            </Link>

            <div className="hidden md:block w-px h-6 bg-white/20" aria-hidden="true" />

            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-gray-900 rounded px-2"
              aria-label="View our Terms of Service"
            >
              Terms of Service
            </Link>
          </div>

          <div className="text-gray-500 text-sm md:text-base flex flex-col md:flex-row items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Live Right Chiro.</span>
            <span className="hidden md:inline">All Rights Reserved.</span>
            <span className="md:ml-4 flex items-center gap-1.5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              Built for Wellness
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
