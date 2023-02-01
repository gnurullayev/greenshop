import React from 'react'
import Container from '../container/Container'
import style from "./footer.module.css"
import img1 from "../../assets/footer-img1.png"
import img2 from "../../assets/footer-img2.png"
import img3 from "../../assets/footer-img3.png"
import logo from "../../assets/logo.svg"
import pay from "../../assets/footer-pay.svg"
import instagram from "../../assets/Instagram.svg"
import facebook from "../../assets/Facebook.svg"
import linkiden from "../../assets/Linkedin.svg"
import twitter from "../../assets/Twitter.svg"
import youtube from "../../assets/Union.svg"

const Footer = () => {
  return (
    <footer className={style.footer}>
        <Container>
            <div className={style.footer_inner}>
                <div className={style.footer_start}>
                    <ul className={style.start_list}>
                        <li className={style.start_item}>
                            <div className={style.card}>
                                <div className={style.card_img}>
                                    <img className={style.img} src={img3} alt="img"/>
                                </div>
                                <div className={style.card_body}>
                                    <strong className={style.cart_title}>Garden Care</strong>
                                    <p className={style.card_desc}>
                                        We are an online plant shop offering a wide range of cheap and trendy plants.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className={style.start_item}>
                            <div className={style.card}>
                                <div className={style.card_img}>
                                    <img className={style.img} src={img2} alt=""  />
                                </div>
                                <div className={style.card_body}>
                                    <strong className={style.cart_title}>Plant Renovation</strong>
                                    <p className={style.card_desc}>
                                        We are an online plant shop offering a wide range of cheap and trendy plants.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className={style.start_item}>
                            <div className={style.card}>
                                <div className={style.card_img}>
                                    <img className={style.img} src={img1} alt=""  />
                                </div>
                                <div className={style.card_body}>
                                    <strong className={style.cart_title}>Watering Graden</strong>
                                    <p className={style.card_desc}>
                                        We are an online plant shop offering a wide range of cheap and trendy plants.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className={style.start_item}>
                            <div className={style.start_search}>
                                <p className={style.searc_question}>Would you like to join newsletters?</p>
                                <div className={style.group}>
                                    <input className={style.search_input} type="text" placeholder='enter your email address...'/>
                                    <button className={style.search_btn}>Join</button>
                                </div>
                                <div className={style.desc}>
                                    We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={style.footer_middle}>
                    <ul className={style.middle_list}>
                        <li className={style.middle_item}>
                           <a  className="logo" href="/">
                            <img src={logo} alt="Logo" />
                           </a>
                        </li>

                        <li className={style.middle_item}>
                           <span className={style.middle_item_span}> 70 West Buckingham Ave. Farmingdale, NY 11735</span>
                        </li>

                        <li className={style.middle_item}>
                            contact@greenshop.com
                        </li>

                        <li className={style.middle_item}>
                            +88 01911 717 490
                        </li>

                    </ul>
                </div>
                <div className={style.footer_end}>
                    <ul className={style.end_list}>
                        <li className={style.end_item}>
                            <strong className={style.title}>My Account</strong>
                            
                            <ul className={style.account_list}>
                                <li className={style.account_item}>
                                    <a className={style.link} href="/">My Account</a>
                                </li>

                                <li className={style.account_item}>
                                    <a className={style.link} href="/">Our stores</a>
                                </li>

                                <li className={style.account_item}>
                                    <a className={style.link} href="/"> Contact us</a>
                                </li>

                                <li className={style.account_item}>
                                    <a className={style.link} href="/">Career</a>
                                </li>

                                <li className={style.account_item}>
                                    <a className={style.link} href="/"> Specials</a>
                                </li>
                            </ul>
                        </li>

                        <li className={style.end_item}>
                            <strong className={style.title}>Help & Guide</strong>

                            <ul className={style.help_list}>
                                <li className={style.help_item}>
                                    <a className={style.link} href="/">Help Center</a>
                                </li>

                                <li className={style.help_item}>
                                    <a className={style.link} href="/">How to Buy</a>
                                </li>

                                <li className={style.help_item}>
                                    <a className={style.link} href="/">Shipping & Delivery</a>
                                </li>

                                <li className={style.help_item}>
                                    <a className={style.link} href="/">Product Policy</a>
                                </li>

                                <li className={style.help_item}>
                                    <a className={style.link} href="/">How to Return</a>
                                </li>
                            </ul>
                        </li>

                        <li className={style.end_item}>
                            <strong className={style.title}>Categories</strong>

                            <ul className={style.categories_list}>
                                <li className={style.categories_item}>
                                    <a className={style.link} href="/">House Plants</a>
                                </li>

                                <li className={style.categories_item}>
                                    <a className={style.link} href="/">Potter Plants</a>
                                </li>

                                <li className={style.categories_item}>
                                    <a className={style.link} href="/">Seeds</a>
                                </li>

                                <li className={style.categories_item}>
                                    <a className={style.link} href="/">Small Plants</a>
                                </li>

                                <li className={style.categories_item}>
                                    <a className={style.link} href="/">Accessories</a>
                                </li>
                            </ul>
                        </li>

                        <li className={style.end_item}>
                            <strong className={style.title}>Social Media</strong>

                            <ul className={style.media_list}>
                                <li className={style.media_item}>
                                    <a className={style.media_link} href="/">
                                        <img src={facebook} alt="Facebook" />
                                    </a>
                                </li>

                                <li className={style.media_item}>
                                    <a className={style.media_link} href="/">
                                        <img src={instagram} alt="Instagram" />
                                    </a>
                                </li>

                                <li className={style.media_item}>
                                    <a className={style.media_link} href="/">
                                        <img src={twitter} alt="Twitter" />
                                    </a>
                                </li>

                                <li className={style.media_item}>
                                    <a className={style.media_link} href="/">
                                        <img src={linkiden} alt="Linkiden" />
                                    </a>
                                </li>

                                <li className={style.media_item}>
                                    <a className={style.media_link} href="/">
                                        <img src={youtube} alt="Youtube" />
                                    </a>
                                </li>
                            </ul>

                            <strong className={`${style.title} ${style.accept}`}>We accept</strong>
                            <img src={pay} alt="Payme" />
                        </li>
                    </ul>

                    <p className={style.about}>© {new Date().getFullYear()} GreenShop. All Rights Reserved.</p>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer