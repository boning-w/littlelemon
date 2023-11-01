import "./SectionHero.css";

export default function SectionHero() {
  return (
    <>
      <section className="hero-section">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are family owned Mediteranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button>
            <a href="/reserve-table">Reserve a Table</a>
          </button>
          <img src="restauranfood.jpg" alt="restaurant" />
        </div>
      </section>
      <div className="blank-section"></div>
    </>
  );
}
