import React from 'react';
import "./contact.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 className="contactHead">Get in Touch</h1>
            <div className="contactArea">

                <div className="contactItem">
                    <i class="fab fa-3x fa-discord"></i>
                    <span>mustafaKH #9557</span>
                </div>

                <div className="contactItem">
                    <i class="fas fa-3x fa-envelope-open-text"></i>
                    <span>Iam@MustafaKhairalla.com</span>
                </div>

            </div>
            <div className="socialArea">
                <h3>Find out more about me</h3>
                <div className="socialIcon">
                    <a href="#"><i class="fab fa-3x fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-3x fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-3x fa-3x fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-3x fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-3x fa-3x fa-linkedin-in"></i></a>
                </div>
            </div>

            <div className="copyRight">
                <h6>All Copy Rights reserved</h6>
            </div>
        </div>

    )
}