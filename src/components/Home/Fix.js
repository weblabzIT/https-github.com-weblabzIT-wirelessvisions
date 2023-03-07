import React from 'react'
import { Link } from 'react-router-dom'
export default function Fix() {
  return (
    <div>
        <section className="row-aboutus">
  <div className="container-fluid p-0">
    <div className="row">
      <div className="col-md-8 left-about parallax parallax-1"></div>
      <div className="col-md-4 right-about">
        <img src="assets/img/about-us/about-mask.png" alt="images" />
      </div>
      <div className="wrap-about-title wow fadeInRight">
        <div className="frame-title">
          <h2 className="title-heading big text-white">
            We Fix All Devices All Problems
          </h2>
          <h6 className="title-small text-white">
            Damaged mobile devices bring productivity to a standstill. Keep your
            employees well-connected and your workforce running like a
            well-oiled machine by letting Repair &amp; Tech work its magic on
            your organisation’s mobile devices. We already offer our
            comprehensive service to several businesses and would be glad to do
            the same for yours.
          </h6>
        </div>
        <div className="frame-title-row">
          <div className="container-fluid p-0">
            <div className="device-frame">
              <div className="row-title">
                <a href="services.html">
                  <h3 className="title-heading big text-white"> </h3>
                </a>
                <p className="title-small text-white"> </p>
              </div>
              <div className="row-title">
                <a href="services.html">
                  <h3 className="title-heading big text-white"> </h3>
                </a>
                <p className="title-small text-white"> </p>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-button">
      <Link to={'/fixed-device'}>   <a
            href="#"
            className="fixmo-button d-inline-flex shadow bg-red big-2"
          >
            Get A Quote
            <span className="icon icon-long-arrow-right" />
          </a></Link> 
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
