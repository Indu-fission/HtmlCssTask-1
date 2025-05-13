import './Footer.css';  // import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} BikeHub. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
