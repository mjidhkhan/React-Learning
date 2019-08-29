
export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addBY =(num)=>{
    return {
        type: 'ADD_BY',
        payload: num
    }
}