import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ServiceCard from "./ServiceCard.jsx";

const ServicesCarousel = ({ services, handleBook }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Available Services</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        autoplay={{
          delay: 2000, // slide every 2s
          disableOnInteraction: false, // keeps sliding after user interaction
        }}
        loop={true} // infinite loop
        breakpoints={{
          640: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}
        className="pb-10"
      >
        {services.map((service) => (
          <SwiperSlide key={service._id}>
            <ServiceCard service={service} onBook={handleBook} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesCarousel;
