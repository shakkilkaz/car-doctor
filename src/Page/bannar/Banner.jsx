import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="carousel w-full h-[800px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex  items-center left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0] ">
            <div className="text-white w-1/3 pl-12 space-y-6">
              <h2 className="text-5xl font-semibold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn text-white btn-outline">
                  Latest Project
                </button>
                <button className="btn btn-error">Discover More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex  items-center left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0] ">
            <div className="text-white w-1/3 pl-12 space-y-6">
              <h2 className="text-5xl font-semibold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn text-white btn-outline">
                  Latest Project
                </button>
                <button className="btn btn-error">Discover More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex  items-center left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0] ">
            <div className="text-white w-1/3 pl-12 space-y-6">
              <h2 className="text-5xl font-semibold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn text-white btn-outline">
                  Latest Project
                </button>
                <button className="btn btn-error">Discover More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex  items-center left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0] ">
            <div className="text-white w-1/3 pl-12 space-y-6">
              <h2 className="text-5xl font-semibold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn text-white btn-outline">
                  Latest Project
                </button>
                <button className="btn btn-error">Discover More</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
