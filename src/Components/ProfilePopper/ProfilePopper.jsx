import * as React from 'react';
import Box from '@mui/material/Box';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid } from '@mui/material';


import Popper from '@mui/material/Popper';

export default function ProfilePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const logout = () => {
    localStorage.removeItem('accessToken')
    window.location.reload(true)
  }

  return (
    <Grid>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}> */}
      <Grid onClick={handleClick} style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <PersonOutlineOutlinedIcon style={{color:'white',position:'relative',top:'10px'}}/>
                    <p style={{color:'white',fontSize:'14px'}}>Profile</p>
      </Grid>
      
      {/* </button> */}
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: '1px solid grey', p: 1, bgcolor: 'background.paper' }}>
          <Grid onClick={logout} className="logout" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'.5em',cursor:'pointer'}}>
          <LogoutIcon/> <p>Logout</p>
          </Grid>
        </Box>
      </Popper>
    </Grid>
  );
}