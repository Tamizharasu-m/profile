
import ProfileIntro from "./component/ProfileIntro/ProfileIntro";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Contact from "./component/Contact/Contact";
import IntroVideo from "@/IntroVideo/IntroVideo";

export default function Home() {
  return (
    <div className="">
      <div className="fixed z-[-999] h-screen w-full object-cover">
        <IntroVideo/>
      </div>
      <ProfileIntro/>
      <About/>
      <Skill/>
      <Contact/>
      
    </div>
  );
}
