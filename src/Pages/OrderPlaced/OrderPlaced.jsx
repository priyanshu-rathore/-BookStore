import React from 'react'
import { Grid } from '@mui/material';
import Typography from '@mui/material';
import NavBar from '../../Components/Navbar/NavBar'
import Footer from '../../Components/Footer/Footer'
import './OrderPlaced.css'
import { Link } from 'react-router-dom';
const OrderPlaced = () => {
  return (
<>
<NavBar/>
<div className="order-placed-middle" style={{height:'85vh',width:'35vw',margin:'auto',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
  <h1>Order Placed successfully</h1>
  <p style={{fontSize:'18px',display:'inline-block',textAlign:'center'}}>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</p>
  <table >
    <thead>
      <th>Email us</th>
      <th>Contact us</th>
      <th>Address</th>
    </thead>
    <tbody>
      <tr>
        <td>admin@bookstore.com</td>
        <td>+91 8163475881</td>
        <td>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
      </tr>
    </tbody>
  </table>
  <Link to='/dashboard'><button style={{cursor:'pointer',height:'2rem',padding:'0 1rem',backgroundColor:'#3371B5',border:'none',color:'white',borderRadius:'2px'}}>COUNTIUE SHOPPING</button>
  </Link>
</div>
<Footer/>
</>
  )
}

export default OrderPlaced