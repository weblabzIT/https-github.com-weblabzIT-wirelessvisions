import React from "react";

export default function Form() {
  return (
    <div>
      <section className="row-contact">
        <div className="container">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={100}
            data-mobile={60}
            data-smobile={60}
            style={{ height: "60px" }}
          />
          <div className="row">
            <div className="col-md-4">
              <div className="themesflat-headings contact clearfix">
                <div className="wrap-inner-small">
                  <h5 className="title-heading small m-0">Get in touch</h5>
                </div>
                <div className="wrap-inner-big">
                  <h2 className="title-heading big">Write Us a Message</h2>
                  <p className="title-small">
                    Just send us your questions or concerns by starting a new
                    case and we will give you the help you need. 
                  </p>
                </div>
                <div className="contact-social">
                  <ul className="widget-social">
                    <li className="item-social">
                      <a href="https://www.facebook.com/wirelessvision.ltd/">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="item-social">
                      <a href="https://www.instagram.com/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li className="item-social">
                      <a href="https://www.linkedin.com/company/wireless-vission">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8" style={{ paddingBottom: "50px" }}>
              <div className="contact-form style-1">
                <form
                  action="send.php"
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
                      className="wpcf7-form-control"
                      placeholder="Full Name"
                      required
                    />
                  </span>
                  <span className="wpcf7-form-control-wrap your-phone">
                    <input
                      type="text"
                      tabIndex={2}
                      id="phone"
                      name="phone"
                      className="wpcf7-form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </span>
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="email"
                      tabIndex={3}
                      id="email"
                      name="email"
                      className="wpcf7-form-control"
                      placeholder="Email Address"
                      required
                    />
                  </span>
                  <span className="wpcf7-form-control-wrap your-subject">
                    <input
                      type="text"
                      tabIndex={4}
                      id="subject"
                      name="subject"
                      className="wpcf7-form-control"
                      placeholder="Subject"
                      required
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
                      placeholder="Your Message"
                      required
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
          <div
            className="themesflat-spacer clearfix"
            data-desktop={118}
            data-mobile={60}
            data-smobile={60}
            style={{ height: "60px" }}
          />
        </div>
      </section>
    </div>
  );
}
