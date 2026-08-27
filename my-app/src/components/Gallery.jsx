import React, { useState, useEffect, useCallback } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/gallery-img-1.jpeg';
import img2 from '../assets/gallery-img-2.jpeg';
import img3 from '../assets/gallery-img-3.jpeg';
import img4 from '../assets/gallery-img-4.jpeg';
import img5 from '../assets/gallery-img-5.jpeg';
import img6 from '../assets/gallery-img-6.jpeg';
import img7 from '../assets/gallery-img-7.jpeg';
import img8 from '../assets/gallery-img-8.jpeg';
import img9 from '../assets/gallery-img-9.jpeg';
import img10 from '../assets/gallery-img-10.jpeg';
import img11 from '../assets/gallery-img-11.jpeg';
import img12 from '../assets/gallery-img-12.jpeg';
import img13 from '../assets/gallery-img-13.jpeg';
import img14 from '../assets/gallery-img-14.jpeg';
import img15 from '../assets/gallery-img-15.jpeg';
import img16 from '../assets/gallery-img-16.jpeg';
import img17 from '../assets/gallery-img-17.jpeg';
import img18 from '../assets/gallery-img-18.jpeg';

import vid1 from '../assets/gallery-vid-1.mp4';
import vid2 from '../assets/gallery-vid-2.mp4';
import vid3 from '../assets/gallery-vid-3.mp4';
import vid4 from '../assets/gallery-vid-4.mp4';
import vid5 from '../assets/gallery-vid-5.mp4';
import vid6 from '../assets/gallery-vid-6.mp4';
import vid7 from '../assets/gallery-vid-7.mp4';
import vid8 from '../assets/gallery-vid-8.mp4';
import vid9 from '../assets/gallery-vid-9.mp4';
import vid10 from '../assets/gallery-vid-10.mp4';
import vid11 from '../assets/gallery-vid-11.mp4';
import vid12 from '../assets/gallery-vid-12.mp4';

export default function Gallery() {
  const allMedia = [
    { type: 'image', url: img12, alt: "Premium Detailing 12", category: 'images' },
    { type: 'image', url: img5, alt: "Premium Detailing 5", category: 'images' },
    { type: 'image', url: img1, alt: "Premium Detailing 1", category: 'images' },
    { type: 'image', url: img8, alt: "Premium Detailing 8", category: 'images' },
    { type: 'image', url: img11, alt: "Premium Detailing 11", category: 'images' },
    { type: 'image', url: img6, alt: "Premium Detailing 6", category: 'images' },
    { type: 'image', url: img9, alt: "Premium Detailing 9", category: 'images' },
    { type: 'image', url: img7, alt: "Premium Detailing 7", category: 'images' },
    { type: 'image', url: img13, alt: "Premium Detailing 13", category: 'images' },
    { type: 'image', url: img14, alt: "Premium Detailing 14", category: 'images' },
    { type: 'image', url: img15, alt: "Premium Detailing 15", category: 'images' },
    { type: 'image', url: img16, alt: "Premium Detailing 16", category: 'images' },
    { type: 'image', url: img17, alt: "Premium Detailing 17", category: 'images' },
    { type: 'image', url: img18, alt: "Premium Detailing 18", category: 'images' },

    { type: 'video', url: vid1, alt: "Detailing Video 1", category: 'videos' },
    { type: 'video', url: vid3, alt: "Detailing Video 3", category: 'videos' },
    { type: 'video', url: vid2, alt: "Detailing Video 2", category: 'videos' },
    { type: 'video', url: vid4, alt: "Detailing Video 4", category: 'videos' },
    { type: 'video', url: vid5, alt: "Detailing Video 5", category: 'videos' },
    { type: 'video', url: vid6, alt: "Detailing Video 6", category: 'videos' },
    { type: 'video', url: vid7, alt: "Detailing Video 7", category: 'videos' },
    { type: 'video', url: vid8, alt: "Detailing Video 8", category: 'videos' },
    { type: 'video', url: vid9, alt: "Detailing Video 9", category: 'videos' },
    { type: 'video', url: vid10, alt: "Detailing Video 10", category: 'videos' },
    { type: 'video', url: vid11, alt: "Detailing Video 11", category: 'videos' },
    { type: 'video', url: vid12, alt: "Detailing Video 12", category: 'videos' },

    { type: 'image', url: img10, alt: "Premium Detailing 10", category: 'images' },
    { type: 'image', url: img2, alt: "Premium Detailing 2", category: 'images' },
    { type: 'image', url: img3, alt: "Premium Detailing 3", category: 'images' },
    { type: 'image', url: img4, alt: "Premium Bike Detailing", category: 'images' },
  ];

  const [filter, setFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(10);
  const [isArrowHovered, setIsArrowHovered] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const filteredMedia = allMedia.filter(
    (item) => filter === 'all' || item.category === filter
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerSlide(4); // Mobile: 2x2
      else if (window.innerWidth < 1024) setItemsPerSlide(6); // Tablet: 3x2
      else setItemsPerSlide(10); // Desktop: 5x2
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Chunk media into slides
  const slides = [];
  for (let i = 0; i < filteredMedia.length; i += itemsPerSlide) {
    slides.push(filteredMedia.slice(i, i + itemsPerSlide));
  }

  // Reset current index when filter or slide size changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter, itemsPerSlide]);

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-slide
  useEffect(() => {
    if (selectedMedia || slides.length <= 1 || isArrowHovered) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide, selectedMedia, slides.length, isArrowHovered]);

  // Touch handlers for swipe
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || slides.length <= 1) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Lightbox handlers
  const openLightbox = (globalIndex) => {
    setLightboxIndex(globalIndex);
    setSelectedMedia(filteredMedia[globalIndex]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const showNextLightbox = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = (lightboxIndex + 1) % filteredMedia.length;
    setLightboxIndex(nextIndex);
    setSelectedMedia(filteredMedia[nextIndex]);
  };

  const showPrevLightbox = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = (lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setLightboxIndex(prevIndex);
    setSelectedMedia(filteredMedia[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && selectedMedia) showNextLightbox();
      if (e.key === 'ArrowLeft' && selectedMedia) showPrevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, lightboxIndex]);

  return (
    <section className="bg-white py-16 md:py-24" id="gallery">
      <div className="container-layout text-center">

        {/* Gallery Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 font-outfit">
          Our <span className="text-[var(--color-brand-red)]">Gallery</span>
        </h2>
        <p className="text-gray-500 text-sm font-medium mb-10 max-w-md mx-auto">
          Explore our collection of fully detailed, ceramic-coated, and restored luxury vehicles.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 flex-wrap">
          {['all', 'images', 'videos'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-300 border cursor-pointer ${filter === cat
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Row Carousel Wrapper */}
        <div className="relative px-2 sm:px-12 group/carousel">
          {/* Navigation Arrow Left */}
          {slides.length > 1 && (
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsArrowHovered(true)}
              onMouseLeave={() => setIsArrowHovered(false)}
              aria-label="Previous slide"
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center shadow-lg transition-all duration-350 cursor-pointer opacity-80 md:opacity-0 md:group-hover/carousel:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Visible Slider Window */}
          <div
            className="overflow-hidden w-full touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
              style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
            >
              {slides.map((slideChunk, slideIdx) => (
                <div
                  key={slideIdx}
                  className="w-full shrink-0 px-1 sm:px-2"
                >
                  {/* Grid for the current slide */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    {slideChunk.map((item, localIdx) => {
                      const globalIndex = (slideIdx * itemsPerSlide) + localIdx;
                      return (
                        <div
                          key={globalIndex}
                          onClick={() => openLightbox(globalIndex)}
                          className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-square cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 transform"
                        >
                          {item.type === 'video' ? (
                            <>
                              <video
                                src={item.url}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                autoPlay
                                muted
                                playsInline
                                loop
                              />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
                                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white border border-white/40 shadow-sm">
                                  <Play size={20} className="ml-1" />
                                </div>
                              </div>
                            </>
                          ) : (
                            <img
                              src={item.url}
                              alt={item.alt}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left">
                            <span className="text-white text-xs font-bold truncate block w-full">{item.alt}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow Right */}
          {slides.length > 1 && (
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsArrowHovered(true)}
              onMouseLeave={() => setIsArrowHovered(false)}
              aria-label="Next slide"
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center shadow-lg transition-all duration-350 cursor-pointer opacity-80 md:opacity-0 md:group-hover/carousel:opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Carousel Indicators */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === idx ? 'bg-[var(--color-brand-red)] w-6' : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                  }`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm" onClick={closeLightbox}>

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110] cursor-pointer"
            >
              <X size={24} />
            </button>

            <button
              onClick={showPrevLightbox}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110] cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>

            <div
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.url}
                  className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
                  autoPlay
                  controls
                  playsInline
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
                />
              )}
            </div>

            <button
              onClick={showNextLightbox}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110] cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
              {lightboxIndex + 1} / {filteredMedia.length}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
