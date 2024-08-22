import "./Banner.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import {Autoplay, Scrollbar} from "swiper/modules";
import img1 from "../../../assets/black_headphones.png";
import img2 from "../../../assets/blue_headphones.png";


const Banner = () => {
  return <>
  <div className="banner_main ">
  <Swiper
  Scrollbar={{
    hide: true,
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={{Autoplay, Scrollbar}}
  className="mySwiper"
  >
    <SwiperSlide>
        <div className="container-fluid Banner_1 py-5">
            <div className="container gx-0">
                <div className="row gx-0 align-items-center">
                    <div
                    className="col-md-12 col-lg-6"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                        <div className="banner_col1 pt-md-4">
                            <h6 className="Main_Lable pb-3"><i className="fa-solid fa-star"></i>Top products of The Month</h6>
                            <h1>
                                Micropack MHP Headphone Balck

                            </h1>
                            <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aliquam. Veniam ullam omnis</p>
                            <div className="banner_btns">
                                <button className="main_btn">Shop Now</button>

                            </div>

                        </div>

                    </div>
                    <div 
                    className="col-md-12 col-lg-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                        <div className="banner_col2">
                            <img src={img1} className="img-fluid" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="container-fluid banner_2 py-5">
            <div className="container gx-0">
                <div className="row gx-0 align-items-center">
                    <div
                    className="col-md-12 col-lg-6 order-md-2"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                        <div className="banner_col1 pt-md-4">
                            <h6 className="Main_Lable pb-3"><i className="fa-solid fa-star"></i>Top products of The Month</h6>
                            <h1>
                                Micropack MHP Headphone Balck

                            </h1>
                            <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aliquam. Veniam ullam omnis</p>
                            <div className="banner_btns">
                                <button className="main_btn">Shop Now</button>

                            </div>

                        </div>

                    </div>
                    <div 
                    className="col-md-12 col-lg-6 order-md-1"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    >
                        <div className="banner_col2">
                            <img src={img2} className="img-fluid" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>

    

  </Swiper>
  </div>
  {/* <div className="Banner">
    <div className="container gx-0">
        <div className="row gx-0">



        </div>
    </div>
  </div> */}
  </>
  
}

export default Banner

