import axios from "axios";
import { ActionSheet } from "native-base";

const getProducts = () => {
    return {
        type:"GET_PRODUCTS",
        payload: axios({
            method: "get",
            url: "http://192.168.0.51:3333/api/v1/products"
        })
    }
}

const getProductsById = id => {
    return {
        type: "GET_PRODUCTS_BY_ID",
        payload: axios({
            method: "get",
            url: "http://192.168.0.51:3333/api/v1/products/" + id
        })
    }
}
export {
    getProducts,
    getProductsById
}