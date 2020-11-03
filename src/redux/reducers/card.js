const initialState = {
   items: {},
   totalPrice: 0,
   totalCount: 0 
}

const card = (state = initialState, action) => {
    switch (action.type){
        case 'SET_CARD':{

            const itemsList = !state.items[action.payload.id]? [action.payload]: [...state.items[action.payload.id].items, action.payload]
            
            const totalPriceOfCurrentPizzas = Object.keys(itemsList).reduce((sum,key) => sum + itemsList[key].price,0)
            
            
            const newState = {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: {
                        items: itemsList,
                        totalPrice: totalPriceOfCurrentPizzas
                    }
                }
            }
            const totalCountOfPizzas = Object.keys(newState.items).reduce((sum, key)=> sum + newState.items[key].items.length, 0);
            const totalPriceOfPizzas =  Object.keys(newState.items).reduce((sum,key) => sum + newState.items[key].totalPrice ,0)
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: {
                        items: itemsList,
                        totalPrice: totalPriceOfCurrentPizzas
                    }
                },
                totalCount: totalCountOfPizzas,
                totalPrice: totalPriceOfPizzas
            }
        }
        case 'REMOVE_ITEM': {
            
            const items = state.items
            const removePizzasPrice = state.items[action.payload].totalPrice
            const  removePizzasCount = state.items[action.payload].items.length
            delete items[action.payload]
            return{
                ...state,
                items,
                totalPrice: state.totalPrice - removePizzasPrice,
                totalCount: state.totalCount - removePizzasCount
            }
        }
        case 'CLEAR_CARD': {
            return{
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0 
            }
        }
        case 'ADD_PIZZA':{
            const newItems = state.items[action.payload].items
            newItems.push(newItems[0])
            const newTotalPizzaPrice = newItems.reduce((sum,obj) => sum + obj.price,0)
            
            return {
                ...state,
                items:{
                    ...state.items,
                    [action.payload]: {
                        items: newItems,
                        totalPrice: newTotalPizzaPrice
                    }
                },
                totalPrice: state.totalPrice + newItems[0].price,
                totalCount: state.totalCount + 1
            }
        }
        case 'MINUS_PIZZA':{
            const newItems = state.items[action.payload].items
            
            if (newItems.length!==1) {
                newItems.pop()
                const newTotalPizzaPrice = newItems.reduce((sum,obj) => sum + obj.price,0)
                return{
                    ...state, 
                    items:{
                        ...state.items,
                        [action.payload]: {
                            items: newItems,
                            totalPrice: newTotalPizzaPrice
                        }
                    },
                    totalPrice: state.totalPrice - newItems[0].price,
                    totalCount: state.totalCount - 1
                    
                }
            }
            else{
                return {
                    ...state,
                }
            }
            
            
        }
        default:
            return state
    }
}

export default card