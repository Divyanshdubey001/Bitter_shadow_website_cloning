import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="aboutus">
          About Catalog-Z
          <div className="desc">
            <p className="desc-about">
              <br></br>
              Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template
              <br></br>
              for video and photo websites. You can freely use this TemplateMo
              <br></br>
              layout for a front-end integration with any kind of CMS website.
            </p>
            <p>
              <br></br>
              <br></br>
            Copyright 2020 Catalog-Z Company. All rights reserved.
            </p>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-wrapper">{/*  */}</div>
          <div className="links">Our Links</div>
          <div className="list">
            <ul>
              <li>Advertise</li>
              <li>Support</li>
              <li>Our Company</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
