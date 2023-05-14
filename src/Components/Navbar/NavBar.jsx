import React from "react";
import "./NavBar.css";
import logo from '../../Assets/education.svg'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import ProfilePopper from "../ProfilePopper/ProfilePopper";
import { Grid } from '@mui/material';
import Hamburger from "../Hamburger/Hamburger";


const NavBar = ({searchBooks}) => {
  return (
    <>
      <nav className="navbar-navbar">
        <Grid className="navbar-navbar-contents">
          <Grid className="navbar-navbar-left" >
        <Link to='/dashboard' style={{textDecoration:'none'}} >    <Grid className="navbar-navbar-brand" style={{position:'relative',bottom:'5px'}}>
                <img src={logo} alt="" />
                <h2 style={{marginLeft:'10px',color:'white'}}>Bookstore</h2>
            </Grid>
            </Link>
            <Grid className="navbar-navbar-search-bar" sx={{display:{xs:'none',sm:'flex',}}}>
                <SearchIcon style={{color:'grey'}}/>
                <input type="text" placeholder="Search..." onChange={(e)=>searchBooks(e.target.value)}/>
            </Grid>
          </Grid>
          <Grid className="navbar-navbar-right" sx={{display:{xs:'none',sm:'flex'}}}>
            <Grid className="navbar-navbar-right-profile">
              <ProfilePopper/>
            </Grid>
          <Link to='/cart' style={{textDecoration:'none'}}><Grid className="navbar-navbar-right-cart" style={{marginLeft:'2rem'}}>
                <ShoppingCartOutlinedIcon style={{color:'white',position:'relative',top:'13px',cursor:'pointer'}}/>
                <p style={{color:'white',fontSize:'14px'}}>Cart</p>
            </Grid>
            </Link>  
          </Grid>
          <Grid sx={{gap:'2rem',display:{xs:'flex',sm:'none',md:'none',lg:'none'},alignItems:{xs:'center'},justifyContent:'center',color:'white'}}>
            <SearchIcon/>
            <Hamburger/>
          </Grid>

        </Grid>
      </nav>
    </>
  );
};

export default NavBar;
