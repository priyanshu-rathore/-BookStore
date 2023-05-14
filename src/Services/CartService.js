import axios from 'axios'

let headerConfig = {
    headers:{
        "x-access-token":localStorage.getItem("accessToken")
    }
}

export const addCartItemService = async(data) => {
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${data}`,data,headerConfig)
    return response
}

export const getCartItemService = async() => {
    let response = await axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',headerConfig)
    return response
}

export const modifyCartItemService = async(id,data) => {
    let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,data,headerConfig)
    return response
}

export const removeItemCartService = async(id) => {
    let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,headerConfig)
    return response
}

export const addAddressService = async(data) => {
    let response = await axios.put('https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user',data,headerConfig)
    return response
}

export const placeOrderService = async(data) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order',data,headerConfig)
    return response
}