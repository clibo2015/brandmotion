import React from 'react';
import { motion } from 'framer-motion';
import { partnerLogos, aboutData } from '../data/mock';

const Partners = () => {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-8"
          >
            <span className="text-7xl lg:text-9xl font-black text-[#00BFB3]">
              {aboutData.partnersCount}
            </span>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                {aboutData.partnersTitle}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Clients We Work With
              </p>
            </div>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {aboutData.description}
            </p>
            <motion.a
              href="#about"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#00BFB3] transition-colors"
            >
              Read More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Client Names Marquee */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex gap-8 lg:gap-12 items-center"
          >
            {doubledLogos.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                whileHover={{ scale: 1.05, opacity: 1 }}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-gray-600 hover:text-[#00BFB3] font-medium text-sm lg:text-base whitespace-nowrap transition-colors duration-300">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
