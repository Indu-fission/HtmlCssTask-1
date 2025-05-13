import './About.css';

function About() {
  return (
    <div className="about-page" id='about'style={{display:'none'}}>
      <h1 className="about-title">About BikeHub</h1>
      <div className="about-content">
        <p>
          <strong>BikeHub</strong> is your ultimate destination for high-quality bikes that cater to all kinds of riders — from beginners to professionals.
        </p>
        <p>
          We specialize in a wide range of bikes including mountain bikes, racing bikes, electric bikes, and cruisers. 
          Every product is carefully curated to deliver performance, safety, and style.
        </p>
        <p>
          Our goal is simple — to promote eco-friendly transportation while supporting the biking community with top-notch products and services.
        </p>
        <p>
          Join the BikeHub community and experience the joy of cycling with confidence and reliability.
        </p>
      </div>
    </div>
  );
}

export default About;
