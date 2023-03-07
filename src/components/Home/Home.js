import React from 'react'
import Banner from './Banner'
import Counter from './Counter'
import Fix from './Fix'
import Service from './Service'
import Trust from './Trust'
import Work from './Work'

export default function Home() {
  return (
    <div>
        <Banner/>
        <Trust/>
        <Fix/>
        <Service/>
        <Counter heading={'Amazing facts about WIRELESS VISION'}/>
        <Work/>
    </div>
  )
}
