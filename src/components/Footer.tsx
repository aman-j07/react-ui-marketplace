import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer row--between">
      <div className="footer__part column">
        <h5 className="footer__head">Your Company</h5>
        <p className="footer__txt">
          Our mission is to make gadget purchase, accessible and affordable.
        </p>
      </div>
      <div className="footer__part">
        <h5 className="footer__head">Helful Links</h5>
        <ul className="footer__linklist">
          <li className="footer__link"><a className="linktxt" href="#Home">Home</a></li>
          <li className="footer__link"><a className="linktxt" href="#About">About Us</a></li>
          <li className="footer__link"><a className="linktxt" href="#Marketplace">Marketplace</a></li>
          <li className="footer__link"><a className="linktxt" href="#Blog">Blog</a></li>
          <li className="footer__link"><a className="linktxt" href="#Contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer__part">
        <h5 className="footer__head">Sitemap</h5>
        <ul className="footer__linklist">
          <li className="footer__link"><a className="linktxt" href="MobileApp">Our Mobile App</a></li>
          <li className="footer__link"><a className="linktxt" href="FAQ">Frequently Asked Questions</a></li>
          <li className="footer__link"><a className="linktxt" href="HelpDesk">Help Desk</a></li>
          <li className="footer__link"><a className="linktxt" href="PrivacyPolicy">Privacy Policy</a></li>
          <li className="footer__link"><a className="linktxt" href="T&C">Terms and Conditions</a></li>
        </ul>
      </div>
      <div className="footer__part">
        <h5 className="footer__head">Contact Us</h5>
        <div className="footer__socialgrp row--centeraligned">
          <span className="box box--primary box--circle row--centeraligned">
            <Facebook/>
          </span>
          <span className="box box--primary box--circle row--centeraligned">
            <Twitter />
          </span>
          <span className="box box--primary box--circle row--centeraligned">
            <Instagram/>
          </span>
          <span className="box box--primary box--circle row--centeraligned">
            <LinkedIn/>
          </span>
        </div>
        <span>hello@yourcompany.com</span>
      </div>
    </footer>
  );
}

export default Footer;
