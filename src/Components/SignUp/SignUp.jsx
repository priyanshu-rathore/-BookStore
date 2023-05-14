import { Card } from '@mui/material'
import React from 'react'
import "./SignUp.css"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signUpService } from '../../Services/DataService';
const fullNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
const phoneRegex = /^[0-9]{8,32}$/

const SignUp = ({setDisplay}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [signUp,setSignUp] = React.useState({fullName:"",email:"",password:"",phone:""})
    const [regex,setRegex] = React.useState({fullNameHelper:'',fullNameError:false,emailHelper:"",emailError:false,passwordError:false,phoneHelper:'',phoneError:false})
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const submit = async() => {

        const fullName = fullNameRegex.test(signUp.fullName)
        const email = emailRegex.test(signUp.email)
        const password = passwordRegex.test(signUp.password)
        const phone = phoneRegex.test(signUp.phone)

        if(fullName === false){
            setRegex((prevState)=>({...prevState,fullNameHelper:'Enter Correct Full Name',fullNameError:true}))
        }else{
            setRegex((prevState)=>({...prevState,fullNameHelper:'',fullNameError:false}))
        }
        
        if(email === false){
            setRegex((prevState)=>({...prevState,emailHelper:'Enter Correct Email Address',emailError:true}))
        }else{
            setRegex((prevState)=>({...prevState,emailHelper:'',emailError:false}))
        }

        if(password === false){
            setRegex((prevState)=>({...prevState,passwordError:true}))
        }else{
            setRegex((prevState)=>({...prevState,passwordError:false}))
        }

        if(phone === false){
            setRegex((prevState)=>({...prevState,phoneHelper:'Enter Correct Mobile Number',phoneError:true}))
        }else{
            setRegex((prevState)=>({...prevState,phoneHelper:'',phoneError:false}))
        }

        if(fullName && email && password && phone){
            let response = await signUpService(signUp)
            console.log(response)
        }

    }

    // React.useEffect(()=>{
    //     console.log(signUp)
    // },[signUp])
  return (
    <div className='sign-up-main'>
        <div className="sign-up-top" style={{display:'flex',width:'65%',justifyContent:'space-between'}}>
            <div className="sign-up-login" onClick={()=>setDisplay(true)}>
                <h2>Login</h2>
            </div>
            <div className="sign-up-sign-up">
                <h2>Signup</h2>
                <div></div>
            </div>
        </div>
        <div className="sign-up-full-name">
        <TextField helperText={regex.fullNameHelper} error={regex.fullNameError} onChange={(e)=>setSignUp((prev)=>({...prev,fullName:e.target.value}))} id="outlined-basic" style={{width:'19rem'}} size='small' label="Full Name" variant="outlined" />
        </div>
        <div className="sign-up-email">
        <TextField helperText={regex.emailHelper} error={regex.emailError} onChange={(e)=>setSignUp((prev)=>({...prev,email:e.target.value}))} id="outlined-basic" style={{width:'19rem'}} size='small' label="Email Id" variant="outlined" />
        </div>
        <div className="sign-up-password">
        <FormControl sx={{ m: 1, width: '19rem'}} variant="outlined" size='small'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput 
          error={regex.passwordError}
          onChange={(e)=>setSignUp((prev)=>({...prev,password:e.target.value}))}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
        <div className="sign-up-mobile-number">
        <TextField helperText={regex.phoneHelper} error={regex.phoneError} onChange={(e)=>setSignUp((prev)=>({...prev,phone:e.target.value}))} id="outlined-basic" style={{width:'19rem'}} size='small' label="Mobile Number" variant="outlined" />
        </div>
        <div className="sign-up-sign-up-button">
        <Button onClick={submit} style={{width:'19rem',backgroundColor:'#A03037',textTransform:'capitalize'}} variant="contained">Signup</Button>
        </div>
    </div>
  )
}

export default SignUp