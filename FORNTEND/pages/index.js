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
import * as THREE from "three";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, EffectCreative, FreeMode, Pagination } from "swiper/modules";

import { Navigation } from "swiper/modules";

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
      { src: "/img/ex2.png", alt: "Home Page Slide 1" },
      { src: "/img/ex1.png", alt: "Home Page Slide 2" },
    ],
    "Service Page": [
      { src: "/img/ex2.png", alt: "Service Page Slide 1" },
      { src: "/img/ex1.png", alt: "Service Page Slide 2" },
    ],
    "Blog Page": [
      { src: "/img/2.jpg", alt: "Blog Page Slide 1" },
      { src: "/img/3.jpg", alt: "Blog Page Slide 2" },
    ],
    "Contact Page": [
      { src: "/img/ex2.png", alt: "Contact Page Slide 1" },
      { src: "/img/ex1.png", alt: "Contact Page Slide 2" },
    ],
    More: [
      { src: "/img/1.jpg", alt: "More Page Slide 1" },
      { src: "/img/3.jpg", alt: "More Page Slide 2" },
    ],
  };

  const services = [
    {
      title: "Web Development",
      description:
        "As a leading website development company, we create custom and SEO-friendly websites that drive results fast. Our expert team designs and develops responsive, user-centric sites tailored to your business needs.",
    },
    {
      title: "Software Development",
      description:
        "Transform your business with our custom software development services. We offer high-quality, scalable software solutions for enterprise applications using the latest technologies.",
    },
    {
      title: "Mobile Development",
      description:
        "Expert in visual storytelling, skilled in photography and videography to deliver captivating content that transforms visions into visual stories.",
    },
    {
      title: "Digital Marketing (SEO)",
      description:
        "Grow your online presence with our expert digital marketing services, including SEO, Social Media Marketing, content marketing, and PPC campaigns.",
    },
    {
      title: "Graphics Design",
      description:
        "Enhance your brand with eye-catching, custom visuals. From logos to UI/UX design, our creative team delivers high-quality graphics to elevate your business.",
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

  return (
    <>
      <Head>
        <title>Inflame Solutions Ltd</title>
        <meta name="description" content="vbmcoder - Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
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
        @media (max-width: 768px) {
          section {
            min-height: 80vh;
          }
          .threejs-canvas {
            height: 80vh;
          }
        }
        @media (max-width: 480px) {
          section {
            min-height: 60vh;
          }
          .threejs-canvas {
            height: 60vh;
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
            <Link href="/learn-more" className="learn_more_button">
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
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
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

      {/* Explore Websites Section */}
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
                    src={`/img/ex${index + 1}.png`}
                    alt={`Client Website ${index + 1}`}
                  />
                  <div className="flex flex_sb">
                    <h3>Digital Website {index + 1}</h3>
                  </div>
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
                    src={`/img/ex${index + 1}.png`}
                    alt={`Client Website ${index + 1}`}
                  />
                  <div className="flex flex_sb">
                    <h3>Digital Website {index + 1}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
