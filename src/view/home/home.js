import React from 'react'
import "./home.css"

import FoodCard from '../../component/foodcard/Foodcard'
import {PRODUCTS,MAIN_TITLE,THEME} from './../../config/data'



function home() {
  return (
    <div>
        <h1 className='main-title' style={{color:THEME.highlight , margin:0}}>
          {MAIN_TITLE}</h1>
<div className='dairy-container'>

  {PRODUCTS.map((foodItem)=>{
    return <FoodCard 
        imgUrl={foodItem.imgUrl}
        description = {foodItem.description}
        price = {foodItem.price}
        />
      })}


    </div>
    </div>
  )
}

export default home