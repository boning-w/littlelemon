import "./Header.css";

export default function Header() {
  return (
    <header>
      <div>
        <img src="Logo.svg" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
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
    </header>
  );
}
