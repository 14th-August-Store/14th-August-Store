import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaStore, FaPhoneAlt,FaSearchLocation,FaMailBulk} from "react-icons/fa";
import "../css/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        <div className="footer-box">

          <h2>
            14th August Store
          </h2>

          <p>
            Celebrate Pakistan's Independence with
            quality products and special offers.
          </p>

        </div>



        <div className="footer-box">

          <h3>
            Quick Links
          </h3>


          <Link to="/">
            <FaHome /> Home
          </Link>


          <Link to="/shop">
           <FaStore /> Shop
          </Link>


          <Link to="/cart">
           <FaShoppingCart /> Cart
          </Link>


          <Link to="/contact">
           <FaPhoneAlt /> Contact
          </Link>


        </div>




        <div className="footer-box">

          <h3>
            Contact
          </h3>

          <p>
            <FaSearchLocation/> Karachi, Pakistan
          </p>

          <p>
            <FaPhoneAlt /> +92 313 2785808
          </p>

          <p>
            <FaMailBulk/> rizwanchandna6@gmail.com
          </p>


        </div>


      </div>



      <div className="footer-bottom">

        © 2026 14th August Store

      </div>


    </footer>

  );

}


export default Footer;