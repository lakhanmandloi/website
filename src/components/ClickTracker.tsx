'use client';

import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

// Sends a GA4 event for clicks on elements with data-track-event,
// using data-track-label as link_label (same convention as tafttech.ai).
export default function ClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>('[data-track-event]');
      const eventName = element?.dataset.trackEvent;
      if (!element || !eventName) return;
      sendGAEvent('event', eventName, {
        link_label: element.dataset.trackLabel,
        link_url: element.getAttribute('href') ?? undefined
      });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}
