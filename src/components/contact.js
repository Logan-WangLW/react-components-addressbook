/* eslint-disable */
import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
  return (
    <div className="contact">
      <p className="contact-name">{props.name}</p>
      <p className="contact-address">{props.address}</p>
      <img className="contact-photo" src={props.photo}></img>
    </div>
  )
}
