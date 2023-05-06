import React from "react";
//library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
//css
import "swiper/css/effect-fade";
import "swiper/css";
//images
import img1 from "../../images/online-shopping.jpg";
import img2 from "../../images/shop1.jpg";

//image fit
//add 3 images

function LeftWrapper() {
  const imagesArray = [
    {
      id: "1",
      href: img1,
    },
    {
      id: "2",
      href: img2,
    },
    { id: "3", 
      href: img1
    }
  ];

  return (
    <div style={{ backgroundColor: "pink", width: "50vw", height: "100vh" }}>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
      >
        {imagesArray.map((img) => (
          <SwiperSlide key={img.id}>
            <img style={{ width: "100%" }} src={img.href} alt={img.id}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LeftWrapper;
