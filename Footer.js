import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div>
          <h2>Cities</h2>
          <ul>
            <li>🚗 Self drive cars in <strong>Kerala</strong></li>
            <li>🚗 Self drive cars in <strong>Tamilnadu</strong></li>
            <li>🚗 Self drive cars in <strong>Hyderabad</strong></li>
            <li>🚗 Self drive cars in <strong>Hyderabad International Airport</strong></li>
            <li>🚗 Self drive cars in <strong>Cochin</strong></li>
            <li>🚗 Self drive cars in <strong>Cochin International Airport</strong></li>
            <li>🚗 Self drive cars in <strong>Calicut</strong></li>
            <li>🚗 Self drive cars in <strong>Calicut International Airport</strong></li>
            <li>🚗 Self drive cars in <strong>Trivandrum</strong></li>
            <li>🚗 Self drive cars in <strong>Trivandrum International Airport</strong></li>
            <li>🚗 Self drive cars in <strong>Chennai</strong></li>
            <li>🚗 Self drive cars in <strong>Chennai Airport</strong></li>
            <li>🚗 Self drive cars in <strong>Bangalore</strong></li>
          </ul>
        </div>

        
        <div>
          <h2>Helpful Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>

        
        <div className="contact">
          <h2>Get in touch</h2>
          <p>📍 3, 1047/2, Indus Motor Company Pvt LTD M.G. Road, Thevara, Ernakulam, Kerala, 682015</p>
          <p>📧 support@indusgo.in</p>
          <p>📞 +91 9539580000</p>

          <h2>Follow us on</h2>
          <div className="social-icons">
            <a href="#">📘</a> {/* Facebook */}
            <a href="#">🐦</a> {/* Twitter */}
            <a href="#">📷</a> {/* Instagram */}
            <a href="#">▶️</a> {/* YouTube */}
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2025 Indus Go. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
