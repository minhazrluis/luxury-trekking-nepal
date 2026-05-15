import { useEffect } from 'react';

export function useScrollReveal(selector = '.reveal') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
