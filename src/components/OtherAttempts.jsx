export default function OtherAttempts({ items, vineImage }) {
  const [volunteer, report, travel] = items;

  return (
    <section className="section other-attempts" id="other-attempts">
      <img className="other-attempts__vine" src={vineImage} alt="" aria-hidden="true" />
      <span className="other-attempts__orb other-attempts__orb--one" aria-hidden="true" />
      <span className="other-attempts__orb other-attempts__orb--two" aria-hidden="true" />
      <div className="section__heading other-attempts__heading">
        <p>Other Attempts</p>
        <h2>未形成主线的探索切片</h2>
      </div>
      <div className="other-grid">
        <article className="other-card other-card--hero">
          <div className="other-card__media">
            <img src={volunteer.image} alt={volunteer.title} />
          </div>
          <div className="other-card__copy">
            <span>{volunteer.keywords}</span>
            <h3>{volunteer.title}</h3>
            <p>{volunteer.intro}</p>
            <p className="other-card__detail">{volunteer.detail}</p>
          </div>
        </article>
        <div className="other-grid__side">
          {[report, travel].map((item, index) => (
            <article className={`other-card other-card--side other-card--side-${index + 1}`} key={item.title}>
              <div className="other-card__media">
                <img src={item.image} alt={item.title} />
              </div>
            <div className="other-card__copy">
              <span>{item.keywords}</span>
              <h3>{item.title}</h3>
              <p>{item.intro}</p>
              <p className="other-card__detail">{item.detail}</p>
            </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
