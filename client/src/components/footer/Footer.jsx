import React from "react";
import "./footer.css";
import Algorico from "../../images/algorico-img.png";

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <section className="footer-wrapper-top">
          <div className="email-media-wrapper">
            <h4>INFO@ALGORICO.COM</h4>
            <a href="https://twitter.com/?lang=en">TWITTER</a>
            <a href="https://www.instagram.com/">INSTAGRAM</a>
          </div>
          <div className="form-heading">
            <h4>SIGN UP FOR OUR NEWSLETTER</h4>
            <p>
              Join our newsletter and enjoy a discount on your first purchase
              and other promotions!
            </p>
            <div className="form-container">
              <form className="form">
                <div className="form-group">
                  <input
                    className="input-email"
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    required
                  />
                  <input className="btn" type="submit" value="SEND" />
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* <div className="footer-wrapper-bottom">
          <h1 className="logo-main-bottom">ALGO RICO</h1>
        </div> */}
        <img src={Algorico} alt="logo" className="logo-img" />
        <p className="copyright-footer">
          © 2022. ALGO RICO. ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}

export default Footer;
