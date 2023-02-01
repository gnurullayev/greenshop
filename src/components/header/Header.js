import React, { useRef, useState } from 'react'
import Container from '../container/Container'
import style from "./header.module.css"
import Navbor from '../navbor/Navbor'
import logo from "../../assets/logo.svg"
import serach from "../../assets/search-icon.svg"
import serachX from "../../assets/searchX.svg"
import bascet from "../../assets/basket-icen.svg"
import logout from "../../assets/Logout.svg"
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../../redux/reduser/Reduser'
import OrderModal from '../modal/OrderModal'

const Header = () => {
  const [active,setActive] = useState(false)
  const inputRef = useRef("")

  const {products,filterProduct,order} = useSelector(state => state)
  const dispatch = useDispatch()

  const changeAktive = () => {
    setActive(!active)
  } 

  const findProduct = () => {
    let newProduct = []
    if(inputRef.current.value !== "") {
      newProduct = products.filter(el => (el.title?.toLowerCase().includes((inputRef.current.value).toLowerCase())));
    }else {
      newProduct = filterProduct;
    }
    
    console.log(newProduct);
    dispatch(searchProduct(newProduct))
  }


  return (
    <header className={style.header}>
      <Container>
        <div className={style.header_inner}>
          <a  className={style.heder_logo} href="/">
            <img src={logo} alt="Logo" />
          </a>

          <Navbor/>
          
          <ul className={style.header_list}>
            <li className={style.list_item}>
              <input 
              className={`${style.search} ${active ? style.active : ""}`} 
              type="text"  
              placeholder='Search'
              ref={inputRef}
              onChange={findProduct}
              />
              <button 
              className={`${style.search_btn} ${style.btn}`} 
              onClick={changeAktive}
              >
                {
                  active
                  ?<img src={serachX} alt="Search" />
                  :<img src={serach} alt="Search" />
                }
                
              </button>
            </li>

            <li className={style.list_item}>
              <button type='button' className={`${style.basket_btn} ${style.btn}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <img src={bascet} alt="Basket" />
                <span className={style.bascet_count}>{order.length}</span>
              </button>

              <OrderModal/>
            </li>

            <li className={style.list_item}>
              <button className={`${style.logout_btn} ${style.btn} btn`}>
                <img src={logout} alt="Logout" />
                <span>Logo</span>
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header