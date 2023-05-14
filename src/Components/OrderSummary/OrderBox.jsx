import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { placeOrderService } from '../../Services/CartService'
import './Order.css'

const OrderBox = ({children}) => {

    const navigate = useNavigate()
    // console.log(children[1])

    let props = []

    for(let i=0;i<children[1].length;i++){
        props = children[1].map((data)=>data.props.cartItem)
        console.log(props)
    }

    let book

    const order =  {
        orders: [
        
        ]
      }

    for(let i = 0 ;i<props.length;i++){
        book = props[i]
        order.orders.push({product_id: book.product_id._id,
            product_name: book.product_id.bookName,
            product_quantity: book.quantityToBuy,
            product_price: book.product_id.discountPrice})

    }

    // console.log(order)

    const placeOrder = async() => {
        let response = await placeOrderService(order)
        console.log(response)
        if(response.status == 200){
          navigate('/cart/order-placed-successfully')
        }
        
    }

    
  return (

    <Grid className='order-box' style={{border:'1px solid #d3cfcf',marginTop:'2rem',width:'70%',padding:'1rem'}}>
        <Grid className="order-summary-top">
            <h3>Order Summary</h3>
        </Grid>
        {children}
        <Grid className="order-summary-checkout" style={{display:'flex',justifyContent:'flex-end',width:'93%'}}>
          <button onClick={placeOrder} style={{cursor:'pointer',height:'2rem',padding:'0 1rem',backgroundColor:'#3371B5',border:'none',color:'white',borderRadius:'2px'}}>CHECKOUT</button>
       
        </Grid>
    </Grid>
  )
}

export default OrderBox