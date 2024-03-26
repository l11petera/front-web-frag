import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import ArrayTraversal from "../components/ArrayTraversal";
import TrigonometricFunctions from "../components/TrigonometricFunctions";
import BloomFilter from "../components/BloomFilter";
import FrameComponent3 from "../components/FrameComponent3";
import ShapeClusterer from "../components/ShapeClusterer";
import DataProcessor from "../components/DataProcessor";
import FrameComponent1 from "../components/FrameComponent1";
import ColorPicker from "../components/ColorPicker";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const Vividmind: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-aliceblue overflow-hidden flex flex-col items-end justify-start gap-[10px] tracking-[normal] text-center text-31xl text-black font-montserrat">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[94px] box-border max-w-full mq450:pb-10 mq450:box-border mq750:pb-[61px] mq750:box-border">
        <Navbar />
        <FrameComponent5 />
      </section>
      <div className="w-[1020px] h-[86px] relative hidden max-w-full">
        <b className="absolute h-full top-[0px] left-[calc(50%_-_343px)] inline-block w-[686px] mq450:text-11xl mq750:text-21xl">
          <span className="whitespace-pre-wrap">{`Interactions  `}</span>
          <span className="text-lightgreen">des visiteurs</span>
        </b>
        <img
          className="absolute top-[26px] left-[49px] w-[100px] h-[0.6px] object-contain"
          alt=""
        />
        <img
          className="absolute top-[46px] left-[0px] w-[150px] h-[0.9px] object-contain"
          alt=""
        />
        <img
          className="absolute top-[26px] left-[971px] w-[100px] h-[0.6px] object-contain"
          alt=""
        />
        <img
          className="absolute top-[46px] left-[1020px] w-[150px] h-[0.9px] object-contain"
          alt=""
        />
      </div>
      <div className="w-[571px] h-[297px] relative box-border hidden max-w-full border-[2px] border-solid border-darkslateblue" />
      <div className="w-[571px] h-[297px] relative box-border hidden max-w-full border-[2px] border-solid border-darkslateblue" />
      <FrameComponent4 />
      <ArrayTraversal />
      <TrigonometricFunctions />
      <BloomFilter />
      <section className="w-[1013px] flex flex-row items-start justify-end pt-0 px-[7px] pb-[243px] box-border max-w-full text-justify text-lg text-black font-montserrat mq750:pb-[103px] mq750:box-border mq1100:pb-[158px] mq1100:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[43px] max-w-full mq750:gap-[21px_43px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[41px] max-w-full mq750:gap-[20px]">
            <div className="flex-1 flex flex-row items-start justify-start relative min-w-[311px] max-w-full">
              <img
                className="h-[1024px] w-[660px] absolute !m-[0] bottom-[-187px] left-[-434px] rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none object-cover"
                alt=""
                src="/damirkopezhanovluseu9gtyzmunsplash-1@2x.png"
              />
              <div className="flex-1 rounded-mini bg-white flex flex-col items-end justify-start pt-0 px-0 pb-3 box-border gap-[75px] max-w-full z-[1] mq750:gap-[37px_75px]">
                <div className="self-stretch h-[651px] relative rounded-mini bg-white hidden" />
                <div className="w-[313px] h-[237px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[43px] mq450:gap-[21px_43px]">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-end">
                    <img
                      className="h-[93px] w-44 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-36.svg"
                    />
                  </div>
                  <img
                    className="w-[101px] h-[101px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/basketball-1@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[13px] pl-[17px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px_32px]">
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3.5 pr-3.5 pl-[13px] text-center text-7xl">
                      <b className="w-[422px] relative inline-block z-[1] mq450:text-2xl">
                        Développement web et mobile
                      </b>
                    </div>
                    <div className="self-stretch h-[95px] relative font-medium inline-block shrink-0 z-[1]">
                      Conception sur mésure de sites wet d’applications mobiles
                      , avec expertise en déploiement et experience utilisateur
                      fluide
                    </div>
                    <div className="w-[337px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <FrameComponent3
                          dploiementDeSolution="Déploiement de solution"
                          dveloppementFrontEnd="Développement front end"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mt-[-2px] mq450:flex-wrap">
                          <img
                            className="h-[27px] w-[27px] relative object-cover z-[1]"
                            alt=""
                            src="/checked-1@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[162px]">
                            <div className="self-stretch h-[39px] relative font-medium inline-block shrink-0 z-[1]">
                              Développement back end
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-mini bg-white flex flex-col items-end justify-start pt-0 px-0 pb-3 box-border gap-[75px] min-w-[311px] max-w-full mq750:gap-[37px_75px]">
              <div className="self-stretch h-[651px] relative rounded-mini bg-white hidden" />
              <div className="w-[313px] h-[237px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[43px] mq450:gap-[21px_43px]">
                <div className="self-stretch flex-1 flex flex-row items-start justify-end">
                  <img
                    className="h-[93px] w-44 relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-36-1.svg"
                  />
                </div>
                <img
                  className="w-[101px] h-[101px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/artificialintelligence-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[13px] pl-[17px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px_32px]">
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3.5 pr-[70px] pl-[69px] text-center text-7xl mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <b className="w-[310px] relative inline-block z-[1] mq450:text-2xl">
                      Intelligence Artificielle
                    </b>
                  </div>
                  <div className="self-stretch h-[95px] relative font-medium inline-block shrink-0 z-[1]">
                    Conception sur mésure de sites wet d’applications mobiles ,
                    avec expertise en déploiement et experience utilisateur
                    fluide
                  </div>
                  <div className="w-[337px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[25px] mq450:flex-wrap">
                        <img
                          className="h-[27px] w-[27px] relative object-cover z-[1]"
                          alt=""
                          src="/checked-1@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[162px]">
                          <div className="self-stretch relative font-medium z-[1]">
                            Déploiement de solution
                          </div>
                        </div>
                      </div>
                      <FrameComponent3
                        dploiementDeSolution="Développement front end"
                        dveloppementFrontEnd="Développement back end"
                        propGap="unset"
                        propPadding="3px 0px 0px"
                        propHeight="39px"
                        propMarginTop="-2px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[756px] h-3 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-3 w-[132px] relative"
              loading="lazy"
              alt=""
              src="/pointill.svg"
            />
          </div>
        </div>
      </section>
      <div className="w-[267px] h-[205px] relative hidden">
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
      <Footer />
    </div>
  );
};

export default Vividmind;
