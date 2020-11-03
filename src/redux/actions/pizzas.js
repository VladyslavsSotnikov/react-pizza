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