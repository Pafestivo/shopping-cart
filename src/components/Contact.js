import React from "react";
import '../styles/contact.css';

const Contact = () => {
  return(
    <div className="contact">
      <div className="social">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Pafestivo"><i className="fa-brands fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.messenger.com/"><i className="fa-brands fa-facebook-messenger"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
      </div>

      <div className="direction">
        <h1>Petsy</h1>
        <h1>Ocean Ave. 25, California USA</h1>
        <img src={require('../images/google-maps-pin.jpg')} alt="store-location" />
      </div>
    </div>
  )
}

export default Contact