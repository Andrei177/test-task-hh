import md5 from 'md5'
import React from 'react'

const Cart = ({cart}) => {
  return (
    <div className='cart-item'>
      <h2>{cart.id}</h2>
      <h2 className="cart-item__title">{cart.product}</h2>
      {cart.brand && <h2 className='cart-title_brand'>{cart.brand}</h2>}
      <h2 className='cart-item__price'>{cart.price}</h2>
    </div>
  )
}

export default Cart
