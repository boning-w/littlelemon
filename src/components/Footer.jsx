import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src="footer-logo.png" alt="footer-logo" />
        <div className="footer-links-sections">
          <div>
            <h2>Doormap</h2>
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Menu</a>
                </li>
                <li>
                  <a href="">Reservation</a>
                </li>
                <li>
                  <a href="">Order Online</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>Contact</h2>
            <nav>
              <ul>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Phone</a>
                </li>
                <li>
                  <a href="">Email</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>Social</h2>
            <nav>
              <ul>
                <li>
                  <a href="">FaceBook</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">X</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
