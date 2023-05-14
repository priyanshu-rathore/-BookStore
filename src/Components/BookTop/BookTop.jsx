import React from 'react'
import "./BookTop.css"
import { Grid } from '@mui/material';


const BookTop = ({bookLength}) => {
  return (
    <>
    <Grid className="book-top" sx={{width:{xs:'65%'}}}>
        <Grid className="book-top-left" sx={{fontSize:{xs:'12px'},display:'flex',alignItems:'center'}} >
            <h1 style={{fontWeight:'400'}}>Books</h1>
            <p style={{marginLeft:'10px',color:'grey    '}}>({bookLength} {bookLength==1 ? 'item': 'items'})</p>
        </Grid>
        <Grid className="book-top-right" sx={{display:{xs:'none',lg:'flex'}}}>
            <select name="" id="" style={{padding:'3px 6px 3px 6px'}}>
                <option value="">Sort by relevance</option>
            </select>
        </Grid>
    </Grid>
    </>

  )
}

export default BookTop