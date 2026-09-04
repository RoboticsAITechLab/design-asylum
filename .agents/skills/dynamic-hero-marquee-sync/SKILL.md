---
name: dynamic-hero-marquee-sync
description: Production pattern for synchronizing infinite client marquee tickers with dynamic multi-theme hero visual carousels, zero-flicker pre-stacked crossfading, countdown progress bars, and balanced 3D card perspective physics.
---

# ⚡ Dynamic Hero & Marquee Synchronization System

This skill captures the production architecture for high-end digital agency portfolios where **scrolling client logos (ticker/marquee) directly control and synchronize with a cinematic multi-theme hero visual composition**, including zero-flicker pre-stacked crossfading and symmetrical 3D card physics.

---

## 1. Core Architecture Pattern

### State Orchestration via React Context (`HeroContext.tsx`)
```tsx
'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

export interface HeroSlide {
  id: string;
  clientName: string;
  category: string;
  headline: string;
  themeColor: string;
  glowColor: string;
  accentColor: string;
  isDarkTheme: boolean;
  image: string;
  metric: string;
  metricLabel: string;
}

interface HeroContextType {
  currentSlide: HeroSlide;
  currentSlideIndex: number;
  allSlides: HeroSlide[];
  setSlideById: (id: string) => void;
  setSlideIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isAutoPlaying: boolean;
  toggleAutoPlay: () => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);
const AUTO_PLAY_INTERVAL = 3800; // 3.8s optimal cadence

export const HeroProvider: React.FC<{ slides: HeroSlide[]; children: React.ReactNode }> = ({ slides, children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const setSlideById = useCallback((id: string) => {
    const normalized = id.toLowerCase().replace(/[^a-z0-9]/g, '');
    const foundIndex = slides.findIndex(
      (s) => s.id.toLowerCase().replace(/[^a-z0-9]/g, '').includes(normalized) ||
             s.clientName.toLowerCase().replace(/[^a-z0-9]/g, '').includes(normalized)
    );
    if (foundIndex !== -1) setCurrentSlideIndex(foundIndex);
  }, [slides]);

  const setSlideIndex = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) setCurrentSlideIndex(index);
  }, [slides.length]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  // Continuous auto-rotation timer that resets whenever slide index changes
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
        currentSlide: slides[currentSlideIndex],
        currentSlideIndex,
        allSlides: slides,
        setSlideById,
        setSlideIndex,
        nextSlide,
        prevSlide,
        isAutoPlaying,
        toggleAutoPlay,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const context = useContext(HeroContext);
  if (!context) throw new Error('useHero must be used within a HeroProvider');
  return context;
};
```

---

## 2. Zero-Flicker Pre-Stacked Image Crossfade Engine

**Crucial Lesson**: Dynamically updating an `<img>` `src` or unmounting the component causes white flashes and network lag.
**Solution**: Pre-render all slides in absolute stacked position with CSS opacity and scale transforms:

```tsx
<div
  style={{
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '24px',
    maskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
  }}
>
  {allSlides.map((slide, idx) => {
    const isActive = idx === currentSlideIndex;

    return (
      <div
        key={slide.id}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'scale(1)' : 'scale(1.04)',
          transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: isActive ? 'auto' : 'none',
        }}
      >
        <img
          src={slide.image}
          alt={slide.clientName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />

        {/* Dynamic Atmospheric Tint Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: slide.isDarkTheme
              ? `radial-gradient(circle at 50% 25%, ${slide.glowColor} 0%, transparent 60%), linear-gradient(to top, rgba(7, 7, 9, 0.8) 0%, transparent 50%)`
              : `radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.4) 0%, transparent 60%), linear-gradient(to top, rgba(235, 226, 215, 0.7) 0%, transparent 50%)`,
            mixBlendMode: slide.isDarkTheme ? 'screen' : 'overlay',
            pointerEvents: 'none',
          }}
        />
      </div>
    );
  })}
</div>
```

---

## 3. Symmetrical 3D Perspective Card Physics

To avoid visual asymmetry (one card looking bigger or vertically displaced compared to the other):
- Use **exact shared dimensions** on both left & right cards (`clamp(180px, 22vw, 270px)` × `clamp(260px, 34vw, 400px)`).
- Align both cards with **identical vertical tops** (`top: 20%`).
- Invert Y-rotation angles symmetrically (`+22deg` on Left, `-22deg` on Right) with mouse inertia:

```tsx
// Left Card
transform: `perspective(1000px) rotateY(${22 + mousePos.x * 0.4}deg) rotateX(${-6 - mousePos.y * 0.3}deg) translateZ(30px)`

// Right Card
transform: `perspective(1000px) rotateY(${-22 + mousePos.x * 0.4}deg) rotateX(${-6 - mousePos.y * 0.3}deg) translateZ(30px)`
```

---

## 4. Marquee Synchronization Trigger

Every logo in the infinite marquee track listens to hover and click to drive the hero slide:

```tsx
{marqueeItems.map((client, index) => {
  const isActive = currentSlide.clientName.toLowerCase().includes(client.name.toLowerCase());

  return (
    <div
      key={`${client.id}-${index}`}
      onClick={() => setSlideById(client.name)}
      onMouseEnter={() => setSlideById(client.name)}
      style={{
        cursor: 'pointer',
        opacity: isActive ? 1 : 0.65,
        transform: isActive ? 'scale(1.08)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {isActive && <span className="active-dot" style={{ backgroundColor: currentSlide.themeColor }} />}
      <span style={{ borderBottom: isActive ? `2px solid ${currentSlide.themeColor}` : 'none' }}>
        {client.name}
      </span>
    </div>
  );
})}
```

---

## 5. Uniform Grid Card Equalization Rule

For 2-column agency portfolios (e.g. MAGPPIE, AURA, PUMA):
- **Avoid artificial staggered offsets** unless explicitly required for a masonry layout.
- Use a **fixed clamp height**: `height: 'clamp(340px, 38vw, 460px)'`.
- Ensure both columns share identical `overflow: hidden` and `border-radius: 16px` for pixel-level horizontal alignment.
