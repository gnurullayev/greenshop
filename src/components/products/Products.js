import React, { useState } from 'react'
import style from "./products.module.css"
import Container from '../container/Container'
import ProductFilter from '../product-filter/ProductFilter'

import img from "../../assets/banner2.png"
import ProductList from '../product-list/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProduct } from '../../redux/reduser/Reduser'

const Products = () => {
  const [post,setPost] = useState({activeCategory: "House Plants", price: "500"})
  const [active,setActive] = useState("all")
  const sortHeader = [
    {title: "All Plants", label: "all"},
    {title: "New Arrivals", label: "new"},
    {title: "Sale", label: "sale"},
  ]

  const {products} = useSelector(state => state)
  const dispatch = useDispatch()

  let newProductsFilter = products.filter(product => (product.category.includes(post.activeCategory) && product.price.slice(1) >= 10 && product.price.slice(1) <= post.price*1))

  const sortProduct = (value) => {
    setActive(value)
    let newFilterProduct = []

    if(value === "all") {
      newFilterProduct = newProductsFilter
    }else {
      if(value === "new"){
        newFilterProduct = newProductsFilter.filter(product => product.newArrival)
      }else {
        newFilterProduct = newProductsFilter.filter(el => el.sale)
      }
    }
    
    dispatch(filteredProduct(newFilterProduct))
  }


  return (
    <section className={style.products}>
        <Container>
            <div className={style.products_inner}>
                <div className={style.products_start}>
                  <ProductFilter post={post} setPost={setPost}/>
                  <img className={style.products_img} src={img} alt="products img" />
                </div>

                <div className={style.products_end}>
                  <ul className={style.header_list}>
                    {
                      sortHeader.map((el,i) => (
                        <li 
                        key={i}
                        className={`${style.header_item} ${ el.label === active ? style.active : ""}`}
                        onClick={() => sortProduct(el.label)}
                        >
                          {el.title}
                        </li>
                      ))
                    }
                    <li className={style.header_item}>
                      <span>Short by:</span>
                      
                      <select className={style.select} name="" id="">
                        <option hidden>Default sorting</option>
                        <option value="big">Big</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </li>
                  </ul>
                  <ProductList/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Products