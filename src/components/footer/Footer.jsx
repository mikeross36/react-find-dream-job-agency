import React from "react"
import { FaPhoneSquareAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer({clock}){
    return(
        <>
            <footer id="footer">
                <div className="footer-wrapper">
                    <a href="#home" className="footer-logo">
                        <h3>company logo here</h3>
                        <div className="footer-clock">{clock}</div>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Non natus rem praesentium! 
                        Fuga facere totam debitis sed doloremque id 
                        voluptatibus.
                    </p>
                    <address className="footer-contact" id="footer-contact">
                        <a href="none" className="footer-phone">
                            <FaPhoneSquareAlt style={iconStyle} />
                            +381 12 34 56 78
                        </a>
                        <a href="none" className="footer-email">
                            <FaEnvelope style={iconStyle} />
                            someemail@email.com
                        </a>
                        <a href="none" className="footer-address">
                            <FaMapMarkerAlt style={iconStyle} />
                            Some Address 125 Novi Sad
                        </a>
                    </address>
                    <div className="footer-links1">
                        <span>what's new</span>
                        <a href="/">terms of use</a>
                        <a href="/">trademarks</a>
                        <a href="/">about our ads</a>
                    </div>
                    <div className="footer-links2">
                        <span>usefull links</span>
                        <a href="/">home</a>
                        <a href="#services">services</a>
                        <a href="/">company</a>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <p>&copy;Copyright 2020 DodaDesign All rights reserved</p>
            </div>
        </>
    )
}

const iconStyle = {
    paddingRight: "1rem",
    fontSize: "2rem"
}