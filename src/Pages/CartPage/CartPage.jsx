import React, { useEffect, useState } from 'react'
import CartComponent from '../../Components/CartComponent/CartComponent'
import NavBar from '../../Components/Navbar/NavBar'
import { getCartItemService } from '../../Services/CartService'
import { Link } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place';
import { Grid } from '@mui/material'
import './CartPage.css'
import AddressComponent from '../../Components/AddressComponent/AddressComponent'
import OrderSummary from '../../Components/OrderSummary/OrderSummary'
import Footer from '../../Components/Footer/Footer'
import OrderBox from '../../Components/OrderSummary/OrderBox'

const CartPage = () => {

    const [cartItems,setCartItem] = useState([])
    const [display,setDisplay] = useState(true)
    const [addDisplay,setAddDisplay] = useState(true)
    const [cartQty,setCartQty] = useState([])
    const loadData = async() => {
    let response = await getCartItemService()
    let cartItem = response.data.result
    setCartItem(cartItem) 
    let cartQtyBooks =  cartItem.map((data)=>data.quantityToBuy) 
     cartQtyBooks = cartQtyBooks.reduce((a,b)=>a+b)
    setCartQty(cartQtyBooks)

    console.log(cartQty)
    }

    const [orderCartItem,setOrderCartItem] = useState()

    const getOrderCartItem = (book) => {
      setOrderCartItem(book)
    } 

   

    

    useEffect(()=>{
        loadData()
    },[])
  return (
    <>
    <NavBar/>
    <Grid className="cart-page-content" style={{width:'65%',margin:'0 auto'}}>
    <Grid className="cart-page-top" style={{display:'flex',alignItems:'center',marginTop:'.5rem'}}>
       <Link to='/dashboard' style={{textDecoration:'none'}}> <p style={{color:'grey',marginRight:'10px'}}>Home /</p></Link><span>My cart</span>
    </Grid>
    <Grid className="cart-items" style={{border:'1px solid #d3cfcf',width:'70%'}}>
    <Grid className="cart-component-top" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 1rem'}}>
            <h1 style={{fontWeight:'400',fontSize:'18px'}}>My Cart ({cartQty})</h1>
            <select name="" id="" style={{height:'2rem',width:'10rem'}}>
                <option value=""><PlaceIcon/> use current location</option>
            </select>
        </Grid>
        {cartItems.map((cartItem)=>(<CartComponent getOrderCartItem={getOrderCartItem} key={cartItem._id} getCartItem={loadData} setDisplay={setDisplay} cartItem={cartItem}/>))}
        <Grid style={{display:'flex',justifyContent:'flex-end'}}>
        <button className='place-order-button' onClick={()=>setDisplay(false)} style={{marginBottom:'2rem',marginRight:'2rem',cursor:'pointer',height:'2rem',padding:'0 1rem',backgroundColor:'#3371B5',border:'none',color:'white',borderRadius:'2px'}}>PLACE ORDER</button>
        </Grid>
    </Grid>
    {
      display ? <Grid sx={{marginLeft:{xs:'-2.8rem',lg:'.09rem'},width:{xs:'22.4rem !important',lg:'70% !important'}}} className="cart-page-address" style={{border:'1px solid #d3cfcf',marginTop:'2rem',width:'70%'}} >
      <p style={{marginLeft:'2rem'}}>Address Details</p>
    </Grid> : <AddressComponent setAddDisplay={setAddDisplay}/>
    }
    <Grid className="cart-page-bottom" style={{marginBottom:'3rem'}}>
    {
      addDisplay ? <Grid sx={{marginLeft:{xs:'-2.8rem',lg:'.09rem'},width:{xs:'22.4rem !important',lg:'70% !important'}}} className="cart-page-order-summary" style={{border:'1px solid #d3cfcf',marginTop:'2rem',width:'70%'}} >
      <p style={{marginLeft:'2rem'}}>Order Summary</p>
    </Grid> :<OrderBox> {cartItems.map((cartItem)=><OrderSummary cartItem={cartItem}/>)} </OrderBox>
    }
    </Grid>
    
    
    </Grid>
    <Footer/>
    </>
  )
}

export default CartPage