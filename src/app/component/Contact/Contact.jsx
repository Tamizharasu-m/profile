
import React from "react";
import Image from "next/image";






function Contact() {


  return (
    <div className="lg:h-[100vh] md:flex md:items-center w-[100%] py-[40px] px-[15px] md:px-[30px] lg:px-[100px]">
      <div className="md:w-[50%]">
        <Image src={"/Image/12.webp"} width={500} height={500} className="" />
      </div>
      <div className="md:w-[50%]">
        <h6  className="uppercase tracking-wider font-semibold text-[18px] lg:text-[20px] mb-[15px] text-center  text-white">
          Contact
        </h6>
        <div  className="flex items-center justify-center  mb-[10px]">
          <Image
            src={"/Image/13.webp"}
            width={500}
            height={500}
            className="w-[20px] h-[20px] mr-[10px]"
            
          />
          <h6  className=" text-white">Address</h6>
        </div>
        <p  className=" text-center text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px]  lg:leading-[30px]  text-white">
          33 Banavaram Post, Nemili Taluk, Ranipet District, Tamilnadu-632 505.
        </p>
        <div  className="flex items-center justify-center mb-[10px]">
          <Image
            src={"/Image/14.webp"}
            width={500}
            height={500}
            className="w-[20px] h-[20px] mr-[10px] "
            
          />
          <h6  className=" text-white">Phone</h6>
        </div>
        <p  className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-center lg:leading-[30px]  text-white">
          9361366518
        </p>
        <div className="flex items-center justify-center mb-[10px]">
          <Image
            src={"/Image/15.webp"}
            width={500}
            height={500}
            className="w-[20px] h-[20px] mr-[10px] "
            
          />
          <h6  className=" text-white">Email</h6>
        </div>
        <p  className=" text-white text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-center lg:leading-[30px]">
          manotamizhkkm@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
