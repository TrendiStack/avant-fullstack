import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useLenisSmoothscroll from '../hooks/useLenisSmoothscroll';

const ScrollToTop = () => {
  const [pop, setPop] = useState(false);
  const { pathname } = useLocation();
  const lastPathname = useRef(pathname);
  const isPathnameChanged = pathname !== lastPathname.current;
  const lenis = useLenisSmoothscroll();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const raf = time => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [isPathnameChanged, lenis]);

  useEffect(() => {
    if (!pop) {
      setTimeout(() => {
        handleScrollToTop();
      }, 500);
    } else if (isPathnameChanged && pop) {
      setPop(false);
    } else {
      setPop(true);
    }
  }, [pathname, lastPathname, pop, isPathnameChanged]);

  useEffect(() => {
    window.onpopstate = () => {
      setPop(true);
    };
  }, [pop]);

  return null;
};

export default ScrollToTop;
