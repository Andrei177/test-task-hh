import React from 'react'

const Carts = ({children}) => {
  return (
    <div>
        <div className='carts-items'>
        {children}
        </div>
    </div>
  )
}

export default Carts
