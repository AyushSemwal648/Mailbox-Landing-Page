import React from "react";

const Founder = () => {
  return (
    <div className="px-8 md:px-36 py-24 flex flex-col justify-center items-center">
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
        className="w-[300px] sm:w-[560px] xl:w-[750px] h-[200px] sm:h-[315px] xl:h-[415px]"
      ></iframe>
    </div>
  );
};

export default Founder;
