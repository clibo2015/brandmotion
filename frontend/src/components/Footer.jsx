import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Create
              <span className="block text-[#00BFB3]">Something Amazing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Ready to transform your brand? Get in touch with us and let's bring your vision to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#00BFB3] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#00a89d] transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-2xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-6">
              Ready to start your project? Send us a message and we'll get back to you soon.
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-700 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFB3]"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-700 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFB3]"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-700 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFB3]"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-700 border-0 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BFB3] resize-none"
                required
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#00BFB3] text-gray-900 py-3 rounded-lg font-semibold hover:bg-[#00a89d] transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Footer Links */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8H32L24 20L32 32H8V8Z" fill="#00BFB3" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-wider text-white">BRAND</span>
                <span className="text-sm font-bold tracking-wider text-white">SURGE</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Powering brands forward with creative excellence since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-[#00BFB3] transition-colors inline-flex items-center gap-2"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Logo Design', 'Marketing', 'Digital Printing'].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-[#00BFB3] transition-colors inline-flex items-center gap-2"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#00BFB3] flex-shrink-0 mt-1" />
                <span>123 Creative Street, Design District, South Africa</span>
              </li>
              <li>
                <a href="mailto:hello@brandsurge.co.za" className="flex items-center gap-3 text-gray-400 hover:text-[#00BFB3] transition-colors">
                  <Mail className="w-5 h-5 text-[#00BFB3]" />
                  hello@brandsurge.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27123456789" className="flex items-center gap-3 text-gray-400 hover:text-[#00BFB3] transition-colors">
                  <Phone className="w-5 h-5 text-[#00BFB3]" />
                  +27 12 345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Brandsurge. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="/privacy-policy" className="text-gray-500 hover:text-[#00BFB3] transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a href="/terms-of-service" className="text-gray-500 hover:text-[#00BFB3] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-gray-400 hover:text-[#00BFB3] transition-colors text-sm"
          >
            Back to Top
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
