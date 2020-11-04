import axios from 'axios'

export const getPizzasThunkMiddleWare = (category, sort) => (dispatch) => {
    dispatch(setLoad(false))
    axios.get(
        `/pizzas${category !== null? `?category=${category}&_sort=${sort}`:`?_sort=${sort}`}`
        )
        .then(res=>{
            dispatch(setPizzas(res.data))
    } )
}

export const setPizzas = (pizzas)=>{
    return (
        {
            type: 'SET_PIZZAS',
            payload: pizzas
        }
    )
}

export const setLoad = (payload)=>{
    return (
        {
            type: 'SET_LOADED',
            payload
        }
    )
}