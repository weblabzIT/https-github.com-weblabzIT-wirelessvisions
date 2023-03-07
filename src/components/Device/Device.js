import React from 'react'

export default function Device() {
  return (
    <div>
         <div id="main-content" className="site-main clearfix">
        <div id="content-wrap">
          <div id="site-content" className="site-content clearfix">
            <div id="inner-content" className="inner-content-wrap">
              <div className="page-content">
                {/* Banner */}
                <section className="fixmo-banner">
                  <div className="container-fluid p-0">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="wrap-banner">
                          <img className="img-banner" src="assets/img/banner/fixed-it.jpg" alt="images" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={0} style={{height: '0px'}} />
                </section>
                {/* End Banner */}
                {/* Contact */}
                <section className="row-contact">
                  <div className="container">
                    <div className="themesflat-spacer clearfix" data-desktop={100} data-mobile={60} data-smobile={60} style={{height: '60px'}} />
                    <div className="row">
                      <div className="col-md-3" />
                      <div className="col-md-6" style={{paddingBottom:'50px'}}>
                        <div id="contactform" className="themesflat-headings contact clearfix" noValidate="novalidate">
                          <div className="wrap-inner-small">
                            <h5 className="title-heading small m-0">Get in touch</h5>
                          </div>
                          <div className="wrap-inner-big">
                            <h2 className="title-heading big">GET A QUOTE CONTACT US TO RESOLVE YOUR PROBLEM</h2>
                          </div>
                          <div className="contact-form style-1">
                            <form action="enquiry.php" method="post" acceptCharset="utf-8" className="form-submit comment-form wpcf7-form">
                              <span className="wpcf7-form-control-wrap your-name">
                                <input type="text" tabIndex={1} id="name" name="name"  className="wpcf7-form-control" placeholder="Full Name" required />
                              </span>
                              <span className="wpcf7-form-control-wrap your-phone">
                                <input type="text" tabIndex={2} id="phone" name="phone"  className="wpcf7-form-control" placeholder="Phone Number" required />
                              </span>
                              <span className="wpcf7-form-control-wrap your-email">
                                <input type="email" tabIndex={3} id="email" name="email"  className="wpcf7-form-control" placeholder="Email Address" required />
                              </span>
                              <span className="wpcf7-form-control-wrap your-phone">
                                <input type="text" tabIndex={4} id="model" name="model"  className="wpcf7-form-control" placeholder="Model No." required />
                              </span>
                              <span className="wpcf7-form-control-wrap your-message">
                                <textarea name="message" id="message" tabIndex={5} cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" placeholder="Explain Your Issue" required defaultValue={""} />
                              </span>
                              <span className="wrap-submit">
                                <button type="submit" className="submit wpcf7-form-control wpcf7-submit" id="submit" name="submit">Submit</button>
                              </span>
                            </form>
                          </div>                                                 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="themesflat-spacer clearfix" data-desktop={118} data-mobile={60} data-smobile={60} style={{height: '60px'}} />
                </section>
                {/* End Contact */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
