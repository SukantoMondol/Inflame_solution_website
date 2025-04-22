import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaLaptopCode, FaCloud, FaRobot, FaUsers, FaRocket, FaCogs, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SoftwareDevelopment() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("development");

  const slides = [
    { src: "/img/cr.gif", alt: "CodeZap Development Platform" },
    { src: "/img/971.jpg", alt: "Cloud Solutions" },
    { src: "/img/mig2.gif", alt: "AI Integration Tools" },
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
      id: "development",
      title: "Development Platform",
      content: "Build robust software with our cutting-edge development tools and real-time collaboration.",
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      content: "Scale your applications effortlessly with our secure cloud infrastructure.",
    },
    {
      id: "ai",
      title: "AI Integration",
      content: "Enhance your software with AI-powered features and automation.",
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
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)",
      rotate: 2,
      transition: { duration: 0.3 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <Head>
        <title>CodeZap - Innovative Software Development</title>
        <meta
          name="description"
          content="Transform your ideas into reality with CodeZap’s advanced software development tools, cloud solutions, and AI integrations."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="software-dev">


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
                Innovate with <span>CodeZap</span>
              </h1>
              <p className="p">
                Transform your ideas into cutting-edge software with our advanced development platform, cloud solutions, and AI integrations.
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
                src="/img/dev-hero.png"
                alt="CodeZap Platform"
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
            Pioneering Software Development Solutions
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
              <h2 className="h1">Features That Empower</h2>
              <p className="p">
                Equip your team with next-gen tools for software development, deployment, and innovation.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaLaptopCode />,
                  title: "Dev Platform",
                  desc: "Build apps with real-time collaboration and advanced tooling.",
                },
                {
                  icon: <FaCloud />,
                  title: "Cloud Infrastructure",
                  desc: "Scale seamlessly with secure, high-performance cloud solutions.",
                },
                {
                  icon: <FaRobot />,
                  title: "AI Integration",
                  desc: "Embed AI capabilities for smarter, automated applications.",
                },
                {
                  icon: <FaUsers />,
                  title: "Team Sync",
                  desc: "Collaborate in real time with integrated workflows.",
                },
                {
                  icon: <FaRocket />,
                  title: "Rapid Deployment",
                  desc: "Launch apps faster with automated CI/CD pipelines.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Enterprise Security",
                  desc: "Protect your code with top-tier encryption and compliance.",
                },
                {
                  icon: <FaCogs />,
                  title: "Custom APIs",
                  desc: "Integrate with your ecosystem via flexible APIs.",
                },
                {
                  icon: <FaStar />,
                  title: "Scalable Architecture",
                  desc: "Design apps that grow with your business needs.",
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
              <h2 className="h1">Why CodeZap Excels</h2>
              <p className="p">
                Accelerate development, enhance scalability, and drive innovation with our futuristic tools.
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
                  src="/img/img4.gif"
                  alt="CodeZap Benefits"
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
                    title: "Speed Up Development",
                    desc: "Automate workflows to ship code faster.",
                  },
                  {
                    title: "Scale Effortlessly",
                    desc: "Leverage cloud infrastructure for growth.",
                  },
                  {
                    title: "Innovate with AI",
                    desc: "Integrate AI for smarter applications.",
                  },
                  {
                    title: "Stay Secure",
                    desc: "Protect your projects with robust security.",
                  },
                  {
                    title: "Collaborate Seamlessly",
                    desc: "Unite teams with real-time tools.",
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
              <h2>Experience CodeZap in Action</h2>
              <p className="p">
                Explore our development platform, cloud solutions, and AI tools through an immersive demo.
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
                      "Next-gen development experience",
                      "Scalable cloud infrastructure",
                      "AI-driven innovation",
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
                <h5>Is CodeZap suitable for startups?</h5>
                <p>
                  Yes, our scalable tools are designed for startups and enterprises alike, with flexible pricing.
                </p>
              </div>
              <div className="faq-item">
                <h5>Can I integrate CodeZap with my existing stack?</h5>
                <p>
                  Absolutely, our APIs and integrations support a wide range of tech stacks.
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
              <h2>Voices from Innovators</h2>
              <p>Hear from developers and CTOs thriving with CodeZap’s solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Alex Carter",
                  role: "CTO, TechTrend",
                  quote: "CodeZap’s platform cut our dev time in half. It’s a game-changer.",
                },
                {
                  name: "Maya Singh",
                  role: "Lead Developer",
                  quote: "The AI tools are incredible—our apps are smarter than ever.",
                },
                {
                  name: "Liam Wu",
                  role: "Startup Founder",
                  quote: "Scaling with CodeZap’s cloud was seamless and cost-effective.",
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
              <h2>Choose Your Plan</h2>
              <p>Flexible pricing to fuel your software development journey.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  features: [
                    "Up to 10 Users",
                    "Core Dev Tools",
                    "Basic Cloud",
                    "Email Support",
                  ],
                  link: "contact",
                  cta: "Get Started",
                },
                {
                  name: "Pro",
                  price: "$99",
                  features: [
                    "Up to 50 Users",
                    "Advanced Dev Tools",
                    "Full Cloud Access",
                    "AI Features",
                    "Priority Support",
                  ],
                  link: "contact",
                  cta: "Choose Pro",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Unlimited Users",
                    "All Pro Features",
                    "Custom AI Models",
                    "Dedicated Support",
                    "Private Cloud",
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
              <h2>Ready to Build the Future?</h2>
              <p>
                Start your free trial and unleash your team’s potential with CodeZap’s innovative tools.
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