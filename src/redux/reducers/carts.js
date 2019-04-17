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
            return {

            }

        case "INC_QTY_FULFILLED":
            // alert(action.payload.data.data)
            const newCartInc = state.data.map((val) => {
                if(val.id === action.payload.data.data.id)
                {
                    return action.payload.data.data
                }
                else{
                    return val
                }
            })
            return {
                data: newCartInc,
                total: action.payload.data.total
            }
            
        
        case "DEC_QTY_FULFILLED":
            const newCartDec = state.data.map((val) => {
                if(val.id === action.payload.data.data.id)
                {
                    return action.payload.data.data
                }
                else{
                    return val
                }
            })
            return {
                data: newCartDec,
                total: action.payload.data.total
            }
            
        
        case "TEXT_QTY_FULFILLED":
            const newCartText = state.data.map((val) => {
                if(val.id === action.payload.data.data.id)
                {
                    return action.payload.data.data
                }
                else{
                    return val
                }
            })
            return {
                data: newCartText,
                total: action.payload.data.total
            }

        case "DELETE_ITEM_FULFILLED":
            return {
                data: action.payload.data.data,
                total: action.payload.data.total[0].total
            }

        default:
            return state
    }
}

export default carts;