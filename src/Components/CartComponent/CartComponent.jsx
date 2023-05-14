import React, { useEffect, useState } from 'react'
import "./CartComponent.css"
import bookImg from "../../Assets/Image 36.png"
import AddToCartCounter from '../AddToCartCounter/AddToCartCounter'
import { removeItemCartService } from '../../Services/CartService'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid } from '@mui/material';

const CartComponent = ({cartItem,getCartItem,setDisplay,getOrderCartItem}) => {
    const book = cartItem.product_id

    const removeItem = async(id) => {
    let response = await removeItemCartService(id)
    await getCartItem()
    // console.log(response)
    }

    const [placeOrder,setPlaceOrder] = useState(false)

    


    // console.log(book)
  return (
    <Grid className="cart-component" style={{padding:'1rem 2rem',height:'10rem',width:'90%',marginBottom:'1rem'}}>
        
        <Grid className="cart-component-middle" >
            <img src={bookImg} alt="" />
            <Grid className="cart-component-middle-right">
                <Grid className="cart-component-middle-right-top" sx={{display:'flex',flexDirection:'column'}}>
                <h5>{book.bookName}</h5>
            <p style={{marginTop:'-1rem',fontSize:'12px',color:'grey'}}>{book.author}</p>
            <Grid className="book-box-price">
                <h5 style={{marginRight:'10px'}}>Rs. {book.discountPrice}</h5>
                <strike style={{fontSize:'12px',textDecoration:'strike'}}>Rs. {book.price}</strike>
            </Grid>
                </Grid>
                <Grid className="cart-component-middle-right-bottom" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <AddToCartCounter bookObj={cartItem} getCartItem={getCartItem} action='cart'/>
        <Grid onClick={()=>{removeItem(cartItem._id)}} className="remove" style={{marginLeft:'1rem',cursor:'pointer'}}><p>Remove</p></Grid>
                </Grid>
            </Grid>
        </Grid>
       
    </Grid>
  )
}

export default CartComponent