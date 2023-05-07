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
import img1 from "../../images/pexels-lara-jameson-8886959.jpg";
import img2 from "../../images/pexels-ron-lach-8311873.jpg";
import img3 from "../../images/pexels-greta-hoffman-9705827.jpg";
import img4 from  "../../images/pexels-gustavo-fring-4005031.jpg"

const Image = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

function LeftWrapper() {
  const imagesArray = [
    { id: "1", href: img1, text: "Photo by Lara Jameson" },
    { id: "2", href: img2, text: "Photo by Ron Lach" },
    { id: "3", href: img3, text: "Photo by Greta Hoffman" },
    { id: "4", href: img4, text: "Photo by Gustavo Fring"}
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
