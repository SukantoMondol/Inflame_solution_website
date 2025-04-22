import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaCashRegister, FaChartLine, FaGift, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaUsers, FaPlug, FaMobileAlt } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function POSSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("dashboard");

  const slides = [
    { src: "/img/ex5.jpg", alt: "RetailPro Dashboard" },
    { src: "/img/transactions.jpg", alt: "Fast Transactions" },
    { src: "/img/analytics.jpg", alt: "Real-Time Analytics" },
  ];
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2, // Stagger delay between child animations
      },
    },
  };

  const tabs = [
    {
      id: "dashboard",
      title: "Sleek Dashboard",
      content:
        "Navigate sales, inventory, and customer data with an intuitive interface designed for speed and ease. Real-time updates keep your team in sync.",
    },
    {
      id: "transactions",
      title: "Fast Transactions",
      content:
        "Process payments in seconds with a streamlined checkout process. Supports multiple payment methods, including mobile and contactless options.",
    },
    {
      id: "analytics",
      title: "Powerful Analytics",
      content:
        "Gain actionable insights with vibrant dashboards. Track sales trends, inventory levels, and customer behavior to make data-driven decisions.",
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
        <title> POS Solutions</title>
        <meta
          name="description"
          content="Revolutionize your retail experience with RetailPro’s lightning-fast transactions, intuitive inventory tools, and customer-focused features."
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
                Elevate Retail with <span>RetailPro</span>
              </h1>
              <p className="p">
                Turn every sale into a seamless experience with lightning-fast
                transactions, effortless inventory management, and tools that
                delight your customers and grow your business.
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
                src="/img/payroll.png"
                alt="RetailPro Dashboard"
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
            <span className="btn btn-secondary">Book for Demo</span>
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
              <h2 className="h1">Features That Spark Retail Magic</h2>
              <p className="p">
                Empower your store with tools crafted for speed, simplicity, and
                unforgettable customer experiences.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCashRegister />,
                  title: "Fast Transactions",
                  desc: "Process sales in seconds with an intuitive checkout interface.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Real-Time Insights",
                  desc: "Track sales, inventory, and trends with vibrant dashboards.",
                },
                {
                  icon: <FaUsers />,
                  title: "Staff Management",
                  desc: "Schedule shifts and track performance with ease.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Payments",
                  desc: "Accept payments anywhere with secure mobile integration.",
                },
                {
                  icon: <FaGift />,
                  title: "Loyalty Programs",
                  desc: "Reward customers with personalized offers and points.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Secure Payments",
                  desc: "Safeguard every transaction with top-tier encryption.",
                },
                {
                  icon: <FaPlug />,
                  title: "Seamless Integrations",
                  desc: "Sync with e-commerce, accounting, and marketing tools.",
                },
                {
                  icon: <FaStar />,
                  title: "Customer Engagement",
                  desc: "Build lasting relationships with targeted promotions.",
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
              <h2 className="h1">Why RetailPro Shines Bright</h2>
              <p className="p">
                Unlock the power to transform your store into a customer magnet
                and a sales powerhouse.
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
                  src="/img/img2.gif"
                  alt="RetailPro Benefits"
                  width={880}
                  height={450}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Boost Sales",
                    desc: "Speed up checkouts and upsell with smart suggestions.",
                  },
                  {
                    title: "Delight Customers",
                    desc: "Create memorable experiences with personalized service.",
                  },
                  {
                    title: "Simplify Operations",
                    desc: "Manage inventory and staff from one sleek platform.",
                  },
                  {
                    title: "Grow Loyalty",
                    desc: "Keep customers coming back with tailored rewards.",
                  },
                  {
                    title: "Scale Effortlessly",
                    desc: "Expand your business with tools that adapt to your vision.",
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
              <h2>Experience RetailPro in Action</h2>
              <p className="p">
                Explore the power of RetailPro’s POS system through an
                interactive demo. See how our intuitive interface, fast
                transactions, and robust analytics can transform your retail
                operations.
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
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="carousel-controls">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`carousel-dot ${index === currentSlide ? "active" : ""
                          }`}
                        onClick={() => setCurrentSlide(index)}
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
                        className={`demo-tab ${activeTab === tab.id ? "active" : ""
                          }`}
                        onClick={() => setActiveTab(tab.id)}
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
                      "Streamlined operations with a user-friendly interface",
                      "Real-time data to optimize business decisions",
                      "Seamless integration with existing tools",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn} // Apply child animation here
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
              <motion.a
                href="/request-demo"
                className="btn btn-primary demo-request-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(245, 158, 11, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                Request a Live Demo
              </motion.a>
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
                <h5>Is RetailPro compatible with mobile devices?</h5>
                <p>
                  Yes, RetailPro offers full mobile compatibility, allowing you
                  to process transactions and manage operations from anywhere
                  using our mobile app.
                </p>
              </div>
              <div className="faq-item">
                <h5>Can I integrate RetailPro with my existing systems?</h5>
                <p>
                  Absolutely. RetailPro supports seamless integrations with
                  popular e-commerce platforms, accounting software, and
                  marketing tools.
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
              <h2>Voices from Retail Champions</h2>
              <p>
                Hear from store owners thriving with RetailPro’s vibrant POS
                solutions.
              </p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Lila Carter",
                  role: "Boutique Owner",
                  quote:
                    "RetailPro turned our checkout process into a breeze. Customers love the speed and our sales are soaring!",
                },
                {
                  name: "Jamal Khan",
                  role: "Café Manager",
                  quote:
                    "The loyalty program keeps our regulars coming back. It’s like RetailPro knows our customers better than we do!",
                },
                {
                  name: "Sophie Nguyen",
                  role: "Retail Chain Director",
                  quote:
                    "Managing multiple stores is effortless now. RetailPro’s insights help us stay ahead of the game.",
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
              <h2>Choose Your Retail Plan</h2>
              <p>Flexible pricing to fuel your store’s success.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  features: [
                    "1 Register",
                    "Basic Transactions",
                    "Standard Reports",
                    "Email Support",
                  ],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$69",
                  features: [
                    "Up to 5 Registers",
                    "Inventory Management",
                    "Loyalty Programs",
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
                    "Unlimited Registers",
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
                  {plan.popular && (
                    <span className="popular-badge">Most Popular</span>
                  )}
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
                      className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"
                        }`}
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
              <h2>Ready to Redefine Retail?</h2>
              <p>
                Start your free trial and let RetailPro bring joy to every
                transaction and spark to your business growth.
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
