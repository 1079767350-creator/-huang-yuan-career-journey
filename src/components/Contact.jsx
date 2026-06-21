export default function Contact({ profile }) {
  return (
    <section className="section contact" id="contact">
      <div className="contact__inner glass-panel">
        <div>
          <p className="contact__eyebrow">Contact</p>
          <h2>期待在新的实践里继续成长</h2>
          <p>
            如果你想了解我的经历、项目实践或 HRBP 方向探索，可以通过以下方式联系我。
          </p>
        </div>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <a href={profile.assets.resume} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
