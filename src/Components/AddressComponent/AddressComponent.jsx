import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { addAddressService } from "../../Services/CartService";
import { Grid } from "@mui/material";
import './AddressComponent.css'

const AddressComponent = ({setAddDisplay}) => {
  const [customerDetails, setCustomerDetails] = useState({
    addressType: "",
    fullAddress: "",
    city: "",
    state: "",
  });

  const [display,setDisplay] = useState(true)

  useEffect(()=>{
    console.log(customerDetails)
  },[customerDetails])

  const addNewAddress = async() => {
    let response = await addAddressService(customerDetails)
    console.log(response)
  }

  return (
    <Grid className="address-component"
      style={{ border: "1px solid #d3cfcf", marginTop: "2rem", width: "70%" }}
    >
      <Grid className="address-component-top" style={{ padding: ".5rem 1rem" }}>
        <Grid
          className="address-component-top-left"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "#333232" }}>Customer Details</h3>
          <button

            onClick={addNewAddress}
            style={display ? {
              height: "2rem",
              padding: "0 1rem",
              border: "1px solid #A03037",
              color: "#A03037",
              background: "none",
            } : {display:'none'}}
          >
            Add New Address
          </button>
        </Grid>
      </Grid>
      <Grid
        className="address-component-middle"
        style={{ padding: "1rem", gap: "1rem" }}
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          size="small"
          variant="outlined"
          sx={{ marginRight: "1rem",margin:'1rem' }}
        />
        <TextField
          id="outlined-basic"
          label="Mobile Number"
          size="small"
          variant="outlined"
          sx={{margin:'1rem'}}
        />
      </Grid>
      <Grid className="address-component-work-home" style={{padding:'1rem'}}>
            <Grid className="work" style={{display:'flex',gap:'10px',alignItems:'center'}}>
            </Grid>
            <Grid className="work-address" style={{display:'flex',flexDirection:'column',gap:'10px',width:'70%'}}>
                <label htmlFor="">Address</label>
                <TextareaAutosize style={{margin:'1rem'}} onChange={(e)=>{setCustomerDetails((prev)=>({
                ...prev,fullAddress:e.target.value
                }))}}/>
            </Grid>
            <Grid className="city-town-state" style={{marginTop:'1rem'}}>
            <TextField
            onChange={(e)=>{setCustomerDetails((prev)=>({
              ...prev,city:e.target.value
              }))}}
          id="outlined-basic"
          label="city/town"
          size="small"
          variant="outlined"
          sx={{marginRight:'1rem',margin:'1rem'}}
        />
         <TextField
         onChange={(e)=>{setCustomerDetails((prev)=>({
          ...prev,state:e.target.value
          }))}}
          id="outlined-basic"
          label="State"
          size="small"
          variant="outlined"
          sx={{margin:'1rem'}}
        />
            </Grid>
            <Grid className="address-component-type" style={{marginTop:'3rem'}}>
              <p>Type</p>
              <Grid className="address-component-type-content" style={{display:'flex',gap:'15px'}}>
              <Grid className="home">
                <input onChange={(e)=>{setCustomerDetails((prev)=>({
                ...prev,addressType:e.target.value
                }))}} type="radio" id="home" name="radio" value='Home'/>
                <label htmlFor="home">Home</label>
              </Grid>
              <Grid className="work">
                <input onChange={(e)=>{setCustomerDetails((prev)=>({
                ...prev,addressType:e.target.value
                }))}} type="radio" id="work" name="radio" value='Work'/>
                <label htmlFor="work">Work</label>
              </Grid>
              <Grid className="other">
                <input onChange={(e)=>{setCustomerDetails((prev)=>({
                ...prev,addressType:e.target.value
                }))}} type="radio" id="other" name="radio" value='Other'/>
                <label htmlFor="other">Other</label>
              </Grid>
              </Grid>
            </Grid>
      </Grid>
      <Grid className="address-component-continue" style={{display:'flex',justifyContent:'flex-end',padding:'1rem',width:'90%'}}>
      <button onClick={()=>{setAddDisplay(false);setDisplay(false)}} style={{cursor:'pointer',height:'2rem',padding:'0 1rem',backgroundColor:'#3371B5',border:'none',color:'white',borderRadius:'2px'}}>CONTINUE</button>

      </Grid>
    </Grid>
  );
};

export default AddressComponent;
