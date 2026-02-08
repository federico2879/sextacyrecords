export default function ImageTicker({ images, speedSeconds = 24 }) {
  const loop = [...images, ...images];

  return (
    <div className="tickerWrap">
      <div className="tickerFadeLeft" />
      <div className="tickerFadeRight" />

      <div
        className="ticker"
        style={{ "--ticker-duration": `${speedSeconds}s` }}
      >
        {loop.map((src, i) => (
          <div className="tickerItem" key={`${src}-${i}`}>
            <img
              className="tickerImg"
              src={src}
              alt="Event"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
