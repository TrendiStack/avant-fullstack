import Venice from '../../assets/videos/Venice.mp4';
const ShopVideo = () => {
  return (
    <div
      className="absolute w-full h-full"
      dangerouslySetInnerHTML={{
        __html: `<video
                class="w-full h-full object-cover grayscale pointer-events-none"
                autoplay
                muted
                loop
                playsinline
                >
                <source src="${Venice}" type="video/mp4">
                </video>`,
      }}
    />
  );
};

export default ShopVideo;
