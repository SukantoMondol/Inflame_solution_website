import { FaBlog } from "react-icons/fa"; // Fixed: Use FaBlog instead of FaBlogger
import useFetchData from "@/hooks/useFetchData"; // Import custom hook
import { useState } from "react"; // Import useState for state management

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [perPage] = useState(7); // State for blogs per page (corrected typo: parpage -> perPage)
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const { allData, loading } = useFetchData("/api/blogs"); // Fetch data, use correct name allData

  // Function to handle page changes
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Update current page
  };

  // Calculate total number of blogs (with null check)
  const allBlogCount = allData ? allData.length : 0;

  // Filter blogs based on search query
  const filteredBlogs =
    searchQuery.trim() === ""
      ? allData || [] // Default to empty array if allData is undefined
      : (allData || []).filter(
          (blog) => blog.title.toLowerCase().includes(searchQuery.toLowerCase()) // Fixed typo: searchQurty -> searchQuery
        );

  // Calculate pagination indices
  const indexOfFirstBlog = (currentPage - 1) * perPage;
  const indexOfLastBlog = currentPage * perPage;

  // Slice filtered blogs for current page
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total pages
  const totalPages = Math.ceil(filteredBlogs.length / perPage);

  return (
    <>
      <div className="blogpage">
        {/* Title and breadcrumb */}
        <div className="titledashboard flex flex-sb">
          <div>
            <h2>
              All published <span>Blogs</span>
            </h2>
            <h3>ADMIN PANEL</h3>
          </div>
          <div className="breadcrumb">
            {" "}
            {/* Fixed typo: clasName -> className */}
            <FaBlog /> {/* Correct icon */}
            <span>/</span> <span>Blogs</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="blogstable">
          <div className="flex gap-2 mb-1">
            <h2>Search Blogs:</h2>
            <input
              type="text"
              placeholder="Search by title.."
              value={searchQuery} // Bind input to searchQuery state
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on change
            />
          </div>

          {/* Blogs table */}
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
                  <td colSpan="4">Loading...</td> {/* Show loading state */}
                </tr>
              ) : currentBlogs.length > 0 ? (
                currentBlogs.map((blog, index) => (
                  <tr key={blog._id}>
                    <td>{indexOfFirstBlog + index + 1}</td> {/* Row number */}
                    <td>
                      {blog.images && blog.images.length > 0 ? (
                        <img
                          src={blog.images[0]}
                          alt={blog.title}
                          style={{ width: "50px", height: "50px" }} // Small image preview
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{blog.title}</td>
                    <td>
                      <button>Edit</button> {/* Placeholder for edit */}
                      <button>Delete</button> {/* Placeholder for delete */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No blogs found</td> {/* Handle empty state */}
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination controls */}
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
    </>
  );
}
