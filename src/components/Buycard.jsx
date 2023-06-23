import React from 'react'
import './Buycard.css'

const Buycard = () => {
  return (
    <div className='BuyCard-container'>
        <div className='img-container'>
            <img src="./public" alt="" />
        </div>
        <div className='BuyCard-details'>
            <div className='BuyCard-Titulo'>Standard Cactus</div>
            <div className='BuyCard-Precio'>$20.0</div>
            <span className='BuyCard-Titulo2'>Succulent</span>
            <p className='BuyCard-Reviews'>2 reviews</p>
        </div>
        <div className='Button'>
        </div>
    </div>
  )
}

export default Buycard