import React, { useState } from 'react'
import Container from '../container/Container'
import postImg1 from "../../assets/post-img1.png"
import postImg2 from "../../assets/post-img2.png"
import postImg3 from "../../assets/post-img3.png"
import postImg4 from "../../assets/post-img4.png"
import arrow from "../../assets/Arrow - Right.svg"
import style from "./posts.module.css"

const Posts = () => {
    const [posts,setPosts] = useState([
        {
            id: 1,
            img: postImg1,
            time: "September 12  I Read in 6 minutes",
            title:"Cactus & Succulent Care Tips",
            desc:"Cacti are succulents are easy care plants for any home or patio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        },
        {
            id: 2,
            img: postImg2,
            time: "September 13  I Read in 2 minutes",
            title:"Top 10 Succulents forYour Home",
            desc:"Best in hanging baskets. Prefers medium to high light.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        },
        {
            id: 3,
            img: postImg3,
            time: "September 15  I Read in 3 minutes",
            title:"Cacti & Succulent Care Tips",
            desc:"Cacti and succulents thrive in containers and because most are.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        },
        {
            id: 4,
            img: postImg4,
            time: "September 15  I Read in 2 minutes",
            title:"Best Houseplants Room by Room",
            desc:"The benefits of houseplants are endless. In addition to. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus at nihil esse aut possimus?",
            readMore: false,
        }
    ])

    const changePosts = (id) => {
        const postsChange = posts.map(el => {
            if(el.id === id) {
                return {
                    ...el,
                    readMore: !el.readMore,
                }
            }
            return el
        }) 

        setPosts(postsChange)
    }
  return (
    <section className={style.posts}>
        <Container>
            <div className={style.posts_inner}>
                <h3 className={style.posts_title}>Our Blog Posts</h3>
                <p className={style.posts_desc}>
                    We are an online plant shop offering a wide range of cheap and trendy plants. 
                </p>

                <ul className={style.posts_list}>
                    {
                        posts.map(el => (
                            <li className={style.posts_item} key={el.id}>
                                <div className={style.card}>
                                    <div className={style.card_img}>
                                        <img className={style.img} src={el.img} alt={el.title}  />
                                    </div>
                                    <div className={style.card_body}>
                                        <p className={style.cart_time}>{el.time}</p>
                                        <h4 className={style.card_title}>{el.title}</h4>
                                        <p className={`${style.card_desc} ${el.readMore ? style.active : ""}`}>
                                            {el.readMore ? el.desc : el.desc.slice(0,78) + "..." }
                                        </p>
                                        {
                                        el.readMore 
                                        ?
                                        null
                                        :(
                                            <button className={style.card_btn} onClick={() => changePosts(el.id)}>
                                            <span>Read More</span>
                                            <img src={arrow} alt="Arrow icon" />
                                        </button>
                                        )
                                        }
                                        
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Container>
    </section>
  )
}

export default Posts