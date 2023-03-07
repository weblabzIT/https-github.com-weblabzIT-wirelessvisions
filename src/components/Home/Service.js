import React,{useState} from 'react'

export default function Service() {
 const [list,setList]=useState({
  id1:'list',
  id2:'list',
  id3:'list active',
  id4:'list',
  id5:'list',
  id6:'list',
  id7:'list',
  id8:'list',
  id9:'list',
  id10:'list',
 })
  return (
    <div>
        <section className="flat-row flat-about2">
  <div className="container">
    <div className="themesflat-headings style-1 text-center clearfix">
      <div className="wrap-inner-small">
        <h5 className="title-heading small">Our Services</h5>
      </div>
      <div className="wrap-inner-big">
        <h2 className="title-heading big mart-22">
          We Fix All Devices, All Problems
        </h2>
      </div>
    </div>
    <div
      className="themesflat-spacer clearfix"
      data-desktop={27}
      data-mobile={27}
      data-smobile={27}
    />
    <div className="row">
      <div className="col-md-12">
        <div className="flat-tabs about-us" data-effect="fadeIn">
          <ul className="menu-tab">
            <li className={list.id1} id='list1' onClick={()=>{
                setList({
                  id1:'active',
                  id2:'list',
                  id3:'list ',
                  id4:'list',
                  id5:'list',
                  id6:'list',
                  id7:'list',
                  id8:'list',
                  id9:'list',
                  id10:'list',
                })
            }} >
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/screen-replace.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Screen Replacement</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={list.id2} id='list2'  onClick={()=>{
              setList({
                id1:'list',
                id2:'active',
                id3:'list ',
                id4:'list',
                id5:'list',
                id6:'list',
                id7:'list',
                id8:'list',
                id9:'list',
                id10:'list',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/battery.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Battery Replacement</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.themesflat-icon-box */}
            </li>
            <li className={list.id3} id='list3'  onClick={()=>{
              setList({
                id1:'list',
                id2:'list',
                id3:'active',
                id4:'list',
                id5:'list',
                id6:'list',
                id7:'list',
                id8:'list',
                id9:'list',
                id10:'list',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2 ">
                      <img src="./assets/icon/audio.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Audio Jack Service</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={list.id4} id='list4'  onClick={()=>{
              setList({
                id1:'list',
                id2:'list',
                id3:'list ',
                id4:'active',
                id5:'list',
                id6:'list',
                id7:'list',
                id8:'list',
                id9:'list',
                id10:'list',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/loud-speaker.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Loudspeaker Service</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.themesflat-icon-box */}
            </li>
            <li className={list.id5} id='list5'  onClick={
              ()=>{
                setList({
                  id1:'list',
                  id2:'list',
                  id3:'list ',
                  id4:'list',
                  id5:'active',
                  id6:'list',
                  id7:'list',
                  id8:'list',
                  id9:'list',
                  id10:'list',
                })
  
              }
            }>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/micro-phone.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Microphone Service</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={list.id6} id='list6'  onClick={()=>{
              setList({
                id1:'list',
                id2:'list',
                id3:'list ',
                id4:'list',
                id5:'list',
                id6:'active',
                id7:'list',
                id8:'list',
                id9:'list',
                id10:'list',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/button.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Damaged Button</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={list.id7} id='list7'  onClick={()=>{
              setList({
                id1:'list',
                id2:'list',
                id3:'list ',
                id4:'list',
                id5:'list',
                id6:'list',
                id7:'active',
                id8:'list',
                id9:'list',
                id10:'list',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/temp.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Phone Overheating</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={list.id8} id='list8'  onClick={()=>{
              setList({
                id1:'list',
                id2:'list',
                id3:'list ',
                id4:'list',
                id5:'list',
                id6:'list',
                id7:'list',
                id8:'active',
                id9:'list',
                id10:'list',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/charging.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Charging Issue</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={list.id9} id='list9'  onClick={()=>{
              setList({
                id1:'list',
                id2:'list',
                id3:'list ',
                id4:'list',
                id5:'list',
                id6:'list',
                id7:'list',
                id8:'list',
                id9:'active',
                id10:'list',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/drop.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Water Damage</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={list.id10} id='list10'  onClick={()=>{
              setList({
                id1:'list',
                id2:'list',
                id3:'list ',
                id4:'list',
                id5:'list',
                id6:'list',
                id7:'list',
                id8:'list',
                id9:'list',
                id10:'active',
              })

            }}>
              <div className="themesflat-icon-box style-1 has-icon icon-right w65 clearfix">
                <div className="icon-box-item clearfix">
                  <div className="inner">
                    <div className="thumb data-effect-item style-2">
                      <img src="./assets/icon/laptop.png" alt="" />
                    </div>
                    <div className="text-wrap">
                      <h3 className="title-icon">Laptop Service</h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/* /.menu-tab */}
          {/* /.content-tab */}
        </div>
        {/* /.flat-tabs */}
      </div>
      {/* /col-md-12 */}
    </div>
    <div
      className="themesflat-spacer clearfix"
      data-desktop={5}
      data-mobile={5}
      data-smobile={5}
    />
    {/* /.row */}
  </div>
  {/* /.container */}
</section>

    </div>
  )
}
