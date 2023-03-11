import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"

const Services = () => {
  return (
    <div className='Services'>
        <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} interval={1000}>
        <div>
            <img src={image3} alt='hello world'/>
            <p className='legend'>Full Stack Development</p>
        </div>
        <div>
            <img src={image4} alt='hello world'/>
            <p className='legend'>Peer-to-Peer</p>
        </div>
        </Carousel>
    </div>
  )
}

export default Services