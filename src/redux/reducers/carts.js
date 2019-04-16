const initialState = {
    data: [],
    total: 0
}

const carts = (state = initialState, action) => {
    switch(action.type){
        case "GET_CARTS_FULFILLED":
            // alert(JSON.stringify(action.payload.data))
            return {
                data: action.payload.data.data,
                total: action.payload.data.total
            }
        case "ADD_CARTS_FULFILLED":
            alert(JSON.stringify(action.payload.data))
            return {
                // data: action.payload.data.data,
                // total: action.payload.data.total
            }
        default:
            return state
    }
}

export default carts;