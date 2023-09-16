import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <img className="logo" src="images/DH.png" alt="DH-logo" />
        </div>
        <div className="container-red">
          <img className="red" src="images/ico-facebook.png" alt="facebook" />
          <img className="red" src="images/ico-instagram.png" alt="instagram" />
          <img className="red" src="images/ico-tiktok.png" alt="tiktok" />
          <img className="red" src="images/ico-whatsapp.png" alt="whatsapp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
