import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "../../models/Blog"; // Adjust the path to your Blog model

export default async function handle(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method === "POST") {
    try {
      const { title, slug, images, description, blogcategory, tags, status } = req.body;

      // Validate required fields
      if (!slug) {
        return res.status(400).json({ success: false, error: "Slug is required" });
      }

      const blogDoc = await Blog.create({
        title: title || "",
        slug,
        images: images || [],
        description: description || "",
        blogcategory: blogcategory || [],
        tags: tags || [],
        status: status || "draft",
      });

      res.status(201).json(blogDoc);
    } catch (error) {
      console.error("Error creating blog:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  }

  if (method === "GET") {
    try {
      if (req.query?.id) {
        const blog = await Blog.findById(req.query.id);
        if (!blog) {
          return res.status(404).json({ success: false, error: "Blog not found" });
        }
        res.json(blog);
      } else {
        res.json((await Blog.find()).reverse());
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  }

  if (method === "PUT") {
    try {
      const { _id, title, slug, images, description, blogcategory, tags, status } = req.body;

      if (!_id || !slug) {
        return res.status(400).json({ success: false, error: "ID and slug are required" });
      }

      const updatedBlog = await Blog.updateOne(
        { _id },
        {
          title: title || "",
          slug,
          images: images || [],
          description: description || "",
          blogcategory: blogcategory || [],
          tags: tags || [],
          status: status || "draft",
        }
      );

      res.json(true);
    } catch (error) {
      console.error("Error updating blog:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  }

  if (method === "DELETE") {
    try {
      if (req.query?.id) {
        await Blog.deleteOne({ _id: req.query.id });
        res.json(true);
      } else {
        res.status(400).json({ success: false, error: "ID is required" });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  }
}