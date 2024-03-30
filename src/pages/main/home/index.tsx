import { FunctionComponent } from "react";
import ArrayTraversal from "../../../components/ArrayTraversal";
import TrigonometricFunctions from "../../../components/TrigonometricFunctions";
import BloomFilter from "../../../components/BloomFilter";
import FrameComponent3 from "../../../components/FrameComponent3";
import ShapeClusterer from "../../../components/ShapeClusterer";
import DataProcessor from "../../../components/DataProcessor";
import FrameComponent1 from "../../../components/FrameComponent1";
import ColorPicker from "../../../components/ColorPicker";
import FrameComponent from "../../../components/FrameComponent";
import Footer from "../../../components/Footer";
import NavbarPage from "../layout/header/navbar";
import IntroPage from "../layout/header/intro";
import InteractionPage from "../interaction";
import ServicesPages from "../services";
import AboutPage from "../about";

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
      {/* <div className="w-[267px] h-[205px] relative hidden">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[237px]"
          alt=""
          src="/rectangle-44.svg"
        />
        <div className="absolute top-[127px] left-[182px] rounded-[10px] bg-yellowgreen w-[85px] h-[78px]" />
        <div className="absolute top-[57px] left-[209px] rounded-[5px] bg-greenyellow w-8 h-8" />
      </div>
      <section className="w-[1418px] flex flex-row items-start justify-end pt-0 px-2 pb-[501.3999999999997px] box-border max-w-full mq750:pb-[138px] mq750:box-border mq1275:pb-[212px] mq1275:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[69px] max-w-full mq450:gap-[17px_69px] mq750:gap-[34px_69px]">
          <ShapeClusterer />
          <DataProcessor />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[59px] pl-[65px] box-border max-w-full mq750:pl-8 mq750:pr-[29px] mq750:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[87px] max-w-full mq450:gap-[22px_87px] mq750:gap-[43px_87px]">
          <FrameComponent1 />
          <ColorPicker />
        </div>
      </section>
      <FrameComponent />
      <Footer /> */}
    </div>
  );
};

export default Vividmind;
