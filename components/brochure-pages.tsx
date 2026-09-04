'use client';

import { useEffect, useRef } from 'react';

const pages = Array.from({ length: 30 }, (_, index) => `/assets/brochure-pages/page-${String(index + 1).padStart(2, '0')}.webp`);

export default function BrochurePages() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>('[data-brochure-page]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} className="mx-auto grid max-w-none gap-y-7 md:gap-y-12">
    {pages.map((src, index) => <figure key={src} data-brochure-page className="group brochure-page relative m-0 overflow-hidden bg-white">
      <img src={src} alt={`Brochure BCONS Central Park - trang ${index + 1}`} className="block h-auto w-full" loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
      <figcaption className="absolute bottom-3 right-3 rounded-full bg-[#10251c]/75 px-3 py-1.5 text-[10px] tracking-[.14em] text-white/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100">{String(index + 1).padStart(2, '0')} / {pages.length}</figcaption>
    </figure>)}
  </div>;
}
