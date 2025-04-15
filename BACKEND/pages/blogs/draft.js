import React, { useState } from "react";
import { FaBlog } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router"; // For navigation
import useFetchData from "@/hooks/useFetchData"; // Reuse your custom hook
import axios from "axios"; // For delete requests

export default function Draft() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5); // Adjusted to match your style
  const [searchQuery, setSearchQuery] = useState("");

  const { allData, loading } = useFetchData("/api/blogs/drafts"); // Fetch draft blogs

  // Function to handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter blogs based on search query
  const filteredBlogs =
    searchQuery.trim() === ""
      ? allData || []
      : (allData || []).filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // Calculate pagination indices
  const indexOfFirstBlog = (currentPage - 1) * perPage;
  const indexOfLastBlog = currentPage * perPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / perPage);

  // Edit handler
  const handleEdit = (blogId) => {
    router.push(`/blogs/edit?id=${blogId}`); // Navigate to EditProduct
  };

  // Delete handler
  const handleDelete = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this draft?")) {
      try {
        await axios.delete(`/api/blogs?id=${blogId}`); // Adjusted endpoint
        toast.success("Draft deleted successfully");
        // Refetch or filter locally
        const updatedData = allData.filter((blog) => blog._id !== blogId);
        // Note: useFetchData might not allow direct state updates, so refetch might be needed
        window.location.reload(); // Temporary workaround; ideally, update hook
      } catch (error) {
        console.error("Error deleting draft:", error);
        toast.error("Failed to delete draft");
      }
    }
  };

  return (
    <div className="blogpage">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            All Draft <span>Blogs</span>
          </h2>
          <h3>ADMIN PANEL</h3>
        </div>
        <div className="breadcrumb">
          <FaBlog />
          <span>/</span> <span>Blogs</span>
        </div>
      </div>

      <div className="blogstable">
        <div className="flex gap-2 mb-1">
          <h2>Search Blogs:</h2>
          <input
            type="text"
            placeholder="Search by title.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <table className="table table-styling">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            ) : currentBlogs.length > 0 ? (
              currentBlogs.map((blog, index) => (
                <tr key={blog._id}>
                  <td>{indexOfFirstBlog + index + 1}</td>
                  <td>
                    {blog.images && blog.images.length > 0 ? (
                      <img
                        src={blog.images[0]}
                        alt={blog.title}
                        style={{ width: "50px", height: "50px" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{blog.title}</td>
                  <td>
                    <button onClick={() => handleEdit(blog._id)}>Edit</button>
                    <button onClick={() => handleDelete(blog._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No draft blogs found</td>
              </tr>
            )}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
