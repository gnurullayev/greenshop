import React, { useEffect, useState } from 'react'
import style from "./category.module.css"
import {useSelector } from 'react-redux'

const Category = ({post,setPost}) => {
    const [category,setCategory] = useState([])

    const {products} = useSelector(state => state)
    
    useEffect(() => {
      const newCategory = [...new Set(products.map(el => el.category.trim()))]
      setCategory(newCategory)
    }, [])

    // console.log(filterProduct);
      
  return (
    <>
      <h3 className={style.title}>Categories</h3>

      <ul className={style.category_list}>
          {
            category.map((el,i) => (
              <li 
              key={i}
              className={`${style.category_item}`} 
              style={{color: post.activeCategory === el ? "#46A358" : "#3D3D3D"}}
              onClick={() => setPost({...post, activeCategory:el})}>
                <span>{el}</span>
                <span>{`(${products.filter(product => product.category.includes(el)).length})`}</span>
              </li>
            )) 
          }
      </ul>
    </>
  )
}

export default Category