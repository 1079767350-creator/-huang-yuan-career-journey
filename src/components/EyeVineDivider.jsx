import { useEffect, useRef, useState } from "react";

export default function EyeVineDivider({ openImage, closedImage }) {
  const [closed, setClosed] = useState(false);
  const blinkRef = useRef(0);
  const scheduleRef = useRef(0);

  const blink = () => {
    window.clearTimeout(blinkRef.current);
    setClosed(true);
    blinkRef.current = window.setTimeout(() => setClosed(false), 220);
  };

  useEffect(() => {
    const schedule = () => {
      scheduleRef.current = window.setTimeout(() => {
        blink();
        schedule();
      }, 2400 + Math.random() * 1100);
    };

    schedule();
    return () => {
      window.clearTimeout(scheduleRef.current);
      window.clearTimeout(blinkRef.current);
    };
  }, []);

  return (
    <div className="eye-vine-divider" aria-hidden="true">
      <button className="eye-vine-divider__button" onMouseEnter={blink}>
        <img className={`eye-vine-divider__image eye-vine-divider__image--open ${closed ? "is-hidden" : ""}`} src={openImage} alt="" aria-hidden="true" />
        <img className={`eye-vine-divider__image eye-vine-divider__image--closed ${closed ? "is-visible" : ""}`} src={closedImage} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}
