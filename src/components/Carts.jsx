import React from 'react'

const Carts = ({children}) => {
  return (
    <div className='container'>
    <h1 style={{textAlign: "center", fontFamily: 'sans-serif'}}>Список товаров</h1>
        <div className='carts-items'>
        {children}
        </div>
    </div>
  )
}

export default Carts
