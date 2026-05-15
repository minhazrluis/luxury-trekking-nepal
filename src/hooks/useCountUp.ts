import { useEffect, useRef } from 'react';

function formatNumber(num: number, decimals: number): string {
  if (decimals > 0) {
    return num.toFixed(decimals);
  }
  return num.toLocaleString();
}

function easeOutQuad(t: number): number {
  return 1 - (1 - t) * (1 - t);
}

export function useCountUp(
  selector: string,
  duration = 2000,
  staggerDelay = 200
) {
  const triggeredRef = useRef(false);

  useEffect(() => {
    const counters = document.querySelectorAll(selector);
    if (!counters.length) return;

    const parent = counters[0].closest('section');
    if (!parent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggeredRef.current) {
            triggeredRef.current = true;
            counters.forEach((counter, i) => {
              const el = counter as HTMLElement;
              const target = parseFloat(el.dataset.target || '0');
              const suffix = el.dataset.suffix || '';
              const decimals = parseInt(el.dataset.decimal || '0');

              setTimeout(() => {
                const startTime = performance.now();
                function update(currentTime: number) {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const eased = easeOutQuad(progress);
                  const current = eased * target;
                  el.textContent = formatNumber(current, decimals) + suffix;
                  if (progress < 1) {
                    requestAnimationFrame(update);
                  } else {
                    el.textContent = formatNumber(target, decimals) + suffix;
                  }
                }
                requestAnimationFrame(update);
              }, i * staggerDelay);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(parent);
    return () => observer.disconnect();
  }, [selector, duration, staggerDelay]);
}
