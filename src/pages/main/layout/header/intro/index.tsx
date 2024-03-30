import { FunctionComponent } from "react";
import "./styles.scss";

const IntroPage: FunctionComponent = () => {
  return (
    <section className="intro self-stretch bg-lightgray text-left text-29xl text-black font-barlow mb-5">
      <div className="intro1 w-full h-[540px]  max-w-full ">
        <div>
          <img
            className="w-[64.7px] h-[86px] z-[3]"
            loading="lazy"
            alt=""
            src="/pt-boules.svg"
          />
        </div>
        <div className="h-24 flex flex-col items-start justify-start pt-5 sm:pt-5 pl-3">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <a href="">
              <img
                className="w-[24.5px] h-[25px] relative object-cover z-[3]"
                alt=""
                src="/gmail-1@2x.png"
              />
            </a>
            <a href="https://www.webwhatsapp.com">
              <img
                className="w-[24.5px] h-[25px] relative object-cover z-[3]"
                alt=""
                src="/whatsapp1-1@2x.png"
              />
            </a>
            <a href="https://www.linkedin.com/company/vividmind-mg/">
              <img
                className="w-[24.5px] h-[25px] relative object-cover z-[3]"
                alt=""
                src="/pngegg4@2x.png"
              />
            </a>
          </div>
        </div>
        <div className="title">
          <h1 className="">
            <span className="">Bienvenue chez Vivid</span>
            <span className="text-lawngreen">Mind</span>
          </h1>
          <h2 className="">
            <span>{`“Let’s make `}</span>
            <span className="text-lawngreen">!T</span>
            <span> happen”</span>
          </h2>

          <p>
            Votre partenaire de confiance dans le monde numérique en constante
            évolution.
          </p>

          <button className="cursor-pointer rounded-lg  px-10 py-2.5 font-barlow font-bold text-xl text-white bg-lawngreen  hover:bg-limegreen-300">
            En savoir plus
          </button>
        </div>
      </div>

      <div className="intro2 w-full flex justify-center">
        {/* <img className="w-[143px] h-[66px]" alt="" src="/pt-boules-1@2x.png" /> */}
        <img
          className="w-full  max-w-full h-auto sm:w-auto sm:max-w-auto sm:h-full md:w-[100%] md:max-w-[640px] md:h-[540px]"
          loading="lazy"
          alt=""
          src="/online-worldamico-1.svg"
        />
      </div>
    </section>
  );
};

export default IntroPage;
