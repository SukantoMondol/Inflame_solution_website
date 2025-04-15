import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Gallery() {
  // Sample project data
  const projects = [
    { name: "Inventory Pro", category: "Inventory", image: "/img/inventory.jpg" },
    { name: "Smart Books", category: "Accounting", image: "/img/acount.jpg" },
    { name: "MFG Tracker", category: "Manufacturing", image: "/img/mfg.jpg" },
    { name: "ClientConnect", category: "CRM", image: "/img/crm.jpg" },
    { name: "QuickTickets", category: "Ticketing", image: "/img/ticket.jpg" },
    { name: "POS Genius", category: "POS", image: "/img/pos.jpg" },
    { name: "HR Payroll Pro", category: "HR & Payroll Software", image: "/img/hr.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Inflame Solutions Ltd. Portfolio</title>
      </Head>
      <div className="gallerypage">
        <div className="container">
          <div className="gallerytopsec">
            <div className="topphonesec">
              <div className="lefttitlesec">
                <h4>Inflame Solutions Portfolio</h4>
                <h1>
                  Our Valuable <br />
                  Company
                </h1>
                <Link href="/gallery#galleryimages">
                  <button>View More</button>
                </Link>
              </div>
              <div className="rightimgsec">
                <img src="/img/ultra logo.jpg" alt="Ultra Logo" />
                <div className="r_imge_top">
                  <img src="/img/mimi logo.jpeg" alt="Mimi Logo" />
                  <img src="/img/mra logo.jpg" alt="MRA Logo" />
                  <img src="/img/pqs.png" alt="PQS Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallerybtmphotos" id="galleryimages">
          <div className="container">
            <div className="gbtmtitles text-center">
              <h3>
                <span>01//</span>Our Portfolio
              </h3>
              <h2>
                Inflame Solutions {" "}
                <span>
                  All of our <br />
                </span>{" "}
                Software
              </h2>
            </div>
            <div className="gallery_image_grid">


            </div>
            <div className="container">
              <div className="project_titles">

              </div>
              <div className="project_buttons">
                <button onClick={() => handleCategoryChange("All")}>All</button>
                <button onClick={() => handleCategoryChange("Inventory")}>
                  Inventory
                </button>
                <button onClick={() => handleCategoryChange("Accounting")}>
                  Accounting
                </button>
                <button onClick={() => handleCategoryChange("Manufacturing")}>
                  Manufacturing
                </button>
                <button onClick={() => handleCategoryChange("CRM")}>CRM</button>
                <button onClick={() => handleCategoryChange("Ticketing")}>
                  Ticketing
                </button>
                <button onClick={() => handleCategoryChange("POS")}>POS</button>
                <button
                  onClick={() => handleCategoryChange("HR & Payroll Software")}
                >
                  HR & Payroll
                </button>
              </div>

              <div className="projects_cards">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <Link key={index} href="/" className="procard">
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

          </div>
        </div>
      </div>


    </>
  );
}
