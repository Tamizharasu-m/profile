"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skill() {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef1.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="lg:h-[100vh] md:flex md:items-center w-[100%] py-[40px] px-[15px] md:px-[30px] lg:px-[100px]">
      <div className="md:w-[50%]">
        <h6 className="uppercase tracking-wider font-semibold text-[18px] lg:text-[20px] mb-[15px]  text-white">
          Skill
        </h6>
        <p
          ref={textRef}
          className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]  text-white"
        >
          Explore techniques for optimizing React performance, including
          memoization and lazy loading.
        </p>
        <p
          ref={textRef1}
          className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]  text-white"
        >
          State Management ,Styling and Design,Performance Optimization.
        </p>
        <p
          ref={textRef2}
          className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]  text-white"
        >
          Develop soft skills such as effective communication, problem-solving,
          and collaboration, which are essential for working in a team
          environment and interacting with clients and stakeholders.
        </p>
      </div>
      <div className="md:w-[50%] flex justify-center">
        <Image src={"/Image/11.webp"} width={500} height={500} className="" />
      </div>
    </div>
  );
}

export default Skill;
