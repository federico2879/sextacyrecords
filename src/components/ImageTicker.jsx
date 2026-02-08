import { useEffect, useState } from "react";

export default function ImageTicker({ images, speedSeconds = 24 }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (images.length * 100));
    }, (speedSeconds * 1000) / (images.length * 100));

    return () => clearInterval(interval);
  }, [images.length, speedSeconds]);

  return (
    <div className="imageTicker">
      <div
        className="tickerContent"
        style={{
          transform: `translateX(calc(-${scrollPosition}% - ${scrollPosition * 0.1}px))`,
        }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Event ${index}`} />
        ))}
      </div>
    </div>
  );
}