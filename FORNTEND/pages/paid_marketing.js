import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaBullhorn, FaChartLine, FaAd, FaUsers, FaRocket, FaCogs, FaStar, FaDollarSign } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function PaidMarketing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("ppc");

  const slides = [
    { src: "/img/ppc-campaigns.jpg", alt: "AdBlitz PPC Campaigns" },
    { src: "/img/social-ads.jpg", alt: "Social Media Ads" },
    { src: "/img/display-ads.jpg", alt: "Display Advertising" },
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
      id: "ppc",
      title: "PPC Campaigns",
      content: "Maximize ROI with targeted pay-per-click advertising campaigns.",
    },
    {
      id: "social",
      title: "Social Media Ads",
      content: "Engage audiences with dynamic ads on social platforms.",
    },
    {
      id: "display",
      title: "Display Ads",
      content: "Capture attention with visually stunning display advertising.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const slideLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const slideRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const glowEffect = {
    whileHover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(2, 136, 209, 0.5), 0 0 40px rgba(2, 136, 209, 0.3)",
      rotate: 2,
      transition: { duration: 0.3 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <Head>
        <title>Paid Marketing Solutions</title>
        <meta
          name="description"
          content="Drive results with AdBlitz’s high-impact paid marketing strategies, including PPC, social media ads, and display advertising."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="paid-marketing">


        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="h1">
                Amplify with <span>Our Marketing</span>
              </h1>
              <p className="p">
                Skyrocket your brand with high-impact paid marketing strategies, including PPC, social media ads, and display advertising.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  {...glowEffect}
                >
                  Explore Features
                </motion.a>
                <motion.a
                  href="#demo"
                  className="btn btn-secondary"
                  {...glowEffect}
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
                src="/img/marketing-hero.png"
                alt="AdBlitz Platform"
                width={1200}
                height={650}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>
        <div className="headers">
          <span className="banner-text">
            High-Impact Paid Marketing Solutions
          </span>
          <Link href="/contact">
            <span className="btn btn-secondary">Book a Demo</span>
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
              <h2 className="h1">Features That Ignite</h2>
              <p className="p">
                Supercharge your campaigns with cutting-edge tools for paid advertising and analytics.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaBullhorn />,
                  title: "PPC Optimization",
                  desc: "Maximize ROI with precision-targeted PPC campaigns.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Social Media Ads",
                  desc: "Engage audiences with dynamic, platform-specific ads.",
                },
                {
                  icon: <FaAd />,
                  title: "Display Advertising",
                  desc: "Capture attention with stunning visual ad creatives.",
                },
                {
                  icon: <FaUsers />,
                  title: "Audience Targeting",
                  desc: "Reach the right customers with advanced segmentation.",
                },
                {
                  icon: <FaRocket />,
                  title: "Real-Time Analytics",
                  desc: "Track campaign performance with live data insights.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Ad Security",
                  desc: "Protect your campaigns with fraud detection tools.",
                },
                {
                  icon: <FaCogs />,
                  title: "Custom Integrations",
                  desc: "Seamlessly connect with your marketing stack.",
                },
                {
                  icon: <FaDollarSign />,
                  title: "Budget Optimization",
                  desc: "Allocate ad spend efficiently for maximum impact.",
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
              <h2 className="h1">Why AdBlitz Dominates</h2>
              <p className="p">
                Achieve unparalleled results with tools designed for precision, scale, and impact.
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
                  src="/img/marketing-benefits.png"
                  alt="AdBlitz Benefits"
                  width={1000}
                  height={550}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                  onError={() => console.error("Failed to load benefits image")}
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Maximize ROI",
                    desc: "Optimize ad spend for higher returns.",
                  },
                  {
                    title: "Scale Campaigns",
                    desc: "Expand reach with flexible ad strategies.",
                  },
                  {
                    title: "Target Precisely",
                    desc: "Reach ideal audiences with advanced tools.",
                  },
                  {
                    title: "Track Performance",
                    desc: "Monitor results with real-time analytics.",
                  },
                  {
                    title: "Stay Secure",
                    desc: "Protect campaigns with robust security.",
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
              <h2>Experience AdBlitz in Action</h2>
              <p className="p">
                Explore our PPC, social media, and display ad tools through an immersive demo.
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
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        width={700}
                        height={500}
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
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab.title}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.4 }}
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
                      "High-ROI PPC campaigns",
                      "Dynamic social media ads",
                      "Stunning display creatives",
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

              <Link href="/request-demo" legacyBehavior>
                <motion.a
                  className="btn btn-primary demo-request-btn"
                  onClick={() => console.log("Request Demo clicked")}
                  {...glowEffect}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  Request a Live Demo
                </motion.a>
              </Link>
            </motion.div>

            <motion.div
              className="demo-faq"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h4>Frequently Asked Questions</h4>
              <div className="faq-item">
                <h5>Is AdBlitz suitable for small budgets?</h5>
                <p>
                  Yes, our tools are designed to optimize even small ad budgets for maximum impact.
                </p>
              </div>
              <div className="faq-item">
                <h5>Can I integrate AdBlitz with my analytics tools?</h5>
                <p>
                  Absolutely, we support integrations with major analytics platforms.
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
              <h2>Voices from Our Clients</h2>
              <p>Hear from brands succeeding with AdBlitz’s paid marketing solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Sarah Lee",
                  role: "Marketing Director, TechTrend",
                  quote: "AdBlitz’s PPC campaigns tripled our conversions in weeks!",
                },
                {
                  name: "James Patel",
                  role: "E-commerce Owner",
                  quote: "Their social media ads are visually stunning and highly effective.",
                },
                {
                  name: "Maria Gomez",
                  role: "Startup Founder",
                  quote: "AdBlitz’s analytics helped us optimize our ad spend perfectly.",
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
              <h2>Choose Your Campaign Plan</h2>
              <p>Flexible pricing to fuel your paid marketing success.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Spark",
                  price: "$199",
                  features: [
                    "Up to $5K Ad Spend",
                    "Basic PPC Tools",
                    "Social Media Ads",
                    "Email Support",
                  ],
                  link: "contact",
                  cta: "Get Started",
                },
                {
                  name: "Ignite",
                  price: "$499",
                  features: [
                    "Up to $20K Ad Spend",
                    "Advanced PPC Tools",
                    "Full Social & Display Ads",
                    "Analytics Dashboard",
                    "Priority Support",
                  ],
                  link: "contact",
                  cta: "Choose Ignite",
                  popular: true,
                },
                {
                  name: "Blaze",
                  price: "Custom",
                  features: [
                    "Unlimited Ad Spend",
                    "All Ignite Features",
                    "Custom Ad Creatives",
                    "Dedicated Manager",
                    "API Integrations",
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
                      {...glowEffect}
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
              <h2>Ready to Amplify Your Brand?</h2>
              <p>
                Start your free trial and see how AdBlitz drives results with high-impact paid marketing.
              </p>
              <motion.a
                href="/signup"
                className="btn cta-btn"
                {...glowEffect}
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