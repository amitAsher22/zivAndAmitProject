import React , {useContext} from 'react'
import {data} from '../data.js'
import {AppContext} from '../App.js'
import SectionForPage2 from '../components/SectionForPage2.js'
import '../style_css/Page2.css'

///// material ui

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/////// )))))))
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useState } from 'react'
/////// ))))))
//// material ui


const style = {
  display:'flex',
  flexDirection:'column',
  
};

//////// matrial ui IOS style
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 45,
  height: 26,
  padding: 2,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

//////// matrial ui IOS style




function Page2() {
  const {page , email ,setEmail , setPage , score , setScore} = useContext(AppContext)


  function scoreAmount(event , index){
    if(event.target.checked && data[index].enable === 1){
      setScore(score + data[index].weight);
    }else if (event.target.checked && data[index].enable === 0){
      setScore( score - data[index].weight);
    }else if (!event.target.checked && data[index].enable === 1){
      setScore(score + data[index].weight);
    }else if (!event.target.checked && data[index].enable === 0){
      setScore( score +- data[index].weight);
    }
  }
  
  return (
    <div>
    <SectionForPage2/>
    <div className='ListPages2'>
    <List sx={style} >
    {
      data.map((item ,index)=>{
        return(
          <ListItem style={{borderBottom: '1px solid #ccc' , width:'890px' , margin:'auto'}}>
            <ListItemText key={index} primary={item.q} />
           Disable  <IOSSwitch onClick={(event)=> scoreAmount(event , index)}/>  Enable
           {score}
          </ListItem>

        )
      })
    }
    </List>

    </div>

   
    </div>
  )
}

export default Page2