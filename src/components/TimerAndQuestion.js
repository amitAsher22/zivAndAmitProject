import React , {useState} from 'react'

// img 
import circle from '../Images/Circle.gif'

/// css
import '../style_css/TimeAndQuestion.css'

function TimerAndQuestion() {
  const [timer , setTimer] = useState(30)
  return (
    <div >
      <div className='mainDivTimer'>
              <div className='positionLeftSide'>
                      <h1>How Fast Can You</h1>
                      <h1>Fix your SaaS Stack?</h1>
                      <div className='divTimer'>
                    <h1 className='timer' >{timer}:00 Sec</h1>
                      </div>
                    
              </div>
              <div className='divImgCircle'>
                  <img className='ImgCircle' src={circle}/>
              </div>
      </div>
     
         
    </div>
    
  )
}

export default TimerAndQuestion