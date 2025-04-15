import { useRouter } from "next/router";

export default function DeleteProduct() {
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

  function goBack() {
    router.pusg("/blogs");
  }
  async function deleteBlog() {
    await axios.delete("/api/blogs?id=" + id);
    toast.success("delete successfuly");
    goBack();
  }

  return (
    <>
      <head>
        <title>Delete blog</title>
      </head>
      <div className="blogpage">
        <div className="titledeshboard flex flex-sb">
          <div>
            <h2>
              Edit <Span>{productInfo?.title}</Span>
            </h2>
            <h3>ADMIN PANEL</h3>
          </div>
          <div className="breadcrumb">
            <BsPostcard /> <span>/</span> <span>Edit Blog</span>
          </div>
        </div>
        <div className="deletesec flex flex-center wh_100">
          <div className="deletecard">
            <svg viewBox="0 0 24 24" fill="red" height="6em" width="6em">
              <path d="M4 19V7h12v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2M6"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
