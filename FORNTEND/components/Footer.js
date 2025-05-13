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
          <p><BiSolidPhoneCall /> +8801897715426</p>
          <p><HiOutlineMail /> inflamesolutionsltd@gamil.com</p>
          <p>📍 Gulshan-2,Road:115,House No:32</p>
          <div className="mapouter">
            <iframe
              className="gmap_iframe"
              width="100%"
              height="160"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.782239069163!2d90.41553141498125!3d23.789543184572113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a178857d29%3A0x6e26380b44daf92e!2sHouse%2032%2C%20Rd%20115%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1714215675392!5m2!1sen!2sbd"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Inflame Solutions Ltd. | All rights reserved.
      </div>
    </footer>
  );
}
