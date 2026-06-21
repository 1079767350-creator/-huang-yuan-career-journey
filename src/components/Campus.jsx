import { useRef, useState } from "react";

export default function Campus({ profile }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const stories = profile.campus;
  const story = stories[active];

  const move = (direction) => {
    setActive((value) => (value + direction + stories.length) % stories.length);
  };

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 42) move(delta > 0 ? -1 : 1);
    touchStart.current = null;
  };

  return (
    <section className="section campus" id="campus">
      <div className="section__heading">
        <p>Campus Experience</p>
        <h2>校园里的协作、倾听与探索</h2>
      </div>
      <div className="campus-story" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <button className="campus-story__nav campus-story__nav--prev" onClick={() => move(-1)} aria-label="Previous campus story">
          <span>←</span>
          Previous
        </button>
        <article className="campus-story__panel" key={story.title}>
          <div className="campus-story__image">
            <img src={story.image} alt="" aria-hidden="true" />
          </div>
          <div className="campus-story__copy">
            <span>{story.period}</span>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
            <div className="growth-tags campus-story__growth">
              {story.growth.map((growth) => (
                <span key={growth}>{growth}</span>
              ))}
            </div>
          </div>
        </article>
        <button className="campus-story__nav campus-story__nav--next" onClick={() => move(1)} aria-label="Next campus story">
          Next
          <span>→</span>
        </button>
        <div className="campus-story__dots" aria-hidden="true">
          {stories.map((item, index) => (
            <button className={index === active ? "is-active" : ""} key={item.title} onClick={() => setActive(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
