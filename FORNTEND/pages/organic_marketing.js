import Head from "next/head";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline, IoIosLock } from "react-icons/io";
import { FaLeaf, FaGlobe, FaSeedling, FaUsers, FaRocket, FaCogs, FaStar, FaRecycle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function OrganicMarketing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("seo");

  const slides = [
    { src: "/img/seo-tools.jpg", alt: "GreenGrow SEO Tools" },
    { src: "/img/content-strategy.jpg", alt: "Content Strategy" },
    { src: "/img/social-media.jpg", alt: "Social Media Campaigns" },
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
      id: "seo",
      title: "Organic SEO",
      content: "Boost your rankings naturally with our eco-friendly SEO strategies.",
    },
    {
      id: "content",
      title: "Content Marketing",
      content: "Engage audiences with authentic, value-driven content.",
    },
    {
      id: "social",
      title: "Social Media",
      content: "Grow your brand with sustainable social media campaigns.",
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
      boxShadow: "0 0 20px rgba(46, 125, 50, 0.5), 0 0 40px rgba(46, 125, 50, 0.3)",
      rotate: 2,
      transition: { duration: 0.3 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <>
      <Head>
        <title>GreenGrow - Organic Marketing Solutions</title>
        <meta
          name="description"
          content="Elevate your brand with GreenGrow’s sustainable organic marketing strategies, including SEO, content, and social media."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Lora:wght@400;500&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="organic-marketing">


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
                Grow Naturally with <span>GreenGrow</span>
              </h1>
              <p className="p">
                Elevate your brand with sustainable organic marketing strategies, including SEO, content, and social media campaigns.
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
                alt="GreenGrow Platform"
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
            Sustainable Organic Marketing Solutions
          </span>
          <Link href="/contact">
            <span className="demo">Book a Demo</span>
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
              <h2 className="h1">Features That Bloom</h2>
              <p className="p">
                Empower your brand with eco-friendly tools for organic growth and engagement.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaLeaf />,
                  title: "Organic SEO",
                  desc: "Rank higher with sustainable, white-hat SEO strategies.",
                },
                {
                  icon: <FaGlobe />,
                  title: "Content Strategy",
                  desc: "Create authentic content that resonates with your audience.",
                },
                {
                  icon: <FaSeedling />,
                  title: "Social Media Growth",
                  desc: "Build communities with eco-conscious social campaigns.",
                },
                {
                  icon: <FaUsers />,
                  title: "Audience Engagement",
                  desc: "Connect with customers through personalized outreach.",
                },
                {
                  icon: <FaRocket />,
                  title: "Analytics Dashboard",
                  desc: "Track organic growth with real-time insights.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Data Privacy",
                  desc: "Protect customer data with secure practices.",
                },
                {
                  icon: <FaCogs />,
                  title: "Custom Campaigns",
                  desc: "Tailor strategies to your brand’s unique needs.",
                },
                {
                  icon: <FaRecycle />,
                  title: "Sustainable Practices",
                  desc: "Promote eco-friendly marketing with green initiatives.",
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
              <h2 className="h1">Why GreenGrow Thrives</h2>
              <p className="p">
                Grow your brand sustainably with tools designed for authenticity and impact.
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
                  alt="GreenGrow Benefits"
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
                    title: "Authentic Growth",
                    desc: "Build trust with organic, value-driven marketing.",
                  },
                  {
                    title: "Sustainable Impact",
                    desc: "Promote eco-friendly campaigns that last.",
                  },
                  {
                    title: "Engage Audiences",
                    desc: "Connect deeply with personalized content.",
                  },
                  {
                    title: "Track Success",
                    desc: "Monitor progress with intuitive analytics.",
                  },
                  {
                    title: "Scale Naturally",
                    desc: "Expand your reach with flexible strategies.",
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
              <h2>Experience GreenGrow in Action</h2>
              <p className="p">
                Discover our organic SEO, content marketing, and social media tools through an immersive demo.
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
                      "Sustainable SEO strategies",
                      "Engaging content creation",
                      "Eco-friendly social campaigns",
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
                <h5>Is GreenGrow suitable for small businesses?</h5>
                <p>
                  Yes, our scalable solutions are perfect for businesses of all sizes, with flexible pricing.
                </p>
              </div>
              <div className="faq-item">
                <h5>Are your strategies truly sustainable?</h5>
                <p>
                  Absolutely, we prioritize eco-friendly practices and ethical marketing techniques.
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
              <h2>Voices from Our Community</h2>
              <p>Hear from brands thriving with GreenGrow’s organic marketing solutions.</p>
            </motion.div>
            <div className="testimonials-grid">
              {[
                {
                  name: "Emma Green",
                  role: "Founder, EcoBrand",
                  quote: "GreenGrow’s SEO strategies doubled our organic traffic in months!",
                },
                {
                  name: "Carlos Rivera",
                  role: "Marketing Manager",
                  quote: "Their content marketing feels authentic and connects with our audience.",
                },
                {
                  name: "Aisha Khan",
                  role: "Small Business Owner",
                  quote: "Social media growth with GreenGrow is sustainable and impactful.",
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
              <h2>Choose Your Growth Plan</h2>
              <p>Flexible pricing to nurture your brand’s organic marketing journey.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Seedling",
                  price: "$99",
                  features: [
                    "Up to 3 Campaigns",
                    "Basic SEO Tools",
                    "Content Planning",
                    "Email Support",
                  ],
                  link: "contact",
                  cta: "Get Started",
                },
                {
                  name: "Sprout",
                  price: "$249",
                  features: [
                    "Up to 10 Campaigns",
                    "Advanced SEO Tools",
                    "Full Content Strategy",
                    "Social Media Tools",
                    "Priority Support",
                  ],
                  link: "contact",

                  cta: "Choose Sprout",
                  popular: true,
                },
                {
                  name: "Bloom",
                  price: "Custom",
                  features: [
                    "Unlimited Campaigns",
                    "All Sprout Features",
                    "Custom Strategies",
                    "Dedicated Manager",
                    "Analytics API",
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
              <h2>Ready to Grow Organically?</h2>
              <p>
                Start your free trial and see how GreenGrow nurtures your brand with sustainable marketing.
              </p>
              <motion.a
                href="/contact"
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