import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mock';
import { Palette, Megaphone, Printer, ArrowRight } from 'lucide-react';

const iconMap = {
  'shape-1': Palette,
  'shape-2': Megaphone,
  'shape-4': Printer
};

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-900 transition-all duration-500 cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-[#00BFB3]/10 flex items-center justify-center mb-6 group-hover:bg-[#00BFB3] transition-colors duration-300"
                >
                  <Icon className="w-8 h-8 text-[#00BFB3] group-hover:text-white transition-colors duration-300" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-400 mb-6 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Read More Link */}
                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-2 text-gray-900 group-hover:text-[#00BFB3] font-semibold transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
