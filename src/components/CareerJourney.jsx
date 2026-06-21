import { useEffect, useMemo, useRef, useState } from "react";
import BlinkFlower from "./BlinkFlower.jsx";

export default function CareerJourney({ items, detailImage, flowerOpen, flowerClosed }) {
  const [active, setActive] = useState(0);
  const [chamberItem, setChamberItem] = useState(null);
  const [closing, setClosing] = useState(false);
  const touchStart = useRef(null);
  const current = items[active];

  const visibleItems = useMemo(() => {
    return items.map((item, index) => {
      let offset = index - active;
      if (offset > items.length / 2) offset -= items.length;
      if (offset < -items.length / 2) offset += items.length;
      return { ...item, index, offset };
    });
  }, [active, items]);

  const move = (direction) => {
    setActive((value) => (value + direction + items.length) % items.length);
    setChamberItem(null);
  };

  const openChamber = (item) => {
    setClosing(false);
    setChamberItem(item);
  };

  const closeChamber = () => {
    setClosing(true);
    window.setTimeout(() => {
      setChamberItem(null);
      setClosing(false);
    }, 420);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "Escape" && chamberItem) closeChamber();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 44) move(delta > 0 ? -1 : 1);
    touchStart.current = null;
  };

  return (
    <section className="journey" id="journey">
      <BlinkFlower openImage={flowerOpen} closedImage={flowerClosed} />
      <div className="section__heading journey__heading">
        <p>Career Journey</p>
        <h2>职业成长地图</h2>
      </div>

      <div className="journey__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <button className="round-button round-button--left" onClick={() => move(-1)} aria-label="Previous journey node">
          ‹
        </button>
        <div className="journey__path" aria-label="Career journey nodes">
          {visibleItems.map((item) => {
            const hidden = Math.abs(item.offset) > 2;
            return (
              <button
                key={item.title}
                className={`map-node ${item.offset === 0 ? "is-active" : ""}`}
                style={{
                  "--x": `${item.offset * 238}px`,
                  "--scale": 1 - Math.abs(item.offset) * 0.16,
                  "--opacity": 1 - Math.abs(item.offset) * 0.26,
                  "--y": `${Math.sin(item.offset * 1.2) * 34}px`,
                  visibility: hidden ? "hidden" : "visible"
                }}
                onClick={() => (item.offset === 0 ? openChamber(item) : setActive(item.index))}
              >
                <span className="map-node__orb">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </span>
                <span className="map-node__period">{item.period}</span>
                <strong>{item.title}</strong>
                <small>{item.place}</small>
              </button>
            );
          })}
        </div>
        <button className="round-button round-button--right" onClick={() => move(1)} aria-label="Next journey node">
          ›
        </button>
      </div>

      <div className="journey__summary glass-panel">
        <button className="text-button journey__enter" onClick={() => openChamber(current)}>
          <strong>点击图标进入记忆空间</strong>
        </button>
      </div>

      {chamberItem && (
        <StoryChamber
          item={chamberItem}
          items={items}
          closing={closing}
          detailImage={detailImage}
          onClose={closeChamber}
        />
      )}
    </section>
  );
}

function StoryChamber({ item, items, closing, detailImage, onClose }) {
  return (
    <div className={`story-chamber ${closing ? "is-closing" : ""}`} role="dialog" aria-modal="true" aria-label={`${item.title} story chamber`}>
      <div className="story-chamber__scene" style={{ "--story-bg": `url(${item.scene || detailImage})` }} />
      <div className="story-chamber__shade" />
      <img className="story-chamber__node" src={item.icon} alt="" aria-hidden="true" />
      <img className="story-chamber__vine story-chamber__vine--left" src={items[0].icon} alt="" aria-hidden="true" />
      <img className="story-chamber__vine story-chamber__vine--right" src={items[items.length - 1].icon} alt="" aria-hidden="true" />
      <button className="story-chamber__close" onClick={onClose} aria-label="Leave story chamber">×</button>
      <div className="story-chamber__panel">
        <div className="story-chamber__content">
          <p className="story-chamber__eyebrow">{item.period} · {item.place}</p>
          <h3>{item.title}</h3>
          <div className="story-chamber__copy">
            {item.details.map((paragraph, index) => (
              <p style={{ "--delay": `${index * 90 + 180}ms` }} key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="growth-tags story-chamber__tags">
            {item.growth.map((growth, index) => (
              <span style={{ "--delay": `${index * 60 + 340}ms` }} key={growth}>{growth}</span>
            ))}
          </div>
          {(item.images.length > 0 || item.showGalleryPlaceholder !== false) && (
            <div className="story-chamber__gallery">
              {item.images.length > 0 ? (
                item.images.map((image) => (
                  <img src={image} alt={`${item.title} internship moment`} key={image} />
                ))
              ) : (
                <div className="story-chamber__placeholder">图片待补充</div>
              )}
            </div>
          )}
          {item.reflection && (
            <div className="story-chamber__reflection">
              <span>心得</span>
              <p>{item.reflection}</p>
            </div>
          )}
        </div>
      </div>
      <div className="story-chamber__path" aria-hidden="true">
        {items.map((pathItem) => (
          <img className={pathItem.title === item.title ? "is-active" : ""} src={pathItem.icon} alt="" key={pathItem.title} />
        ))}
      </div>
    </div>
  );
}
