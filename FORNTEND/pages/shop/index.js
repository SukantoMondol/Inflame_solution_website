import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-element");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Inflame Solutions</title>
        <meta
          name="description"
          content="Explore Inflame Solutions' mission, vision, values, and the visionary team driving cutting-edge IT innovation."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="particles"></div>
        <div className="hero-content ">
          <h1 className="hero-title">
            Igniting <span>Innovation</span>
          </h1>
          <p className="hero-subtitle">
            At Inflame Solutions, we pioneer transformative IT solutions to
            shape a limitless future.
          </p>
          <div className="hero-buttons">
            <Link href="/contact">
              <button className="cta-button">Get in Touch</button>
            </Link>
            <Link href="/services">
              <button className="cta-button secondary">Our Services</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Core Drivers</h2>
          <p className="section-subtitle">
            The principles fueling our journey to redefine technology.
          </p>
          <div className="values-grid">
            {[
              {
                title: "Mission",
                description:
                  "Empowering businesses with innovative IT solutions for global impact.",
                icon: "/img/1.jpg",
              },
              {
                title: "Vision",
                description:
                  "Leading the charge in IT innovation through collaboration and technology.",
                icon: "/img/2.jpg",
              },
              {
                title: "Values",
                description:
                  "Integrity, creativity, and teamwork power our success.",
                icon: "/img/3.jpg",
              },
            ].map((value, index) => (
              <div key={index} className="value-card fade-element">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={80}
                  height={80}
                  onError={(e) => (e.target.src = "/img/fallback.jpg")}
                />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Our Visionaries</h2>
          <p className="section-subtitle">
            Meet the brilliant minds pushing the boundaries of tech.
          </p>
          <div className="team-grid">
            {[
              {
                name: "Joseph Zheng",
                position: "Maneging Director",
                image: "/img/boss1.jpeg",
                description:
                  "Joseph Zheng our mission with 15+ years of IT expertise.",
              },
              {
                name: "Noor Ahmed",
                position: "Director",
                image: "/img/boss2.jpeg",
                description:
                  "Noor Ahmed our tech forward with visionary innovation.",
              },
              {
                name: "Sumaiya Islam",
                position: "Business Development Manager",
                image: "/img/su.jpeg",
                description:
                  "Sumaiya Islam robust, scalable solutions with precision.",
              },
              {
                name: "Arif Mohammad Saleh",
                position: "Corporate Manager ",
                image: "/img/mg2.jpeg",
                description:
                  "Arif Mohammad Saleh creativity into every project’s design.",
              },
            ].map((employee, index) => (
              <div key={index} className="team-member fade-element">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  width={180}
                  height={180}
                  className="team-image"
                  onError={(e) => (e.target.src = "/img/fallback.jpg")}
                />
                <h3>{employee.name}</h3>
                <p className="team-position">{employee.position}</p>
                <p className="team-description">{employee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="particles"></div>
        <div className="cta-content fade-element">
          <h2>Let’s Create the Future</h2>
          <p>Join us to transform your vision into groundbreaking reality.</p>
          <Link href="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </section>
    </>
  );
}
