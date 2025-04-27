import Head from "next/head";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBaseballBallSolid } from "react-icons/lia";
import { CiFacebook } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState, useRef } from "react";
import { IoHome } from "react-icons/io5";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdEditSquare } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiMoreAlt } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa6";

import * as THREE from "three";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, EffectCreative, FreeMode, Pagination } from "swiper/modules";

import { Navigation } from "swiper/modules";
import { FaPhoneVolume } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";
import axios from "axios";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Home Page");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const heroCanvasRef = useRef(null);
  const servicesCanvasRef = useRef(null);
  const projectsCanvasRef = useRef(null);
  const exploreCanvasRef = useRef(null);

  const handlePageChange = (pageId) => setCurrentPage(pageId);

  useEffect(() => {
    if (swiperInstance && typeof swiperInstance.slideTo === "function") {
      const slideIndex =
        {
          "Home Page": 0,
          "Service Page": 1,
          "Blog Page": 2,
          "Contact Page": 3,
          More: 4,
        }[currentPage] || 0;
      swiperInstance.slideTo(slideIndex);
    }
  }, [currentPage, swiperInstance]);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleHover = (index) => setActiveIndex(index);
  const handleMouseOut = () => setActiveIndex(0);
  const pageSlides = {
    "Home Page": [
      { src: "/img/img4.gif", alt: "Home Page Slide 1" },
      { src: "/img/img1.gif", alt: "Home Page Slide 2" },
    ],
    "Service Page": [
      { src: "/img/img2.gif", alt: "Service Page Slide 1" },
      { src: "/img/img3.gif", alt: "Service Page Slide 2" },
    ],
    "Blog Page": [
      { src: "/img/img4.gif", alt: "Blog Page Slide 1" },
      { src: "/img/img2.gif", alt: "Blog Page Slide 2" },
    ],
    "Contact Page": [
      { src: "/img/img3.gif", alt: "Contact Page Slide 1" },
      { src: "/img/ex1.png", alt: "Contact Page Slide 2" },
    ],
    More: [
      { src: "/img/cr.gif", alt: "More Page Slide 1" },
      { src: "/img/3d.png.gif", alt: "More Page Slide 2" },
    ],
  };

  const services = [
    {
      title: "Web Development",
      description:
        "As a leading website development company, we create custom and SEO-friendly websites that drive results fast. Our expert team designs and develops responsive, user-centric sites tailored to your business needs.",
      imgSrc: "/img/webdesing.png",
    },
    {
      title: "Software Development",
      description:
        "Transform your business with our custom software development services. We offer high-quality, scalable software solutions for enterprise applications using the latest technologies.",
      imgSrc: "/img/software.png",
    },
    {
      title: "Mobile Development",
      description:
        "Expert in visual storytelling, skilled in photography and videography to deliver captivating content that transforms visions into visual stories.",
      imgSrc: "/img/product.png",
    },
    {
      title: "Digital Marketing (SEO)",
      description:
        "Grow your online presence with our expert digital marketing services, including SEO, Social Media Marketing, content marketing, and PPC campaigns.",
      imgSrc: "/img/marketing.png",
    },
    {
      title: "Graphics Design",
      description:
        "Enhance your brand with eye-catching, custom visuals. From logos to UI/UX design, our creative team delivers high-quality graphics to elevate your business.",
      imgSrc: "/img/creative.png",
    },
  ];

  const allProjects = [
    { name: "All Projects", category: "All" },
    { name: "Ticketing", category: "Ticketing" },
    { name: "CRM", category: "CRM" },
    { name: "HR & Payroll Software", category: "HR & Payroll Software" },
    { name: "Inventory System", category: "Inventory" },
    { name: "Accounting Software", category: "Accounting" },
    { name: "Manufacturing ERP", category: "Manufacturing" },
    { name: "POS System", category: "POS" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilteredProjects(
      category === "All"
        ? allProjects
        : allProjects.filter((project) => project.category === category)
    );
  };

  // Simple WebGL support check without extra imports
  const isWebGLSupported = () => {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      return false;
    }
  };

  // General Three.js Initialization (for Hero, Projects, Explore)
  const initThreeJs = (canvas) => {
    if (!canvas) return;

    // Check WebGL support
    if (!isWebGLSupported()) {
      console.error("WebGL is not supported on this device/browser.");
      const errorMessage = document.createElement("div");
      errorMessage.style.color = "red";
      errorMessage.innerText = "WebGL is not supported on this device.";
      canvas.parentElement.appendChild(errorMessage);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Dynamic camera position and particle spread
    const isMobile = window.innerWidth < 768;
    camera.position.z = isMobile ? 20 : 50;
    const spread = isMobile ? 40 : 100;

    const particles = new THREE.Group();
    const geometry = new THREE.SphereGeometry(0.2, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ccff });

    const particleCount = isMobile ? 50 : 150;
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );
      particles.add(particle);
    }
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.position.z = width < 768 ? 20 : 50;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    canvas.style.display = "block";

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  };

  // Special Three.js Initialization for Services Section (Grid Effect)
  const initServicesThreeJs = (canvas) => {
    if (!canvas) return;

    // Check WebGL support
    if (!isWebGLSupported()) {
      console.error("WebGL is not supported on this device/browser.");
      const errorMessage = document.createElement("div");
      errorMessage.style.color = "red";
      errorMessage.innerText = "WebGL is not supported on this device.";
      canvas.parentElement.appendChild(errorMessage);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Dynamic camera position and grid size
    const isMobile = window.innerWidth < 768;
    camera.position.z = isMobile ? 15 : 30;
    const gridSize = isMobile ? 6 : 10;

    const grid = new THREE.Group();
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true,
    });

    for (let x = -gridSize; x <= gridSize; x += 2) {
      for (let y = -gridSize; y <= gridSize; y += 2) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, y, 0);
        grid.add(cube);
      }
    }
    scene.add(grid);

    const animate = () => {
      requestAnimationFrame(animate);
      grid.children.forEach((cube, index) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.z = Math.sin(Date.now() * 0.001 + index) * 5;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.position.z = width < 768 ? 15 : 30;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    canvas.style.display = "block";

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  };

  useEffect(() => {
    const heroCleanup = initThreeJs(heroCanvasRef.current);
    const servicesCleanup = initServicesThreeJs(servicesCanvasRef.current);
    const projectsCleanup = initThreeJs(projectsCanvasRef.current);
    const exploreCleanup = initThreeJs(exploreCanvasRef.current);

    return () => {
      if (heroCleanup) heroCleanup();
      if (servicesCleanup) servicesCleanup();
      if (projectsCleanup) projectsCleanup();
      if (exploreCleanup) exploreCleanup();
    };
  }, []);

  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [project, setProject] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [messageOk, setMessageOk] = useState("");

  async function createProduct(ev) {
    ev.preventDefault();
    setMessageOk("sending...");
    const data = {
      name,
      lname,
      email,
      company,
      phone,
      country,
      project,
      price,
      description,
    };
    try {
      await axios.post("/api/contacts", data);
      setMessageOk("message sent successfully");
      setName("");
      setLname("");
      setEmail("");
      setCompany("");
      setPhone("");
      setCountry("");
      setProject("");
      setPrice("");
      setDescription("");
    } catch (error) {
      if (error.response) {
        console.error("server error", error.response.data);
      } else if ((error, request)) {
        console.error("Network error", error.request);
      } else {
      }
      setMessageOk("");
    }
  }

  const handleProjectChange = (projectName) => {
    if (project.includes(projectName)) {
      setProject(project.filter((project) => project !== projectName));
    } else {
      setProject([...project, projectName]);
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Inflame Solutions Ltd</title>
        <meta name="description" content="inflame solution website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/inflame logo 2.png" />
      </Head>
      <style jsx>{`
        .threejs-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.5;
          display: block;
        }
        section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        .container {
          position: relative;
          z-index: 1;
        }
        .service-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          margin-right: 10px;
        }
        .left_s_box {
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          section {
            min-height: 80vh;
          }
          .threejs-canvas {
            height: 80vh;
          }
          .service-img {
            width: 40px;
            height: 40px;
          }
        }
        @media (max-width: 480px) {
          section {
            min-height: 60vh;
          }
          .threejs-canvas {
            height: 60vh;
          }
          .service-img {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <canvas ref={heroCanvasRef} className="threejs-canvas" />
        <div className="intro_text">
          <svg viewBox="0 0 1320 300"></svg>
        </div>
        <div className="container">
          <div className="flex w-100">
            <div className="heroinfoleft">
              <h1 className="hero_title">
                Business Software
                <br />
                <span className="typed-text">Solution</span>
              </h1>
              <span className="hero_sb_title">
                Welcome to Inflame Solutions Ltd., where innovation meets
                technology to deliver exceptional solutions.
              </span>
            </div>
            <div className="right_banner_info">
              <div className="right_banner_cont">
                <div className="three_dot">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="right_main_banner_box">
                  <div className="left_banner_box">
                    <h1>Inflame Solutions Ltd.</h1>
                    <ul>
                      {[
                        "Home Page",
                        "Service Page",
                        "Blog Page",
                        "Contact Page",
                        "More",
                      ].map((page, index) => (
                        <li
                          key={page}
                          className={currentPage === page ? "active" : ""}
                          onClick={() => handlePageChange(page)}
                          role="button"
                          aria-label={`Navigate to ${page}`}
                        >
                          <div className="flex gap-05">
                            <div className="banner_box_svg">
                              {index === 0 && <IoHome />}
                              {index === 1 && <BsBoxSeamFill />}
                              {index === 2 && <MdEditSquare />}
                              {index === 3 && <MdEditSquare />}
                              {index === 4 && <TfiMoreAlt />}
                            </div>
                            {page}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="right_banner_box">
                    {currentPage && (
                      <Swiper
                        grabCursor={true}
                        effect="creative"
                        creativeEffect={{
                          prev: {
                            shadow: true,
                            translate: [0, 0, -800],
                            rotate: [180, 0, 0],
                          },
                          next: {
                            shadow: true,
                            translate: [0, 0, -800],
                            rotate: [-180, 0, 0],
                          },
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[EffectCreative, Pagination, Navigation]}
                        className="mySwiper4"
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                          320: { slidesPerView: 1, spaceBetween: 10 },
                          640: { slidesPerView: 1, spaceBetween: 15 },
                          884: { slidesPerView: 1, spaceBetween: 20 },
                        }}
                      >
                        {pageSlides[currentPage]?.map((slide, index) => (
                          <SwiperSlide key={index}>
                            <div className="right_banner_box_img">
                              <img
                                src={slide.src}
                                alt={slide.alt}
                                loading="lazy"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_btn_box">
            <Link href="/contact" className="learn_more_button">
              Learn More
            </Link>
            <ul className="hero_social">
              <li>
                <a href="/" aria-label="Dribbble">
                  <LiaBaseballBallSolid />
                </a>
              </li>
              <li>
                <a href="/" aria-label="LinkedIn">
                  <GrLinkedinOption />
                </a>
              </li>
              <li>
                <a href="/" aria-label="GitHub">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="/" aria-label="Facebook">
                  <CiFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="funfect_area flex flex-sb">
          <div className="funfect_item">
            <h3>50+</h3>
            <h4>
              Software &<br />
              Web Apps
            </h4>
          </div>
          <div className="funfect_item">
            <h3>100+</h3>
            <h4>
              Positive
              <br />
              Feedback
            </h4>
          </div>
          <div className="funfect_item">
            <h3>2500+</h3>
            <h4>Users</h4>
          </div>
          <div className="funfect_item">
            <h3>350+</h3>
            <h4>Contributors</h4>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <canvas ref={servicesCanvasRef} className="threejs-canvas" />
        <div className="container">
          <div className="services_titles">
            <h2>Our Services</h2>
            <p>
              We provide a diverse range of software solutions, including
              Manufacturing, Accounting, Inventory, Ticketing, Billing, CRM, and
              POS Software.
            </p>
          </div>
          <div className="services_menu">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`services_item ${
                  activeIndex === index ? "sactive" : ""
                }`}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="left_s_box">
                  <img
                    src={service.imgSrc}
                    alt={`${service.title} icon`}
                    className="service-img"
                  />
                  <div>
                    <span>0{index + 1}</span>
                    <h3>{service.title}</h3>
                  </div>
                </div>
                <div className="right_s_box">
                  <p>{service.description}</p>
                </div>
                <GoArrowUpRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <canvas ref={projectsCanvasRef} className="threejs-canvas" />
        <div className="container">
          <div className="project_titles">
            <h2>Our Customized Software</h2>
          </div>
          <div className="project_buttons">
            {[
              "All",
              "Inventory",
              "Accounting",
              "Manufacturing",
              "CRM",
              "Ticketing",
              "POS",
              "HR & Payroll Software",
            ].map((cat) => (
              <button key={cat} onClick={() => handleCategoryChange(cat)}>
                {cat === "HR & Payroll Software" ? "HR & Payroll" : cat}
              </button>
            ))}
          </div>
          <div className="projects_cards">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Link key={project.name} href="/" className="procard">
                  <div className="proimgbox">
                    <img src="/img/acount.jpg" alt={project.name} />
                  </div>
                  <div className="procontentbox">
                    <h2>{project.name}</h2>
                    <GoArrowUpRight />
                  </div>
                </Link>
              ))
            ) : (
              <p>No projects found in this category</p>
            )}
          </div>
        </div>
      </section>

      {/* Explore client */}
      <section className="explore_websites">
        <canvas ref={exploreCanvasRef} className="threejs-canvas" />
        <div className="container">
          <div className="explore_website_cont">
            <div className="explore_website_title">
              <h3>See Our Valuable Clients</h3>
              <h2>Explore Our Valuable Clients</h2>
            </div>
          </div>
        </div>
        <div className="explore_website_cards">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="explore_website_card">
                  <img
                    src={`/img/ex${index + 1}.jpeg`}
                    alt={`Client Website ${index + 1}`}
                  />
                  <div className="flex flex_sb"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="explore_website_cards">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={4000}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="explore_website_card">
                  <img
                    src={`/img/ex${index + 1}.jpeg`}
                    alt={`Client Website ${index + 1}`}
                  />
                  <div className="flex flex_sb"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="explore_websites">
        <div className="contactpage">
          <h1 className="explore_website_title">Contact Us</h1>
          <div className="container">
            <div className="contactformp">
              <div className="leftcontp">
                <h2>Get in touch</h2>
                <h2>Let's talk about your Project</h2>
                <p>
                  Thinking about a new project, a problem to solve, or just want
                  to contact? Let's do it
                </p>
                <p>Use the form on this page or get in touch by other means.</p>
                <p>
                  We love questions and feedback - and we're always happy to
                  help
                </p>
                <div className="leftsociinfo">
                  <ul>
                    <li>
                      <FaPhoneVolume />{" "}
                      <span>
                        Phone: <a href="Tel:+8801897715426">+8801897715426</a>
                      </span>
                    </li>
                    <li>
                      <MdAttachEmail />{" "}
                      <span>
                        Email:{" "}
                        <a href="inflamesolutionltd@gmail.com">
                          inflamesolutionltd@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <GrLinkedin />{" "}
                      <span>
                        Linkedin: <a href="">Inflame Solution Ltd</a>
                      </span>
                    </li>
                    <li>
                      <FaTwitter />{" "}
                      <span>
                        Twitter: <a href="">@inflamesolutionltd</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rightcontp">
                <form onSubmit={createProduct}>
                  <div className="rightconttitle">
                    <h2>Your Contact Information</h2>
                  </div>
                  <div className="rightcontinputs">
                    <input
                      type="text"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      placeholder="First name"
                      required
                    />
                    <input
                      type="text"
                      value={lname}
                      onChange={(ev) => setLname(ev.target.value)}
                      placeholder="Last Name"
                      required
                    />
                    <input
                      type="text"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      placeholder="Email Id"
                      required
                    />
                    <input
                      type="text"
                      value={company}
                      onChange={(ev) => setCompany(ev.target.value)}
                      placeholder="Company name"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(ev) => setPhone(ev.target.value)}
                      placeholder="Phone Number"
                      required
                    />
                    <select
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      id="country"
                    >
                      <option value="Afghanistan">All</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">
                        Congo, The Democratic Republic of The
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and The Grenadines">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                  <div className="rightconttitle">
                    <h2>What services do you need for your project?</h2>
                  </div>
                  <div className="rightcontcheckbox">
                    {[
                      "Website Developer",
                      "App Developer",
                      "Software Developer",
                      "Design System",
                      "E-commerce Site",
                      "Performance Evaluation",
                    ].map((projectOption) => (
                      <label
                        key={projectOption}
                        className="cyberpunk-checkbox-label"
                      >
                        <input
                          type="checkbox"
                          className="cyberpunk-checkbox"
                          value={projectOption}
                          checked={project.includes(projectOption)}
                          onChange={() => handleProjectChange(projectOption)}
                        />
                        {projectOption}
                      </label>
                    ))}
                  </div>
                  <div className="rightconttitle">
                    <h2>
                      How much is the anticipated budget for your next project?
                    </h2>
                  </div>
                  <div className="rightcontredio">
                    {[
                      "Less than $400-$800",
                      "$800-$1000",
                      "$1000-$1200",
                      "$1200 or more",
                    ].map((priceRange) => (
                      <div key={priceRange} className="radio-button">
                        <input
                          type="radio"
                          id={priceRange}
                          name="example-radio"
                          value={priceRange}
                          checked={price === priceRange}
                          onChange={handlePriceChange}
                        />
                        <span className="radio"></span>
                        <label htmlFor={priceRange}>{priceRange}</label>
                      </div>
                    ))}
                  </div>
                  <div className="rightconttitle">
                    <h2>Tell me about your Project</h2>
                  </div>
                  <div className="rightcontpera">
                    <textarea
                      value={description}
                      onChange={(ev) => setDescription(ev.target.value)}
                      name="description"
                      rows={4}
                      placeholder="Project Description"
                    ></textarea>
                  </div>
                  <hr />
                  <div className="righhcontsbtn flex gap-3">
                    <button type="submit">Submit</button>
                    <p>{messageOk}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
