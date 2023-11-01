import React from "react";

const page = () => {
  return (
    <div>
      <p className="text-xs sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
        Hello long sentance
      </p>
      <p className="text-xs myCustomScreen:text-3xl">custom</p>
      <p className="text-red-600 text-xs sm:text-yellow-600 sm:text-base md:text-teal-600 md:text-lg lg:text-green-600 lg:text-2xl xl:text-blue-600 xl:text-3xl">
        Text with varying color and size
      </p>
      <div className="mt-1">
        <p className="mb-customSpacing">spacing 1</p>
        <p>spacing 2</p>
      </div>
      <div>
        <p className="bg-[#bada55] text-[#fff] mt-[100px] md:mt-[200px]">
          directly apply styles
        </p>
      </div>
    </div>
  );
};

export default page;
