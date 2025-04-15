import Blog from "@/components/Blog";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsPostcard } from "react-icons/bs";
import { useRouter } from "next/router";
import LoginLayout from "@/components/LoginLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/api/blogs?id=${id}`)
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        toast.error("Failed to load blog data");
      });
  }, [id]);

  const handleSave = () => {
    router.push("/blogs/draft"); // Navigate back to Draft page
  };

  return (
    <>
      <Head>
        <title>Update Blog</title>
      </Head>
      <LoginLayout>
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="blogpage">
          <div className="titledashboard flex flex-sb">
            <div>
              <h2>
                Edit <span>{productInfo?.title || "Blog"}</span>
              </h2>
              <h3>ADMIN PANEL</h3>
            </div>
            <div className="breadcrumb">
              <BsPostcard />
              <span>/</span> <span>Edit Blog</span>
            </div>
          </div>

          {productInfo ? (
            <Blog
              productInfo={productInfo}
              isEditMode={true}
              onSave={handleSave}
            />
          ) : (
            <p>Loading blog data...</p>
          )}
        </div>
      </LoginLayout>
    </>
  );
}
