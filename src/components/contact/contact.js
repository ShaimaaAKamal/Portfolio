import './contact.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
const Contact = () =>{
    const formRef=useRef();
    const sendMail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_e72r6p7','Temp2',formRef.current,'38F3k9hrIHsfub0-r')
        .then( ()=>{
           alert("Message has been sent successfully");
           window.location.reload(false);        
          },
            function(error) {
                alert("Something went wrong..., please try again later");         });
    }
    return(
        <div className="container">
        <div className="contactPage">
        <h1>
            Contact  me
         </h1> 
         <p>
             I am intersted in freelance opportunities - especially
             ambitious or large projects. However, if you have other request or question, don't hesitate
             to contact me using below form
         </p>
         <form ref={formRef} onSubmit={sendMail}>
             <input type="text" name="name" className="half" placeholder="Name" required/>
             <input type="email" name="email"  className="half" placeholder="Email" required/>
             <input type="text" className="subject" placeholder="Subject"/>
             <textarea name="message" placeholder="Message"></textarea>
             <div> <button type="submit">Send</button></div>
         </form>
        </div>
        <div className='mapInfo'>
            Shaimaa Kamal
            <br/>
            Egypt,
            <br/>
            Hany Jiza 6,
            <br/>
            Giza
            <br/>
            <span>shaimaakamal039@gmail.com</span>
        </div>
        <div className="map">
            <MapContainer center={[30.074575306547903, 31.191576570126013]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[30.074575306547903, 31.191576570126013]}>
    </Marker>
            </MapContainer>
        </div>
        </div>
    );
   }
   export default Contact;