import React from 'react'
import { Link } from 'react-router-dom'
export default function Laptop() {
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
                <section className style={{paddingBottom:'50px'}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="themesflat-spacer clearfix" data-desktop={120} data-mobile={60} data-smobile={60} style={{height: '60px'}} />
                        <div className="themesflat-headings  text-center clearfix">
                          <div className="wrap-inner-big">
                            <h2 className="title-heading big">Computer Repair</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/imac.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Apple Mac Repair</h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#" className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/acer-lap.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Laptop Repair</h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#"  className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/screen-replace.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Screen Repalcement</h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#"  className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/battery.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Battery Replacement</h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#" className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/keyboard.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Keyboard Replacement</h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#"  className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/touchpad.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Touchpad Replacement</h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#"  className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/hard-drive.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Hard Drive Replacement</h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#"  className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="hovereffect">
                          <img className="img-responsive" src="./assets/img/computer/software-update.png" alt="" />
                          <div className="content">
                           <Link to={"/contact"} > <a href="#">
                              <h3>Software troubleshooting </h3>
                            </a></Link>
                          </div>
                          <div className="frame-button">
                           <Link to={"/contact"} > <a href="#"  className="fixmo-button d-inline-flex shadow bg-red big-2">
                              Get A Quote
                              <span className="icon icon-long-arrow-right" />
                            </a></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={118} data-mobile={60} data-smobile={60} style={{height: '60px'}} />
                  </div>
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
