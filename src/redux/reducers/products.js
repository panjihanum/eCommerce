const initialState = {
    data: []
}

const products = (state = initialState, action) => {
    switch(action.type){
        case "GET_PRODUCTS_FULFILLED":
            return {data: action.payload.data.rows};
        case "GET_PRODUCTS_BY_ID_FULFILLED":
            alert(JSON.stringify(action.payload.data))
            return {data: action.payload.data}
        default:
            return state;
    }
}

export default products;