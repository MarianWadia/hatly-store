import React from "react";
// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategoryDevider from "./pages/home/CategoryDevider";
import Category from "./pages/home/Category";

import phonesImage from "../img/image0-1536x1152.png";
import wahtchImage from "../img/image1-1536x1152.png";
import chargerImage from "../img/image2-1536x1152.png";
import headphonesImage from "../img/image3-1536x1152.png";
import otherImage from "../img/accessories.png";


const categoryArray = [
  {
    name: "Phones",
    img: phonesImage,
    url: 'Mobiles'
  },
  {
    name: "Chargers",
    img: chargerImage,
    url: 'Chargers'
  },
  {
    name: "Smart Watches",
    img: wahtchImage,
    url: 'Smart Watches'

  },
  {
    name: "Headphones",
    img: headphonesImage,
    url: 'Headphones'
  },
  {
    name: "Others",
    img: otherImage,
    url: 'Mobiles'
  }
];

const CategoriesSlider = (props) => {
  SwiperCore.use([Autoplay]);
  console.log(props.number)
  return (
    <Swiper
      breakpoints={{
        0 :{
          slidesPerView : 2
        },
        // 500: {
        //   // width: 576,
        //   slidesPerView: props.number,
        // },
        768: {
          // width: 768,
          slidesPerView: 4,
        },
        // 1200:{
        //   slidesPerView:props.number * 2,
        // }
      }}
      // slidesPerView={3}
      // slidesPerView={4}
      spaceBetween={10}
      autoplay={{
        delay: 1000,
      }}
    >

            {categoryArray.map((category, i) => {
              return <SwiperSlide key={i}  style={{height: "auto" ,  justifyContent: "center" }} align="center">
                <Category category={category}></Category>
              </SwiperSlide>
            })}

    </Swiper>
  );
};

export default CategoriesSlider;
