import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMoonSharp } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  const router = useRouter();
  const [mobile, setMobile] = useState(false);

  const handleMobileOpen = () => {
    setMobile(!mobile);
  };

  const handleMobileClose = () => {
    setMobile(false);
  };

  return (
    <header>
      <nav className="container flex flex-sb">
        <div className="logo flex gap-2">
          <Link href="/">
            <img src="/img/inflame logo 1.png" alt="" />
          </Link>
        </div>
        <div className="navlist flex gap-2">
          <ul className="flex gap-2">
            <li>
              <Link href="/" className={activeLink === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={activeLink === "/services" ? "active" : ""}
              >
                Services
              </Link>

            </li>
            <li className="dropdown">
              <Link
                href="/projects"
                className={activeLink === "/projects" ? "active" : ""}
              >
                Our Software
                <FiChevronDown />

              </Link>
              <div className="dropdown-content">
                <Link href="/projects/accounting_software">Accounting Software</Link>
                <Link href="/projects/inventory_software">Inventory Software</Link>
                <Link href="/projects/manufacturing_software">Manufacturing Software</Link>
                <Link href="/projects/hr&payroll">HR & Payroll</Link>
                <Link href="/projects/ticketing_system">Ticketing System</Link>
                <Link href="/projects/crm_software">CRM Software</Link>
                <Link href="/projects/pos_software">POS Software</Link>
              </div>
            </li>
            <li>
              <Link href="/gallery" className={activeLink === "/gallery" ? "active" : ""}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/shop" className={activeLink === "/shop" ? "active" : ""}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" className={activeLink === "/blogs" ? "active" : ""}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={activeLink === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="darkmodetoggle" onClick={toggleDarkMode}>
            {darkMode ? <IoMoonSharp /> : <LuSun />}
          </div>
          <button>
            <Link href="/contact">Contact Us</Link>
          </button>
          <div className="mobiletagglesvg" onClick={handleMobileOpen}>
            <HiMiniBars3BottomRight />
          </div>
        </div>
        <div className={mobile ? "mobilenavlist active" : "mobilenavlist"}>
          <span onDoubleClick={handleMobileClose} className={mobile ? "active" : ""}></span>
          <div className="mobilelogo">
            <img src="/img/logo.jpg" alt="logo" />
            <h2>Inflame Solution Ltd</h2>
          </div>
          <ul className="flex gap-1 flex-col flex-left mt-3" onClick={handleMobileClose}>
            <li>
              <Link href="/" className={activeLink === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={activeLink === "/services" ? "active" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className={activeLink === "/projects" ? "active" : ""}>
                Our Software
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={activeLink === "/gallery" ? "active" : ""}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/shop" className={activeLink === "/shop" ? "active" : ""}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blogs" className={activeLink === "/blogs" ? "active" : ""}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={activeLink === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
