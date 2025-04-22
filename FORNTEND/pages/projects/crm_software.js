import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaUsers, FaChartLine, FaGift, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaPlug, FaMobileAlt, FaCogs } from "react-icons/fa";
import { useState } from "react";

export default function CRMSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("dashboard");

  const slides = [
    { src: "/img/img2.gif", alt: "CRMPro Dashboard" },
    { src: "/img/lead-management.jpg", alt: "Lead Management" },
    { src: "/img/sales-analytics.jpg", alt: "Sales Analytics" },
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
      title: "CRM Dashboard",
      content:
        "Centralize customer data, track interactions, and manage pipelines with a real-time dashboard.",
    },
    {
      id: "leads",
      title: "Lead Management",
      content:
        "Capture, track, and nurture leads with automated workflows for higher conversions.",
    },
    {
      id: "analytics",
      title: "Sales Analytics",
      content:
        "Analyze sales performance and customer trends with detailed, actionable reports.",
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
        <title>CRM & Sales Solutions</title>
        <meta
          name="description"
          content="Boost sales and customer relationships with CRMPro’s intuitive CRM system, lead management, and analytics tools."
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
                Grow Smarter with <span>CRMPro</span>
              </h1>
              <p className="p">
                Streamline customer management, automate lead nurturing, and gain insights with tools designed to drive sales and strengthen relationships.
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
                src="/img/img3.gif"
                alt="CRMPro Dashboard"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
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
              <h2 className="h1">Features That Drive Sales</h2>
              <p className="p">
                Equip your sales team with tools for seamless customer management, lead tracking, and analytics.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaUsers />,
                  title: "Customer Management",
                  desc: "Centralize customer data and interactions in one platform.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Sales Analytics",
                  desc: "Track pipeline performance and sales trends with clear dashboards.",
                },
                {
                  icon: <FaCogs />,
                  title: "Lead Automation",
                  desc: "Automate lead scoring, nurturing, and follow-ups.",
                },
                {
                  icon: <FaMobileAlt />,
                  title: "Mobile Access",
                  desc: "Manage customer relationships on the go with our mobile app.",
                },
                {
                  icon: <FaGift />,
                  title: "Campaign Tracking",
                  desc: "Monitor marketing campaigns and their impact on sales.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Secure Data",
                  desc: "Protect sensitive customer data with top-tier encryption.",
                },
                {
                  icon: <FaPlug />,
                  title: "Seamless Integrations",
                  desc: "Sync with email, marketing, and support platforms.",
                },
                {
                  icon: <FaStar />,
                  title: "Pipeline Management",
                  desc: "Visualize and optimize your sales pipeline with ease.",
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
              <h2 className="h1">Why CRMPro Excels</h2>
              <p className="p">
                Transform sales and customer relationships with tools that save time, enhance efficiency, and drive growth.
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
                  src="/img/img3.gif"
                  alt="CRMPro Benefits"
                  width={880}
                  height={450}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                  onError={() => console.error("Failed to load benefits image")}
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Save Time",
                    desc: "Automate lead management to focus on closing deals.",
                  },
                  {
                    title: "Boost Efficiency",
                    desc: "Streamline customer interactions with centralized data.",
                  },
                  {
                    title: "Stay Organized",
                    desc: "Track leads and sales with a unified dashboard.",
                  },
                  {
                    title: "Drive Revenue",
                    desc: "Optimize pipelines and campaigns for higher conversions.",
                  },
                  {
                    title: "Scale with Ease",
                    desc: "Grow your sales team with tools that adapt to your needs.",
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
              <h2>Experience CRMPro in Action</h2>
              <p className="p">
                Discover CRMPro’s CRM system through an interactive demo. See how our dashboard, lead management, and analytics drive sales success.
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
                      "Effortless CRM with a sleek interface",
                      "Optimized lead tracking in real time",
                      "Seamless integration with your sales ecosystem",
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
                <h5>Is CRMPro compatible with mobile devices?</h5>
                <p>
                  Yes, CRMPro offers full mobile compatibility, allowing you to manage customers and leads from anywhere using our mobile app.
                </p>
              </div>
              <div className="faq-item">
                <h5>Can I integrate CRMPro with my existing systems?</h5>
                <p>
                  Absolutely. CRMPro supports seamless integrations with email, marketing, and support platforms.
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
              <h2>Voices from Sales Leaders</h2>
              <p>Hear from sales professionals thriving with CRMPro’s solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Laura Bennett",
                  role: "Sales Manager",
                  quote:
                    "CRMPro’s lead automation has doubled our conversion rates. It’s incredibly intuitive!",
                },
                {
                  name: "James Patel",
                  role: "Business Development Lead",
                  quote:
                    "The analytics dashboards give us clear insights to optimize our sales strategy.",
                },
                {
                  name: "Sophie Nguyen",
                  role: "Sales Director",
                  quote:
                    "Managing our pipeline across regions is effortless with CRMPro’s dashboard.",
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
              <h2>Choose Your CRM Plan</h2>
              <p>Flexible pricing to streamline your sales and customer management.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$39",
                  features: [
                    "Up to 10 Users",
                    "Basic CRM",
                    "Standard Reports",
                    "Email Support",
                  ],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$89",
                  features: [
                    "Up to 50 Users",
                    "Lead Automation",
                    "Campaign Tracking",
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
              <h2>Ready to Transform Sales?</h2>
              <p>
                Start your free trial and let CRMPro simplify customer management, lead tracking, and analytics for your team.
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