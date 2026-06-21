import { useEffect, useMemo, useRef, useState } from "react";

export default function Life({ profile }) {
  const [active, setActive] = useState(0);
  const [spiritBlinking, setSpiritBlinking] = useState(false);
  const touchStart = useRef(null);
  const blinkTimeout = useRef(null);
  const photos = profile.daily;
  const activeDaily = photos[active];
  const orbitSlots = useMemo(() => [
    { x: 304, y: -138, scale: 1.22, rotate: 7 },
    { x: 92, y: -236, scale: 0.84, rotate: -8 },
    { x: -104, y: -218, scale: 0.78, rotate: 11 },
    { x: -268, y: -86, scale: 0.74, rotate: -16 },
    { x: -274, y: 92, scale: 0.72, rotate: 14 },
    { x: -98, y: 204, scale: 0.76, rotate: -7 },
    { x: 104, y: 206, scale: 0.78, rotate: 13 },
    { x: 278, y: 78, scale: 0.8, rotate: -11 },
    { x: 306, y: -62, scale: 0.86, rotate: 10 }
  ], []);

  const selectDaily = (index) => {
    setActive((index + photos.length) % photos.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % photos.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [photos.length]);

  useEffect(() => {
    let interval;
    const scheduleBlink = () => {
      interval = window.setTimeout(() => {
        triggerSpiritBlink();
        scheduleBlink();
      }, 3000 + Math.random() * 2000);
    };

    scheduleBlink();
    return () => {
      window.clearTimeout(interval);
      window.clearTimeout(blinkTimeout.current);
    };
  }, []);

  const triggerSpiritBlink = () => {
    window.clearTimeout(blinkTimeout.current);
    setSpiritBlinking(true);
    blinkTimeout.current = window.setTimeout(() => {
      setSpiritBlinking(false);
    }, 220);
  };

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 42) selectDaily(active + (delta > 0 ? -1 : 1));
    touchStart.current = null;
  };

  return (
    <section className="section life" id="life">
      <div className="section__heading">
        <p>Life Sharing</p>
        <h2>阅读、观察与生活切片</h2>
      </div>
      <div className="life__books">
        {profile.books.map((book) => (
          <article className="book-card" key={book.title}>
            <img src={book.image} alt={book.title} />
            <div>
              <span>Reading</span>
              <h3>{book.title}</h3>
              <p>{book.note}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="daily-island" aria-label="Daily life sharing" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <img className="daily-island__base" src={profile.assets.bigIsland} alt="" aria-hidden="true" />
        <button className="island-spirit" type="button" onMouseEnter={triggerSpiritBlink} aria-label="Blinking island spirit">
          <img className={`island-spirit__image island-spirit__image--open ${spiritBlinking ? "is-hidden" : ""}`} src={profile.assets.dailySpiritOpen} alt="" aria-hidden="true" />
          <img className={`island-spirit__image island-spirit__image--closed ${spiritBlinking ? "is-visible" : ""}`} src={profile.assets.dailySpiritClosed} alt="" aria-hidden="true" />
        </button>
        <div className="memory-orbit" aria-label="Memory orbit cards">
          {photos.map((item, index) => {
            const slotIndex = (index - active + photos.length) % photos.length;
            const slot = orbitSlots[slotIndex] || orbitSlots[0];
            const isActive = slotIndex === 0;
            let mobileOffset = index - active;
            if (mobileOffset > photos.length / 2) mobileOffset -= photos.length;
            if (mobileOffset < -photos.length / 2) mobileOffset += photos.length;
            return (
              <button
                className={`memory-card ${isActive ? "is-active" : ""}`}
                key={item.title}
                onClick={() => selectDaily(index)}
                style={{
                  "--orbit-x": `${slot.x}px`,
                  "--orbit-y": `${slot.y}px`,
                  "--orbit-scale": slot.scale,
                  "--orbit-rotate": `${slot.rotate}deg`,
                  "--orbit-z": isActive ? 20 : 12 - slotIndex,
                  "--orbit-opacity": isActive ? 1 : 0.62,
                  "--mobile-x": `${mobileOffset * 132}px`,
                  "--mobile-scale": isActive ? 1.16 : 0.78
                }}
                aria-label={`Open ${item.title}`}
              >
                <span className="memory-card__inner">
                  <span className="memory-card__face memory-card__back">
                    <img src={profile.cardBackImage} alt="" aria-hidden="true" />
                  </span>
                  <span className="memory-card__face memory-card__front">
                    {item.src ? <img src={item.src} alt={item.title} /> : <span className="memory-card__placeholder">{item.date}</span>}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="memory-note" key={activeDaily.title}>
          <p>{activeDaily.label}</p>
          <h3>{activeDaily.title}</h3>
          <span>{activeDaily.description}</span>
        </div>
        <div className="memory-controls" aria-label="Daily memory controls">
          <button onClick={() => selectDaily(active - 1)} aria-label="Previous memory">‹</button>
          <button onClick={() => selectDaily(active + 1)} aria-label="Next memory">›</button>
        </div>
      </div>
    </section>
  );
}
