import React,{useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function Counter({heading}) {
  const [counteron,setCounterOn]=useState(false);
	console.log('=========>',counteron)
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>{setCounterOn(false)}}>
    <div>
        <section className="row-group-1">
  <div className="container-fluid">
    <div className="row" >
      <div className="col-md-4">
        <div className="wrap-blog-img wow fadeInLeft">
          <img src="assets/img/group/blog-1.jpg" alt="images" />
        </div>
      </div>
      <div className="col-md-8" style={{paddingTop:'60px'}}>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={25}
          data-mobile={60}
          data-smobile={60}
        />
        <div className="wrap-group-title">
          <div className="title-group wow fadeInRight">
            <h2 className="title-heading big text-white wow fadeInRight">
              {heading}
            </h2>
          </div>
          <div
            className="themesflat-spacer clearfix"
            data-desktop={33}
            data-mobile={30}
            data-smobile={30}
          />
          <div className="container-fluid">
            <div className="wrap-group-item wow fadeInUp">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="themesflat-content-box clearfix"
                    data-margin="0 0 0 0"
                    data-mobilemargin="15px 0 15px 0"
                  >
                    <div className="fixmo-group style-1 align-center clearfix">
                      <div className="group-item">
                        <div className="inner">
                          <div className="text-wrap">
                            <div className="icon-wrap">
                              <span className="icon-Forma-1" />
                            </div>
                            <div className="number-wrap">
                              <span
                                className="number"
                                data-speed={2000}
                                data-to={35}
                                data-inviewport="yes"
                              >
                              	{
				counteron && 
				<CountUp start={0} end={35000} duration={2} delay={0}/>
			}
                              </span>
                            </div>
                            <h6 className="text-white">Happy Customers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.themesflat-counter */}
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="themesflat-content-box clearfix"
                    data-margin="0 0 0 0"
                    data-mobilemargin="15px 0 15px 0"
                  >
                    <div className="fixmo-group style-1 align-center clearfix">
                      <div className="group-item">
                        <div className="inner">
                          <div className="text-wrap">
                            <div className="icon-wrap">
                              <span className="icon-Forma-2" />
                            </div>
                            <div className="number-wrap">
                              <span
                                className="number"
                                data-speed={2000}
                                data-to={541}
                                data-inviewport="yes"
                              >
                               	{
				counteron && 
				<CountUp start={0} end={451} duration={2} delay={0}/>
			}
                              </span>
                              <span className="suffix">+</span>
                            </div>
                            <h6 className="text-white">Project Done</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.themesflat-counter */}
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="themesflat-content-box clearfix"
                    data-margin="0 0 0 0"
                    data-mobilemargin="15px 0 15px 0"
                  >
                    <div className="fixmo-group style-1 align-center clearfix">
                      <div className="group-item">
                        <div className="inner">
                          <div className="text-wrap">
                            <div className="icon-wrap">
                              <span className="icon-Forma-3" />
                            </div>
                            <div className="number-wrap">
                              <span
                                className="number"
                                data-speed={2000}
                                data-to={678}
                                data-inviewport="yes"
                              >
                              	{
				counteron && 
				<CountUp start={0} end={678} duration={2} delay={0}/>
			}
                              </span>
                              <span className="suffix" />
                            </div>
                            <h6 className="text-white">Client Works</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.themesflat-counter */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    </div>
  </div>
</section>

    </div>
    </ScrollTrigger>
  )
}
