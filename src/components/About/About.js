import React from 'react'
import Counter from '../Home/Counter'
import Choose from './Choose'
import Client from './Client'
import Suscribe from './Suscribe'

export default function About() {
  return (
    <div>
         <section className="fixmo-banner">
        <div className="container-fluid p-0">
          <div className="row m-0 wrap-height">
            <div className="col-md-5 col-left-banner-all">
              <div className="wrap-banner-left wrap-page">
                <div className="name-page">
                  <h2 className="title-heading big text-white">About Us</h2>
                  <p className="name title-small mb-0"><a className="name title-small space" href="index.html">Home</a> About Us</p>
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
        <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} style={{height: '60px'}} />
      </section>
      <Choose/>
      <Counter heading={'Amazing facts about Fixmo'}/>
      <Suscribe/>
      <Client/>
    </div>
  )
}
