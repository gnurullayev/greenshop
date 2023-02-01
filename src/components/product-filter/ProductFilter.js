import React, { useEffect, useState } from 'react'
import style from "./product-filter.module.css"
import Category from '../category/Category'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProduct } from '../../redux/reduser/Reduser'

const ProductFilter = ({post,setPost}) => {
    const [size,setSize] = useState([])

    const {products, } = useSelector(state => state)
    const dispatch  = useDispatch() 

    const newFilterProduct = products.filter(product => (product.category.includes(post.activeCategory) && product.price.slice(1) >= 10 && product.price.slice(1) <= post.price*1))

    useEffect(() => {
        const newSize = [...new Set(products.map(el => el.size))]
        setSize(newSize)

        dispatch(filteredProduct(newFilterProduct))
    },[])

    const changeFilter = () => {
        dispatch(filteredProduct(newFilterProduct))
    }


  return (
    <ul className={style.filter_box}>
        <li>
            <Category post={post} setPost={setPost}/>
        </li>

       <li>
            <h3 className={style.title}>Price Range</h3>

            <div className={style.price_content}>
                <label htmlFor="range">
                    <input 
                    className={style.input_range} 
                    type="range" 
                    id='range' 
                    min={10} 
                    max={1000}
                    value={post.price}
                    step={5}
                    onChange={(e) => setPost({...post, price: e.target.value})}
                    />
                </label>

                <strong className={style.price}>Price: <span className={style.price_count}>$10 - ${post.price * 1}</span></strong>

                <button className={`${style.btn} btn`} onClick={changeFilter}>filter</button>
            </div>
       </li>

       <li>
            <h3 className={style.title}>Size</h3>

            <ul className={style.category_list}>
            {
                size.map((el,i) => (
                    <li className={`${style.category_item}` } key={i}>
                        <span>{el}</span>
                        <span>{`(${products.filter(product => product.size === el).length})`}</span>
                    </li>
                ))
            }
            </ul>
       </li>
    </ul>
  )
}

export default ProductFilter