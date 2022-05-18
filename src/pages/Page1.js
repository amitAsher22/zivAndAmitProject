import React , {useContext} from 'react'
import { AppContext } from '../App'
import '../style_css/EmailStart.css'



function Page1() {
const {setPage , setEmail , email} = useContext(AppContext)

const isEmail = (val) => {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regEmail.test(val)){
    setEmail(val);
  }
  else{
    setEmail('');
  }
}

  return (
    <div>
     <div style={{
       backgroundImage:`url(${process.env.PUBLIC_URL}/Images/totalScore.png)`,
       backgroundRepeat:'no-repeat',
       backgroundSize: 'cover',
       width:'810px',
      margin:'0 auto',
      minHeight: '1080px',
      display: 'flex',
      justifyContent: 'end',
      flexDirection:'column'
      
      


     }}>
       <div className='divInputAndButton'>
            <input 
            className='inputPage1'
              type="text" placeholder="Email"
              onChange={(event)=> isEmail(event.target.value)}
            />
            <button onClick={()=> setPage('page2')} disabled={!email}>start</button>
       </div>
     </div>
    </div>
  )
}

export default Page1