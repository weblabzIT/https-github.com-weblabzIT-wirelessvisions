import React from 'react'
import { Link } from 'react-router-dom'

export default function Suscribe() {
  return (
    <div>
              <div className="container">
        <div className="box-group-1 flex-group wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInDown'}}>
          <div className="group-left">
            <h2 className="title-heading big text-white">Enter Your Mail For subscribe</h2>
          </div>
          <div className="group-right">
            <form action="#" method="post" className="form-submit contact-form wpcf7-form">
              <div className="form-group">
                <input type="email" name="email" className="email" placeholder="Email Address" />
           <Link to={"/contact"}>     <a href="#" className="fixmo-button shadow bg-red">Subscribe</a> </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
