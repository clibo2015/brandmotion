import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { benefits } from '../data/mock';

const Benefits = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="bg-[#f5f5f5] relative">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-4"
        >
          Our Key
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-7xl text-gray-900"
        >
          <span
            className="block text-transparent hero-title-outline"
          >
            OUR KEY
          </span>
          <span className="block font-akira">
            BENEFITS
          </span>
        </motion.h2>
      </div>

      {/* Benefits Cards */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.id} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center mb-16 lg:mb-24 last:mb-0`}
    >
      {/* Image */}
      <motion.div
        style={{ y }}
        className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-2xl"
      >
        <motion.img
          src={benefit.image}
          alt={benefit.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Content */}
      <div className="w-full lg:w-1/2 bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-8xl font-black text-transparent"
          style={{ WebkitTextStroke: '1px #e0e0e0' }}
        >
          {benefit.number}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl lg:text-3xl font-poppins-black text-gray-900 mt-4 mb-4"
        >
          {benefit.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 leading-relaxed"
        >
          {benefit.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Benefits;
