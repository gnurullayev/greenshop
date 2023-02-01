import React, { useState } from 'react'
import style from "./product-list.module.css"
import arrovRight from "../../assets/arrov-right.svg"
import { useSelector } from 'react-redux'
import ItemProduct from '../item-product/ItemProduct'

const ProductList = () => {
  const [nextSlide,setNextSlide] = useState(0);
  const [index,setIndex] = useState(1);
  
  const {renderProduct} = useSelector(state => state)
  
  const changeSlide = () => {
    if(index*182 < 180*renderProduct.length/4) {
      setNextSlide(prev => prev + 180)
      setIndex(prev => prev + 1)
    }
  }
  
  const paginationArr = []
  const maxPag = Math.ceil(renderProduct.length / 9)
  
  for(let i = 1; i <= maxPag; i++) {
    paginationArr.push(i)
  }

  const changePagination = (num) => {
    setIndex(num)
  }

  return (
    <>
      <ul className={style.product_list}>
        {
          renderProduct.slice(index * 9 - 9, index * 9).map(el => (
            <ItemProduct {...el} key={el.id}/>
          ))
        }
      </ul>

      {
        renderProduct.length > 9
        ?(
          <div className={style.pagination_box} style={{width: 45 * maxPag > 215 ? "215px": (maxPag) * 45 + "px"}}>
            <ul className={style.pagination_list} style={{transform: `translateX(-${nextSlide}px)`}}>
              {
                paginationArr.map(el => (
                  <li 
                  className={`${style.pagination_item} ${el === index ? style.active : ""}`} 
                  key={el}
                  onClick={() => changePagination(el)}
                  >
                    {el}
                  </li>
                ))
              }
            </ul>

            {
              45 * maxPag > 215 
              && 
              (<button className={style.next_slide} onClick={changeSlide}>
                <img src={arrovRight} alt="" />
              </button>) 
            }

            
          </div>
        )
        :
        null
      }
      
    </>

  )
}

export default ProductList