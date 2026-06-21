export default function About({ profile }) {
  const sidebarItems = [
    ["School", "贵州大学"],
    ["Major", profile.major],
    ["Focus", "HR / Social Security / Organization"],
    ["Direction", "Future HRBP"]
  ];

  return (
    <section className="section about" id="about">
      <div className="about__magazine">
        <div className="about__narrative">
          <p className="about__eyebrow">About Me</p>
          <h2 className="about__title">在专业、实践与人的连接里成长</h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="about__sidebar" aria-label="Magazine sidebar">
          {sidebarItems.map(([label, value], index) => (
            <div className="about__sidebar-item" key={label}>
              <span>{String(index + 1).padStart(2, "0")} / {label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
