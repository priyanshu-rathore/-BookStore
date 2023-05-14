import React, { useEffect, useState } from 'react'
import "./BookDetails.css"
import bookImg from '../../Assets/Image 36.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import AddToCartCounter from '../AddToCartCounter/AddToCartCounter';
import { addCartItemService, getCartItemService } from '../../Services/CartService';
import { Grid } from '@mui/material';


const BookDetails = ({book,click}) => {
    const [addToBag,setAddToBag] = useState(true)
    const [numOfItem,setNumOfItem] = useState()
    const [cartId,setCartId] = useState()
    const [bookObj,setBookObj] = useState({})

    const addToCart = async(bookId) => {
        let response = await addCartItemService(bookId)
        console.log(response)
      await  getCartItem()
        return response
    }

    const getCartItem = async() => {
        let response = await getCartItemService()
        console.log(response)
        

        for(let i = 0;i <= response.data.result.length ; i++){
            if(response.data.result[i]?.product_id._id == book._id){
                let itemNo = response.data.result[i].quantityToBuy
                // setNumOfItem(itemNo)
                // setCartId(response.data.result[i]._id)
                setBookObj(response.data.result[i])
                setAddToBag(false)

                // console.log(itemNo)
                // console.log(numOfItem)

            }
        }
       
        
        console.log(response)
        return response
    }

    useEffect(()=> {
        getCartItem()
        
    },[])
    // setAddToBag={setAddToBag} cartId={cartId} itemNo={numOfItem} book={book}
  return (
    <Grid className='book-details'>
        <Grid className="book-details-top">
            <p onClick={()=>click(false)} style={{color:'grey',cursor:'pointer'}}>Home /</p> <span style={{marginLeft:'1rem'}}> Book({book.bookName})</span>
        </Grid>
        <Grid className="book-details-middle" sx={{display:{xs:'flex'},flexDirection:{xs:'column',lg:'row'}}}>
            <Grid className="book-details-left">
                <Grid className="img-container">
                <Grid className="book-details-left-top" sx={{width:{xs:'80%',lg:'100%'},display:{xs:'flex'},alignItems:{xs:'center'},justifyContent:{xs:'center'},margin:{xs:'auto'}}}>
                    <img src={bookImg} alt="" />
                </Grid>
                <Grid className="book-details-left-bottom"> 
                {
                    addToBag ? 
                <button onClick={()=>{setAddToBag(false);addToCart(book._id);}} className='add-to-bag'>ADD TO BAG</button> : <AddToCartCounter setAddToBag={setAddToBag} getCartItem={getCartItem} bookObj={bookObj}/>

                }
                <button className='wish-list'>{<FavoriteIcon fontSize='small' style={{marginRight:'10px'}}/>}WISHLIST</button>
                 </Grid>
                </Grid>
                

            
            </Grid>
            <Grid sx={{fontSize:{xs:'small'}}} className="book-details-right" style={{marginLeft:'5rem'}}>
            <h1 style={{marginTop:'-9px',fontWeight:'500'}}>{book.bookName}</h1>
            <p style={{marginTop:'-1rem',fontSize:'18px',color:'grey'}}>{book.author}</p>
            <Grid className="rate">
                <Grid className="rate-box">
                    <span style={{fontSize:'13px',marginRight:'5px',color:'white'}}>4.5</span>
                    <StarIcon fontSize='10px' style={{color:'white'}}/>
                </Grid>
                <p style={{fontSize:'13px',marginLeft:'10px',color:'grey'}}>(20)</p>
            </Grid>
            <Grid className="book-box-price">
                <h1 style={{marginRight:'10px',fontWeight:'400'}}>Rs. {book.discountPrice}</h1>
                <strike style={{fontSize:'17px',textDecoration:'strike',color:'grey'}}>Rs. {book.price}</strike>
            </Grid>
            <Grid className='line'></Grid>
            <ul style={{marginLeft:'-22px',color:'grey'}}>
                <li>Book Detail</li>
            </ul>
            <p style={{fontSize:'14px',marginLeft:'3px'}}>{book.description}</p>
            <Grid sx={{display:'flex',flexDirection:'column'}} className='line' style={{marginTop:'3rem'}}>
                
                <Grid className="feed-back-box" sx={{display:'flex',flexDirection:'column'}}>
                <h3 style={{fontWeight:'400'}}>Customer Feedback</h3>

                <Typography component="legend">Overall rating</Typography>
      <Rating name="read-only" value={4} readOnly />
      <textarea placeholder='write your review' name="" id="" cols="45" rows="5"></textarea>
      <button className='submit-button'>Submit</button>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default BookDetails