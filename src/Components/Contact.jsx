import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" style={{ display: 'none' }}>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          If you have any questions, concerns, or feedback related to BikeHub, feel free to reach out to us.
          We're here to assist you with bookings, rentals, or any other information you need.
        </p>
        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> support@bikehub.in</p>
          <p><strong>📍 Address:</strong> BikeHub HQ, 2nd Floor, Tech Park, Hyderabad, Telangana - 500081</p>
          <p><strong>🕒 Working Hours:</strong> Mon - Sat: 9:00 AM to 7:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
