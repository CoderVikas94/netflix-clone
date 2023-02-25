import './header.css'
import {useState} from 'react'
import logo from '../../assets/logo.png'
import {HiOutlineSearch} from 'react-icons/hi'
import {BsFillBellFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
    const [navChange, setnavChange] = useState("");
    const scrollBar = ()=> {
      if(window.scrollY >= 80) {
        setnavChange("sticky")
      } else if (window.scrollY >= 0) {
        setnavChange("")
  
      }else {
        setnavChange("")
  
      }
  
    }
  window.addEventListener('scroll',scrollBar)
  


  return (
    <div className={`header_box ${navChange}` }>
        <div className='header_list_box'>
        <img src={logo} alt="netflix-logo"/>
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
        </ul>
     </div>
     <div className='user_box'>
     <HiOutlineSearch/>
     <p>KIDS</p>
     <p>DVD</p>
     <BsFillBellFill/>
     <FaUserAlt/></div>
    </div>
  )
}

export default Header