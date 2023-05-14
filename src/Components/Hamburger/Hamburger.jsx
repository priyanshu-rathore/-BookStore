import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';
import ProfilePopper from '../ProfilePopper/ProfilePopper';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

export default function Hamburger() {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <MoreVertIcon {...bindToggle(popupState)}/>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Grid sx={{backgroundColor:'#a93d3d',width:'7rem',borderRadius:'4px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <ProfilePopper />
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <Link to='/cart' style={{textDecoration:'none',color:'white'}}><ShoppingCartOutlinedIcon/></Link>
                  <span style={{marginBottom:'1rem',color:'white',fontSize:'15px'}}>Cart</span>
                  </div>

                </Grid>
               
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}