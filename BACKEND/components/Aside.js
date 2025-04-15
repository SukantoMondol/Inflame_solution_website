import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { GrGallery } from "react-icons/gr";
import { AiOutlineContacts } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

export default function Aside({ asideOpen, handleAsideOpen }) {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/.");
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLinkClick = (link) => {
    setActiveLink((prevActive) => (prevActive === link ? null : link));
    setClicked(false);
  };
  useEffect(() => {
    //ipdate active link state when the page is reloaded
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <aside className={asideOpen ? "asideleft active" : "asideleft"}>
        <ul>
          <Link href="/">
            <li className="navactive">
              <IoHome />
              <span>Dashboard</span>
            </li>
          </Link>
          <li
            className={
              activeLink === "/blogs"
                ? "navactive flex-col flex-left "
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/blogs")}
          >
            <div className="flex gap-1">
              <BsPostcard />
              <span>Blogs</span>
            </div>
            {activeLink === "/blogs" && (
              <ul>
                <Link href="/blogs">
                  <li>All Blogs</li>
                </Link>
                <Link href="/blogs/draft">
                  <li>Dreft Blogs</li>
                </Link>
                <Link href="/blogs/addblog">
                  <li>Add Blogs</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/projrcts"
                ? "navactive flex-col flex-left "
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/projects")}
          >
            <div className="flex gap-1">
              <MdOutlineWorkOutline />
              <span>Projects</span>
            </div>
            {activeLink === "/projects" && (
              <ul>
                <Link href="/projects">
                  <li>All Projects</li>
                </Link>
                <Link href="/projects/draftprojects">
                  <li>Dreft Projects</li>
                </Link>
                <Link href="/projects/addproject">
                  <li>Add Projects</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/shops"
                ? "navactive flex-col flex-left "
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/shops")}
          >
            <div className="flex gap-1">
              <TiShoppingCart />
              <span>Shops</span>
            </div>
            {activeLink === "/shops" && (
              <ul>
                <Link href="/shops">
                  <li>All Products</li>
                </Link>
                <Link href="/draftshop">
                  <li>Dreft products</li>
                </Link>
                <Link href="/addproduct">
                  <li>Add Products</li>
                </Link>
              </ul>
            )}
          </li>
          <li
            className={
              activeLink === "/gallery"
                ? "navactive flex-col flex-left "
                : "flex-col flex-left"
            }
            onClick={() => handleLinkClick("/gallery")}
          >
            <div className="flex gap-1">
              <GrGallery />
              <span>Gallery</span>
            </div>
            {activeLink === "/gallery" && (
              <ul>
                <Link href="/gallery">
                  <li>All Picture</li>
                </Link>
                <Link href="/gallery/addphoto">
                  <li>Add Pricture</li>
                </Link>
              </ul>
            )}
          </li>
          <Link href="/contacts">
            <li
              className={activeLink === "/contacts" ? "navactive" : ""}
              onClick={() => handleLinkClick("/contacts")}
            >
              <AiOutlineContacts />

              <span>Contacts</span>
            </li>
          </Link>
          <Link href="/setting">
            <li
              className={activeLink === "/setting" ? "navactive" : ""}
              onClick={() => handleLinkClick("/setting")}
            >
              <IoSettingsOutline />

              <span>Setting</span>
            </li>
          </Link>
        </ul>
        <button className="logoutbtn">Logout</button>
      </aside>
    </>
  );
}
