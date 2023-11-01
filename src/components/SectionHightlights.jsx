import "./SectionHighlights.css";

export default function SectionHighlights() {
  return (
    <section className="hightlights-section">
      <div>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div>
        <div>
          <img className="img-dish" src="greek salad.jpg" alt="dish" />
          <div className="dish-name-price">
            <p>Greek salad</p>
            <p>$12.99</p>
          </div>
          <div className="desc-button">
            <p>
              The famous greek saslad of crispy letuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div>
          <img className="img-dish" src="bruchetta.svg" alt="dish" />
          <div className="dish-name-price">
            <p>Bruchetta</p>
            <p>$5.99</p>
          </div>
          <div className="desc-button">
            <p>
              Our bruchetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div>
          <img className="img-dish" src="lemon dessert.jpg" alt="dish" />
          <div className="dish-name-price">
            <p>Lemon Dessert</p>
            <p>$5.00</p>
          </div>
          <div className="desc-button">
            <p>
              This comes straight from grandma&apos;s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <button>Order a delivery</button>
          </div>
        </div>
      </div>
    </section>
  );
}
