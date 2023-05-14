import axios from "axios"

export const getBooksService = async() => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
    return response
}