import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

const SwiperCards = () => {
  return (
    <div className="max-h-full">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-2">
            <img width="600" height="600" src="images/1.jpg" alt="" />
            <h2 className="px-2">Titulo #1</h2>
            <p className="px-2">descripcion</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-2">
            <img width="600" src="images/2.jpg" alt="" />
            <h2 className="px-2">Titulo #1</h2>
            <p className="px-2">descripcion</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-2">
            <img width="600" src="images/3.jpg" alt="" />
            <h2 className="px-2">Titulo #1</h2>
            <p className="px-2">descripcion</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-2">
            <img width="600" src="images/4.jpg" alt="" />
            <h2 className="px-2">Titulo #1</h2>
            <p className="px-2">descripcion</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-2">
            <img width="600" src="images/5.jpg" alt="" />
            <h2 className="px-2">Titulo #1</h2>
            <p className="px-2">descripcion</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-2">
            <img width="600" src="images/6.jpg" alt="" />
            <h2 className="px-2">Titulo #1</h2>
            <p className="px-2">descripcion</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-2">
            <img width="600" src="images/8.jpg" alt="" />
            <h2 className="px-2">Titulo #1</h2>
            <p className="px-2">descripcion</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCards;
