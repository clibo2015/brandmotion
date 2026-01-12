import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden pt-24 lg:pt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Title */}
        <div className="text-center mb-8 lg:mb-12">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-title-outline text-4xl md:text-6xl lg:text-[100px] tracking-wider text-transparent"
          >
            {heroData.title1}
          </motion.h1>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-akira text-4xl md:text-6xl lg:text-[100px] tracking-wide text-gray-900 -mt-1 lg:-mt-4"
          >
            {heroData.title2}
          </motion.h1>
        </div>

        {/* Stats and Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-center gap-8 lg:gap-16 mb-8"
        >
          {/* Since Badge */}
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-gray-900">{heroData.since.split(' ')[0]}</p>
            <p className="text-2xl lg:text-3xl font-black text-gray-900">{heroData.since.split(' ')[1]}</p>
          </div>

          {/* Play Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoOpen(true)}
            className="relative w-20 h-20 lg:w-28 lg:h-28 bg-gray-900 rounded-full flex items-center justify-center group cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gray-900"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" fill="white" />
            {/* Decorative border */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 lg:w-32 lg:h-32 border-2 border-gray-300 rounded-full" />
          </motion.button>

          {/* Rating Badge */}
          <div className="text-center">
            <p className="text-2xl lg:text-3xl font-black text-gray-900">A+</p>
            <p className="text-xs font-bold tracking-[0.2em] text-gray-900">RATING</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative w-full aspect-[16/7] overflow-hidden rounded-t-3xl"
        >
          <motion.img
            src={heroData.heroImage}
            alt="Creative Agency Hero"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#00BFB3] transition-colors"
            >
              <X size={32} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
