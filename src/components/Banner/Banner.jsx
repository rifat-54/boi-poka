import React from "react";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero p-8 bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="w-full  sm:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl mb-8 font-bold">Books to freshen up your bookshelf</h1>
          
          <button className="btn text-white bg-[#23BE0A]">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
