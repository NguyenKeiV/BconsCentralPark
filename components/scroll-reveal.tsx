'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = element.querySelectorAll<HTMLElement>('[data-reveal]');
    const select = (name: string) => element.querySelectorAll<HTMLElement>(`[data-reveal~="${name}"]`);
    const context = gsap.context(() => {
      const play = () => {
        const timeline = gsap.timeline();
        if (select('leaf').length) timeline.to(select('leaf'), { opacity: 0.25, duration: 1.4, ease: 'power2.out' });
        if (select('eyebrow').length) timeline.to(select('eyebrow'), { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=1.1');
        if (select('title').length) timeline.to(select('title'), { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.45');
        if (select('details').length) timeline.to(select('details'), { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.65');
        if (select('row').length) timeline.to(select('row'), { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power2.out' }, '-=0.5');
      };

      const reset = () => { gsap.set(targets, { clearProps: 'all' }); };
      if (select('leaf').length) gsap.set(select('leaf'), { opacity: 0 });
      if (select('eyebrow').length) gsap.set(select('eyebrow'), { x: -28, opacity: 0 });
      if (select('title').length) gsap.set(select('title'), { x: -64, opacity: 0 });
      if (select('details').length) gsap.set(select('details'), { x: 60, opacity: 0 });
      if (select('row').length) gsap.set(select('row'), { y: 12, opacity: 0 });

      ScrollTrigger.create({
        trigger: element,
        start: 'top 82%',
        end: 'bottom 18%',
        onEnter: play,
        onEnterBack: play,
        onLeave: reset,
        onLeaveBack: reset,
      });
    }, element);

    return () => context.revert();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
