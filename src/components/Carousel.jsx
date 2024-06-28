// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

// import images

import car1 from "../assets/images/carousel1.jpg";
import car2 from "../assets/images/carousel2.jpg";
import car3 from "../assets/images/carousel3.jpg";

const Carousel = () => {
  return (
    <div className='my-16 px-16 mx-36'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <Slide
            img={car1}
            text='Get Your Developments Projects Done in minutes'></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={car2}
            text='Get Your Web Design Projects Done in minutes'></Slide>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Slide
            img={car3}
            text='Get Your Digital Marketing Projects Done in minutes'></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
