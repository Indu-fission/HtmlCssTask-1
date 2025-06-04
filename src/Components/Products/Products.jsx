import { useEffect, useState } from 'react';
import './Products.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [minRating, setMinRating] = useState('All');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        console.error("Error fetching products:", err);
        toast.error("Failed to load products. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      });
  }, []);

  const filterProducts = () => {
    return products.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === 'All' || p.category === category;

      const matchesPrice = (() => {
        if (priceRange === 'All') return true;
        if (priceRange === 'Below50') return p.price < 50;
        if (priceRange === '50to100') return p.price >= 50 && p.price <= 100;
        if (priceRange === 'Above100') return p.price > 100;
        return true;
      })();

      const matchesRating = minRating === 'All' || p.rating.rate >= parseFloat(minRating);

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  };

  const filtered = filterProducts();
  const uniqueCategories = ['All', ...new Set(products.map(p => p.category))];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // return (
  //   <section className="product-section">
  //     <input
  //       type="text"
  //       placeholder="Search products..."
  //       className="search-bar"
  //       value={search}
  //       onChange={e => setSearch(e.target.value)}
  //       autoFocus
  //     />
  //     <div className="product-grid">
  //       {filtered.map((product) => (
  //         <div className="product-card" key={product.id}>
  //           <img src={product.image} alt={product.title} className="product-image" />
  //           <div className="product-info">
  //             <h3>{product.title}</h3>
  //             <p>${product.price}</p>
  //             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //     <ToastContainer />
  //   </section>
  // );

  return (
    <section className="product-section">
  <div className="filter-bar">
    <input
      type="text"
      placeholder="Search products..."
      className="search-bar"
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
    <select value={category} onChange={e => setCategory(e.target.value)}>
      {uniqueCategories.map(cat => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
    <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
      <option value="All">All Prices</option>
      <option value="Below50">Below $50</option>
      <option value="50to100">$50 - $100</option>
      <option value="Above100">Above $100</option>
    </select>
    <select value={minRating} onChange={e => setMinRating(e.target.value)}>
      <option value="All">All Ratings</option>
      <option value="1">1 ★ & above</option>
      <option value="2">2 ★ & above</option>
      <option value="3">3 ★ & above</option>
      <option value="4">4 ★ & above</option>
      <option value="5">5 ★ only</option>
    </select>
  </div>
  <div className="product-grid">
    {filtered.map((product) => (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="rating">★ {product.rating.rate}</p>
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}

export default Products;
