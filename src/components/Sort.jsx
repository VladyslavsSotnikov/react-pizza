import React from 'react'
import { useDispatch } from 'react-redux'

import { setSortBy } from '../redux/actions/filters'

function Sort({items, activeSortBy}) {
    const dispatch = useDispatch()
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    // const [activeSortBy, setActiveSortBy] = React.useState(0)
    const sortRef = React.useRef()

    const onClickPopup = () =>{
        setVisiblePopup(!visiblePopup)
    }

    const onChangeSort = (name) =>{
        dispatch(setSortBy(name))
        setVisiblePopup(false)
    }

    const onClickOutside = (e) =>{
        if(!e.path.includes(sortRef.current)){
            setVisiblePopup(false)
        }
    }

    React.useEffect(()=>{
        document.body.addEventListener('click',onClickOutside)
    })


    return (
        <div className="sort" onClick={onClickPopup} ref ={sortRef}>
              <div className="sort__label">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className ={visiblePopup?'rotate':''}
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Sortuj według:</b>
                <span>{items.filter(obj => obj.type === activeSortBy)[0].name}</span>
              </div>
              {
                  visiblePopup === true ? <div className="sort__popup">
                  <ul>
                    {items.map((obj,index) => {
                        return  <li key = {index} 
                                    className={activeSortBy === obj.type?'active':''} 
                                    onClick = {()=>onChangeSort(obj.type)}>{obj.name}
                                </li>
                    })}
                  </ul>
                </div>
                : ''
              }
              
            </div>
    )
}

export default Sort
