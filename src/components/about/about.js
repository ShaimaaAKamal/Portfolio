import {  faJs, faLaravel, faNodeJs, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss';
const About = () =>{
    return(
        <div className="container">
        <div className="aboutPage">
        <h1>
            About me
         </h1>  
         <p>
           I'm a passionate Full Stack Developer looking forward to a challenging position 
            to utilize my skills and knowledge, eager to work with new technologies and learn new skills.
          </p>
           <p>
            I'm a highly accomplished, quick learner dedicated to creating responsive
            and attractive website designs that incorporate data from databases and services and operate as fast, scalable
           and reliable 
         </p>
        </div>
        <div className='stageCube'>
            <div className='cubeSpinner'>
                <div className='face1'>
               <FontAwesomeIcon icon={faPhp} color="#4C578E"/>
                </div>
                <div className='face2'>
               <FontAwesomeIcon icon={faNodeJs} color="#74AA60"/>
                </div>
                <div className='face3'>
               <FontAwesomeIcon icon={faPython} color="#326B98"/>
                </div>
                <div className='face4'>
               <FontAwesomeIcon icon={faReact} color="#5FD3F3"/>
                </div>
                <div className='face5'>
               <FontAwesomeIcon icon={faLaravel} color="#F72B1E"/>
                </div>
                <div className='face6'>
               <FontAwesomeIcon icon={faJs} color="#E9CC30"/>
                </div> 
            </div>
        </div>
      </div>    );
   }
   export default About;

