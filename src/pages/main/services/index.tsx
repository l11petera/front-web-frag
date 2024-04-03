import React from "react";
import "./styles.scss";
import FrameComponent3 from "../../../components/FrameComponent3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TECarousel, TECarouselItem } from "tw-elements-react";

function ServicesPages() {
  return (
    <section className="">
      <div className="items-center relative">
        <div>
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-2 left-96"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-8 left-80"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-2 right-96"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-8 right-80"
          />
        </div>
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
      <div className="relative h-[525px] w-full ">
        <div className="mt-10">
          <img
            className="h-[524px] w-[550px]   rounded-tr-2xl rounded-br-2xl "
            alt=""
            src="/damirkopezhanovluseu9gtyzmunsplash-1@2x.png"
          />
        </div>
        <div className="absolute top-[1.7rem] left-[404px] flex ">
          <div className="w-[380px] h-[450px] m-3 bg-white rounded-lg ">
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
              <h1>Développement Web</h1>
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
                    <span>Développement de solution</span>
                  </div>
                </div>
                <div className="pl-3 py-2 flex">
                  <div>
                    <img className="w-4 mr-2" src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <span>Développement front-end</span>
                  </div>
                </div>
                <div className="pl-3 py-2 flex">
                  <div>
                    <img className="w-4 mr-2" src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <span>Développement back-end</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 ml-8 flex">
                <div>
                  <div className="tooltip">
                    <img className="w-8 " src="/angular.png" alt="" />
                    <span className="tooltiptext">Angular</span>
                  </div>
                  <br />
                  <div className="tooltip">
                    <img className="w-8 " src="/react.png" alt="" />
                    <span className="tooltiptext">React</span>
                  </div>
                  <div className="tooltip">
                    <img className="w-8 " src="/vue.png" alt="" />
                    <span className="tooltiptext">Vue js</span>
                  </div>
                </div>
                <div className="ml-5">
                  <div className="tooltip">
                    <img className="w-8 " src="/laravel.png" alt="" />
                    <span className="tooltiptext">Laravel</span>
                  </div>
                  <br />
                  <div className="tooltip">
                    <img className="w-8 " src="/node.png" alt="" />
                    <span className="tooltiptext">Node js</span>
                  </div>
                  <div className="tooltip">
                    <img className="w-8 " src="/spring-boot.png" alt="" />
                    <span className="tooltiptext">Spring boot</span>
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
        <div className="absolute top-[1.7rem] left-[854px] flex ">
          <div className="w-[380px] h-[450px] m-3 bg-white rounded-lg ">
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
              <h1>Développement Web</h1>
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
                    <span>Développement de solution</span>
                  </div>
                </div>
                <div className="pl-3 py-2 flex">
                  <div>
                    <img className="w-4 mr-2" src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <span>Développement front-end</span>
                  </div>
                </div>
                <div className="pl-3 py-2 flex">
                  <div>
                    <img className="w-4 mr-2" src="/checked-1@2x.png" alt="" />
                  </div>
                  <div>
                    <span>Développement back-end</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 ml-8 flex">
                <div>
                  <div className="tooltip">
                    <img className="w-8 " src="/angular.png" alt="" />
                    <span className="tooltiptext">Angular</span>
                  </div>
                  <br />
                  <div className="tooltip">
                    <img className="w-8 " src="/react.png" alt="" />
                    <span className="tooltiptext">React</span>
                  </div>
                  <div className="tooltip">
                    <img className="w-8 " src="/vue.png" alt="" />
                    <span className="tooltiptext">Vue js</span>
                  </div>
                </div>
                <div className="ml-5">
                  <div className="tooltip">
                    <img className="w-8 " src="/laravel.png" alt="" />
                    <span className="tooltiptext">Laravel</span>
                  </div>
                  <br />
                  <div className="tooltip">
                    <img className="w-8 " src="/node.png" alt="" />
                    <span className="tooltiptext">Node js</span>
                  </div>
                  <div className="tooltip">
                    <img className="w-8 " src="/spring-boot.png" alt="" />
                    <span className="tooltiptext">Spring boot</span>
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
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/moritz.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="nasa.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="neurone.png" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div> */}

      {/* <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-100 p-6">
                <span className="self-center text-4xl transition duration-700">
                  First slide
                </span>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-200 p-6">
                <span className="self-center text-4xl transition duration-700">
                  Second slide
                </span>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-300 p-6">
                <span className="self-center text-4xl transition duration-700">
                  Third slide
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div> */}

      {/* <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/moritz.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/neurone.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/moritz.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/neurone.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/nasa.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>

            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}

      {/* <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%]  w-1/2 !transform-none transition-opacity duration-[100ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="/moritz.png" className="block w-full" alt="..." />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%]  w-1/2 !transform-none transition-opacity duration-[100ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="/nasa.png" className="block w-full" alt="..." />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%]  w-1/2 !transform-none transition-opacity duration-[100ms] ease-in-out motion-reduce:transition-none"
          >
            <img src="neurone.png" className="block w-full" alt="..." />
          </TECarouselItem>
        </div>
      </TECarousel> */}

      {/* 

      <b className="w-[422px] relative inline-block z-[1] mq450:text-2xl">
        Développement web et mobile
      </b>
      <div className="self-stretch h-[95px] relative font-medium inline-block shrink-0 z-[1]">
        Conception sur mésure de sites wet d’applications mobiles , avec
        expertise en déploiement et experience utilisateur fluide
      </div> */}

      {/* <div className="flex-1 rounded-mini bg-white flex flex-col items-end justify-start pt-0 px-0 pb-3 box-border gap-[75px] min-w-[311px] max-w-full mq750:gap-[37px_75px]">
    <div className="self-stretch h-[651px] relative rounded-mini bg-white " />
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
