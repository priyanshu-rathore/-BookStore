import React from 'react'
import './LandingPage.css'
import cartmanimg from '../../Assets/cartman.png'
import SignIn from '../../Components/SignIn/SignIn'
import SignUp from '../../Components/SignUp/SignUp'
import { div } from '@mui/material';


const LandingPage = () => {
    const[display,setDisplay] = React.useState(true)

   

  return (
    <>
    <div className='landing-page-main'>
        <div className='landing-page-left'>
            <div className="landing-page-left-box">
                <div className="landing-page-left-box-image">
                    <img src={cartmanimg} alt="" height={'245px'}/>
                </div>
                <div className="landing-page-left-box-text">
                    <h3>online book shopping</h3>
                </div>
            </div>
        </div>
        <div className='landing-page-right'>
            <div className="landing-page-right-box">
                { display ? <SignIn setDisplay={setDisplay}/> : <SignUp setDisplay={setDisplay}/>}
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage