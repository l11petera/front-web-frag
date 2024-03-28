import { FunctionComponent } from "react";

const IntroPage: FunctionComponent = () => {
  return (
    <section className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 self-stretch bg-lightgray text-left text-29xl text-black font-barlow ">
      <div className="w-full h-[540px]  max-w-full ">
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
        <div className="pl-20 text-inherit text-left -mt-40">
          <h1 className=" py-3 sm:py-0 text-inherit font-bold font-inherit w-full sm:w-full">
            <span className="whitespace-pre-wrap">Bienvenue chez Vivid</span>
            <span className="text-lawngreen">Mind</span>
          </h1>
          <h2 className="m-0 py-0 flex-1  text-17xl font-bold font-inherit inline-block max-w-full z-[4] ">
            <span>{`“Let’s make `}</span>
            <span className="text-lawngreen">!T</span>
            <span> happen”</span>
          </h2>
          <div className="w-[546.5px] flex flex-row items-start justify-start py-0 pr-0.5 pl-[1.900000000000034px] box-border max-w-full mt-[-14px] text-justify text-lg">
            <div className="py-8 flex-1 relative font-medium whitespace-pre-wrap inline-block max-w-full z-[3]">{`Votre  partenaire de confiance dans le monde numérique en constante évolution. `}</div>
          </div>
          <div className="max-w-full">
            <button className="cursor-pointer [border:none]  px-[66px] py-3 font-barlow font-bold text-xl text-white bg-lawngreen w-[254.5px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap z-[3] hover:bg-limegreen-300 mq450:pl-5 mq450:pr-5 mq450:box-border">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
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
