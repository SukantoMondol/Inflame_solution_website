import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-element");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Inflame Solutions</title>
        <meta
          name="description"
          content="Discover the essence of Inflame Solutions, our mission, vision, values, and the brilliant team that drives our innovative IT solutions."
        />
      </Head>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="container fade-element">
          <h1 className="hero-title">
            Empowering Innovation, <br /> Building the Future
          </h1>
          <p className="hero-subtitle">
            At Inflame Solutions, we deliver cutting-edge IT solutions to power
            tomorrow.
          </p>
          <Link href="/contact">
            <button className="cta-button">Get in Touch</button>
          </Link>
        </div>
        <div className="hero-image fade-element">
          <Image
            src="/img/1.jpg"
            alt="About Us Hero"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid">
            {[
              {
                title: "Our Mission",
                description:
                  "To deliver innovative IT solutions that empower businesses to achieve their goals and drive global progress.",
                icon: "/img/3.jpg",
              },
              {
                title: "Our Vision",
                description:
                  "To be the global leader in IT innovation, fostering growth through technology and collaboration.",
                icon: "/img/2.jpg",
              },
              {
                title: "Our Values",
                description:
                  "Integrity, innovation, teamwork, and customer focus are the pillars of our success.",
                icon: "/img/img4.jpg",
              },
            ].map((value, index) => (
              <div key={index} className="value-card fade-element">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={80}
                  height={80}
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
          <h2 className="section-title">Meet Our Management </h2>
          <p className="section-subtitle">
            Passionate professionals pushing boundaries in tech.
          </p>
          <div className="team-grid">
            {[
              {
                name: "John Doe",
                position: "CEO & Founder",
                image: "/img/ex1.png",
                description:
                  "John leads with over 15 years of experience in IT innovation.",
              },
              {
                name: "Jane Smith",
                position: "CTO",
                image: "/img/ex2.png",
                description: "Jane ensures our tech stays ahead of the curve.",
              },
              {
                name: "Michael Brown",
                position: "Lead Developer",
                image: "/img/ex3.png",
                description: "Michael crafts scalable, efficient products.",
              },
              {
                name: "Emily Wilson",
                position: "Creative Director",
                image: "/img/ex4.png",
                description: "Emily brings vision and design to every project.",
              },
            ].map((employee, index) => (
              <div key={index} className="team-member fade-element">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  width={200}
                  height={200}
                  className="team-image"
                />
                <h3>{employee.name}</h3>
                <p className="team-position">{employee.position}</p>
                <p className="team-description">{employee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Meet Our Brilliant Team</h2>
          <p className="section-subtitle">
            Passionate professionals pushing boundaries in tech.
          </p>
          <div className="team-grid">
            {[
              {
                name: "John Doe",
                position: "CEO & Founder",
                image: "/img/ex1.png",
                description:
                  "John leads with over 15 years of experience in IT innovation.",
              },
              {
                name: "Jane Smith",
                position: "CTO",
                image: "/img/ex2.png",
                description: "Jane ensures our tech stays ahead of the curve.",
              },
              {
                name: "Michael Brown",
                position: "Lead Developer",
                image: "/img/ex3.png",
                description: "Michael crafts scalable, efficient products.",
              },
              {
                name: "Emily Wilson",
                position: "Creative Director",
                image: "/img/ex4.png",
                description: "Emily brings vision and design to every project.",
              },
            ].map((employee, index) => (
              <div key={index} className="team-member fade-element">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  width={200}
                  height={200}
                  className="team-image"
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
        <div className="container">
          <h2>Let’s Build Something Amazing Together</h2>
          <p>Collaborate with us to turn your vision into digital success.</p>
          <Link href="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </section>


    </>
  );
}
