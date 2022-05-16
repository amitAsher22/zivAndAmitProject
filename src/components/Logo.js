/// img 
import logo from '../Images/logo.png'
/// css
import  '../style_css/logo.css'

/// componets
// import EmailStart from "../components/EmailStart";


const Logo = () => {
  return (
    <div className='divLogo'>
      <img src={logo} className="logo_img"/>
    
    </div>
  )
}

export default Logo