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

      <style jsx>{`
        /* General Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }

        body {
          font-family: "Sora", sans-serif;
          scroll-behavior: smooth;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: #dddddd;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-align: center;
          color: #ffffff;
          animation: fadeUp 1s ease forwards;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          color: #cccccc;
        }

        /* Hero Section */
        .about-hero {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 120px 20px;
          position: relative;
          z-index: 1;
          background: linear-gradient(125deg, #1e3a8a, #9333ea);
          overflow: hidden;
        }

        .about-hero::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, #2563eb 20%, transparent 70%);
          animation: backgroundFloat 20s linear infinite;
          z-index: 0;
          opacity: 0.1;
        }

        .hero-title {
          font-size: 3rem;
          background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          animation: slideRight 1s ease-out forwards;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin: 20px 0;
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        .cta-button {
          background: #0ea5e9;
          color: white;
          padding: 12px 28px;
          font-size: 1rem;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: zoomIn 1s ease-in-out forwards;
        }

        .cta-button:hover {
          transform: scale(1.1);
          background: #38bdf8;
        }

        /* Values Section */
        .about-values {
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(145deg, #0f172a, #1e293b);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .value-card {
          background: #111827;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid #334155;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          animation: fadeUp 1s ease forwards;
        }

        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3);
        }

        .value-card h3 {
          margin-top: 20px;
          color: #0ea5e9;
        }

        /* Team Section */
        .about-team {
          padding: 100px 20px;
          background-color: #0f172a;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .team-member {
          background: #1e293b;
          padding: 25px;
          border-radius: 16px;
          text-align: center;
          border: 1px solid #334155;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          animation: float 5s ease-in-out infinite;
        }

        .team-image {
          border-radius: 9999px;
          margin-bottom: 1rem;
          box-shadow: 0 0 0 4px #0ea5e9;
        }
        .section-title {
          color: #c433ff;
        }
        .section-subtitle {
          margin-bottom: 3rem;
          font-size: 30px;
        }

        .team-member:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.2);
        }

        /* CTA Section */
        .about-cta {
          background: linear-gradient(to right, #0ea5e9, #8b5cf6);
          padding: 100px 20px;
          text-align: center;
          color: white;
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        /* Scroll Animations */
        .fade-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Keyframe Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes backgroundFloat {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
}
