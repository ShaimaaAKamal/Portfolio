import {Link} from 'react-router-dom';
import './home.scss';
const Home = () =>{
 return(
     <div className="container">
       <div className="home">
       <h1>Hello,<br/>
        I'm <span className='logo'>S</span>haimaa,
        <br/>
        Web developer.
        </h1>  
        <h2>Full Stack Developer / UI Designer / Freelancer</h2>
    <Link to="/contact" className="contactme"> Contact Me</Link>
       </div>
     </div>
 );
}
export default Home;