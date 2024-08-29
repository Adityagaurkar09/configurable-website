import React from 'react'
import "./Foodcard.css"
import { THEME } from '../../config/data'

function FoodCard({imgUrl,title,description,price}) {
  return (
    <div className='food-card'>
        <img 
        src={imgUrl}
        className='food-card-img'
        alt='food'/>

        <h1 className='food-title'style={{color:THEME.text}}>{title}</h1>

        <p>{description}</p>

        {
            price ?
            <p className='food-card-price'>
            $ {price}    
            </p>
            :"Not Available" 
        }

        <button className='food-card-button' style={{backgroundColor:THEME.button}}>
            BUY NOW
        </button>

    </div>
  )
}

export default FoodCard