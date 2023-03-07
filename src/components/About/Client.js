import React from "react";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../node_modules/swiper/modules/autoplay/autoplay.min.css";
import {
  Swiper,
  SwiperSlide,
} from "../../../node_modules/swiper/react/swiper-react";

export default function Client() {
  return (
    <div>
      <section className="row-group-2">
        <div className="wrap-testimonial bg-style-color-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={116}
                  data-mobile={60}
                  data-smobile={60}
                  style={{ height: "60px" }}
                />
                <div
                  className="themesflat-headings style-1 text-center clearfix wow fadeInDown"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0ms",
                    animationName: "fadeInDown",
                  }}
                >
                  <div className="wrap-inner-small">
                    <h5 className="title-heading small text-color-FF4E4E">
                      Client Testimonials
                    </h5>
                  </div>
                  <div className="wrap-inner-big">
                    <h2 className="title-heading big">What our clients say </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={41}
                  data-mobile={41}
                  data-smobile={41}
                  style={{ height: "41px" }}
                />
                <div className="container">
                  <div
                    className="themesflat-carousel-box-style-3 clearfix"
                    data-gap={30}
                    data-column={2}
                    data-column2={2}
                    data-column3={1}
                    data-auto="false"
                  >
                    <div
                      className="owl-carousel owl-theme ew-resize wow fadeInUp owl-loaded owl-drag"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                      style={{
                        visibility: "visible",
                        animationDuration: "1500ms",
                        animationDelay: "0ms",
                        animationName: "fadeInUp",
                      }}
                    >
                      {/* /themesflat-testimonials */}
                      {/* /themesflat-testimonials */}
                      {/* /themesflat-testimonials */}
                      {/* /themesflat-testimonials */}
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: "1226px",
                          }}
                        >
                             <Swiper
            slidesPerView={3}
         
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[]}
          
          >
                      <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "332.8px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials staff-1 background-color-white">
                                <div className="testimonials-item ">
                                  <div className="testimonials-img">
                                    <img
                                      src="assets/img/group/staff-box1@2x.png"
                                      alt="Image"
                                      className="img"
                                    />
                                  </div>
                                  <div className="testimonials-heading">
                                    <p className="heading-name">Alex</p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p>
                                    My PC suffered a major incident that shut
                                    down the Windows operating system and
                                    damaged the hard drive. Mike was able to
                                    diagnose and fix the fault, recover my
                                    recent unsaved files, install a new hard
                                    drive and reconfigure my system. Mike gave
                                    this a high priority and worked evenings and
                                    a Sunday to resolve the problem. My thanks
                                    for his professional and ‘can do’ attitude
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "332.8px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials background-color-white">
                                <div className="testimonials-item">
                                  <div className="testimonials-img">
                                    <img
                                      src="assets/img/group/staff-box2@2x.png"
                                      alt="Image"
                                      className="img"
                                    />
                                  </div>
                                  <div className="testimonials-heading padl-30">
                                    <p className="heading-name">Emily</p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p>
                                    Popped to this shop on a whim hoping I could
                                    book in a repair for my smashed screen on my
                                    Iphone 7. The guy ended up doing it there
                                    and then and for a reasonable price. Got a
                                    new shock proof case so it didn't happen
                                    again. Great little place just past the
                                    station.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "332.8px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials staff-1 background-color-white">
                                <div className="testimonials-item ">
                                  <div className="testimonials-img">
                                    <img
                                      src="assets/img/group/staff-box1@2x.png"
                                      alt="Image"
                                      className="img"
                                    />
                                  </div>
                                  <div className="testimonials-heading">
                                    <p className="heading-name">Alex</p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p>
                                    My PC suffered a major incident that shut
                                    down the Windows operating system and
                                    damaged the hard drive. Mike was able to
                                    diagnose and fix the fault, recover my
                                    recent unsaved files, install a new hard
                                    drive and reconfigure my system. Mike gave
                                    this a high priority and worked evenings and
                                    a Sunday to resolve the problem. My thanks
                                    for his professional and ‘can do’ attitude
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "332.8px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials background-color-white">
                                <div className="testimonials-item">
                                  <div className="testimonials-img">
                                    <img
                                      src="assets/img/group/staff-box2@2x.png"
                                      alt="Image"
                                      className="img"
                                    />
                                  </div>
                                  <div className="testimonials-heading padl-30">
                                    <p className="heading-name">Emily</p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p>
                                    Popped to this shop on a whim hoping I could
                                    book in a repair for my smashed screen on my
                                    Iphone 7. The guy ended up doing it there
                                    and then and for a reasonable price. Got a
                                    new shock proof case so it didn't happen
                                    again. Great little place just past the
                                    station.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <div className="owl-prev disabled">prev</div>
                        <div className="owl-next disabled">next</div>
                      </div>
                      <div className="owl-dots disabled">
                        <div className="owl-dot active">
                          <span />
                        </div>
                      </div>
                      <div className="owl-thumbs">
                        <button className="owl-thumb-item active">
                          <img
                            src="assets/img/group/staff-box1@2x.png"
                            alt="Image"
                          />
                        </button>
                        <button className="owl-thumb-item">
                          <img
                            src="assets/img/group/staff-box2@2x.png"
                            alt="Image"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* /.themesflat-carousel-box */}
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={185}
                    data-mobile={100}
                    data-smobile={100}
                    style={{ height: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
