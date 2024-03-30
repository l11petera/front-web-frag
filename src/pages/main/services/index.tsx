import React from "react";
import "./styles.scss";
import FrameComponent3 from "../../../components/FrameComponent3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServicesPages() {
  return (
    <section className="">
      <div className="items-center ">
        <img src="../../../assets/images/Line 1.png" alt="" className="w-96" />
        <h1 className="text-[40px] text-center">
          Nos <span className="text-lawngreen">services</span>
        </h1>
      </div>
      <div className=" text-lg  font-light font-barlow px-5 items-center">
        <p className="text-center">
          Optez pour l'excellence technologique avec notre gamme complète de
          services informatiques sur mesure.
        </p>
      </div>
      <div className="relative">
        <div className="mt-10">
          <img
            className="h-[524px] w-[550px]   rounded-tr-2xl rounded-br-2xl "
            alt=""
            src="/damirkopezhanovluseu9gtyzmunsplash-1@2x.png"
          />
        </div>
        <div className="absolute top-[2.6rem] left-[404px] flex ">
          <div className="w-[380px] h-[420px] m-3 bg-white rounded-xl ">
            <div className="flex-1 flex flex-row  justify-end">
              <img
                className="w-24 relative justify-end z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-36.svg"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-[101px] h-[101px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/basketball-1@2x.png"
              />
            </div>
            <div className="text-center">
              <h1>Développeent Web</h1>
            </div>
            <div className="text-justify px-3">
              Conception sur mésure de sites wet d’applications mobiles , avec
              expertise en déploiement et experience utilisateur fluide
            </div>
            <div className="flex">
              <div>
                <div className="pl-3 mt-4 py-2 flex">
                  <div>
                    <img className="w-4 mr-2" src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <span>Développeent de solution</span>
                  </div>
                </div>
                <div className="pl-3 py-2 flex">
                  <div>
                    <img className="w-4 mr-2" src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <span>Développeent front-end</span>
                  </div>
                </div>
                <div className="pl-3 py-2 flex">
                  <div>
                    <img className="w-4 mr-2" src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <span>Développeent back-end</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 ml-8 flex">
                <div>
                  <div>
                    <img className="w-8 " src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <img className="w-8 " src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <img className="w-8 " src="/checked-1@2x.png" alt="" />
                  </div>
                </div>
                <div className="ml-5">
                  <div>
                    <img className="w-8 " src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <img className="w-8 " src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <img className="w-8 " src="/checked-1@2x.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-72 h-[350px] m-3 bg-white rounded-md ">
            <h1>2</h1>
          </div>
          <div className="w-72 h-[350px] m-3 bg-white rounded-md ">
            <h1>2</h1>
          </div> */}
        </div>
      </div>

      {/* 

      <b className="w-[422px] relative inline-block z-[1] mq450:text-2xl">
        Développement web et mobile
      </b>
      <div className="self-stretch h-[95px] relative font-medium inline-block shrink-0 z-[1]">
        Conception sur mésure de sites wet d’applications mobiles , avec
        expertise en déploiement et experience utilisateur fluide
      </div> */}

      {/* <div className="flex-1 rounded-mini bg-white flex flex-col items-end justify-start pt-0 px-0 pb-3 box-border gap-[75px] min-w-[311px] max-w-full mq750:gap-[37px_75px]">
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
          Conception sur mésure de sites wet d’applications mobiles , avec
          expertise en déploiement et experience utilisateur fluide
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
  </div> */}
      {/* <div className="w-[756px] h-3 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
    <img
      className="h-3 w-[132px] relative"
      loading="lazy"
      alt=""
      src="/pointill.svg"
    />
  </div> */}
    </section>
  );
}

export default ServicesPages;
