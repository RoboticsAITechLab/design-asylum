'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Smooth easeOutExpo curve
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elRef}>
      {count}
      {suffix}
    </span>
  );
};
