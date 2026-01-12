import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setShowContent(false);
    setTimeout(() => {
      setIsVideoPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 800); // Wait for content to move away
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300); // Small delay before content comes back
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoPlaying(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

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
    }),
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.8 }
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.8, duration: 1 }
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden pt-24 lg:pt-32">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatePresence mode="wait">
          {showContent && (
            <motion.div
              key="hero-content"
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-20"
            >
              {/* Main Title */}
              <div className="text-center mb-8 lg:mb-12">
                <motion.h1
                  custom={0}
                  variants={textVariants}
                  className="font-akira text-4xl md:text-6xl lg:text-[100px] tracking-wider text-white"
                  style={{ 
                    color: '#1B3541',
                    fontFamily: 'Akira Expanded, sans-serif',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  {heroData.title1}
                </motion.h1>
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="font-akira text-4xl md:text-6xl lg:text-[100px] tracking-wide -mt-1 lg:-mt-4 text-white"
                  style={{ 
                    color: '#00B2B3',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  {heroData.title2}
                </motion.h1>
              </div>

              {/* Stats and Play Button */}
              <motion.div
                variants={statsVariants}
                className="flex items-center justify-center gap-8 lg:gap-16 mb-8"
              >
                {/* Since Badge */}
                <div className="text-center">
                  <p className="text-xs font-bold tracking-[0.3em] text-white">{heroData.since.split(' ')[0]}</p>
                  <p className="text-2xl lg:text-3xl font-black text-white">{heroData.since.split(' ')[1]}</p>
                </div>

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayClick}
                  className="relative w-20 h-20 lg:w-28 lg:h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group cursor-pointer border border-white/30"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#00B2B3]/30"
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
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 lg:w-32 lg:h-32 border-2 border-white/30 rounded-full" />
                </motion.button>

                {/* Rating Badge */}
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-black text-white">A+</p>
                  <p className="text-xs font-bold tracking-[0.2em] text-white">RATING</p>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                variants={imageVariants}
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Introduction Video */}
        <AnimatePresence>
          {isVideoPlaying && (
            <motion.div
              key="intro-video"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 z-30 flex items-center justify-center p-4 pt-20"
            >
              <div className="relative w-full max-w-6xl aspect-video">
                <button
                  onClick={handleCloseVideo}
                  className="absolute -top-12 right-0 z-40 text-white hover:text-[#00B2B3] transition-colors"
                >
                  <X size={32} />
                </button>
                <video
                  ref={videoRef}
                  onEnded={handleVideoEnd}
                  className="w-full h-full rounded-lg shadow-2xl"
                  controls
                >
                  <source src="/introduction1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;