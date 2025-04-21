
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Apply() {
  const router = useRouter();
  const { jobId } = router.query;

  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
    },
    {
      id: "2",
      title: "UI/UX Designer",
    },
    {
      id: "3",
      title: "DevOps Engineer",
    },
    {
      id: "4",
      title: "Backend Developer",
    },
  ];

  const job = jobs.find((j) => j.id === jobId) || { title: "General Application" };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobId: jobId || "",
    resume: null,
    coverLetter: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call in production)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

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

  return (
    <>
      <Head>
        <title>Apply - Inflame Solutions</title>
        <meta
          name="description"
          content="Apply for a career at Inflame Solutions. Submit your application for exciting web development roles."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="apply">
        {/* Hero Section */}
        <section className="hero relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/img/wave-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="hero-content text-center"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <h1 className="h1">
                Apply for <span>{job.title}</span>
              </h1>
              <p className="p">
                Take the next step in your career with Inflame Solutions. Submit your application today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="form-section section-padding bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              className="section-header text-center"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Application Form</h2>
              <p className="p">
                Fill out the form below to apply for {job.title}.
              </p>
            </motion.div>
            <motion.div
              className="form-container bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="success-message text-center">
                  <IoMdCheckmarkCircleOutline className="text-green-500 text-5xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for applying. We'll review your application and get back to you soon.
                  </p>
                  <motion.a
                    href="/careers"
                    className="btn btn-primary inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Back to Careers
                  </motion.a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jobId"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      id="jobId"
                      name="jobId"
                      value={job.title}
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Resume (PDF)
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf"
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full text-gray-700 dark:text-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="coverLetter"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <motion.button
                      type="submit"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit Application
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="cta-content"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="h1">Ready to Join Our Team?</h2>
              <p className="p">
                Explore more opportunities and apply for your dream role today!
              </p>
              <motion.a
                href="/careers#features"
                className="btn btn-primary cta-btn"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(147, 197, 253, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View All Jobs
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Utility Classes */
        .section-padding {
          padding: 6rem 0;
        }

        /* Hero Section */
        .hero {
          position: relative;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          color: white;
          overflow: hidden;
          text-align: center;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/img/wave-pattern.svg') repeat;
          opacity: 0.1;
          z-index: 0;
        }

        .h1 {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(90deg, #ffffff, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          animation: fadeInUp 1s ease-out;
        }

        .h1 span {
          background: linear-gradient(90deg, #93c5fd, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .p {
          font-size: 1.25rem;
          color: #e0e7ff;
          margin: 1rem auto;
          max-width: 600px;
          animation: fadeInUp 1.2s ease-out 0.2s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-header .h1 {
          font-size: 2.75rem;
          font-weight: 800;
          animation: fadeIn 1s ease-out;
        }

        .section-header .p {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0.5rem auto;
          color: #4b5563;
          dark:color: #d1d5db;
          animation: fadeIn 1.2s ease-out 0.2s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Form Section */
        .form-section {
          background: linear-gradient(145deg, #f3f4f6, #e5e7eb);
        }

        .form-container {
          background: linear-gradient(145deg, #ffffff, #f1f5f9);
          border-radius: 1.25rem;
          transition: all 0.4s ease;
        }

        .form-container:hover {
          transform: translateY(-12px);
          background: linear-gradient(145deg, #f1f5f9, #e2e8f0);
        }

        input, textarea {
          padding: 0.75rem;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Button Styles */
        .btn {
          display: inline-block;
          padding: 0.75rem 2rem;
          font-weight: 600;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(90deg, #2563eb, #1e40af);
          transform: translateY(-3px);
        }

        /* CTA Section */
        .cta {
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 70%);
          z-index: 0;
        }

        .cta-btn {
          margin-top: 1.5rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .h1 {
            font-size: 2.25rem;
          }

          .p {
            font-size: 1rem;
          }

          .section-header .h1 {
            font-size: 2.25rem;
          }

          .form-container {
            padding: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .form-container {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}
