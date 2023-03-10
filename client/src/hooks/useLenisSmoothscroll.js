import Lenis from '@studio-freight/lenis';
const useLenisSmoothscroll = () => {
  const lenis = new Lenis({
    duration: 0.5,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  return lenis;
};

export default useLenisSmoothscroll;
