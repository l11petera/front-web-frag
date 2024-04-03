import { FunctionComponent } from "react";
import ArrayTraversal from "../../../components/ArrayTraversal";
import TrigonometricFunctions from "../../../components/TrigonometricFunctions";
import BloomFilter from "../../../components/BloomFilter";
import FrameComponent3 from "../../../components/FrameComponent3";
import ColorPicker from "../../../components/ColorPicker";
import FrameComponent from "../../../components/FrameComponent";
import Footer from "../../../components/Footer";
import NavbarPage from "../layout/header/navbar";
import IntroPage from "../layout/header/intro";
import InteractionPage from "../interaction";
import ServicesPages from "../services";
import AboutPage from "../about";
import TeamPage from "../team";
import QuestionPage from "../questions";
import BlogPage from "../blog";

const Vividmind: FunctionComponent = () => {
  return (
    <div className="bg-[#DDE9EF]">
      <section className="">
        <NavbarPage />
        <IntroPage />
      </section>
      <InteractionPage />
      <AboutPage />
      <ServicesPages />
      <div className="w-[267px] h-[205px] relative hidden">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[237px]"
          alt=""
          src="/rectangle-44.svg"
        />
        <div className="absolute top-[127px] left-[182px] rounded-[10px] bg-yellowgreen w-[85px] h-[78px]" />
        <div className="absolute top-[57px] left-[209px] rounded-[5px] bg-greenyellow w-8 h-8" />
      </div>

      <TeamPage />
      <QuestionPage />

      <BlogPage />

      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Vividmind;
