import React from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { setCard } from '../redux/actions/card'
import Button from './Button'
function Pizza({ id, imageUrl, name, types, sizes, price, cardItemsObj }) {

    const dispatch = useDispatch()

    const typesList = ['cienkie', 'tradycyjne']
    const sizeList = [26, 30, 40]

    const loadActiveSize = (arr) => {
        if (arr[0] === 26) return 0
        if (arr[0] === 30) return 1
        if (arr[0] === 40) return 2
    }

    const [activeType, setActiveType] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(loadActiveSize(sizes))

    const onSelectType = (id) => {
        setActiveType(id)
    }

    const onSelectSize = (id) => {
        setActiveSize(id)
    }

    const addPizzaToCard = () => {
        const obj = {
            id,
            imageUrl,
            name,
            price,
            type: typesList[activeType],
            size: sizeList[activeSize]
        }
        dispatch(setCard(obj))
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        typesList.map((type, index) => {
                            const liClass = classNames({
                                active: activeType === index,
                                disable: !types.includes(index)
                            })
                            return <li key={type}
                                className={liClass}
                                onClick={() => onSelectType(index)}>{type}</li>
                        })
                    }
                </ul>
                <ul>
                    {
                        sizeList.map((size, index) => {
                            return <li key={index}
                                className={classNames({ active: activeSize === index, disable: !sizes.includes(size) })}
                                onClick={() => onSelectSize(index)}
                            >{size} cm</li>
                        })
                    }
                </ul>
            </div>

            <div className="pizza-block__bottom">
                <div className="pizza-block__price">od {price} zł</div>
                <Button className='button button--outline button--add' onClick={addPizzaToCard}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span  >Dodaj</span>
                    {
                        cardItemsObj[id] ? <i>{cardItemsObj[id].items.length}</i> : null
                    }

                </Button>
            </div>
        </div>
    )
}

export default Pizza
