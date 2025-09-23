// Carousole component
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from "prop-types";

const Carousole = ({ images }) => {
    return (
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
            className="mySwiper"
        >
            {images.map((url, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={url}
                        alt={`Slide ${index}`}
                        style={{ width: "100%", height: "auto" }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

Carousole.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousole;