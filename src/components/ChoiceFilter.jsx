import { nanoid } from 'nanoid'
import React from 'react'

const ChoiceFilter = ({title, items, setSelect, select, type}) => {
  return (
    <>
        <div className='choice-area'>
        {
            items.map(item => 
                <h3 
                    key={nanoid()}
                    className='filter-item' 
                    style={{background: select.value == item ? "rgb(255, 225, 0)" : "white"}} 
                    onClick={() => setSelect({value: item, type: type})}
                >
                    {item}
                </h3>
            )
        }
        </div>
    </>
  )
}

export default ChoiceFilter
