import React from 'react';

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12 ">
              <h5 className="text-2xl pt-8 pb-2 ">Liên Hệ</h5>
              <p>
                <i class="fa-solid fa-phone pr-2"></i> +84 0123456789
              </p>
              <p>
                <i class="fa-solid fa-envelope pr-2"></i> Nameb123456@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane pr-2"></i> ...., Xuân Khánh, Ninh Kiều, Cần Thơ.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-12">
              <h5 className="text-2xl pt-8 pb-2">Trung tâm hổ trợ</h5>
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
            <div className="col-md-6 col-lg-5 col-12">
              <h3 className="text-2xl pt-8 pb-2 footerSpan">
                Nhà Sách <span className="text-[#3cf] ">Thiên Lân</span>
              </h3>
              <p className="pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni
                totam, facere eos iure voluptate.
              </p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter  "></i>
                <i className="fa-brands fa-instagram "></i>
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
