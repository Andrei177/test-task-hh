import { nanoid } from 'nanoid'
import React from 'react'

const ChoiceFilter = ({title, items, setSelect, select, type}) => {
  return (
    <>
        {/* <h2 style={{display: "inline-block"}}>{title}</h2> */}
        <div className='choice-area'>
        {
            items.map(item => 
                <h3 
                    key={nanoid()}
                    className='filter-item' 
                    style={{background: select.value == item ? "rgb(0, 202, 0)" : "white"}} 
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
