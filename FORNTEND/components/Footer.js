import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="inflame-footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-col company">
          <img src="/img/inflame logo 2.png" alt="Inflame Logo" className="footer-logo" />
          <p>
            Inflame Solutions Ltd. delivers scalable, innovative software that transforms your business potential.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/products">Products</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h3>Our Products</h3>
          <ul>
            <li>Inventory Software</li>
            <li>Accounting System</li>
            <li>HR & Payroll</li>
            <li>CRM Tools</li>
            <li>POS System</li>
          </ul>
        </div>

        {/* Contact Info + Map */}
        <div className="footer-col contact">
          <h3>Contact Us</h3>
          <p><BiSolidPhoneCall /> +880 1234 567890</p>
          <p><HiOutlineMail /> info@inflamesolutions.com</p>
          <p>📍 Bashundhara R/A, Dhaka</p>
          <div className="mapouter">
            <iframe
              className="gmap_iframe"
              width="100%"
              height="160"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?q=bashundhara%20r/a%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Inflame Solutions Ltd. | All rights reserved.
      </div>
    </footer>
  );
}
