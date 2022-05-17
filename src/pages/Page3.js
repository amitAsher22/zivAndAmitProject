import React from 'react'
import Logo from '../components/Logo'

import '../style_css/Page3.css'


function Page3() {
  return (
    <div>
      <div style={{width:"940px", margin:"0 auto"}}>
        <Logo/>
           <div className='backgrounPage33'>
             <div className='positionDiv'>
               <h1 className='titleCongrats'>Congrats!</h1>
               <p className='title2'>you're fast like a rocket!</p>
               <p className='title3'>Come and claim 1st place prize</p>
             </div>
           </div>
      </div>
    </div>
  )
}

export default Page3