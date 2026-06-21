import { useEffect, useRef } from "react";
import TextPressure from "./TextPressure.jsx";

const tentacleLayout = [
  { key: "left-main", asset: "leftVine", side: "left", className: "tentacle--left-main", duration: 8.8, delay: -1.2, amp: 1.04 },
  { key: "left-low", asset: "leftBottomTentacle", side: "left", className: "tentacle--left-low", duration: 10.4, delay: -3.4, amp: 0.86 },
  { key: "left-echo", asset: "leftVine", side: "left", className: "tentacle--left-echo", duration: 12.2, delay: -5.1, amp: 0.62 },
  { key: "right-main", asset: "rightVine", side: "right", className: "tentacle--right-main", duration: 9.6, delay: -2.1, amp: 0.98 },
  { key: "right-low", asset: "rightBottomTentacle", side: "right", className: "tentacle--right-low", duration: 11.5, delay: -4.2, amp: 0.8 },
  { key: "right-flower", asset: "rightFlower", side: "right", className: "tentacle--right-flower", duration: 13.2, delay: -0.8, amp: 0.48 }
];

export default function Hero({ profile }) {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const flowerRef = useRef(null);
  const starsRef = useRef(null);
  const dropsRef = useRef(null);
  const tentacleRefs = useRef([]);

  useEffect(() => {
    const root = heroRef.current;
    const stars = starsRef.current;
    const drops = dropsRef.current;
    if (!root || !stars || !drops) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = 0;
    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();
    let targetBoost = 0;
    let boost = 0;
    let pointerX = 0;

    const onPointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      const now = performance.now();
      const dt = Math.max(now - lastTime, 16);
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const speed = Math.min(Math.hypot(dx, dy) / dt, 2.2);
      const xRatio = (event.clientX - rect.left) / rect.width;
      pointerX = event.clientX - rect.left;
      const inVines = xRatio < 0.32 || xRatio > 0.64;

      targetBoost = inVines ? Math.min(speed * 1.35, 1.9) : 0;
      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;
    };

    const onPointerLeave = () => {
      targetBoost = 0;
    };

    const animate = (time) => {
      boost += (targetBoost - boost) * 0.075;
      targetBoost *= 0.975;

      const base = 1 + boost;
      const slow = time * 0.001;
      stars.style.transform = `translate3d(${Math.sin(slow * 0.22) * 10}px, ${Math.cos(slow * 0.18) * 8}px, 0)`;
      drops.style.transform = `translate3d(${Math.cos(slow * 0.3) * 8}px, ${Math.sin(slow * 0.26) * 10}px, 0)`;
      root.style.setProperty("--tentacle-boost", boost.toFixed(3));
      root.style.setProperty("--pointer-x", `${pointerX}px`);

      frame = requestAnimationFrame(animate);
    };

    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", onPointerLeave);
    frame = requestAnimationFrame(animate);

    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <img className="hero__particles hero__particles--stars" src={profile.assets.starParticles} alt="" aria-hidden="true" ref={starsRef} />
      <img className="hero__particles hero__particles--drops" src={profile.assets.dropParticles} alt="" aria-hidden="true" ref={dropsRef} />
      <div className="hero__tentacles" aria-hidden="true">
        {tentacleLayout.map((tentacle, index) => (
          <div
            className={`tentacle ${tentacle.className}`}
            data-side={tentacle.side}
            key={tentacle.key}
            ref={(element) => {
              tentacleRefs.current[index] = element;
              if (tentacle.key === "left-main") leftRef.current = element;
              if (tentacle.key === "right-main") rightRef.current = element;
              if (tentacle.key === "right-flower") flowerRef.current = element;
            }}
            style={{
              "--sway-duration": `${tentacle.duration}s`,
              "--sway-delay": `${tentacle.delay}s`,
              "--amp": tentacle.amp
            }}
          >
            <div className="tentacle__root">
              <div className="tentacle__mid">
                <div className="tentacle__tip">
                  <img src={profile.assets[tentacle.asset]} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero__readability" />
      <nav className="nav" aria-label="Main navigation">
        <a href="#about">About Me</a>
        <a href="#journey">Career Journey</a>
        <a href="#campus">Campus</a>
        <a href="#life">Life</a>
        <a href="#contact" className="nav__pill">Contact</a>
      </nav>
      <div className="hero__content">
        <p className="hero__kicker">Hello, I'm</p>
        <TextPressure text={profile.name} className="hero__pressure-name" minFontSize={72} />
        <p className="hero__chinese-name">{profile.chineseName}</p>
        <div className="hero__line" />
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__subtitle">{profile.subtitle}</p>
        <a className="hero__button" href="#journey">Explore My Journey</a>
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll to about">↓</a>
    </section>
  );
}
