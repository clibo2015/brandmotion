// Performance monitoring utilities

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track Core Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });
  }
};

// Image lazy loading observer
export const createImageObserver = () => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
  }
  return null;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero background video - DISABLED due to 'unsupported as value' error
  // const videoLink = document.createElement('link');
  // videoLink.rel = 'preload';
  // videoLink.href = '/hero-background.mp4';
  // videoLink.as = 'video';
  // videoLink.type = 'video/mp4';
  // document.head.appendChild(videoLink);

  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.cdnfonts.com/s/47955/Akira%20Expanded%20Demo.woff';
  fontLink.as = 'font';
  fontLink.type = 'font/woff';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
};

// Service Worker registration for caching - DISABLED
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    // Unregister any existing service workers
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
        console.log('Service Worker unregistered');
      }
    });
  }
};