export const setCard = (objPizza) =>{
    return {
        type: 'SET_CARD',
        payload: objPizza
    }
}

export const removeCardItem = (id) =>{
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const clearCard = () =>{
    return {
        type: 'CLEAR_CARD',
    }
}

export const addPizza = (id) =>{
    return{
        type: 'ADD_PIZZA',
        payload: id
    }
}

export const minusPizza = (id) =>{
    return{
        type: 'MINUS_PIZZA',
        payload: id
    }
}