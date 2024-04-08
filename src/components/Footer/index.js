import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12 ft3">
              <h5>Liên Hệ</h5>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +84 0123456789
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> Nameb123456@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPaperPlane} /> ...., Xuân Khánh, Ninh Kiều, Cần Thơ.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft2">
              <h5>Trung tâm hổ trợ</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-5 col-12 ft1">
              <h3>
                Nhà sách <span>Thiên Lân</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni
                totam, facere eos iure voluptate.
              </p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer"></div>
    </div>
  );
}
// (css tham khảo tại) https://www.youtube.com/watch?v=S-GiJt6qBtg
export default Footer;
