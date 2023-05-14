export const addCartItem = () => {
    return{
        type:'ADD_CART_ITEM'
    }
}

export const getCartItem = () => {
    return{
        type:'GET_CART_ITEM'
    }
}

export const cartItemQuantity = () => {
    return {
        type:'CART_ITEM_QUANTITY'
    }
}

export const removeCartItem = () => {
    return {
        type:'REMOVE_CART_ITEM'
    }
}