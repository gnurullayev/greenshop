import React from 'react'
import style from "./navbor.module.css"

const Navbor = () => {
  return (
    <ul className={style.navbor_list}>
        <li className={style.navbor_item}>
            <a href="/" className={`${style.navbor_link} ${style.active}`}>Home</a>
        </li>

        <li className={style.navbor_item}>
            <a href="/" className={style.navbor_link}>Shope</a>
        </li>

        <li className={style.navbor_item}>
            <a href="/" className={style.navbor_link}>Plant Care</a>
        </li>

        <li className={style.navbor_item}>
            <a href="/" className={style.navbor_link}>Blogs</a>
        </li>
    </ul>
  )
}

export default Navbor