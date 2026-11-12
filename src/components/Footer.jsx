import { SITE } from "../config/site";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-block">
          <h3>{SITE.name}</h3>
          <p>Quality furniture, made to last.</p>
        </div>

        <div className="footer-block">
          <h4>Contact</h4>
          <a href={`tel:+${SITE.phone}`}>{SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>

        <div className="footer-block">
          <h4>Follow us</h4>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={`https://wa.me/${SITE.phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}