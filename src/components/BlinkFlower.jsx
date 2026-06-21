import { useEffect, useRef, useState } from "react";

export default function BlinkFlower({ openImage, closedImage }) {
  const [closed, setClosed] = useState(false);
  const timeoutRef = useRef(0);

  const blink = () => {
    window.clearTimeout(timeoutRef.current);
    setClosed(true);
    timeoutRef.current = window.setTimeout(() => setClosed(false), 220);
  };

  useEffect(() => {
    let interval = 0;
    const schedule = () => {
      const delay = 2200 + Math.random() * 900;
      interval = window.setTimeout(() => {
        blink();
        schedule();
      }, delay);
    };

    schedule();
    return () => {
      window.clearTimeout(interval);
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <button className="blink-flower" onMouseEnter={blink} aria-label="Blinking flower decoration">
      <img className={`blink-flower__eye blink-flower__eye--open ${closed ? "is-hidden" : ""}`} src={openImage} alt="" aria-hidden="true" />
      <img className={`blink-flower__eye blink-flower__eye--closed ${closed ? "is-visible" : ""}`} src={closedImage} alt="" aria-hidden="true" />
    </button>
  );
}
