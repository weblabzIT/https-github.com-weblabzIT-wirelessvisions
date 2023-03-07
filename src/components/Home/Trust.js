import React from 'react'
import { Link } from 'react-router-dom'
export default function Trust() {
  return (
    <div>
        <section className="row-services">
  <div className="container par-ser">
    <div className="row mr-0 wow rollIn">
      <div className="col-md-12 pr-0 wow fadeInDown center">
        <div className="themesflat-headings style-1 text-center clearfix">
          <div className="wrap-inner-small">
            <h5 className="title-heading small">Why Choose Us</h5>
          </div>
          <div className="wrap-inner-big">
            <h2 className="title-heading big">Experts Trusted Us</h2>
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
    <div
      className="themesflat-spacer clearfix"
      data-desktop={16}
      data-mobile={0}
      data-smobile={0}
    />
    <div className="row wrap-row-services">
      <div className="col-md-4">
        <div
          className="themesflat-image-box style-1 has-icon icon-right w65 clearfix wow fadeInUp"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="image-box-item clearfix">
            <div className="inner">
              <div className="thumb data-effect-item">
                <img src="assets/img/services/service-1.jpg" alt="Image" />
                <div className="overlay-effect bg-color-accent" />
              </div>
              <div className="text-wrap">
                <div className="row m-0">
                  <div className="col-md-3">
                    <div className="icon">
                      <span className="icon-phonendoscope" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="title">
                      <h4 className="title-heading big">
                  <Link to={"/iphone-smartdevice"}>      <a href="#">Mobile Repair</a> </Link>
                      </h4>
                      <p className="title-small mb-0">
                        we repair all branded smartphones &amp; iPhones
                      </p>
                    </div>
                    <div className="frame-button">
                    <Link to={"/iphone-smartdevice"}>      <a
                        href="#"
                        className="fixmo-button  btn-font-1"
                      >
                        Read More
                        <span className="icon">
                          <i className="fa fa-arrow-right" />
                        </span>
                      </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.themesflat-image-box */}
      </div>
      <div className="col-md-4">
        <div
          className="themesflat-image-box style-1 has-icon icon-right w65 clearfix wow fadeInUp"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <div className="image-box-item clearfix">
            <div className="inner">
              <div className="thumb data-effect-item owl-2">
                <img src="assets/img/services/service-2.jpg" alt="Image" />
                <div className="overlay-effect bg-color-accent" />
              </div>
              <div className="text-wrap">
                <div className="row m-0">
                  <div className="col-md-3">
                    <div className="icon owl-2">
                      <span className="icon-smartphone-broken" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="title">
                      <h4 className="title-heading big">
                    <Link to={'/ipad'}>    <a href="#">Ipad Repair</a> </Link>
                      </h4>
                      <p className="title-small mb-0">
                        we offer service for iPads screens
                      </p>
                    </div>
                    <div className="frame-button">
                    <Link to={'/ipad'}>       <a href="#" className="fixmo-button  btn-font-1">
                        Read More
                        <span className="icon">
                          <i className="fa fa-arrow-right" />
                        </span>
                      </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.themesflat-image-box */}
      </div>
      <div className="col-md-4">
        <div
          className="themesflat-image-box style-1 has-icon icon-right w65 clearfix wow fadeInUp"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="image-box-item clearfix">
            <div className="inner">
              <div className="thumb data-effect-item owl-3">
                <img src="assets/img/services/service-3.jpg" alt="Image" />
                <div className="overlay-effect bg-color-accent" />
              </div>
              <div className="text-wrap">
                <div className="row m-0">
                  <div className="col-md-3">
                    <div className="icon owl-3">
                      <span className="icon-laptop-technology" />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="title owl-3">
                      <h4 className="title-heading big">
                 <Link to={'/computer-repair'}>       <a href="#">Laptop Repair</a> </Link>
                      </h4>
                      <p className="title-small mb-0">
                        We service all brand laptops &amp; PC
                      </p>
                    </div>
                    <div className="frame-button">
                    <Link to={'/computer-repair'}>       <a href="#" className="fixmo-button  btn-font-1">
                        Read More
                        <span className="icon">
                          <i className="fa fa-arrow-right" />
                        </span>
                      </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.themesflat-image-box */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
