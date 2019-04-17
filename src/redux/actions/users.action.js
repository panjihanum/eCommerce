import axios from 'axios'

const getUser = (username, password) => {
    return {
        type: "GET_USER",
        payload: axios({
            method: 'post',
            url: 'http://192.168.0.51:3333/api/v1/users/login',
            data: {
                "username" : username,
                "password" : password
            }
        })
    }
}

const registerUser = (username, email, password, confirm_password, num_hp) => {
    return {
        type: "REGISTER_USER",
        payload: axios({
            method: 'post',
            url: 'http://192.168.0.51:3333/api/v1/users/register',
            data: {
                "username" : username,
                "email" : email,
                "password" : password,
                "confirm_password": confirm_password,
                "num_hp" : num_hp
            }
        })
    }
}
export {
    getUser,
    registerUser
}