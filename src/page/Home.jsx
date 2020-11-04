import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Pizza from '../components/Pizza'
import SkeletonPizzas from '../components/SkeletonPizzas'

import { setCategory} from '../redux/actions/filters'
import { getPizzasThunkMiddleWare } from '../redux/actions/pizzas'



function Home() {

    const dispatch = useDispatch()

    const { category, sort, isLoaded, cardItems, pizzas} = useSelector(({filters,pizzas,card}) => ({
        category: filters.category, 
        sort: filters.sort, 
        isLoaded: pizzas.isLoaded ,
        cardItems: card.items,
        pizzas:pizzas.items
    }))

    const onChangeCategory = (id) => {
        dispatch(setCategory(id))
    }

    React.useEffect(() => {
        dispatch(getPizzasThunkMiddleWare(category, sort))
    }, [dispatch, category, sort])

    const categoryList = ['Z mięsem', 'Wegetariańska ', 'Grill', 'Na ostro','Tradycyjna']
    const sortList = [{name: 'popularności', type: 'rating'}, {name: 'cenie', type: 'price'}, {name: 'alfabetycznie', type: 'name'}]
    
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories items = {categoryList}
                                onChangeCategory = {id => onChangeCategory(id)}
                                activeCategory = {category}
                    />
                    <Sort 
                    items={sortList} 
                    activeSortBy = {sort} />
                </div>
                <h2 className="content__title">Wszystkie pizze</h2>
                <div className="content__items">
                {isLoaded? 
                    pizzas.map((pizzaObj)=>{
                        return <Pizza key = {pizzaObj.id} 
                        {...pizzaObj}
                        cardItemsObj = {cardItems}
                        />
                    })
                    : Array(10).fill(0).map((pizzas, index) => <SkeletonPizzas key = {index}/>)

                }
                </div>
            </div>
        </div>
    )
}

export default Home

