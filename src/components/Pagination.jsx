import React from 'react'

const Pagination = ({setOffset, offset}) => {
  return (
    <div className='pagination'>
        <h3 className='count-offset red'>-50</h3>
        <button className="btn-back" onClick={() => offset >= 50 && setOffset(prev => prev - 50)}>Назад</button>
        <button className="btn-next" onClick={() => setOffset(prev => prev + 50)}>Вперёд</button>
        <h3 className='count-offset'>+50</h3>
    </div>
  )
}

export default Pagination
