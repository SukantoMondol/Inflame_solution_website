import Head from "next/head";
import { IoHome } from "react-icons/io5";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleDashboardClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Dashboard button clicked!");
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Inflame Solution Backend</title>
        <meta name="description" content="Blog website backend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            Admin <span>Dashboard</span>
          </h2>
          <h3>ADMIN PANEL</h3>
        </div>
        <div className="breadcrumb">
          <IoHome />
          <span>/</span>
          <span>Dashboard</span>
        </div>
        <button
          onClick={handleDashboardClick}
          className="dashboard-btn"
          disabled={loading}
        >
          {loading ? "Loading..." : "Go to Dashboard"}
        </button>
      </div>
    </>
  );
}
