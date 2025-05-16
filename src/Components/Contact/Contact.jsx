import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          Have questions about your order or need help with UniCart? Our support team is ready to assist you with product inquiries, returns, shipping details, and any other concerns.
        </p>
        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> support@unicart.in</p>
          <p><strong>📍 Address:</strong> UniCart HQ, 5th Floor, E-Commerce Hub, Hyderabad, Telangana - 500081</p>
          <p><strong>🕒 Customer Support Hours:</strong> Mon - Sat: 9:00 AM to 8:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
