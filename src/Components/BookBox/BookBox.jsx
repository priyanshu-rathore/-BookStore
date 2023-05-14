import * as React from 'react';
import Card from '@mui/material/Card';
import bookimg from '../../Assets/Image 36.png'
import StarIcon from '@mui/icons-material/Star';
import "./BookBox.css"
import BookDetails from '../BookDetails/BookDetails';
import { Grid } from '@mui/material';


const  BookBox = ({book,product,click}) =>{

  return (
    <Card onClick={()=>{product(book);click(true)}} className='book-box-card' sx={{width:'235px',height:'320px',border:'1px solid #ece7e7',margin:'1rem 0',cursor:'pointer' }}>
      <Grid className="book-box-card-top">
            <img src={bookimg} alt="" />
      </Grid>
      <Grid className="book-box-card-bottom" sx={{display:'flex',flexDirection:'column'}}>
            <h5>{book.bookName}</h5>
            <p style={{marginTop:'-1rem',fontSize:'12px',color:'grey'}}>{book.author}</p>
            <Grid className="rate">
                <Grid className="rate-box">
                    <span style={{fontSize:'13px',marginRight:'5px',color:'white'}}>4.5</span>
                    <StarIcon fontSize='10px' style={{color:'white'}}/>
                </Grid>
                <p style={{fontSize:'13px',marginLeft:'10px',color:'grey'}}>(20)</p>
            </Grid>
            <Grid className="book-box-price">
                <h5 style={{marginRight:'10px'}}>Rs. {book.discountPrice}</h5>
                <strike style={{fontSize:'12px',textDecoration:'strike'}}>Rs. {book.price}</strike>
            </Grid>
      </Grid>
    </Card>
  );
}

export default BookBox;