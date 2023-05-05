import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper'
import img1 from '../../images/online-shopping.jpg';
import img2 from '../../images/shop1.jpg';

import "swiper/css";

//fade animation for slides
//image fit
//add 3 images

function LeftWrapper() {
  const imagesArray = [
    {
      id: '1',
      href: img1,
    },
    {
      id: '2',
      href: img2,
    }
  ]

  return (
    <div style={{ backgroundColor: "pink", width: "50vw", height: "100vh" }}>
      <Swiper
         spaceBetween={30}
 
  autoplay= {{
      delay: 2500,
      disableOnInteraction: false,
  }}
        
         modules={[Autoplay]}
      >
      
        {imagesArray.map((img) => <SwiperSlide id={img.id}><img style={{width: '100%'}} src={img.href}/></SwiperSlide>)}
        
      </Swiper>
    </div>
  );
}

export default LeftWrapper;
