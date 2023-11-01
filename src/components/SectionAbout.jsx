import "./SectionAbout.css";

export default function SectionAbout() {
  return (
    <section className="about-section">
      <div>
        <div className="about-section-desc">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are family owned Mediteranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
        </div>
        <div className="about-section-img">
          <img src="food1.png" alt="food1" />
          <img src="food2.jpeg" alt="food2" />
        </div>
      </div>
    </section>
  );
}
