import facebookIcon from "../../assets/icons/Facebook.svg";
import xIcon from "../../assets/icons/X_twitter.svg";
import instagramIcon from "../../assets/icons/Instagram.svg";
import pinterestIcon from "../../assets/icons/Pinterest.svg";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Snaps</h1>
        <div className="footer__sub">
          <div className="footer__subcontainer">
            <p className="footer__content">For photographers</p>
            <p className="footer__content">Hire talent</p>
            <p className="footer__content">Inspiration</p>
          </div>
          <div className="footer__subcontainer">
            <p className="footer__content">About</p>
            <p className="footer__content">Careers</p>
            <p className="footer__content">Support</p>
          </div>
          <div className="footer__socials">
            <img src={facebookIcon} alt="facebook" className="footer__icon" />
            <img src={xIcon} alt="x" className="footer__icon" />
            <img src={instagramIcon} alt="instagram" className="footer__icon" />
            <img src={pinterestIcon} alt="pinterest" className="footer__icon" />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="footer__copycontent">© 2024 Snaps</p>
        <p className="footer__copycontent">Terms</p>
        <p className="footer__copycontent">Privacy</p>
        <p className="footer__copycontent">Cookies</p>
      </div>
    </footer>
  );
}

export default Footer;
