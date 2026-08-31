'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function SectionSnap() {
  useEffect(() => {
    let locked = false;
    let scrollTimer: number | undefined;
    let wheelTimer: number | undefined;
    let wheelDelta = 0;
    let ignoreScroll = false;
    let ignoreScrollTimer: number | undefined;
    let cooldownUntil = 0;
    let wheelActiveUntil = 0;
    let lastY = window.scrollY;
    const wheelScrollScale = 0.7;

    const snapToSection = (direction?: number) => {
      if (locked) return;
      const sections = [...document.querySelectorAll<HTMLElement>('[data-scroll-section]')];
      const currentY = window.scrollY;
      const travelDirection = direction ?? (currentY >= lastY ? 1 : -1);
      const tops = sections.map((section) => {
        const top = section.getBoundingClientRect().top + currentY;
        return section.dataset.snapAlign === 'center'
          ? top - Math.max(0, (window.innerHeight - section.offsetHeight) / 2)
          : top;
      });
      const targetTop = travelDirection > 0
        ? tops.find((top) => top > currentY + 60)
        : [...tops].reverse().find((top) => top < currentY - 60);

      lastY = currentY;
      if (targetTop === undefined) return;
      window.clearTimeout(scrollTimer);
      window.clearTimeout(wheelTimer);
      wheelDelta = 0;
      locked = true;
      gsap.to(window, {
        duration: 0.78,
        ease: 'power2.out',
        scrollTo: { y: targetTop, autoKill: false },
        onComplete: () => {
          lastY = window.scrollY;
          locked = false;
          ignoreScroll = true;
          cooldownUntil = performance.now() + 180;
          window.clearTimeout(ignoreScrollTimer);
          ignoreScrollTimer = window.setTimeout(() => { ignoreScroll = false; }, 700);
        },
        onInterrupt: () => { locked = false; cooldownUntil = performance.now() + 180; lastY = window.scrollY; },
      });
    };

    const onWheel = (event: WheelEvent) => {
      if (event.defaultPrevented) return;
      if (Math.abs(event.deltaY) < 2) return;
      if (ignoreScroll) {
        event.preventDefault();
        wheelDelta = 0;
        window.clearTimeout(wheelTimer);
        return;
      }
      if (performance.now() < cooldownUntil) {
        wheelDelta = 0;
        window.clearTimeout(wheelTimer);
        return;
      }
      if (locked) {
        event.preventDefault();
        wheelDelta = 0;
        window.clearTimeout(wheelTimer);
        return;
      }
      event.preventDefault();
      window.scrollBy({ top: event.deltaY * wheelScrollScale, left: 0, behavior: 'auto' });
      wheelActiveUntil = performance.now() + 280;
      wheelDelta += event.deltaY;
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        const direction = wheelDelta > 0 ? 1 : -1;
        wheelDelta = 0;
        snapToSection(direction);
      }, 180);
    };

    const onScroll = () => {
      if (locked || ignoreScroll || performance.now() < cooldownUntil || performance.now() < wheelActiveUntil) return;
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => snapToSection(), 150);
    };

    const onLightboxClose = () => {
      ignoreScroll = true;
      lastY = window.scrollY;
      window.clearTimeout(scrollTimer);
      window.clearTimeout(ignoreScrollTimer);
      ignoreScrollTimer = window.setTimeout(() => { ignoreScroll = false; lastY = window.scrollY; }, 900);
    };

    const onMenuNavigation = () => {
      ignoreScroll = true;
      lastY = window.scrollY;
      window.clearTimeout(scrollTimer);
      window.clearTimeout(ignoreScrollTimer);
      ignoreScrollTimer = window.setTimeout(() => { ignoreScroll = false; lastY = window.scrollY; }, 2400);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('lightbox-close', onLightboxClose);
    window.addEventListener('menu-navigation', onMenuNavigation);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('lightbox-close', onLightboxClose);
      window.removeEventListener('menu-navigation', onMenuNavigation);
      window.clearTimeout(scrollTimer);
      window.clearTimeout(wheelTimer);
      window.clearTimeout(ignoreScrollTimer);
    };
  }, []);

  return null;
}
