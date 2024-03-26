import { FunctionComponent, useState } from "react";

const Navbar: FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Accueil");
  return (
    <header className="self-stretch h-[89px] bg-white flex flex-row items-start justify-center pt-[3px] pb-[5px] pr-5 pl-[21px] box-border top-[0] z-[99] sticky max-w-full text-left text-lg text-dimgray-400 font-barlow">
      <div className="h-[89px] w-[1440px] relative bg-white hidden max-w-full" />
      <img
        className="h-[75px] w-[75.5px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/logo-v-sans-fond-1@2x.png"
      />
      <div className="w-[247.3px] flex flex-col items-start justify-start pt-[25px] pb-0 pr-[18.699999999999932px] pl-0 box-border text-4xl text-black">
        <b className="self-stretch relative whitespace-nowrap z-[1]">
          <span>Vivid</span>
          <span className="text-lawngreen">Mind</span>
        </b>
      </div>
      <div className="w-[159.7px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
        <div className="w-[109.7px] flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9.700000000000044px]">
            <div className="flex-1 relative leading-[17px] font-semibold z-[1]">
              <a
                href=""
                className="no-underline text-slate-700 font-barlow font-bold"
              >
                Accueil
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[310px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border mq1275:w-[50px]">
        <div className="w-[260px] flex flex-row items-start justify-between gap-[20px] mq1275:hidden">
          <div className="w-[100px] relative leading-[17px] font-semibold inline-block shrink-0 whitespace-nowrap z-[1]">
            <a
              href=""
              className="no-underline text-slate-700 font-barlow font-bold"
            >
              À propos
            </a>
          </div>
          <div className="w-[100px] relative leading-[17px] font-semibold inline-block shrink-0 z-[1]">
            <a
              href=""
              className="no-underline  text-slate-700 font-barlow font-bold"
            >
              Projets
            </a>
          </div>
        </div>
      </div>
      <div className="w-[149px] flex flex-col text- items-start justify-start pt-[30px] px-0 pb-0 box-border">
        <div className="w-[100px] h-[17px] relative leading-[22px] font-semibold inline-block shrink-0 z-[1]">
          <a
            href=""
            className="no-underline  text-slate-700 font-barlow font-bold"
          >
            Teams
          </a>
        </div>
      </div>
      <div className="w-[134.4px] flex flex-col items-start justify-start pt-[30px] pb-0 pr-[34.40000000000009px] pl-0 box-border">
        <div className="self-stretch h-[17px] relative leading-[22px] font-semibold inline-block shrink-0 z-[1]">
          <a
            href=""
            className="no-underline  text-slate-700 font-barlow font-bold"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="w-[154.1px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
        <button className="cursor-pointer [border:none] pt-3 px-[24.799999999999955px] pb-1 bg-lawngreen self-stretch rounded-lg flex flex-row items-start justify-start z-[1] hover:bg-limegreen-300">
          <div className="h-[50px] w-[154.1px] relative rounded-lg bg-lawngreen hidden" />
          <b className="h-[34px] flex-1 relative text-xl inline-block font-barlow text-white text-left whitespace-nowrap z-[1]">
            Connecter
          </b>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
