import React from "react";
//@mui
import { styled } from "@mui/material";
//library
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
//css
import "swiper/css/effect-fade";
import "swiper/css";
//images
import img1 from "../../images/online-shopping.jpg";
import img2 from "../../images/shop1.jpg";
import img3 from "../../images/shop1.jpg";

const Image = styled("img")({
  objectFit: "fill",
  width: "100%",
  height: "100%",
});

function LeftWrapper() {
  const imagesArray = [
    { id: "1", href: img1 },
    { id: "2", href: img2 },
    { id: "3", href: img3 },
  ];

  return (
    <div style={{ width: "50%", height: "100vh" }}>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{ height: "100%" }}
        effect="fade"
        modules={[Autoplay, EffectFade]}
      >
        {imagesArray.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.href}
              alt={img.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LeftWrapper;
