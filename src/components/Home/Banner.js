import React from 'react'
import { Link } from 'react-router-dom'
export default function Banner() {
  return (
    <div>
        <section className="fixmo-banner">
  <div className="container-fluid p-0">
    <div className="row m-0 wrap-height">
      <div className="col-md-5 col-left-banner">
        <div className="wrap-banner-left">
          <img
            className="img-banner"
            src="assets/img/banner/banner-left.jpg"
            alt="images"
          />
        </div>
      </div>
      <div className="col-md-7 col-right-banner">
        <div className="wrap-banner-right">
          <img
            className="img-banner"
            src="assets/img/banner/banner-right-1.jpg"
            alt="images"
          />
        </div>
      </div>
      <div
        className="wrap-banner-title wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        <div className="frame-title">
          <h5 className="title-heading small">WELCOME TO WIRELESS VISION</h5>
          <h1 className="title-heading big">
            Your touch screen is not working?
          </h1>
          <h6 className="title-small">
            We specialises in offering an express repair service for
            smartphones, Ipad along with a wide range of mobile accessories and
            refurbished devices.{" "}
          </h6>
        </div>
        <div className="frame-button">
       <Link to={'/contact'}>   <a
            id="myBtn"
            className="fixmo-button d-inline-flex shadow bg-red big"
          >
            Book a service
            <span className="icon icon-long-arrow-right" />
          </a></Link>
        </div>
        <div id="myModal" className="modal">
          {/* Modal content */}
          <div className="modal-content">
            <span className="close">×</span>
            <div className="contact-form style-1">
              <form
                action="enquiry.php"
                method="post"
                acceptCharset="utf-8"
                className="form-submit comment-form wpcf7-form"
              >
                <span className="wpcf7-form-control-wrap your-name">
                  <input
                    type="text"
                    tabIndex={1}
                    id="name"
                    name="name"
                    defaultValue=""
                    className="wpcf7-form-control"
                    placeholder="Full Name"
                    required=""
                  />
                </span>
                <span className="wpcf7-form-control-wrap your-phone">
                  <input
                    type="text"
                    tabIndex={2}
                    id="phone"
                    name="phone"
                    defaultValue=""
                    className="wpcf7-form-control"
                    placeholder="Phone Number"
                    required=""
                  />
                </span>
                <span className="wpcf7-form-control-wrap your-email">
                  <input
                    type="email"
                    tabIndex={3}
                    id="email"
                    name="email"
                    defaultValue=""
                    className="wpcf7-form-control"
                    placeholder="Email Address"
                    required=""
                  />
                </span>
                <span className="wpcf7-form-control-wrap your-subject">
                  <input
                    type="text"
                    tabIndex={4}
                    id="subject"
                    name="subject"
                    defaultValue=""
                    className="wpcf7-form-control"
                    placeholder="Model No. (with device name)"
                    required=""
                  />
                </span>
                <span className="wpcf7-form-control-wrap your-message">
                  <textarea
                    name="message"
                    id="message"
                    tabIndex={5}
                    cols={40}
                    rows={10}
                    className="wpcf7-form-control wpcf7-textarea"
                    placeholder="Explain Your Issue"
                    required=""
                    defaultValue={""}
                  />
                </span>
                <span className="wrap-submit">
                  <button
                    type="submit"
                    className="submit wpcf7-form-control wpcf7-submit"
                    id="submit"
                    name="submit"
                  >
                    Send Message
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="themesflat-spacer clearfix"
    data-desktop={60}
    data-mobile={200}
    data-smobile={60}
  />
</section>

    </div>
  )
}
