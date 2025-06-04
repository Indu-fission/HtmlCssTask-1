import './CartPopup.css';

function CartPopup({ show, cartItems, onClose, onRemove, updateQuantity, total ,onProceedToBuy}) {
  if (!show) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-popup">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(index)} className="remove-btn">Remove</button>
              </div>
            ))}
            <div className="cart-total">Total: ${total}</div>
            <button className="proceed-btn" onClick={onProceedToBuy}>Proceed to Buy</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPopup;
