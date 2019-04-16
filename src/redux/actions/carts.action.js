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
        payload:     axios({
                method: "post",
                url: "http://192.168.0.51:3333/api/v1/wishlist/",
                data: {
                    product_id: id,
                    quantity: 1
                }
            })
        }
    }


export {
    getCarts,
    addCarts
}