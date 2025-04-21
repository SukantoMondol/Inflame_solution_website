
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaCashRegister, FaChartLine, FaGift, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaUsers, FaPlug, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

export default function AccountingSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("dashboard");

  const slides = [
    { src: "/img/2.jpg", alt: "AccountPro Dashboard" },
    { src: "/img/1.jpg", alt: "Automated Invoicing" },
    { src: "/img/3.jpg", alt: "Financial Reports" },
  ];

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tabs = [
    {
      id: "dashboard",
      title: "Intuitive Dashboard",
      content:
        "Access financial data, track expenses, and monitor cash flow with a user-friendly interface designed for clarity and efficiency.",
    },
    {
      id: "invoicing",
      title: "Automated Invoicing",
      content:
        "Create and send professional invoices in seconds. Automate recurring billing and track payments effortlessly.",
    },
    {
      id: "reporting",
      title: "Advanced Reporting",
      content:
        "Generate detailed financial reports, monitor profit margins, and ensure compliance with real-time insights.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <Head>
        <title>Accounting Solutions</title>
        <meta
          name="description"
          content="Streamline your financial management with AccountPro’s intuitive dashboard, automated invoicing, and powerful reporting tools."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="pos-software">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1 className="h1">
                Simplify Finances with <span>AccountPro</span>
              </h1>
              <p className="p">
                Transform your accounting with intuitive tools for invoicing, expense tracking, and financial reporting, designed to save time and boost accuracy.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Features
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(244, 63, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="hero-image"
              variants={slideRight}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/img/img5.png"
                alt="AccountPro Dashboard"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
              />
            </motion.div>
          </div>
        </section>
        <div className="headers">
          <span className="banner-text">
            Best Software development company in Bangladesh
          </span>
          <Link href="contact">
            <span className="demo">Book for Demo</span>
          </Link>
        </div>

        {/* Features Section */}
        <section className="features section-padding" id="features">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Features That Empower Your Finances</h2>
              <p className="p">
                Take control of your accounting with tools designed for efficiency, accuracy, and compliance.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCashRegister />,
                  title: "Automated Invoicing",
                  desc: "Generate and send invoices instantly with automated reminders.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Financial Reporting",
                  desc: "Access real-time profit, loss, and balance sheet reports.",
                },
                {
                  icon: <FaUsers />,
                  title: "Multi-User Access",
                  desc: "Collaborate with your team with role-based permissions.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Access",
                  desc: "Manage finances on the go with our mobile app.",
                },
                {
                  icon: <FaGift />,
                  title: "Tax Compliance",
                  desc: "Simplify tax calculations and filings with built-in tools.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Secure Data",
                  desc: "Protect your financial data with bank-grade encryption.",
                },
                {
                  icon: <FaPlug />,
                  title: "Seamless Integrations",
                  desc: "Connect with payroll, CRM, and banking platforms.",
                },
                {
                  icon: <FaStar />,
                  title: "Expense Tracking",
                  desc: "Monitor and categorize expenses effortlessly.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={index % 2 === 0 ? slideLeft : slideRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="icon-wrapper">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits section-padding" id="benefits">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Why AccountPro Stands Out</h2>
              <p className="p">
                Streamline your financial operations and focus on growing your business with AccountPro.
              </p>
            </motion.div>
            <div className="benefits-grid">
              <motion.div
                className="benefits-image"
                variants={slideLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Image
                  src="/img/img5.jpg"
                  alt="AccountPro Benefits"
                  width={880}
                  height={450}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Save Time",
                    desc: "Automate repetitive tasks like invoicing and reconciliation.",
                  },
                  {
                    title: "Increase Accuracy",
                    desc: "Reduce errors with smart data entry and validation.",
                  },
                  {
                    title: "Ensure Compliance",
                    desc: "Stay audit-ready with accurate tax and financial records.",
                  },
                  {
                    title: "Gain Insights",
                    desc: "Make informed decisions with detailed financial analytics.",
                  },
                  {
                    title: "Scale Confidently",
                    desc: "Grow your business with tools that adapt to your needs.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    variants={slideRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <IoMdCheckmarkCircleOutline className="benefit-icon" />
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="demo-section section-padding" id="demo">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Experience AccountPro in Action</h2>
              <p className="p">
                Explore the power of AccountPro’s accounting software through an interactive demo. See how our intuitive dashboard, automated invoicing, and advanced reporting can simplify your financial management.
              </p>
            </motion.div>
            <motion.div
              className="demo-container"
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="demo-grid">
                {/* Carousel */}
                <motion.div
                  className="demo-carousel"
                  variants={slideLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        width={600}
                        height={400}
                        style={{ objectFit: "cover" }}
                        className="demo-img"
                        onError={() => console.error(`Failed to load image: ${slides[currentSlide].src}`)}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="carousel-controls">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => {
                          console.log("Carousel dot clicked:", index);
                          setCurrentSlide(index);
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Tabs and Content */}
                <motion.div
                  className="demo-content"
                  variants={slideRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="demo-tabs">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        className={`demo-tab ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => {
                          console.log("Tab clicked:", tab.id);
                          setActiveTab(tab.id);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab.title}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="demo-tab-content"
                    >
                      <h4>{tabs.find((tab) => tab.id === activeTab)?.title}</h4>
                      <p>{tabs.find((tab) => tab.id === activeTab)?.content}</p>
                    </motion.div>
                  </AnimatePresence>
                  <motion.div
                    className="demo-benefits"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      "Effortless financial management with a clean interface",
                      "Real-time insights for better decision-making",
                      "Seamless integration with your existing tools",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="benefit-item"
                      >
                        <IoMdCheckmarkCircleOutline className="check-icon" />
                        <p>{benefit}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Request Demo Button */}
              <Link href="/request-demo" legacyBehavior>
                <motion.a
                  className="btn btn-primary demo-request-btn"
                  onClick={() => console.log("Request Demo clicked")}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(245, 158, 11, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Request a Live Demo
                </motion.a>
              </Link>
            </motion.div>

            {/* FAQ Snippet */}
            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>Frequently Asked Questions</h4>
              <div className="faq-item">
                <h5>Is AccountPro compatible with mobile devices?</h5>
                <p>
                  Yes, AccountPro offers full mobile compatibility, allowing you to manage finances from anywhere using our mobile app.
                </p>
              </div>
              <div className="faq-item">
                <h5>Can I integrate AccountPro with my existing systems?</h5>
                <p>
                  Absolutely. AccountPro supports seamless integrations with payroll, CRM, and banking platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials section-padding" id="testimonials">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Voices from Financial Experts</h2>
              <p>Hear from businesses thriving with AccountPro’s accounting solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Emma Thompson",
                  role: "Small Business Owner",
                  quote:
                    "AccountPro simplified our invoicing and tax prep. It’s a game-changer for our small team!",
                },
                {
                  name: "Rahul Patel",
                  role: "Freelance Accountant",
                  quote:
                    "The reporting tools are incredible. I can generate client reports in minutes, not hours.",
                },
                {
                  name: "Clara Kim",
                  role: "CFO, Retail Chain",
                  quote:
                    "AccountPro’s integrations and real-time data keep our finances on track across multiple locations.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  variants={slideUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <FaStar className="star-icon" />
                  <p className="quote">“{testimonial.quote}”</p>
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing section-padding" id="pricing">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Choose Your Accounting Plan</h2>
              <p>Flexible pricing to streamline your financial management.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$19",
                  features: [
                    "1 User",
                    "Basic Invoicing",
                    "Standard Reports",
                    "Email Support",
                  ],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$49",
                  features: [
                    "Up to 5 Users",
                    "Expense Tracking",
                    "Tax Compliance Tools",
                    "Integrations",
                    "Priority Support",
                  ],
                  link: "/pricing/growth",
                  cta: "Choose Growth",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited Users",
                    "All Growth Features",
                    "Dedicated Manager",
                    "Custom Integrations",
                    "24/7 Support",
                  ],
                  link: "/contact",
                  cta: "Contact Us",
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                  variants={slideUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                >
                  {plan.popular && <span className="popular-badge">Most Popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="price">
                    {plan.price}
                    {plan.price !== "Custom" && <span>/month</span>}
                  </div>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <IoMdCheckmarkCircleOutline className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.link} legacyBehavior>
                    <motion.a
                      className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {plan.cta}
                    </motion.a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta section-padding">
          <div className="container">
            <motion.div
              className="cta-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>Ready to Simplify Your Accounting?</h2>
              <p>
                Start your free trial and let AccountPro bring clarity to your finances and spark to your business growth.
              </p>
              <motion.a
                href="/signup"
                className="btn btn-primary cta-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(245, 158, 11, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Try for Free
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}