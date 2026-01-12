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
            className="flex items-start gap-6"
          >
            <span className="text-7xl lg:text-9xl font-black text-[#00BFB3]">
              {aboutData.partnersCount}
            </span>
            <div className="pt-4">
              <h3
                className="text-xl lg:text-2xl font-bold tracking-[0.3em] text-gray-400 mb-4 font-poppins-bold"
              >
                {aboutData.partnersTitle.split(' ').map((word, i) => (
                  <span key={i} className="block">
                    {word.split('').join(' ')}
                  </span>
                ))}
              </h3>
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

        {/* Logo Marquee */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex gap-12 lg:gap-20 items-center"
          >
            {doubledLogos.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 lg:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
