import Image from "next/image";
import Header from "./Header/Header";
import ProfileIntro from "./component/ProfileIntro/ProfileIntro";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Contact from "./component/Contact/Contact";

export default function Home() {
  return (
    <div>
      <ProfileIntro/>
      <About/>
      <Skill/>
      <Contact/>
    </div>
  );
}
