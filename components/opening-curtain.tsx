'use client';

import { useEffect, useState } from 'react';

export default function OpeningCurtain() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={'fixed inset-0 z-[100] grid place-items-center bg-[#c94b28] transition-transform duration-[1100ms] ease-[cubic-bezier(.77,0,.18,1)] ' + (done ? '-translate-y-full pointer-events-none' : 'translate-y-0')} aria-hidden={done}>
      <div className="absolute inset-x-0 bottom-[17%] mx-auto h-14 w-px bg-white/70" />
      <img className="w-[min(290px,55vw)] animate-bounce" src="/assets/logo.webp" alt="BCONS Central Park" width="800" height="314" />
    </div>
  );
}
