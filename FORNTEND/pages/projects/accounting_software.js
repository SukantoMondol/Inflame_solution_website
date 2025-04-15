import Head from "next/head";
import Link from "next/link";
import {
  IoMdCheckmarkCircleOutline,
  IoIosAnalytics,
  IoIosLock,
} from "react-icons/io";
import { FaChartLine, FaUsers, FaFileInvoiceDollar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";

export default function AccountingSoftware() {
  // Animation variants
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
        <title>IntelliAccount - Smart Accounting Solutions</title>
        <meta
          name="description"
          content="Transform your business finances with IntelliAccount’s advanced automation, real-time analytics, and seamless collaboration tools."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="accounting-software">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h1>
                Transform Your Finances with <span>IntelliAccount</span>
              </h1>
              <p>
                Empower your business with smart automation, real-time insights,
                and seamless collaboration for effortless financial control.
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
                  <button>Explore Features</button>
                </motion.a>
                <motion.a
                  className="btn btn-secondary"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 20px rgba(45, 212, 191, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button>Watch Demo</button>
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
                src="/img/img5.jpg"
                alt="IntelliAccount Dashboard"
                width={1000}
                height={550}
                style={{ objectFit: "contain" }}
                className="hero-img"
              />
            </motion.div>
          </div>
        </section>

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
              <h2>Features That Drive Success</h2>
              <p>
                Discover the powerful tools that make IntelliAccount the
                ultimate accounting solution.
              </p>
            </motion.div>
            <div className="feature-grid">
              {[
                {
                  icon: <FaFileInvoiceDollar />,
                  title: "Smart Invoicing",
                  desc: "Create stunning invoices with automated tracking and global currency support.",
                },
                {
                  icon: <IoIosAnalytics />,
                  title: "Real-Time Analytics",
                  desc: "Gain instant insights with customizable dashboards and reports.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Budgeting & Forecasting",
                  desc: "Plan confidently with precise budget tools and growth projections.",
                },
                {
                  icon: <FaUsers />,
                  title: "Team Collaboration",
                  desc: "Unite your team with shared access and secure permissions.",
                },
                {
                  icon: <IoIosLock />,
                  title: "Unmatched Security",
                  desc: "Protect your data with enterprise-grade encryption.",
                },
                {
                  icon: <IoIosAnalytics />,
                  title: "Seamless Integrations",
                  desc: "Connect effortlessly with CRM, payroll, and e-commerce platforms.",
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
              <h2>Why IntelliAccount Excels</h2>
              <p>
                Unlock transformative benefits for smarter financial management.
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
                  src="/img/ex1.png"
                  alt="IntelliAccount Benefits"
                  width={550}
                  height={450}
                  style={{ objectFit: "contain" }}
                  className="benefits-img"
                />
              </motion.div>
              <div className="benefits-list">
                {[
                  {
                    title: "Maximize Efficiency",
                    desc: "Automate tasks to save time and reduce errors.",
                  },
                  {
                    title: "Empower Decisions",
                    desc: "Leverage real-time data for strategic insights.",
                  },
                  {
                    title: "Boost Collaboration",
                    desc: "Enable seamless teamwork with clear roles.",
                  },
                  {
                    title: "Scale with Ease",
                    desc: "Grow confidently with adaptable tools.",
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
        <section className="demo section-padding" id="demo">
          <div className="container">
            <motion.div
              className="section-header"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2>IntelliAccount in Action</h2>
              <p>
                Experience our intuitive interface and powerful financial tools
                firsthand.
              </p>
            </motion.div>
            <motion.div
              className="demo-showcase"
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Image
                src="/img/3.jpg"
                alt="IntelliAccount Demo"
                width={1000}
                height={550}
                style={{ objectFit: "cover" }}
                className="demo-img"
              />
              <motion.div
                className="demo-info"
                variants={slideRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4>Dynamic Dashboard</h4>
                <p>
                  Monitor cash flow, expenses, and revenue with real-time
                  clarity.
                </p>
              </motion.div>
            </motion.div>
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
              <h2>Choose Your Ideal Plan</h2>
              <p>Flexible pricing designed to grow with your business.</p>
            </motion.div>
            <div className="pricing-grid">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  features: [
                    "Up to 5 Users",
                    "Basic Invoicing",
                    "Standard Reports",
                    "Email Support",
                  ],
                  link: "/pricing/starter",
                  cta: "Get Started",
                },
                {
                  name: "Growth",
                  price: "$59",
                  features: [
                    "Up to 20 Users",
                    "Advanced Invoicing",
                    "Real-Time Analytics",
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
                      className={`btn ${
                        plan.popular ? "btn-primary" : "btn-secondary"
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
              <h2>Ready to Revolutionize Your Finances?</h2>
              <p>
                Start your free trial and experience IntelliAccount’s power
                today.
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

      <style jsx>{`
        .accounting-software {
          font-family: "Inter", sans-serif;
          color: #0d47a1; /* Deep Blue */
          background: #f5f5f5; /* Light Grey */
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 20px auto;
          padding: 15px 40px;
        }

        .section-padding {
          padding: 120px 0;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(
            135deg,
            #0d47a1 0%,
            #00bcd4 100%
          ); /* Deep Blue to Cyan */
          color: #e0f7fa; /* Light Cyan */
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 20% 30%,
            rgba(255, 255, 255, 0.2),
            transparent 70%
          );
          animation: pulse 5s infinite ease-in-out;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .hero-content h1 {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .hero-content h1 span {
          background: linear-gradient(
            90deg,
            #ffb300,
            #ffea00
          ); /* Amber to Yellow */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-content p {
          font-size: 2.5rem;
          font-weight: 400;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          color: #b3e5fc; /* Light Blue */
        }

        .hero-buttons {
          margin-top: 10px;
          margin-bottom: 30px;
          display: flex;
          justify-content: center;
          gap: 40px;
        }

        .hero-img {
          border-radius: 10px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        /* Features Section */
        .features {
          background: #80cbc4; /* Teal */
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
          margin-top: 40px;
        }

        .section-header h2 {
          font-size: 3.2rem;
          font-weight: 700;
          color: #0d47a1; /* Deep Blue */
          margin-bottom: 16px;
          margin-top: 20px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #26a69a; /* Darker Teal */
          max-width: 700px;
          margin: 0 auto;
          margin-top: 50px;
          margin-bottom: 40px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-top: 30px;
        }

        .feature-card {
          padding: 32px;
          border-radius: 16px;
          text-align: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .icon-wrapper {
          font-size: 3rem;
          color: #00bcd4; /* Cyan */
          margin-bottom: 20px;
          background: rgba(0, 188, 212, 0.1); /* Light Cyan */
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          margin-left: auto;
          margin-right: auto;
        }

        .feature-card h3 {
          font-size: 1.6rem;
          font-weight: 600;
          color: #0d47a1; /* Deep Blue */
          margin-bottom: 12px;
        }

        .feature-card p {
          font-size: 1rem;
          color: #00897b; /* Dark Teal */
          line-height: 1.6;
        }

        /* Benefits Section */
        .benefits {
          background: #c8e6c9; /* Light Green */
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .benefits-img {
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Fixed typo 'yello' */
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .benefit-icon {
          font-size: 2rem;
          color: #ffb300; /* Amber */
          margin-top: 4px;
        }

        .benefit-item h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #0d47a1; /* Deep Blue */
          margin-bottom: 8px;
        }

        .benefit-item p {
          font-size: 1rem;
          color: #388e3c; /* Dark Green */
          line-height: 1.6;
        }

        /* Demo Section */
        .demo {
          background: #80cbc4; /* Teal */
        }

        .demo-showcase {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .demo-img {
          border-radius: 20px;
        }

        .demo-info {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background: rgba(0, 188, 212, 0.85); /* Cyan */
          backdrop-filter: blur(12px);
          color: #e0f7fa; /* Light Cyan */
          padding: 20px 28px;
          border-radius: 12px;
          max-width: 360px;
          text-align: left;
        }

        .demo-info h4 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #0d47a1; /* Deep Blue */
          margin-bottom: 12px;
        }

        .demo-info p {
          font-size: 0.95rem;
          color: #b3e5fc; /* Light Blue */
          line-height: 1.5;
        }

        /* Pricing Section */
        .pricing {
          background: #f5f5f5; /* Light Grey */
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 64px;
        }

        .pricing-card {
          background: #e0f2f1; /* Light Teal */
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          position: relative;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .pricing-card.popular {
          background: linear-gradient(
            135deg,
            #fffde7,
            #b2ebf2
          ); /* Light Yellow to Light Cyan */
          border: 2px solid #ffb300; /* Amber */
        }

        .popular-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: #ffb300; /* Amber */
          color: #0d47a1; /* Deep Blue */
          padding: 6px 24px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .pricing-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0d47a1; /* Deep Blue */
          margin-bottom: 20px;
        }

        .price {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0d47a1; /* Deep Blue */
          margin-bottom: 24px;
        }

        .price span {
          font-size: 1.2rem;
          font-weight: 400;
          color: #26a69a; /* Darker Teal */
        }

        .pricing-card ul {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          text-align: left;
        }

        .pricing-card li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          color: #26a69a; /* Darker Teal */
          margin-bottom: 16px;
        }

        .check-icon {
          font-size: 1.4rem;
          color: #00bcd4; /* Cyan */
        }

        /* CTA Section */
        .cta {
          background: linear-gradient(
            135deg,
            #0d47a1,
            #00bcd4
          ); /* Deep Blue to Cyan */
          color: #e0f7fa; /* Light Cyan */
        }

        .cta-content {
          text-align: center;
          padding: 80px 40px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #fff; /* White */
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 1.3rem;
          font-weight: 300;
          color: #b3e5fc; /* Light Blue */
          margin-bottom: 32px;
          line-height: 1.7;
        }

        .cta-btn {
          padding: 16px 48px;
          font-size: 1.2rem;
          background: #ffb300; /* Amber */
          color: #0d47a1; /* Deep Blue */
        }

        .cta-btn:hover {
          background: #f57f17; /* Darker Amber */
        }

        /* Button Styles */
        .btn {
          display: inline-block;
          padding: 14px 36px;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          text-align: center;
        }

        .btn-primary {
          background: #ffb300; /* Amber */
          color: #0d47a1; /* Deep Blue */
        }

        .btn-primary:hover {
          background: #f57f17; /* Darker Amber */
        }

        .btn-secondary {
          background: transparent;
          color: #e0f7fa; /* Light Cyan */
          border: 2px solid #ffb300; /* Amber */
        }

        .btn-secondary:hover {
          background: #ffb300; /* Amber */
          color: #0d47a1; /* Deep Blue */
        }

        /* Animations */
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .hero-content h1 {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 0 60px;
          }

          .hero-content h1 {
            font-size: 3rem;
          }

          .hero-content p {
            font-size: 1.2rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 16px;
          }

          .section-header h2 {
            font-size: 2.5rem;
          }

          .feature-grid {
            grid-template-columns: 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .demo-info {
            max-width: 90%;
            bottom: 16px;
            right: 16px;
            left: 16px;
            padding: 16px;
          }
        }

        @media (max-width: 480px) {
          .cta-content h2 {
            font-size: 2.2rem;
          }

          .cta-btn {
            padding: 12px 32px;
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
