import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import CartPopup from './Components/Cart/CartPopup';
import CheckoutForm from './Components/CheckoutForm';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeFromCart = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleProceedToBuy = () => {
    setShowCart(false);
    setShowCheckout(true);
    navigate('/checkout');
  };

  const handleSuccessfulCheckout = () => {
    setCartItems([]);
    setShowCheckout(false);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
    setShowCart(true);
    navigate('/products'); 
  };

  return (
    <>
      <Header cartItems={cartItems} toggleCart={() => setShowCart(!showCart)} />

      {showCart && (
        <CartPopup
          show={showCart}
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          updateQuantity={updateQuantity}
          total={total}
          onProceedToBuy={handleProceedToBuy}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/checkout"
          element={
            cartItems.length === 0 ? (
              <Navigate to="/products" />
            ) : (
              <CheckoutForm
                cartItems={cartItems}
                totalAmount={total}
                onSuccessfulCheckout={handleSuccessfulCheckout}
                onBackToCart={handleBackToCart}
              />
            )
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <ToastContainer position="top-center" autoClose={4000} /> */}
<ToastContainer
  position="top-center"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>

      <Footer />
    </>
  );
}

export default App;
