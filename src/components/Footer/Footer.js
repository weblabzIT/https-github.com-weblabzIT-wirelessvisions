import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
        <>
  <a
    href="https://api.whatsapp.com/send?phone= +07710931305 &text=WELCOME TO WIRELESS VISION."
    className="float"
    target="_blank"
  >
    <i className="bi bi-whatsapp" />
  </a>
  {/* FOOTER */}
  <footer className="row-footer">
    <div className="container-fluid p-0">
      <div className="row">
        <div className="container">
          <div className="row wrap-our-footer style-1">
            <div className="col-md-4">
              <div className="our-inner pl-style-1 bg-style-1">
                <a className="icons pt-style-1" href="tel:000232439493">
                  <span className="icon-mobile-keyboard" />
                </a>
                <ul className="list-info marl-23">
                  <li className="title">
                    <a href="tel:000232439493">Our Phone</a>{" "}
                  </li>
                  <li className="sub-title">
                    <a href="tel:000232439493">077-109-313-05</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our-inner pl-style-2 bg-style-2">
                <a className="icons pt-style-2" href="mailto:name@website.com">
                  <span className="font-size-33 icon-mail-open" />
                </a>
                <ul className="list-info">
                  <li className="title">
                    {" "}
                    <a href="mailto:name@website.com">Our Email</a>{" "}
                  </li>
                  <li className="sub-title">
                    <a href="mailto:name@website.com">
                      info@wirelessvision.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="our-inner pl-style-3 bg-style-1">
             <Link to={'/contact'}>   <a className="icons pt-style-3" href="#">
                  <span className="icon-location-map" />
                </a> </Link>
                <ul className="list-info">
                  <li className="title">
                    {" "}
            <Link to={'/contact'}>        <a href="#">Our Address</a>{" "} </Link>
                  </li>
                  <li className="sub-title">
             <Link to={'/contact'}>      <a href="#">1404 LONDON RD, SW16 4BZ</a> </Link> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={37}
            data-mobile={20}
            data-smobile={20}
          />
          <div className="row wrap-our-footer style-2">
            <div className="col-md-3">
              <div className="wrap-about">
                <div className="logo-footer">
                  <a className="title-logo" href="#">
                    <img
                      src="assets/img/logo/logo.jpg"
                      className="padr-10 "
                      alt="images"
                    />
                  </a>
                  <p className="title-small sub-logo"> </p>
                </div>
                <div className="social-footer">
                  <ul className="list-social">
                    <li className="item-social active">
                      <a href="https://www.facebook.com/wirelessvision.ltd/">
                        {" "}
                        <span>
                          <i className="fa fa-facebook" />
                        </span>
                      </a>
                    </li>
                    <li className="item-social">
                      <a href="https://twitter.com/">
                        {" "}
                        <span>
                          <i className="fa fa-twitter-square" />
                        </span>
                      </a>
                    </li>
                    <li className="item-social">
                      <a href="https://www.instagram.com/">
                        {" "}
                        <span>
                          <i className="fa fa-instagram" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{textAlign:'initial'}}>
              <div className="wrap-heading-footer">
                <h2 className="title-heading big font-size-30 text-white">
                  Services
                </h2>
              </div>
              <div className="wrap-sub-footer">
                <ul className="list-sub">
                  <li className="title-sub">
            <Link to={'/iphone-smartdevice'}>        <a className="title-small" href="#">
                      Smart Phones Repair
                    </a> </Link>
                  </li>
                  <li className="title-sub">
            <Link to={'/ipad'}>        <a className="title-small" href="#">
                      Ipad Repair
                    </a> </Link>
                  </li>
                  <li className="title-sub">
             <Link to={'/computer-repair'}>       <a className="title-small" href="#">
                      Computer Repairs
                    </a> </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3" style={{textAlign:'initial'}}>
              <div className="wrap-heading-footer style-1">
                <h2 className="title-heading big font-size-30 text-white">
                  Useful Links
                </h2>
              </div>
              <div className="wrap-sub-footer style-1">
                <ul className="list-sub">
                  <li className="title-sub">
             <Link to={'/'}>       <a className="title-small" href="#">
                      Home
                    </a> </Link>
                  </li>
                  <li className="title-sub">
               <Link to={'/aboutus'}>    <a className="title-small" href="#">
                      About Us
                    </a> </Link> 
                  </li>
                  <li className="title-sub">
                <Link to={'/ipad'}>    <a className="title-small" href="#">
                      Our Services
                    </a> </Link>
                  </li>
                  <li className="title-sub">
             <Link to={'/fixed-device'}>       <a className="title-small" href="#">
                      Fixed My Device
                    </a> </Link>
                  </li>
                  <li className="title-sub">
              <Link to={'/contact'}>      <a className="title-small" href="#">
                      Contact Us
                    </a> </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3" style={{textAlign:'initial'}}>
              <ul>
                <span
                  className="icon-location-map"
                  style={{ color: "#fff", fontFamily: "sans-serif" }}
                >
                  <li>1404 LONDON RD, SW16 4BZ</li>
                </span>
                <br />
                <span className="icon-location-map" style={{ color: "#fff" }}>
                  <li>MERTON HIGH ST, SW19 1AX</li>
                </span>
                <br />
                <span className="icon-location-map" style={{ color: "#fff" }}>
                  <li>752 LONDON RD, CR7 6JA</li>
                </span>
              </ul>
            </div>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={40}
            data-mobile={20}
            data-smobile={20}
          />
        </div>
        <div className="container">
          <div className="wrap-end-footer">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="left-footer-end">
                  <p className="title-small">
             <Link to={'/'}>       <a href="#">© Wireless Vision &nbsp;2022</a></Link>| All
                    Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* END FOOTER */}
  {/* /#page */}
  {/* /#wrapper */}
  <a id="scroll-top" />
</>

    </div>
  )
}
