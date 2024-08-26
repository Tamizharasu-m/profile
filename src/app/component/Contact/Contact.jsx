"use client"
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);
  const textRef6 = useRef(null);
  const textRef7 = useRef(null);
  const textRef8 = useRef(null);


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

  useEffect(() => {
    gsap.fromTo(
      textRef3.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef3.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef4.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef4.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef5.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef5.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);


  useEffect(() => {
    gsap.fromTo(
      textRef6.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef6.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef7.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef7.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef8.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef8.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);


  return (
    <div className="lg:h-[100vh] md:flex md:items-center w-[100%] py-[40px] px-[15px] md:px-[30px] lg:px-[100px]">
      <div className="md:w-[50%]">
        <Image src={"/Image/12.webp"} width={500} height={500} className="" />
      </div>
      <div className="md:w-[50%]">
        <h6 className="uppercase tracking-wider font-semibold text-[18px] lg:text-[20px] mb-[15px] text-center  text-white">
          Contact
        </h6>
        <div  className="flex items-center justify-center  mb-[10px]">
          <Image
            src={"/Image/13.webp"}
            width={500}
            height={500}
            className="w-[20px] h-[20px] mr-[10px]"
            ref={textRef}
          />
          <h6 ref={textRef1} className=" text-white">Address</h6>
        </div>
        <p ref={textRef2} className=" text-center text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px]  lg:leading-[30px]  text-white">
          33 Banavaram Post, Nemili Taluk, Ranipet District, Tamilnadu-632 505.
        </p>
        <div  className="flex items-center justify-center mb-[10px]">
          <Image
            src={"/Image/14.webp"}
            width={500}
            height={500}
            className="w-[20px] h-[20px] mr-[10px] "
            ref={textRef3}
          />
          <h6 ref={textRef4} className=" text-white">Phone</h6>
        </div>
        <p ref={textRef5} className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-center lg:leading-[30px]  text-white">
          9361366518
        </p>
        <div className="flex items-center justify-center mb-[10px]">
          <Image
            src={"/Image/15.webp"}
            width={500}
            height={500}
            className="w-[20px] h-[20px] mr-[10px] "
            ref={textRef6}
          />
          <h6 ref={textRef7} className=" text-white">Email</h6>
        </div>
        <p ref={textRef8} className=" text-white text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-center lg:leading-[30px]">
          manotamizhkkm@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
