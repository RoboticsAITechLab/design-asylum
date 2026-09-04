'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { HERO_SLIDES, HeroSlide } from '@/data/heroSlides';

interface HeroContextType {
  currentSlide: HeroSlide;
  currentSlideIndex: number;
  allSlides: HeroSlide[];
  setSlideById: (id: string) => void;
  setSlideIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isAutoPlaying: boolean;
  setIsAutoPlaying: (val: boolean) => void;
  toggleAutoPlay: () => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

const AUTO_PLAY_INTERVAL = 3800; // 3.8 seconds per slide for dynamic, cinematic pacing

export const HeroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const setSlideById = useCallback((id: string) => {
    const normalized = id.toLowerCase().replace(/[^a-z0-9]/g, '');
    const foundIndex = HERO_SLIDES.findIndex(
      (s) => s.id.toLowerCase().replace(/[^a-z0-9]/g, '').includes(normalized) ||
             s.clientName.toLowerCase().replace(/[^a-z0-9]/g, '').includes(normalized)
    );
    if (foundIndex !== -1) {
      setCurrentSlideIndex(foundIndex);
    }
  }, []);

  const setSlideIndex = useCallback((index: number) => {
    if (index >= 0 && index < HERO_SLIDES.length) {
      setCurrentSlideIndex(index);
    }
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  // Continuous auto-rotation timer that resets cleanly whenever slide changes
  useEffect(() => {
    if (!isAutoPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, nextSlide, currentSlideIndex]);

  return (
    <HeroContext.Provider
      value={{
        currentSlide: HERO_SLIDES[currentSlideIndex],
        currentSlideIndex,
        allSlides: HERO_SLIDES,
        setSlideById,
        setSlideIndex,
        nextSlide,
        prevSlide,
        isAutoPlaying,
        setIsAutoPlaying,
        toggleAutoPlay,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error('useHero must be used within a HeroProvider');
  }
  return context;
};
