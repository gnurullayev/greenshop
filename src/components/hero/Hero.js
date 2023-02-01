import React from 'react'
import Container from '../container/Container'
import style from "./hero.module.css"
import img1 from "../../assets/heroimg1.png"
import img2 from "../../assets/heroimg2.png"
import {Swiper, SwiperSlide} from "swiper/react"

import {Autoplay, Pagination} from "swiper";

const Hero = () => {
  return (
    <section className={style.hero}>
        <Container>
            <div className={style.hero_inner}>
                <Swiper 
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                    pagination={{
                        clickable: true,
                        }}
                    modules={[Autoplay,Pagination]} 
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={style.hero_box}>
                            <div className={style.hero_content}>
                                <strong className={style.hero_subtitle}>Welcome to GreenShop</strong>
                                <h2 className={style.hero_title}> 
                                    Let’s Make a Better <span className={style.title_span}>Planet</span>
                                </h2>

                                <p className={style.hero_text}>
                                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                </p>

                                <button className={`${style.hero_btn} btn`}>
                                    SHOP NOW
                                </button>
                            </div>
                            <div className={style.hero_img}>
                                <img className={style.img1} src={img1} alt="Hero img" />
                                <img className={style.img2} src={img2} alt="Hero img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={style.hero_box}>
                        <div className={style.hero_content}>
                            <strong className={style.hero_subtitle}>Welcome to GreenShop</strong>
                            <h2 className={style.hero_title}> 
                                Let’s Make a Better <span className={style.title_span}>Planet</span>
                            </h2>

                            <p className={style.hero_text}>
                                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                            </p>

                            <button className={`${style.hero_btn} btn`}>
                                SHOP NOW
                            </button>
                        </div>
                        <div className={style.hero_img}>
                            <img className={style.img1} src={img1} alt="Hero img" />
                            <img className={style.img2} src={img2} alt="Hero img" />
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={style.hero_box}>
                        <div className={style.hero_content}>
                            <strong className={style.hero_subtitle}>Welcome to GreenShop</strong>
                            <h2 className={style.hero_title}> 
                                Let’s Make a Better <span className={style.title_span}>Planet</span>
                            </h2>

                            <p className={style.hero_text}>
                                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                            </p>

                            <button className={`${style.hero_btn} btn`}>
                                SHOP NOW
                            </button>
                        </div>
                        <div className={style.hero_img}>
                            <img className={style.img1} src={img1} alt="Hero img" />
                            <img className={style.img2} src={img2} alt="Hero img" />
                        </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    </section>
  )
}

export default Hero