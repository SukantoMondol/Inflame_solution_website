import ReactMarkdown from "react-markdown"; // Import ReactMarkdown for rendering markdown content
import MarkdownEditor from "react-markdown-editor-lite"; // Import MarkdownEditor for editing markdown
import "react-markdown-editor-lite/lib/index.css"; // Import CSS for MarkdownEditor styling
import Spinner from "./Spinner"; // Import Spinner component for loading indication
import { useState } from "react"; // Import useState hook for managing state
import { useRouter } from "next/router"; // Import useRouter for navigation in Next.js
import axios from "axios"; // Import axios for making HTTP requests
import toast from "react-hot-toast"; // Import toast for displaying notifications
import { ReactSortable } from "react-sortablejs"; // Import ReactSortable for drag-and-drop image sorting
import { MdDeleteForever } from "react-icons/md"; // Import MdDeleteForever icon for delete button

export default function Blog({ _id }) {
  // State for redirecting after save
  const [redirect, setRedirect] = useState(false);
  // Router instance for navigation
  const router = useRouter();

  // State for blog title
  const [title, setTitle] = useState("");
  // State for blog slug (SEO-friendly URL)
  const [slug, setSlug] = useState("");
  // State for blog images
  const [images, setImages] = useState([]);
  // State for blog description (markdown content)
  const [description, setDescription] = useState("");
  // State for blog categories (multi-select)
  const [blogCategory, setBlogCategory] = useState([]);
  // State for blog tags (multi-select)
  const [tags, setTags] = useState([]);
  // State for blog status (draft or publish)
  const [status, setStatus] = useState("");

  // State for tracking image upload status
  const [isUploading, setIsUploading] = useState(false);
  // Array to store image upload promises
  const uploadImagesQueue = [];

  // Function to handle blog creation or update
  async function createBlog(ev) {
    ev.preventDefault(); // Prevent default form submission

    // Wait for image uploads if in progress
    if (isUploading) {
      await Promise.all(uploadImagesQueue);
    }

    // Data object to send to API
    const data = {
      title,
      slug,
      images,
      description,
      blogcategory: blogCategory, // Match schema field name
      tags,
      status: status || "draft", // Default to "draft" if no status selected
    };

    // Validate slug before sending
    if (!slug) {
      toast.error("Slug is required"); // Show error if slug is empty
      return;
    }

    // Log data for debugging
    console.log("Data being sent to /api/blogs:", data);

    try {
      // Update existing blog if _id exists
      if (_id) {
        await axios.put("/api/blogs", { ...data, _id }); // Send PUT request
        toast.success("Data Updated"); // Notify user of success
      } else {
        // Create new blog if no _id
        await axios.post("/api/blogs", data); // Send POST request
        toast.success("Blog Created"); // Notify user of success
      }
      setRedirect(true); // Trigger redirect after save
    } catch (error) {
      // Handle errors from API request
      const errorMessage = error.response?.data?.error || error.message;
      console.error(
        "Error saving blog:",
        error.response?.data || error.message
      ); // Log error details
      toast.error(`Failed to save blog: ${errorMessage}`); // Show error to user
    }
  }

  // Function to handle image uploads
  async function uploadImages(ev) {
    const files = ev.target?.files; // Get selected files
    if (files?.length > 0) {
      setIsUploading(true); // Set uploading state to true
      // Loop through each file
      for (const file of files) {
        const data = new FormData(); // Create FormData for file upload
        data.append("file", file); // Append file to FormData
        // Push upload promise to queue
        uploadImagesQueue.push(
          axios.post("/api/upload", data).then((res) => {
            setImages((oldImages) => [...oldImages, ...res.data.links]); // Add uploaded image links to state
          })
        );
      }
      await Promise.all(uploadImagesQueue); // Wait for all uploads to complete
      setIsUploading(false); // Reset uploading state
      toast.success("Images Uploaded"); // Notify user of success
    } else {
      toast.error("No files selected"); // Show error if no files selected
    }
  }

  // Redirect to /blogs if save is successful
  if (redirect) {
    router.push("/blogs"); // Navigate to blogs page
    return null; // Return null to prevent rendering form
  }

  // Function to update image order after sorting
  function updateImagesOrder(images) {
    setImages(images); // Update images state with new order
  }

  // Function to delete an image
  function handleDeleteImage(index) {
    const updatedImages = [...images]; // Copy current images array
    updatedImages.splice(index, 1); // Remove image at specified index
    setImages(updatedImages); // Update images state
    toast.success("Image Deleted Successfully"); // Notify user of success
  }

  // Function to handle slug input changes
  const handleSlugChange = (ev) => {
    const inputValue = ev.target.value; // Get input value
    const newSlug = inputValue.replace(/\s+/g, "-").toLowerCase(); // Replace spaces with hyphens and lowercase
    setSlug(newSlug); // Update slug state
  };

  // Render the form
  return (
    <>
      <form className="addWebsiteform" onSubmit={createBlog}>
        {/* Blog title input */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter small title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)} // Update title state
            required // Make title required
          />
        </div>
        {/* Blog slug input */}
        <div className="w-100 flex flex-col flex-left mb-2">
          <label htmlFor="slug">Slug (SEO-friendly URL)</label>
          <input
            type="text"
            id="slug"
            placeholder="Enter slug URL title"
            value={slug}
            onChange={handleSlugChange} // Update slug state
            required // Make slug required
          />
        </div>
        {/* Blog category select */}
        <div className="w-100 flex flex-col flex-left -mb-2">
          <label htmlFor="category">Category</label>
          <select
            onChange={(e) =>
              setBlogCategory(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            } // Update blogCategory state
            value={blogCategory} // Controlled value
            name="category"
            id="category"
            multiple // Allow multiple selections
          >
            <option value="Node Js">Node Js</option>
            <option value="React Js">React Js</option>
            <option value="Next Js">Next Js</option>
            <option value="CSS">CSS</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Flutter Dev">Flutter Dev</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>
        {/* Image upload input */}
        <div className="w-100 flex flex-col flex-left -mb-2">
          <div className="w-100">
            <label htmlFor="fileInput">Images</label>
            <input
              type="file"
              id="fileInput"
              className="mt-1"
              accept="image/*" // Accept only image files
              multiple // Allow multiple file selection
              onChange={uploadImages} // Handle file upload
            />
          </div>
          {/* Show spinner during upload */}
          <div className="w-100 flex flex-col flex-left -mb-2">
            {isUploading && <Spinner />}
          </div>
        </div>
        {/* Image preview and sorting */}
        {!isUploading && (
          <div className="flex">
            <ReactSortable
              list={Array.isArray(images) ? images : []} // Ensure images is an array
              setList={updateImagesOrder} // Update order on sort
              animation={200} // Animation duration
              className="flex gap-1" // Flex layout with gap
            >
              {images?.map((link, index) => (
                <div className="uploading" key={index}>
                  <img src={link} alt="image" className="object-cover" />{" "}
                  {/* Display image */}
                  <div className="deleteimg">
                    <button
                      type="button" // Prevent form submission
                      onClick={() => handleDeleteImage(index)} // Delete image
                    >
                      <MdDeleteForever /> {/* Delete icon */}
                    </button>
                  </div>
                </div>
              ))}
            </ReactSortable>
          </div>
        )}
        {/* Blog content editor */}
        <div className="Description w-100 flex flex-col flex-left -mb-2">
          <label htmlFor="description">
            Blog content (for image: first upload and copy link and paste in{" "}
            <code>![alt text](link)</code>)
          </label>
          <MarkdownEditor
            value={description} // Controlled value
            onChange={(ev) => setDescription(ev.text)} // Update description state
            style={{ width: "100%", height: "400px" }} // Editor dimensions
            renderHTML={(text) => (
              <ReactMarkdown
                components={{
                  // Custom code block rendering
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    if (inline) {
                      return <code>{children}</code>; // Inline code
                    } else if (match) {
                      return (
                        <div style={{ position: "relative" }}>
                          <pre
                            style={{
                              padding: "0",
                              borderRadius: "5px",
                              msOverflowX: "auto",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            <code>{children}</code> {/* Code block */}
                          </pre>
                          <button
                            style={{
                              position: "absolute",
                              top: "0",
                              right: "0",
                              zIndex: "1",
                              background: "#eee",
                              border: "none",
                              padding: "5px",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              const textToCopy = String(children).trim(); // Copy code to clipboard
                              navigator.clipboard
                                .writeText(textToCopy)
                                .then(() => alert("Code copied!"))
                                .catch((err) =>
                                  console.error("Failed to copy:", err)
                                );
                            }}
                          >
                            Copy Code {/* Copy button */}
                          </button>
                        </div>
                      );
                    }
                  },
                }}
              >
                {text}
              </ReactMarkdown>
            )}
          />
        </div>
        {/* Blog tags select */}
        <div className="w-100 flex flex-col flex-left -mb-4">
          <label htmlFor="tags">Tags</label>
          <select
            onChange={(e) =>
              setTags(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            } // Update tags state
            value={tags} // Controlled value
            name="tags"
            id="tags"
            multiple // Allow multiple selections
          >
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">javascript</option>
            <option value="nextjs">nextjs</option>
            <option value="reactjs">reactjs</option>
            <option value="database">database</option>
          </select>
        </div>
        {/* Blog status select */}
        <div className="w-100 flex flex-col flex-left -mb-4">
          <label htmlFor="status">Status</label>
          <select
            onChange={(ev) => setStatus(ev.target.value)} // Update status state
            value={status} // Controlled value
            name="status"
            id="status"
          >
            <option value="">No select</option>
            <option value="draft">Draft</option>
            <option value="publish">Publish</option>
          </select>
        </div>
        {/* Save button */}
        <div className="w-100 mb-1 mt-2">
          <button type="submit" className="w-100 addwebbtn flex-center">
            Save Blog {/* Submit form */}
          </button>
        </div>
      </form>
    </>
  );
}
