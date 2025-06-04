import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import './CheckoutForm.css';

function CheckoutForm({ cartItems, totalAmount, onSuccessfulCheckout, onBackToCart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentOption: 'creditCard',
  });
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (!showSummary && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [showSummary]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitToSummary = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
      setShowSummary(true);
    } else {
      toast.error('Please correct the errors in the form.', {
        position: "top-center", autoClose: 3000
      });
    }
  };

  const handleConfirmOrder = () => {
    onSuccessfulCheckout();
    toast.success('🎉 Thank you for your order! Your items are on their way.', {
      position: "top-center", autoClose: 4000
    });
    setShowSummary(false);
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      address: '',
      paymentOption: 'creditCard'
    });
  };

  return (
    <>
      <div className="checkout-page-container">
        <button onClick={onBackToCart} className="back-to-cart-btn">← Back to Cart</button>
        <div className="checkout-form-container">
          <h2>Checkout Details</h2>
          <form onSubmit={handleSubmitToSummary} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                ref={nameInputRef}
                className={errors.name ? 'error-field' : ''}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error-field' : ''}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Shipping Address:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={errors.address ? 'error-field' : ''}
                placeholder="Enter your shipping address"
              />
              {errors.address && <p className="error-message">{errors.address}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="paymentOption">Payment Option:</label>
              <select
                id="paymentOption"
                name="paymentOption"
                value={formData.paymentOption}
                onChange={handleChange}
              >
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
                <option value="cod">Cash On Delivery</option>
              </select>
            </div>

            <button type="submit" className="submit-checkout-btn">Proceed to Summary</button>
          </form>
        </div>
      </div>

      {showSummary && submittedData && (
        <div className="summary-modal-overlay">
          <div className="summary-modal">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Address:</strong> {submittedData.address}</p>
              <p><strong>Payment Option:</strong> {
                {
                  creditCard: 'Credit Card',
                  debitCard: 'Debit Card',
                  paypal: 'PayPal',
                  upi: 'UPI',
                  netbanking: 'Net Banking',
                  cod: 'Cash On Delivery'
                }[submittedData.paymentOption]
              }</p>
              <h3>Items in your order:</h3>
              <ul className="summary-items-list">
                {cartItems.map(item => (
                  <li key={item.id}>
                    {item.title} (x{item.quantity}) - <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </li>
                ))}
              </ul>
              <p className="summary-total"><strong>Total Amount:</strong> ${totalAmount}</p>
            </div>
            <div className="summary-actions">
              <button onClick={handleConfirmOrder} className="confirm-order-btn">Confirm & Place Order</button>
              <button onClick={() => setShowSummary(false)} className="edit-details-btn">Edit Details</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;
