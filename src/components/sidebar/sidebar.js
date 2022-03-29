import './sidebar.scss';
import logo from './../../assets/images/logo-s.png';
import {Link , NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar =()=>{
return(
     <div className='sidebar'>
         <Link to='/' className="logo">
             <img src={logo} alt="Logo"/>
         </Link>
         <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4d"/>
            </NavLink>
             <NavLink activeclassname="active" to='/about' className="about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink  activeclassname="active" to='/contact' className="contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
             </NavLink>
         </nav>
         <ul>
             <li><a href="https://www.linkedin.com/in/shaimaaakamal" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/></a></li>
             <li><a href="https://github.com/ShaimaaAKamal" target="_blank"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/></a></li>
         </ul>
     </div>
    ) 
}
export default Sidebar; 