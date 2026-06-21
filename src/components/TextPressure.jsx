import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const distance = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);

const mapPressure = (dist, maxDist, minVal, maxVal) => {
  const value = maxVal - Math.abs((maxVal * dist) / maxDist);
  return Math.max(minVal, value + minVal);
};

export default function TextPressure({
  text,
  className = "",
  fontFamily = "Georgia, Times New Roman, serif",
  textColor = "#fff8ff",
  minFontSize = 56,
  width = true,
  weight = true,
  italic = false
}) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const pointerRef = useRef({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(minFontSize);
  const chars = useMemo(() => text.split(""), [text]);

  const setSize = useCallback(() => {
    if (!containerRef.current) return;
    const { width: containerWidth } = containerRef.current.getBoundingClientRect();
    setFontSize(Math.max(containerWidth / Math.max(chars.length * 0.56, 1), minFontSize));
  }, [chars.length, minFontSize]);

  useEffect(() => {
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [setSize]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = root.getBoundingClientRect();
    pointerRef.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    cursorRef.current = { ...pointerRef.current };
    if (reduceMotion) return;

    const onPointerMove = (event) => {
      cursorRef.current = { x: event.clientX, y: event.clientY };
    };

    let frame = 0;
    const animate = () => {
      pointerRef.current.x += (cursorRef.current.x - pointerRef.current.x) / 12;
      pointerRef.current.y += (cursorRef.current.y - pointerRef.current.y) / 12;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = Math.max(titleRect.width * 0.56, 180);

        spansRef.current.forEach((span) => {
          if (!span) return;
          const charRect = span.getBoundingClientRect();
          const charCenter = {
            x: charRect.left + charRect.width / 2,
            y: charRect.top + charRect.height / 2
          };
          const d = distance(pointerRef.current, charCenter);
          const pressure = Math.max(0, 1 - Math.min(d / maxDist, 1));
          const wght = weight ? Math.floor(mapPressure(d, maxDist, 180, 760)) : 420;
          const wdth = width ? Math.floor(mapPressure(d, maxDist, 80, 148)) : 100;
          const ital = italic ? mapPressure(d, maxDist, 0, 0.8).toFixed(2) : 0;
          const scaleX = 1 + pressure * 0.16;
          const lift = pressure * -3;

          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${ital}`;
          span.style.fontWeight = String(wght);
          span.style.transform = `translateY(${lift}px) scaleX(${scaleX})`;
          span.style.textShadow = `0 0 ${12 + pressure * 18}px rgba(255, 210, 255, ${0.2 + pressure * 0.32})`;
        });
      }

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove);
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, [italic, weight, width]);

  return (
    <div className={`text-pressure ${className}`} ref={containerRef}>
      <h1
        ref={titleRef}
        style={{ color: textColor, fontFamily, fontSize }}
        aria-label={text}
      >
        {chars.map((char, index) => (
          <span
            aria-hidden="true"
            data-char={char}
            key={`${char}-${index}`}
            ref={(element) => {
              spansRef.current[index] = element;
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
