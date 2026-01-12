import React from 'react';
import { motion } from 'framer-motion';
import { awards } from '../data/mock';

const Awards = () => {
  // Double awards for infinite scroll
  const doubledAwards = [...awards, ...awards];

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-4"
            >
              Notable Awards
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-7xl"
            >
              <span
                className="block text-transparent"
                style={{
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.5)',
                  fontFamily: "'Akira Expanded', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                NOTABLE
              </span>
              <span className="block font-akira text-white">
                AWARDS
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="text-3xl lg:text-5xl font-poppins text-gray-400"
            >
              OUR <span className="block font-poppins-black text-white">SUCCESS</span>
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Awards Marquee */}
      <div className="relative overflow-hidden py-8">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="flex gap-6 lg:gap-8"
        >
          {doubledAwards.map((award, index) => (
            <motion.div
              key={`${award.id}-${index}`}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[280px] lg:w-[350px] group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800">
                <motion.img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-[200px] lg:h-[250px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Forward Blue Overlay */}
                <div className="absolute inset-0 bg-[#00B2B3]/20 group-hover:bg-[#00B2B3]/10 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#00BFB3] transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    / {award.year}, {award.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
