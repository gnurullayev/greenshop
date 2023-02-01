import React, { useState } from 'react'
import Container from '../container/Container'
import style from "./trend-flower.module.css"
import arrow from "../../assets/Arrow - Right1.svg"
import img1 from "../../assets/trend-img1.1.png"
import img2 from "../../assets/trend-img1.2.png"

const TrendFlower = () => {
    const [active,setActive] = useState("")

    const changeActive = (val) => {
        setActive(val)
    }

  return (
    <section className={style.trend_flover}>
        <Container>
            <div className={style.trend_flower_inner}>
                <div className={`${style.trend_flower_box} ${style.box}`}>
                    <div className={`${style.box_img} ${style.box_img1}`}>
                        <img src={img1} alt="" className={style.img} />
                    </div>
                    <div className={style.box_content}>
                        <h3 className={style.box_title}>Summer cactus & succulents</h3>
                        <p className={`${style.box_desc} ${active === "content1" ? style.active : ""}`}>
                            We are an online plant shop offering a wide range of cheap and trendy plants
                            We are an online plant shop offering a wide range of cheap and trendy plants
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est sunt quos perferendis dicta? Tempora, aperiam delectus maxime est molestiae architecto.
                        </p>

                        <button className={`${style.btn} btn`} onClick={() => changeActive("content1")}>
                            <span>Find More</span>
                            <img src={arrow} alt="Arrow right" />
                        </button>
                    </div>
                </div>

                <div className={`${style.trend_flower_box} ${style.box}`}>
                    <div className={`${style.box_img} ${style.box_img2}`}>
                        <img src={img2} alt="" className={style.img} />
                    </div>
                    
                    <div className={style.box_content}>
                        <h3 className={style.box_title}>Summer cactus & succulents</h3>
                        <p className={`${style.box_desc} ${active === "content2" ? style.active : ""}`}>
                            We are an online plant shop offering a wide range of cheap and trendy plants
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est sunt quos perferendis dicta? Tempora, aperiam delectus maxime est molestiae architecto.
                        </p>

                        <button className={`${style.btn} btn`} onClick={() => changeActive("content2")}>
                            <span>Find More</span>
                            
                            <span className={style.arrow_box}>
                                <img  src={arrow} alt="Arrow right" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default TrendFlower