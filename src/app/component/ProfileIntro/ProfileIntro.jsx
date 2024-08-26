import React from "react";
import Image from "next/image";
import Header from "@/app/Header/Header";

function ProfileIntro() {
  return (
    <div className="md:h-[100vh] relative ">
      <div className="sticky top-[30px] left-0 right-0 z-[999]">
        <Header />
      </div>
      <div className="md:flex w-[100%] md:items-center px-[15px] md:px-[25px] lg:px-[100px] relative top-[50px] lg:top-[130px]">
        <div className="lg:w-[50%]">
          <h2 className="text-[46px] mb-[20px] lg:text-[60px]">
            Front-End React <br></br> Developer
          </h2>
          <p className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]">
            Hi, I am Tamizharasu. A passionate Front-End React Developer.
            <br></br>
            Developer based in Tamilnadu, India.
          </p>
          <div className="flex mb-[20px]">
            <Image
              src={"/Image/2.svg"}
              width={200}
              height={200}
              className="w-[30px] h-[30px] mr-[10px] lg:w-[40px] lg:h-[40px] lg:mr-[20px]"
            />
            <Image
              src={"/Image/3.svg"}
              width={200}
              height={200}
              className="w-[30px] h-[30px] mr-[10px] lg:w-[40px] lg:h-[40px] lg:mr-[20px]"
            />
            <Image
              src={"/Image/4.svg"}
              width={200}
              height={200}
              className="w-[30px] h-[30px] mr-[10px] lg:w-[40px] lg:h-[40px] lg:mr-[20px]"
            />
            <Image
              src={"/Image/5.svg"}
              width={200}
              height={200}
              className="w-[30px] h-[30px] mr-[10px] lg:w-[40px] lg:h-[40px] lg:mr-[20px]"
            />
            <Image
              src={"/Image/6.svg"}
              width={200}
              height={200}
              className="w-[30px] h-[30px] mr-[10px] lg:w-[40px] lg:h-[40px] lg:mr-[20px]"
            />
            <Image
              src={"/Image/7.svg"}
              width={200}
              height={200}
              className="w-[30px] h-[30px] mr-[10px] lg:w-[40px] lg:h-[40px] lg:mr-[20px]"
            />
            <Image
              src={"/Image/8.webp"}
              width={200}
              height={200}
              className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] "
            />
          </div>
        </div>
        <div className="flex justify-center lg:w-[50%] pt-[20px] pb-[70px] lg:py-[0px]">
          <Image
            src={"/Image/9.webp"}
            width={500}
            height={500}
            className="w-[80%] h-[50%] md:w-[60%] lg:ml-[60px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileIntro;
