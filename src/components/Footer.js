import React from "react";
import Select from "./Select";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer__top">
          <div className="footer__left">
            <div className="footer__brands">
              <img
                className="footer__logo"
                src="./images/logo-white.svg"
                alt="uber eats"
              />
              <Select
                name="languages"
                options={[
                  {
                    value: "en",
                    label: "English"
                  },
                  {
                    value: "ua",
                    label: "Ukrainian"
                  }
                ]}
                value="en"
                iconUrl="./images/icons/world.svg"
              />
            </div>
            <div className="footer__mobile-apps">
              <a href="#" className="footer__mobile-app">
                <img src="./images/mac.png" alt="App store" />
              </a>
              <a href="#" className="footer__mobile-app">
                <img src="./images/google.png" alt="Google play" />
              </a>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__links links">
              <a href="#" className="links__link links__link--intended">
                About UberEats
              </a>
              <a href="#" className="links__link">
                Read our blog
              </a>
              <a href="#" className="links__link">
                Sign up to deliver
              </a>
              <a href="#" className="links__link">
                Add your restaurant
              </a>
            </div>
            <div className="footer__links links"></div>
            <div className="footer__links links">
              <a href="#" className="links__link links__link--intended">
                Get help
              </a>
              <a href="#" className="links__link ">
                Read FAQs
              </a>
              <a href="#" className="links__link">
                View all cities
              </a>
            </div>
            <div className="footer__links links"></div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2019 Uber Technologies Inc.</p>
          <div className="footer__misc">
            <div className="footer__bottom-links links">
              <a href="#" className="links__link ">
                Privacy policy
              </a>
              <a href="#" className="links__link ">
                Terms of use
              </a>
              <a href="#" className="links__link">
                Pricing
              </a>
            </div>
            <div className="footer__social social">
              <a href="#" className="social__link">
                <img src="./images/icons/fbook.svg" alt="facebook icon" />
              </a>
              <a href="#" className="social__link">
                <img src="./images/icons/twitter.svg" alt="twitter icon" />
              </a>
              <a href="#" className="social__link">
                <img src="./images/icons/instag.svg" alt="instagram icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
