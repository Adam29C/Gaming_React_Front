import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* Footer Area */}
            <footer className="footer-area d-sm-flex justify-content-center align-items-center justify-content-between">
              {/* Copywrite Text */}
              <div className="copywrite-text">
                <p>
                  Created by @<a href="#">Theme-life</a>
                </p>
              </div>
              <div className="fotter-icon text-center">
                <a
                  href="#"
                  className="action-item mr-2"
                  data-bs-toggle="tooltip"
                  title="Facebook"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="action-item mr-2"
                  data-bs-toggle="tooltip"
                  title="Twitter"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="action-item mr-2"
                  data-bs-toggle="tooltip"
                  title="Pinterest"
                >
                  <i className="fa fa-pinterest-p" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="action-item mr-2"
                  data-bs-toggle="tooltip"
                  title="Instagram"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
