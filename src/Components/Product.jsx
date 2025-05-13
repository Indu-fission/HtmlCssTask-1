import './Product.css';
import duke from '../assets/duke.jpg';
import bsa from '../assets/BSA.jpg';
import himalayan from '../assets/himalayan.jpg';
import jawa from '../assets/jawa.jpg';
import kawasaki from '../assets/kawasaki.jpg';
import royalenfield from '../assets/Royal-Enfield.jpg';
import scooty from '../assets/scooty.jpg';
import speed400 from '../assets/Speed-400.jpg';

const products = [
  { id: 1, title: 'KTM Duke', price: '$1200', image: duke },
  { id: 2, title: 'BSA WM20', price: '$1500', image: bsa },
  { id: 3, title: 'Himalayan 450', price: '$1800', image: himalayan },
  { id: 4, title: 'Jawa 42', price: '$800', image: jawa },
  { id: 5, title: 'Kawasaki Ninja', price: '$1700', image: kawasaki },
  { id: 6, title: 'Royal Enfield', price: '$1400', image: royalenfield },
  { id: 7, title: 'Scooty Pept', price: '$1700', image: scooty },
  { id: 8, title: 'Speed 400', price: '$1400', image: speed400 }
];

function Product() {
  setTimeout(() => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartIcon = document.querySelector('.cart-wrapper');
    let cartPopup = document.createElement('div');
    cartPopup.className = 'cart-popup';
    document.body.appendChild(cartPopup);

    function updateCartCount() {
      cartCount.textContent = cart.length;
    }

    function renderCart() {
      cartPopup.innerHTML = `
        <div class="cart-popup-header">
          <h3>Cart Items</h3>
          <span class="cart-close-btn" title="Close">&times;</span>
        </div>
        <div class="cart-list"></div>
      `;
      const list = cartPopup.querySelector('.cart-list');
      if (cart.length === 0) {
        list.innerHTML = '<p>Your cart is empty.</p>';
      } else {
        cart.forEach((item, index) => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'cart-item';
          itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}" />
            <div class="cart-item-info">
              <p>${item.title}</p>
              <span>${item.price}</span>
            </div>
            <button class="remove-btn" data-index="${index}">Remove</button>
          `;
          list.appendChild(itemDiv);
        });
      }

      cartPopup.querySelectorAll('.remove-btn').forEach(btn => {
        btn.onclick = (e) => {
          const index = e.target.getAttribute('data-index');
          cart.splice(index, 1);
          updateCartCount();
          renderCart();
        };
      });

      const closeBtn = cartPopup.querySelector('.cart-close-btn');
      closeBtn.onclick = () => cartPopup.classList.remove('visible');
    }

    cartIcon.onclick = () => {
      renderCart();
      cartPopup.classList.toggle('visible');
    };

    document.querySelectorAll('.add-to-cart-btn').forEach((btn, i) => {
      btn.onclick = () => {
        const product = products[i];
        cart.push(product);
        updateCartCount();
        alert(`${product.title} added to cart!`);
      };
    });
  }, 0);

  return (
    <section className="product-section" id='product' style={{display:'none'}}>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p className="price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
