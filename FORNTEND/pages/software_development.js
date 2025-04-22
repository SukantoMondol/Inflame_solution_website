// pages/index.js
import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaCode, FaFileAlt, FaBook, FaUsers, FaRocket, FaCogs, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function LatexSoftware() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("editor");

  const slides = [
    { src: "/img/img1.gif", alt: "LaTeXPro Editor" },
    { src: "/img/3d.png.gif", alt: "Document Templates" },
    { src: "/img/3d.png.gif", alt: "Collaboration Tools" },
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
      id: "editor",
      title: "LaTeX Editor",
      content: "Craft professional LaTeX documents with real-time preview and syntax support.",
    },
    {
      id: "templates",
      title: "Templates",
      content: "Use pre-designed templates for reports, theses, and presentations.",
    },
    {
      id: "collaboration",
      title: "Collaboration",
      content: "Work together on LaTeX projects with real-time collaboration tools.",
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
        <title>Software Development</title>
        <meta
          name="description"
          content="Create professional LaTeX documents with LaTeXPro’s powerful editor, templates, and collaboration tools."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="latex-software">


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
                Master Documents with <span>Software</span>
              </h1>
              <p className="p">
                Build professional Software documents, automate workflows, and collaborate effortlessly with tools designed for precision and productivity.
              </p>
              <div className="hero-buttons">
                <motion.a
                  href="#features"
                  className="btn btn-primary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(45, 212, 191, 0.3)",
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
                    boxShadow: "0 8px 20px rgba(30, 64, 175, 0.3)",
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
                src="/img/3.jpg"
                alt="LaTeXPro Dashboard"
                width={1100}
                height={600}
                style={{ objectFit: "contain" }}
                className="hero-img"
                onError={() => console.error("Failed to load hero image")}
              />
            </motion.div>
          </div>
        </section>
        <div className="headers">
          <span className="banner-text">
            Premier LaTeX Software Development Solutions
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
              <h2 className="h1">Features That Simplify</h2>
              <p className="p">
                Empower your team with tools for creating, managing, and collaborating on software documents.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaCode />,
                  title: "Advanced Editor",
                  desc: "Edit LaTeX with real-time preview and syntax highlighting.",
                },
                {
                  icon: <FaFileAlt />,
                  title: "Template Library",
                  desc: "Access templates for academic, technical, and professional documents.",
                },
                {
                  icon: <FaBook />,
                  title: "Version Control",
                  desc: "Track document changes and manage revisions seamlessly.",
                },
                {
                  icon: <FaUsers />,
                  title: "Team Collaboration",
                  desc: "Work together on LaTeX projects in real time.",
                },
                {
                  icon: <FaRocket />,
                  title: "Cloud Sync",
                  desc: "Access your projects from anywhere with cloud storage.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Secure Storage",
                  desc: "Protect your documents with enterprise-grade encryption.",
                },
                {
                  icon: <FaCogs />,
                  title: "Custom Integrations",
                  desc: "Connect with publishing and workflow platforms.",
                },
                {
                  icon: <FaStar />,
                  title: "Automation Tools",
                  desc: "Automate formatting and compilation for efficiency.",
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
              <h2 className="h1">Why Software Stands Out</h2>
              <p className="p">
                Create high-quality documents, streamline workflows, and collaborate with ease using Software innovative tools.
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
                  src="/img/971.jpg"
                  alt="LaTeXPro Benefits"
                  width={900}
                  height={500}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                  onError={() => console.error("Failed to load benefits image")}
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Boost Productivity",
                    desc: "Automate repetitive tasks to focus on content creation.",
                  },
                  {
                    title: "Ensure Quality",
                    desc: "Produce polished, professional documents every time.",
                  },
                  {
                    title: "Stay Organized",
                    desc: "Manage projects with integrated version control.",
                  },
                  {
                    title: "Collaborate Easily",
                    desc: "Work with teams in real time, anywhere.",
                  },
                  {
                    title: "Scale Flexibly",
                    desc: "Adapt tools to meet your project’s evolving needs.",
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
              <h2>Discover LaTeXPro in Action</h2>
              <p className="p">
                Experience LaTeXPro’s editor, templates, and collaboration tools through an interactive demo.
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
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        width={650}
                        height={450}
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
                      "Powerful LaTeX editing with ease",
                      "Customizable templates for any project",
                      "Seamless real-time collaboration",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="-fn-item"
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
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(45, 212, 191, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
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
                <h5>Is LaTeXPro beginner-friendly?</h5>
                <p>
                  Yes, our editor and templates are designed to be accessible for beginners and experts alike.
                </p>
              </div>
              <div className="faq-item">
                <h5>Can I integrate LaTeXPro with other tools?</h5>
                <p>
                  Absolutely, LaTeXPro supports integrations with publishing and collaboration platforms.
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
              <h2>Trusted by LaTeX Users</h2>
              <p>Hear from professionals who rely on LaTeXPro for their document needs.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Dr. Anna Lee",
                  role: "Academic Researcher",
                  quote: "LaTeXPro’s editor has transformed how I prepare my research papers.",
                },
                {
                  name: "Michael Brown",
                  role: "Technical Writer",
                  quote: "The template library saves me hours on every project.",
                },
                {
                  name: "Priya Sharma",
                  role: "Graduate Student",
                  quote: "Collaborating on my thesis with my team is seamless with LaTeXPro.",
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
              <h2>Choose Your LaTeX Plan</h2>
              <p>Flexible pricing to suit your document creation and collaboration needs.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  features: [
                    "Up to 5 Users",
                    "Basic Editor",
                    "Standard Templates",
                    "Email Support",
                  ],
                  link: "contact",
                  cta: "Get Started",
                },
                {
                  name: "Professional",
                  price: "$79",
                  features: [
                    "Up to 25 Users",
                    "Advanced Editor",
                    "Full Template Library",
                    "Collaboration Tools",
                    "Priority Support",
                  ],
                  link: "contact",
                  cta: "Choose Professional",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited Users",
                    "All Professional Features",
                    "Custom Templates",
                    "Dedicated Support",
                    "API Access",
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
              <h2>Ready to Create with LaTeXPro?</h2>
              <p>
                Start your free trial and experience how LaTeXPro simplifies document creation and collaboration.
              </p>
              <motion.a
                href="/signup"
                className="btn cta-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.3)",
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