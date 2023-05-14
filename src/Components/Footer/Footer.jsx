import React from 'react'
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='footer' style={{backgroundColor:'#0B0203',height:'4rem',marginTop:'1rem'}}>
      <Grid className="footer-content" style={{display:'flex',alignItems:'center',width:'65%',margin:'0 auto'}}>
        <p style={{color:'white',fontSize:'15px'}}>Copyright @ 2023, Bookstore Private Limited. All Rights Reserved</p>
      </Grid>
    </Grid>
  )
}

export default Footer