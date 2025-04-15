import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Head from "next/head";

export default function blogs() {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="blogpage">
        <div className="tophero">
          <div className="container">
            <div className="toptitle">
              <div className="toptitlecont flex">
                <h1>
                  Welcome to <span>Inflame Solutions Blogs!</span>
                </h1>
                <p>We are provide you our all service blogs </p>
                <div className="subemail">
                  <form className="flex">
                    <input placeholder="Search Blogs hare..." type="text" />
                    <button>Search</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="featured">
              <div className="container">
                <div className="border">
                  <div className="featuredposts">
                    <div className="fetitle flex">
                      <h3>featured Posts :</h3>
                    </div>
                    <div className="feposts flex">
                      <Swiper
                        slidesPerView={"auto"}
                        freeMode={true}
                        spaceBetween={30}
                        className="mySwiper"
                        modules={[FreeMode]}
                      >
                        <div className="fpost"></div>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
