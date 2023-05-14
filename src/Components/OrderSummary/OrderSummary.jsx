import React from 'react'
import { Link } from 'react-router-dom'
import bookImg from "../../Assets/Image 36.png"
import { placeOrderService } from '../../Services/CartService'
import { Grid } from '@mui/material';



const OrderSummary = ({cartItem}) => {
    const book = cartItem.product_id
    console.log(cartItem)

  

   
    
    return (
    <Grid >
        
        <Grid className="order-summary-content" style={{display:'flex',gap:'3rem',margin:'1rem 1rem'}}>
            <Grid className="order-summary-content-left">
            <img src={bookImg} alt="" />
            </Grid>
            <Grid className="order-summary-content-right">
            <Grid className="cart-component-middle-right-top" sx={{display:'flex',flexDirection:'column'}}>
                <h5>{book.bookName}</h5>
            <p style={{marginTop:'-1rem',fontSize:'12px',color:'grey'}}>{book.author}</p>
            <Grid className="book-box-price">
                <h5 style={{marginRight:'10px'}}>Rs. {book.discountPrice}</h5>
                <strike style={{fontSize:'12px',textDecoration:'strike'}}>Rs. {book.price}</strike>
            </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    </Grid>
  )
}

export default OrderSummary