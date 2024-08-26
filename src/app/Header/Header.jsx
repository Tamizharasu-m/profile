import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="px-[15px] lg:px-[100px]">
      <div className="flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-[10px] py-[6px] md:px-[20px] md:py-[0px] rounded-[15px] w-[100%] mt-[15px] md:mt-[20px]">
        <div>
          <h2 className="text-[26px] font-bold md:text-[38px]  tracking-wide text-white">
            Developer
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            <li>
              <a
                className="px-[20px] text-[16px] font-semibold  uppercase tracking-[1px] text-white"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="px-[20px] text-[16px] font-semibold  uppercase tracking-[1px] text-white"
                href="#"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                className="px-[20px] text-[16px] font-semibold  uppercase tracking-[1px] text-white"
                href="#"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="px-[20px] text-[16px] font-semibold  uppercase tracking-[1px] text-white"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <Image
            src={"/Image/menu.svg"}
            width={500}
            height={500}
            className="w-[30px] h-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
