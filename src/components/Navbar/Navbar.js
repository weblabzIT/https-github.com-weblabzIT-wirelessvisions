import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [flag, setFlag] = useState(false);
  // const [screen,setScreen]=useState(window.screen.width);
  const [service, setService] = useState(false);
  useEffect(() => {



  }, [])


  const handle = (e) => {


    if (flag) {
      setFlag(false);
      e.target.classList.remove('active')
    }
    else {
      setFlag(true);

      e.target.classList.add('active')
    }

  }
  const showservice = (e) => {


    if (service) {
      setService(false);
      e.target.classList.remove('active')
    }
    else {
      setService(true);

      e.target.classList.add('active')
    }
  }

  return (
    <div>

      <div id="site-header-wrap">
        {/* Header */}
        <header id="site-header">
          <div id="site-header-inner" className="container-fluid p-0">
            <div className="wrap-inner clearfix row">
              <div className="col-md-3 max-logo">
                <div id="site-logo" className="clearfix">
                  <div className="bg-color-logo wrap-logo m-0">
                    <div id="site-log-inner" className="wrap-inner-logo">
           <Link to={'/'}>          <a className="title-logo" >
                        <img
                          src="assets/img/logo/logo.jpg"
                          className="padr-10 "
                          alt="images"
                        />
                      </a> </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /#site-logo */}
              <div className="mobile-button" onClick={handle}>
                <span />
              </div>
              {/* /.mobile-button */}
              <div id="load-reject" className="col-md-6">

                <nav id="main-nav" class="main-nav">
                  <ul id="menu-primary-menu" class="menu">
               <li class="menu-item menu-item-has-children current-menu-item">
               <Link to={'/'}>     <a href="#">Home</a> </Link>
                    </li> 
                    <li class="menu-item menu-item-has-children">
                <Link to={'/aboutus'}>     <a href="#">About Us</a> </Link> 
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="#" class="after-sub">Services</a>
                      <ul class="sub-menu">
              <Link to={'/iphone-smartdevice'}>         <li class="#"><a href="#"> Iphones Repair</a>
                        </li> </Link> 
                     <Link to={'/samsung-smartdevice'}>   <li class="#"><a href="#"> Samsung Phone
                          Repair</a>
                        </li> </Link>
                   <Link to={'/ipad'}>     <li class="#"><a href="#">Ipad Repair</a></li> </Link>
                    <Link to={'/computer-repair'}>    <li class="#"><a href="#">Computer Repair</a> 
                        </li> </Link>
                      </ul>
                    </li>
                   <li class="menu-item menu-item-has-children">
                   <Link to={"/fixed-device"}>      <a href="#">Fixed My Device</a>  </Link>
                    </li> 
                 <li class="menu-item menu-item-has-children">
                 <Link to={'/contact'}>         <a href="#">Contact</a> </Link>
                    </li> 
                  </ul>

                </nav>

                {/* /#main-nav */}
                {/* /#header-search */}
                <div id="header-button">
                  <a
                    href="contact.html"
                    className="fixmo-button d-inline-flex shadow bg-white big"
                  >
                    Book a service
                    <span className="icon icon-long-arrow-right" />
                  </a>
                </div>
                {/* /#header-button */}
              </div>
              <div className="col-md-3 des-mar">
                <div className="wrap-right-bar">
                  <div className="right-bar bg-color-bar">
                    <a className="icons" href="tel:07710931305">
                      <i className="fa fa-phone fa-lg" />
                    </a>
                    <ul className="p-0">
                      <li className="call-us">
                        {" "}
                        <a href="#">Call Us</a>{" "}
                      </li>
                      <li className="number">
                        <a href="tel:07710931305"> 077 109 313 05 </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

    <div id='zone'>
            {flag &&
              <div id="load-reject mobile-navbar" className="col-md-12" >
                <nav id="main-nav-mobi" class="main-nav" >
                  <ul id="menu-primary-menu" class="menu">
                    <li class="menu-item menu-item-has-children current-menu-item">
              <Link to={'/'}>        <a href="#">Home</a> </Link>
                    </li>
                    <li class="menu-item menu-item-has-children">
              <Link to={'/aboutus'}>        <a href="#">About Us</a> </Link>
                    </li>
                    <li class="menu-item menu-item-has-children">
                    <a href="#" class="after-sub">Services</a> 
                      <span class="arrow"></span><span class="arrow" onClick={showservice}></span>
                      {service && <ul class="sub-menu"  >
                        <li class="#"> <Link to={'/iphone-smartdevice'}>  <a href="#"> Iphones Repair</a> </Link>
                        </li>
                        <li class="#"> <Link to={'/samsung-smartdevice'}><a href="#"> Samsung Phone
                          Repair</a> </Link>
                        </li>
                        <li class="#"> <Link to={'/ipad'}><a href="#">Ipad Repair</a> </Link></li>
                        <li class="#"> <Link to={'/computer-repair'}><a href="#">Computer Repair</a> </Link>
                        </li>
                      </ul> }
                    </li>
                    <li class="menu-item menu-item-has-children">
                 <Link to={'/fixed-device'}>     <a href="#">Fixed My Device</a> </Link>
                    </li>
                    <li class="menu-item menu-item-has-children">
                   <Link to={'/contact'}>   <a href="#">Contact</a> </Link>
                    </li>
                  </ul>
                </nav>
              </div>}
              </div>
            {/* right-bar */}

            {/* /.wrap-inner */}
          </div>
          {/* /#site-header-inner */}
        </header>
        {/* /#site-header */}
      </div>

    </div>
  )
}
