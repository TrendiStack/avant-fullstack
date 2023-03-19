import { useEffect, useRef, useState } from 'react';
import { TfiPlus } from 'react-icons/tfi';

const ProductImage = ({ product }) => {
  const [visible, setVisible] = useState(false);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(
    /iphone|ipad|ipod|android/i.test(navigator.userAgent)
  );

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = e => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const zoom = () => {
    const img = imageRef.current;
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;
    const imgRect = img.getBoundingClientRect();
    const x = cursor.x - imgRect.left;
    const y = cursor.y - imgRect.top;
    const xPercent = (x / imgWidth) * 100;
    const yPercent = (y / imgHeight) * 100;
    if (!isMobile) {
      img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      img.style.transform = 'scale(1.2)';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(/iphone|ipad|ipod|android/i.test(navigator.userAgent));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="relative max-h-[500px] md:max-h-[600px] cursor-none overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <TfiPlus
        className={`${
          isMobile && 'opacity-0'
        } z-50 text-2xl text-white pointer-events-none ${
          visible & !isMobile ? 'absolute' : 'hidden'
        }`}
        style={{
          top: cursor.y - 93,
          left: cursor.x - 72,
        }}
      />
      <img
        src={product?.image}
        alt={product?.name}
        ref={imageRef}
        className="h-full w-full object-cover transition duration-300 ease-in-out transform"
        onMouseMove={zoom}
        onMouseLeave={() => {
          imageRef.current.style.transform = 'scale(1)';
        }}
      />
    </div>
  );
};

export default ProductImage;
