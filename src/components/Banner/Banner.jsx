
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Autoplay, Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../assets/pexels-alex-green-5699456.jpg';
import img2 from '../../assets/pexels-cottonbro-4098369.jpg';
import img3 from '../../assets/pexels-nappy-935977.jpg'
const Banner = () => {
    return (
        
            <div className="w-full max-w-6xl mx-auto mt-6">
                <Swiper
            modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-xl"
      >
        <SwiperSlide>
          <div className="relative h-[400px]"><img src={img1} alt="" className="w-full  object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
      <h2 className="text-xl md:text-3xl font-bold px-4">Get to Know Your Career</h2>
    </div>
  </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px]">
        <img src={img2} alt="" className="w-full h-[400px] object-cover"/>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
      <h2 className="text-xl md:text-3xl font-bold px-4">Register Now for Expert Guidance</h2>
    </div>
  </div></SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px]">
        <img src={img3} alt="" className="w-full h-[400px] object-cover"/>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
      <h2 className="text-xl md:text-3xl font-bold px-4">Discover the Right Path for You</h2>
    </div>
  </div></SwiperSlide>
      

            </Swiper>
            </div>
        
    );
};

export default Banner;