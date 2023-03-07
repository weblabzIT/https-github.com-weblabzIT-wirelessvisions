import React from 'react'
import Branch from './Branch'
import Form from './Form'
import Map from './Map'
export default function Contact() {
  return (
    <div>
         <section className="fixmo-banner">
        <div className="container-fluid p-0">
          <div className="row m-0 wrap-height">
            <div className="col-md-5 col-left-banner-all">
              <div className="wrap-banner-left wrap-page">
                <div className="name-page">
                  <h2 className="title-heading big text-white">Contact</h2>
                  <p className="name title-small mb-0"><a className="name title-small space" href="index.html">Home</a> Contact</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-right-banner-all">
              <div className="wrap-banner-right">
                <img className="img-banner" src="assets/img/banner/banner-370.jpg" alt="images" />
              </div>
            </div>
          </div>
        </div>
        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={0} style={{height: '0px'}} />
      </section>
      <Branch/>
      <Map/>
      <Form/>
    </div>
  )
}
