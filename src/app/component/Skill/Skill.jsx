import React from "react";
import Image from "next/image";

function Skill() {
  return (
    <div className="lg:h-[100vh] md:flex md:items-center w-[100%] py-[40px] px-[15px] md:px-[30px] lg:px-[100px]">
      <div className="md:w-[50%]">
        <h6 className="uppercase tracking-wider font-semibold text-[18px] lg:text-[20px] mb-[15px]">Skill</h6>
        <p className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]">
          Explore techniques for optimizing React performance, including
          memoization and lazy loading.
        </p>
        <p className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]">State Management ,Styling and Design,Performance Optimization.</p>
        <p className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]">
          Develop soft skills such as effective communication, problem-solving,
          and collaboration, which are essential for working in a team
          environment and interacting with clients and stakeholders.
        </p>
      </div>
      <div className="md:w-[50%] flex justify-center">
        <Image
           src={"/Image/11.webp"}
           width={500}
           height={500}
           className="" 
        />
      </div>
    </div>
  );
}

export default Skill;
