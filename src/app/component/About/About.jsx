import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="lg:h-[100vh] md:flex md:items-center w-[100%] py-[40px] px-[15px] md:px-[30px] lg:px-[100px]">
      <div className="md:w-[50%] hidden md:block ">
        <Image
          src={"/Image/10.webp"}
          width={500}
          height={500}
          className="w-[]"
        />
      </div>
      <div className="md:w-[50%]">
        <h6 className="uppercase tracking-wider font-semibold text-[18px] lg:text-[20px]  text-white">about me</h6>
        <h2 className="text-[34px] mb-[20px] lg:text-[60px]  text-white">
          Front-End React Developer based in Tamilnadu, India.
        </h2>
        <p className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]  text-white">
          Hii, My name is Tamizharasu, and Im a Frontend Developer. My passion
          is to create and develop a clean UI/UX.
        </p>
        <p className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]  text-white">
          My main stack currently is React/Next.js in combination with Tailwind
          CSS.
        </p>
      </div>
      <div className="md:hidden md:w-[50%] flex justify-center">
        <Image src={"/Image/10.webp"} width={500} height={500} className="" />
      </div>
    </div>
  );
}

export default About;
