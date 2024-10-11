import React, { useState } from "react";
import iconeMenu from '../images/iconeMenu.png';
import '../css_component/contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  
  return (
    <div className="contact">
    <div className="container">
      <div className="logo-icone">
        <h1>Logo</h1>
        <div className="social-icons">
          <a
            href="#"
            className="icon facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="#"
            className="icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="quick-links">
        <div className="quick-link">
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
        <div className="quick-link">
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
        <div className="quick-link">
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
        <div className="quick-link">
          <h2>Quick links</h2>
          <ul>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        Copyright @ 2024 All Rights Reserved
      </div>
    </div>
  </div>
  );
};

export default Contact;
