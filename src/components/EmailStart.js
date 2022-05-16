import React , {useState} from 'react'
import Logo from './Logo';
/// css
import '../style_css/EmailStart.css'

import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';



const Android12Switch = styled(Switch)(({ theme }) => ({
 

  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    width:0,
    backgroundColor:`"red"`,
    '&:before, &:after': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor:`"white"`,
      width:0,
 

    },
    '&:before': {
      content: '"start"',
      left: 30,
      color:"red",
       width: 50,
      height: 20,
      backgroundColor:"white",

    },
    '&:after': {
      // content: '"start"',
      right: 50,
      backgroundColor:"white",
      color:"red"
      
    
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 20,
    height: 20,
    margin: 0,
    color:"red",
 
    
  },
}));



const EmailStart = () => {
  const [email,  setEmail] = useState('')


  
  return (
    <div className='sizeEmailStart'>
    <Logo/>
    <div  className='divEmail'>
    <div className='positionEmailAndInput'>
        <input className='inputEmail' type="text" placeholder="Email" onChange={(event)=> setEmail(event.target.value)}/>
      <Android12Switch/>
    </div>
      </div>
      </div>
  )
}

export default EmailStart