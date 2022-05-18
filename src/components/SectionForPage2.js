import { useForkRef } from '@mui/material';
import React , {useState}  from 'react'
import img from '../img/Circle.gif'
import '../style_css/SectionForPage2.css'

function SectionForPage2() {

  const [timer , setTimer] = useState(30)


function startTimer  (){
  let time =  setInterval(() => {
   return setTimer(second => second - 1)
   }, 1000);
   if(timer === 0){
     setTimer(30)
     clearInterval(time)
   }
}


  return (
    <div>
    <div className='page2DivAndQuetion'>
    <div className='questionsPage2'>
        <h1>How fast can you</h1>
        <h1>Fix your saas stack?</h1>
     <h2 className='timerPage2'>timer {timer}</h2>
     <button onClick={()=> startTimer()}>start timer</button>
    </div>
     <img className='imgPage2' src={img}/>
    </div>
    </div>
  )
}

export default SectionForPage2