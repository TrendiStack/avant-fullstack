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
                <source src="https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/Venice.mp4" type="video/mp4">
                </video>`,
      }}
    />
  );
};

export default ShopVideo;
