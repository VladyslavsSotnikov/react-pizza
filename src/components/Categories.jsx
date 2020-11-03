import React from 'react'

function Categories({items, activeCategory,  onChangeCategory}) {

    return (
        <div className="categories">
              <ul>
                <li className={activeCategory === null? 'active': ''} onClick={()=>onChangeCategory(null)}>Wszystkie</li>
                {items.map((item,index)=>{  
                    return <li 
                    key={index} 
                    onClick={()=>onChangeCategory(index)}
                    className = {activeCategory === index? 'active': ''}
                    >{item}</li>
                })}
              </ul>
        </div>
    )
}

export default Categories
