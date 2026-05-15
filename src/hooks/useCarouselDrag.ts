import { useRef, useEffect, useCallback } from 'react';

export function useCarouselDrag(carouselRef: React.RefObject<HTMLDivElement | null>) {
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!carouselRef.current) return;
    isDown.current = true;
    carouselRef.current.classList.add('cursor-grabbing');
    carouselRef.current.classList.remove('cursor-grab');
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  }, [carouselRef]);

  const handleMouseLeave = useCallback(() => {
    isDown.current = false;
    if (carouselRef.current) {
      carouselRef.current.classList.remove('cursor-grabbing');
      carouselRef.current.classList.add('cursor-grab');
    }
  }, [carouselRef]);

  const handleMouseUp = useCallback(() => {
    isDown.current = false;
    if (carouselRef.current) {
      carouselRef.current.classList.remove('cursor-grabbing');
      carouselRef.current.classList.add('cursor-grab');
    }
  }, [carouselRef]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDown.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  }, [carouselRef]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [carouselRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove]);
}
