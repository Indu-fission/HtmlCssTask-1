import './Header.css';


function Header({ onNavigate }) {
    const handleNavigation=(id)=>{
        const idList=["home","about","contact","product"
        ]
    idList.forEach(id=>{
        document.getElementById(id).style.display="None"
    })
    document.getElementById(id).style.display="Block"
    }
  return (
    <header className="header">
      <div className="brand">
        <img src="./bike-logo-removebg-preview.png" alt="Bike Logo" className="logo" />
        <span className="brand-name"><a href="#home" onClick={() => handleNavigation('home')} style={{textDecoration:"none",color:"black"}}>BikeHub</a></span>
      </div>
      <nav className="navbar">
        <a href="#home" onClick={() => handleNavigation('home')}>Home</a>
        <a href="#product"  onClick={() => handleNavigation('product')}>Bikes</a>
        <a href="#about"  onClick={() => handleNavigation('about')}>About</a>
        <a href="#contact"  onClick={() => handleNavigation('contact')}>Contact</a>
        <div className="cart-wrapper">
          <img src="./carticon-removebg-preview.png" alt="Cart" className="cart-icon" />
          <span className="cart-count" id="cart-count">0</span>
        </div>
      </nav>
      <div className="header-line"></div>
    </header>
    
  );
}

export default Header;
