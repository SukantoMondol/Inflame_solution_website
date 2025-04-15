import { useState, useEffect } from "react"; // Fixed typo: "resct" -> "react"
import axios from "axios"; // Added missing axios import

function useFetchData(apiEndpoint) {
  const [allData, setAllData] = useState([]); // Standardized naming to camelCase
  const [loading, setLoading] = useState(false); // Loading state, initially false

  useEffect(() => {
    // Only fetch if apiEndpoint is provided
    if (!apiEndpoint) {
      setLoading(false); // Ensure loading is false if no endpoint
      return;
    }

    // Fetch data from the API
    const fetchAllData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const res = await axios.get(apiEndpoint); // Fetch data with axios
        setAllData(res.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error); // Log error for debugging
        setAllData([]); // Reset data on error (optional, adjust as needed)
      } finally {
        setLoading(false); // Always set loading to false after fetch completes
      }
    };

    fetchAllData(); // Call the fetch function
  }, [apiEndpoint]); // Dependency array: re-run when apiEndpoint changes

  return { allData, loading }; // Return data and loading state
}

export default useFetchData;
