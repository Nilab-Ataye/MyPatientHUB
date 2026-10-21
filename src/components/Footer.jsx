import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer app-footer">
      <p>made <span className="heart">♥</span> by <strong>jam web</strong> for a better web.</p>
      <nav className="footer-links">
        <a href="#dashboard">MyPatientHUB</a>
        <a href="#about">About me</a>
        <a href="#blog">Blog</a>
      </nav>
    </footer>
  );
}