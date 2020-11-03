export const setCategory = (id) =>{
    return {
        type: 'SET_CATEGORY',
        payload: id 
    }
}
export const setSortBy = (name) =>{
    return {
        type: 'SET_SORT_BY',
        payload: name 
    }
}