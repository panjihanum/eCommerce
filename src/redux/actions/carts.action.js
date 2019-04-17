import axios from 'axios'

const getCarts = () => {
    return {
        type: "GET_CARTS",
        payload: axios({
            method:"get",
            url: "http://192.168.0.51:3333/api/v1/wishlist/"
        })
    }
}

const addCarts = id => {

    return {
        type: "ADD_CARTS",
        payload: axios({
                method: "post",
                url: "http://192.168.0.51:3333/api/v1/wishlist/",
                data: {
                    product_id: id,
                    quantity: 1
                }
            })
        }
    }

const incQty = (qty, id) => {
    return {
        type: "INC_QTY",
        payload: axios({
            method: "patch",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + id,
            data:{
                quantity: qty + 1
            }
        })
    }
}

const decQty = (qty, id) => {
    return {
        type: "DEC_QTY",
        payload: axios({
            method: "patch",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + id,
            data:{
                quantity: qty - 1
            }
        })
    }
}

const textQty = (val, id) => {
    return {
        type: "TEXT_QTY",
        payload: axios({
            method: "patch",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + id,
            data:{
                quantity: val
            }
        })
    }
}

const deleteCarts = id => {
    return {
        type: "DELETE_ITEM",
        payload: axios({
            method: "delete",
            url: "http://192.168.0.51:3333/api/v1/wishlist/" + id,
        })
    }
}

export {
    getCarts,
    addCarts,
    incQty,
    decQty,
    textQty,
    deleteCarts
}