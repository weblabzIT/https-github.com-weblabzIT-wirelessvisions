import React from "react";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../node_modules/swiper/modules/autoplay/autoplay.min.css";
import {
  Swiper,
  SwiperSlide,
} from "../../../node_modules/swiper/react/swiper-react";
import { Pagination, Autoplay } from "swiper";
export default function Work() {
  return (
    <div>
      <section className="row-group-2">
        <div className="container">
          <div className="wrap-step">
            <div className="row">
              <div className="col-md-12 p-0">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={35}
                  data-mobile={50}
                  data-smobile={50}
                  style={{ height: "50px" }}
                />
                <div
                  className="themesflat-headings style-1 text-center clearfix wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="wrap-inner-small">
                    <h5 className="title-heading small m-0">
                      our work process
                    </h5>
                  </div>
                  <div className="wrap-inner-big">
                    <h2 className="title-heading big">How Does It Works</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={23}
              data-mobile={30}
              data-smobile={30}
              style={{ height: "30px" }}
            />
            <div className="themesflat-row gutter-30 clearfix">
              <div className="col span_1_of_4 padding-col">
                <div
                  className="themesflat-icon-box icon-left accent-color style-left clearfix wow fadeInLeft"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="icon-wrap">
                    <span className="transform-1 icon-mobile-error" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="services.html">Step 1. Tell us your Issue</a>
                    </h5>
                    <p className="sub-heading" />
                  </div>
                </div>
                {/* /.themesflat-icon-box */}
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={24}
                  data-mobile={35}
                  data-smobile={35}
                  style={{ height: "35px" }}
                />
                <div
                  className="themesflat-icon-box icon-left accent-color style-left clearfix wow fadeInLeft"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="icon-wrap">
                    <span className="transform-2 icon-repair-messages" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="services.html">Step 3.Bring or courier device</a>
                    </h5>
                    <p className="sub-heading" />
                  </div>
                </div>
                {/* /.themesflat-icon-box */}
              </div>
              {/* /.col-md-4 */}
              <div className="col span_1_of_4">
                <div
                  className="themesflat-img-box wrap-img wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <img src="assets/img/group/group-2.jpg" alt="images" />
                </div>
              </div>
              {/* /.col-md-4 */} 
              <div className="col span_1_of_4">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={5}
                  data-mobile={35}
                  data-smobile={35}
                  style={{ height: "35px" }}
                />
                <div
                  className="themesflat-icon-box icon-left accent-color style-right clearfix wow fadeInRight"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="icon-wrap">
                    <span className="transform-3 icon-smartphone-repair" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="services.html">Step 2.Get repair estimate</a>
                    </h5>
                    <p className="sub-heading" />
                  </div>
                </div>
                {/* /.themesflat-icon-box */}
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={24}
                  data-mobile={35}
                  data-smobile={35}
                  style={{ height: "35px" }}
                />
                <div
                  className="themesflat-icon-box icon-left accent-color style-right clearfix wow fadeInRight"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="icon-wrap">
                    <span className="transform-2 icon-shiny-new-phone" />
                  </div>
                  <div className="text-wrap">
                    <h5 className="heading">
                      <a href="services.html">Step 4.Get Your Device</a>
                    </h5>
                    <p className="sub-heading" />
                  </div>
                </div>
                {/* /.themesflat-icon-box */}
              </div>
              {/* /.col-md-4 */}
            </div>
            {/* /.row */}
          </div>
        </div>
        <div className="wrap-testimonial background-color-052336">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={100}
                  data-mobile={60}
                  data-smobile={60}
                  style={{ height: "60px" }}
                />
                <div
                  className="themesflat-headings style-1 text-center clearfix wow fadeInDown"
                  style={{ visibility: "visible", animationName: "fadeInDown" }}
                >
                  <div className="wrap-inner-small">
                    <h5 className="title-heading small text-white">
                      Client Testimonials
                    </h5>
                  </div>
                  <div className="wrap-inner-big">
                    <h2 className="title-heading big text-white">
                      What our clients say{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={40}
                  data-mobile={40}
                  data-smobile={40}
                  style={{ height: "40px" }}
                />
                <div className="container">
                  <div
                    className="themesflat-carousel-box-style-3 ew-resize clearfix"
                    data-gap={30}
                    data-column={2}
                    data-column2={2}
                    data-column3={1}
                    data-auto="false"
                  >
                    <div
                      className="owl-carousel owl-theme wow fadeInDown owl-loaded owl-drag"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInDown",
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
                            width: "1160px",
                           
                          }}
                        >
                           <Swiper
            slidesPerView={3}
          autoplay={{
            delay:5500,
          }}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[]}
           
          >
             <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "360px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials staff-1">
                                <div className="testimonials-item ">
                                  <div className="testimonials-heading">
                                    <p className="heading-name text-white">
                                      Alex
                                    </p>
                                    <p className="heading-woker text-white"></p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p className="text-white">
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
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "360px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials">
                                <div className="testimonials-item">
                                  <div className="testimonials-heading padl-30">
                                    <p className="heading-name text-white">
                                      Emily
                                    </p>
                                    <p className="heading-woker text-white"></p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p className="text-white">
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
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item"
                            style={{ width: "360px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials staff-1">
                                <div className="testimonials-item ">
                                  <div className="testimonials-heading">
                                    <p className="heading-name text-white">
                                      Eugene Freeman
                                    </p>
                                    <p className="heading-woker text-white">
                                      Tincidunt
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p className="text-white" />
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item"
                            style={{ width: "360px", marginRight: "30px" }}
                          >
                            <div className="themesflat-testimonials style-2 align-center clearfix">
                              <div className="wrap-testimonials">
                                <div className="testimonials-item">
                                  <div className="testimonials-heading padl-30">
                                    <p className="heading-name text-white">
                                      Kelly Coleman
                                    </p>
                                    <p className="heading-woker text-white">
                                      Nulla nec
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials-sub-title">
                                  <p className="text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="owl-nav">
                        <div className="owl-prev disabled">prev</div>
                        <div className="owl-next">next</div>
                      </div>
                      <div className="owl-dots">
                        <div className="owl-dot active">
                          <span />
                        </div>
                        <div className="owl-dot">
                          <span />
                        </div>
                      </div>
                      <div className="owl-thumbs">
                        <button className="owl-thumb-item active">
                          <img src="undefined" alt="undefined" />
                        </button>
                        <button className="owl-thumb-item">
                          <img src="undefined" alt="undefined" />
                        </button>
                        <button className="owl-thumb-item">
                          <img src="undefined" alt="undefined" />
                        </button>
                        <button className="owl-thumb-item">
                          <img src="undefined" alt="undefined" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* /.themesflat-carousel-box */}
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={160}
                    data-mobile={60}
                    data-smobile={60}
                    style={{ height: "60px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-protfolio">
          <div className="container-fluid p-0">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={23}
              data-mobile={0}
              data-smobile={0}
              style={{ height: "0px" }}
            />
            <div
              className="carousel-image clearfix wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={0}
                    data-mobile={60}
                    data-smobile={60}
                    style={{ height: "60px" }}
                  />
                  <div
                    className="themesflat-carousel-img clearfix"
                    data-gap={25}
                    data-column={5}
                    data-column2={3}
                    data-column3={2}
                    data-auto="false"
                  >
                    <div className="owl-carousel owl-theme owl-loaded owl-drag">
                      {/* /themesflat-img */}
                      {/* /themesflat-img */}
                      {/* /themesflat-img */}
                      {/* /themesflat-img */}
                      {/* /themesflat-img */}
                      <div className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(-966px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: "3867px",
                          }}
                        >
                                  <Swiper
            slidesPerView={5}
        
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[]}
          >
            <SwiperSlide className="mySwiper" >
                          <div
                            className="owl-item cloned"
                            style={{ width: "297.2px", marginRight: "5px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-4"
                                      src="assets/img/group/protfolio4.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide >
                          <div
                            className="owl-item cloned"
                            style={{ width: "297.2px", marginRight: "5px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-5"
                                      src="assets/img/group/protfolio5.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item cloned"
                            style={{ width: "297.2px", marginRight: "2px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-4"
                                      src="assets/img/group/protfolio4.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-1"
                                      src="assets/img/group/protfolio1.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-2"
                                      src="assets/img/group/protfolio2.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item active"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1  align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-3"
                                      src="assets/img/group/protfolio3.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-4"
                                      src="assets/img/group/protfolio4.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-5"
                                      src="assets/img/group/protfolio5.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-4"
                                      src="assets/img/group/protfolio4.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item cloned"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-1"
                                      src="assets/img/group/protfolio1.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item cloned"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1 align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-2"
                                      src="assets/img/group/protfolio2.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          <SwiperSlide>
                          <div
                            className="owl-item cloned"
                            style={{ width: "297.2px", marginRight: "25px" }}
                          >
                            <div className="themesflat-img style-1  align-center clearfix">
                              <div className="img-item">
                                <div className="inner">
                                  <div className="wrap-img">
                                    <img
                                      className="img-3"
                                      src="assets/img/group/protfolio3.jpg"
                                      alt="images"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div></SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="owl-nav">
                        <div className="owl-prev">prev</div>
                        <div className="owl-next">next</div>
                      </div>
                      <div className="owl-dots">
                        <div className="owl-dot active">
                          <span />
                        </div>
                        <div className="owl-dot">
                          <span />
                        </div>
                      </div>
                      <div className="owl-thumbs">
                        <button className="owl-thumb-item active">
                          <img
                            src="assets/img/group/protfolio1.jpg"
                            alt="images"
                          />
                        </button>
                        <button className="owl-thumb-item">
                          <img
                            src="assets/img/group/protfolio2.jpg"
                            alt="images"
                          />
                        </button>
                        <button className="owl-thumb-item">
                          <img
                            src="assets/img/group/protfolio3.jpg"
                            alt="images"
                          />
                        </button>
                        <button className="owl-thumb-item">
                          <img
                            src="assets/img/group/protfolio4.jpg"
                            alt="images"
                          />
                        </button>
                        <button className="owl-thumb-item">
                          <img
                            src="assets/img/group/protfolio5.jpg"
                            alt="images"
                          />
                        </button>
                        <button className="owl-thumb-item">
                          <img
                            src="assets/img/group/protfolio4.jpg"
                            alt="images"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* /.themesflat-carousel-box */}
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={58}
                    data-mobile={60}
                    data-smobile={60}
                    style={{ height: "60px" }}
                  />
                </div>
                {/* /.col-md-12 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.themesflat-carousel-box */}
          </div>
        </div>
      </section>
    </div>
  );
}
