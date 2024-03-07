import React from 'react'

const Pagination = ({upOffset, downOffset, offset}) => {
  return (
    <div className='pagination'>
        <h3 className='count-offset red'>-50</h3>
        <button className="btn-back" onClick={() => offset >= 50 && downOffset()}>Назад</button>
        <button className="btn-next" onClick={() => upOffset()}>Вперёд</button>
        <h3 className='count-offset'>+50</h3>
    </div>
  )
}

export default Pagination
