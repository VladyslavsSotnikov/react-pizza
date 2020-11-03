import { combineReducers } from 'redux'
import filters from './filtes'
import pizzas from './pizzas'
import card from './card'

const rootReducers = combineReducers({filters,pizzas, card })

export default rootReducers