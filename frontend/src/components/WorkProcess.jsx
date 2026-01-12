import React from 'react';
import { motion } from 'framer-motion';
import { workProcess } from '../data/mock';

const WorkProcess = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-4"
          >
            Steps We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold"
          >
            Work Process
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {workProcess.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Step Number */}
              <motion.span
                className="text-8xl lg:text-9xl font-black text-transparent opacity-20"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                whileHover={{ scale: 1.05 }}
              >
                {item.step}
              </motion.span>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-[#00BFB3] transition-colors duration-300">
                  {item.title}
                </h3>
                {index === 2 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-3 bg-[#00BFB3] text-gray-900 font-semibold text-sm tracking-wider rounded-full hover:bg-[#00a89d] transition-colors"
                  >
                    Let's Start
                  </motion.button>
                )}
              </div>

              {/* Connecting Line */}
              {index < workProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 right-0 w-full h-px bg-gray-700 transform translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-gray-400 text-lg leading-relaxed max-w-3xl"
        >
          Our streamlined process ensures every project receives the attention and expertise it deserves. From initial concept to final delivery, we maintain clear communication and exceptional standards throughout.
        </motion.p>
      </div>
    </section>
  );
};

export default WorkProcess;
