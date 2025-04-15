import Head from "next/head";
import { useRouter } from "next/router";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Projects() {
  const router = useRouter();

  // Software services data
  const services = [
    {
      id: "/projects/accounting_software",
      title: "Accounting Software",
      description: "Precision-driven tools for seamless financial management.",
      image: "/img/ex1.png", // Replace with actual image URL
    },
    {
      id: "/projects/inventory-software",
      title: "Inventory Software",
      description: "Real-time stock tracking for ultimate control.",
      image: "/img/ex2.png", // Replace with actual image UR
    },
    {
      id: "/projects/manufacturing-software",
      title: "Manufacturing Software",
      description: "Advanced solutions to optimize production workflows.",
      image: "/img/ex3.png", // Replace with actual image URL
    },
    {
      id: "/projects/hr&payroll",
      title: "HR & Payroll",
      description: "Streamlined workforce and payroll management.",
      image: "/img/ex4.png", // Replace with actual image URL
    },
    {
      id: "/projects/ticketing-system",
      title: "Ticketing System",
      description: "Efficient support with smart ticketing solutions.",
      image: "/img/ex1.png", // Replace with actual image URL
    },
    {
      id: "/projects/crm-software",
      title: "CRM Software",
      description: "Enhance customer relationships with intelligent CRM.",
      image: "/img/ex3.png", // Replace with actual image URL
    },
    {
      id: "/projects/pos-software",
      title: "POS Software",
      description: "Fast, reliable point-of-sale for modern retail.",
      image: "/img/ex2.png", // Replace with actual image URL
    },
  ];

  // Handle service click to navigate to its details page
  const handleServiceClick = (id) => {
    router.push(id);
  };

  return (
    <>
      <Head>
        <title>Our Software </title>
        <meta
          name="description"
          content="Explore our tailored software solutions designed to meet your business needs. From Accounting to CRM, we provide modern tools for success."
        />
      </Head>
      <div className="projectpage min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="projects bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-800 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="project_titles text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-down">
                Explore Our Software Solutions
              </h2>
              <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto animate-fade-in-up">
                From Accounting to CRM, we offer tailored software solutions to
                meet your business needs.
              </p>
            </div>
          </div>
          <div className="headers">
            <span className="banner-text">
              Best Software development company in Bangladesh
            </span>
            <Link href="contact">
              <span className="demo">Book for Demo</span>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="services py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="services_item group cursor-pointer p-6 rounded-lg relative overflow-hidden"
                  onClick={() => handleServiceClick(service.id)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="image-container mb-4 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <div className="ripple-effect"></div>
                  </div>
                  <div className="content relative z-10">
                    <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
                    <p className="text-sm description">
                      {service.description}
                      {service.description}
                      {service.description}
                      {service.description}
                    </p>
                    <div className="icon mt-4 text-2xl">
                      <GoArrowUpRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            /* Services Section */
            .services {
              background: linear-gradient(135deg, #0f172a, #1e293b);
              padding: 4rem 1rem;
              position: relative;
              overflow: hidden;
            }

            .services::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
              opacity: 0.1;
              animation: wave 15s ease-in-out infinite;
            }

            /* Service Item */
            .services_item {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
              border-radius: 16px;
              transition: transform 0.5s ease, box-shadow 0.5s ease,
                border-color 0.5s ease;
              position: relative;
              opacity: 0;
              animation: scaleIn 0.8s ease forwards;
              transform-style: preserve-3d;
              perspective: 1000px;
            }

            .services_item:hover {
              transform: translateY(-10px) translateZ(30px) rotateX(3deg)
                rotateY(3deg);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
              border-color: #0ea5e9;
            }

            .services_item::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 16px;
              padding: 2px;
              background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
              -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: 0;
              transition: opacity 0.5s ease;
            }

            .services_item:hover::before {
              opacity: 1;
            }

            /* Image Container */
            .image-container {
              position: relative;
              overflow: hidden;
              border-radius: 12px;
            }

            .image-container img {
              transition: transform 0.5s ease, filter 0.5s ease;
            }

            .services_item:hover img {
              transform: scale(1.1) rotate(2deg);
              filter: brightness(1.3);
            }

            /* Ripple Effect on Hover */
            .ripple-effect {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 0;
              height: 0;
              background: rgba(14, 165, 233, 0.3);
              border-radius: 50%;
              transform: translate(-50%, -50%);
              pointer-events: none;
              transition: width 0.6s ease, height 0.6s ease;
            }

            .services_item:hover .ripple-effect {
              width: 200%;
              height: 200%;
            }

            /* Content */
            .content h1 {
              font-size: 1.5rem;
              font-weight: 700;
              background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              transition: transform 0.3s ease;
            }

            .services_item:hover .content h1 {
              transform: translateY(-5px);
            }

            .content .description {
              color: #d1d5db;
              line-height: 1.5;
              font-size: 0.875rem;
              margin-bottom: 1rem;
              opacity: 0;
              transform: translateY(10px);
              transition: opacity 0.5s ease, transform 0.5s ease;
            }

            .services_item:hover .description {
              opacity: 1;
              transform: translateY(0);
            }

            /* Icon */
            .icon {
              display: inline-flex;
              color: #c433ff;
              transition: transform 0.5s ease, color 0.3s ease;
              position: relative;
            }

            .services_item:hover .icon {
              color: #ffffff;
              animation: pulse 1.5s ease-in-out infinite;
            }

            .icon::after {
              content: "";
              position: absolute;
              bottom: -10px;
              left: 50%;
              width: 2px;
              height: 0;
              background: linear-gradient(to bottom, #c433ff, transparent);
              transform: translateX(-50%);
              transition: height 0.5s ease;
            }

            .services_item:hover .icon::after {
              height: 20px;
            }

            /* Animations */
            @keyframes scaleIn {
              0% {
                opacity: 0;
                transform: scale(0.9);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes wave {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes pulse {
              0%,
              100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
            }

            /* Responsive Design */
            @media (max-width: 1024px) {
              .services_item {
                padding: 1.25rem;
              }

              .content h1 {
                font-size: 1.25rem;
              }

              .content .description {
                font-size: 0.8rem;
              }

              .image-container img {
                height: 150px;
              }
            }

            @media (max-width: 768px) {
              .services {
                padding: 3rem 0.5rem;
              }

              .services_item {
                padding: 1rem;
              }

              .content h1 {
                font-size: 1.125rem;
              }

              .content .description {
                font-size: 0.75rem;
                opacity: 1; /* Always visible on mobile */
                transform: translateY(0);
              }

              .image-container img {
                height: 120px;
              }

              .services_item:hover {
                transform: translateY(-5px); /* Reduced for mobile */
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
              }

              .services_item:hover img {
                transform: scale(1.05); /* Reduced scale for mobile */
              }

              .services_item:hover .ripple-effect {
                width: 150%;
                height: 150%;
              }
            }

            @media (max-width: 480px) {
              .services_item {
                padding: 0.75rem;
              }

              .content h1 {
                font-size: 1rem;
              }

              .content .description {
                font-size: 0.7rem;
              }

              .image-container img {
                height: 100px;
              }

              .icon {
                font-size: 1.5rem;
              }

              .services_item:hover .ripple-effect {
                width: 120%;
                height: 120%;
              }
            }
          `}</style>
        </section>
      </div>
    </>
  );
}
