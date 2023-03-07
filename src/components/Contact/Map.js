import React from 'react'
import { Link } from 'react-router-dom'
export default function Map() {
  return (
    <div>
            <section className="row-map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div>
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.3070067848525!2d-0.19313318469540733!3d51.415786825219094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608a6da95e1b7%3A0x7addcad09e264a93!2s212%20Merton%20High%20St%2C%20London%20SW19%201AX%2C%20UK!5e0!3m2!1sen!2sin!4v1645085012403!5m2!1sen!2sin" width="100%" height={600} style={{border: 0}} allowFullScreen loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-owner">
          <div className="container">
            <div className="row wrap-our-footer style-1">
              <div className="col-md-4">
                <div className="our-inner bg-style-2">
                  <a className="icons color-w pt-style-1 background-color-042c71" href="tel:000232439493"><span className="icon-mobile-keyboard text-white" /></a>
                  <ul className="list-info">
                    <li className="title teko"><a className="text-white" href="tel:000232439493">Our Phone</a> </li>
                    <li className="sub-title pad-1"><a className="text-white" href="tel:000232439493">077-109-313-05</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="our-inner pl-style-2 bg-style-1">
                    <a className="icons pt-style-2 background-color-ff4e4e" href="mailto:name@website.com"><span className="font-size-33 text-white icon-mail-open" /></a>
                  <ul className="list-info mar-info-1">
                    <li className="title teko mt-1"> <a className="text-white" a href="mailto:name@website.com">Our Email</a> </li>
                    <li className="sub-title pad-1"><a className="text-white" a href="mailto:name@website.com">info@wirelessvision.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="our-inner pl-style-3 background-color-white box-shadow-style-2">
               <Link to={"/contact"}>   <a className="icons pt-style-3 background-color-ff4e4e" href="#"><span className="text-white icon-location-map" /></a> </Link>
                  <ul className="list-info mar-info-3 ">
                    <li className="title teko"> <a href="#">Our
                        Address</a> </li>
                    <li className="sub-title pad-1"><a href="#">1404 LONDON RD, SW16 4BZ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
