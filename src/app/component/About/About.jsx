"use client"
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);


  const fontRef = useRef(null);

  useEffect(() => {
    const text = fontRef.current;
    const letters = text.innerText.split("");
    text.innerHTML = letters.map(letter => letter === ' ' ? '<span>&nbsp;</span>' : `<span style="display: inline-block;">${letter}</span>`).join("");

    gsap.fromTo(text.children, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      }
    });
  }, []);


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
      <div className="md:w-[50%] hidden md:block ">
        <Image
          src={"/Image/10.webp"}
          width={500}
          height={500}
          className="w-[]"
        />
      </div>
      <div className="md:w-[50%]">
        <h6 ref={fontRef} className="uppercase tracking-wider font-semibold text-[18px] lg:text-[20px]  text-white">about me</h6>
        <h2 ref={textRef} className="text-[34px] mb-[20px] lg:text-[60px]  text-white">
          Front-End React Developer based in Tamilnadu, India.
        </h2>
        <p ref={textRef1} className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]  text-white">
          Hii, My name is Tamizharasu, and Im a Frontend Developer. My passion
          is to create and develop a clean UI/UX.
        </p>
        <p ref={textRef2} className="text-[14px] leading-[23px] mb-[20px] lg:text-[18px] lg:mb-[40px] text-justify lg:leading-[30px]  text-white">
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
