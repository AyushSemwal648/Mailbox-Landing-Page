import React from "react";

const Founder = () => {
  return (
    <div
      id="founder"
      className="px-8 md:px-36 py-24 flex flex-col justify-center items-center overflow-hidden"
    >
      <h1 className="text-center text-5xl font-bold mb-14">
        A Message from the <span className="text-[#9ECD54]">Founder</span>
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ybOVl3lLV7o?si=GcAcVS3Ptpb4IHAP"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="w-[300px] sm:w-[560px] xl:w-[750px] h-[200px] sm:h-[315px] xl:h-[415px] mb-7 sm:mb-14"
      ></iframe>
      <p className="text-center">
        Our team mission is to make great returns for our clients, and our
        investors by purchasing and improving assets that people want to live
        in. We add value through low-cost, high-impact design improvements based
        on the asset at hand.
      </p>
    </div>
  );
};

export default Founder;
