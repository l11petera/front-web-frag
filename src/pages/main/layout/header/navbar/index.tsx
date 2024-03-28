import { FunctionComponent, useState } from "react";
import "./styles.scss";

const Navbar: FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Accueil");
  return (
    <header className="bg-white flex flex-row items-start justify-center px-9  box-border z-[99] sticky max-w-full text-left text-lg text-dimgray-400 font-barlow shadow-md">
      <div className="h-[89px] w-[1440px] relative bg-white hidden max-w-full" />
      <img
        className="h-[75px] w-[75.5px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/logo-v-sans-fond-1@2x.png"
      />
      <div className="vivid pt-[25px] text-4xl text-black">
        <b className="self-stretch relative whitespace-nowrap z-[1]">
          <span className="">Vivid</span>
          <span className="text-lawngreen">Mind</span>
        </b>
      </div>
      <div className="w-[100px] accueil flex flex-col items-start justify-start  box-border">
        <div className="py-7 font-semibold ">
          <a
            href=""
            className="no-underline accueil text-slate-700 font-barlow font-bold"
          >
            Accueil
          </a>
        </div>
      </div>
      <div className="w-[100px] propos flex flex-col items-start justify-start  box-border">
        <div className="py-7 font-semibold ">
          <a
            href=""
            className="no-underline propos text-slate-700 font-barlow font-bold"
          >
            À propos
          </a>
        </div>
      </div>
      <div className="w-[100px] projets flex flex-col items-start justify-start  box-border">
        <div className="py-7 font-semibold ">
          <a
            href=""
            className="no-underline projets text-slate-700 font-barlow font-bold"
          >
            Projects
          </a>
        </div>
      </div>
      <div className="w-[100px] teams flex flex-col items-start justify-start  box-border">
        <div className="py-7 font-semibold ">
          <a
            href=""
            className="no-underline projets text-slate-700 font-barlow font-bold"
          >
            Teams
          </a>
        </div>
      </div>
      <div className="w-[100px] contact flex flex-col items-start justify-start  box-border">
        <div className="py-7 font-semibold ">
          <a
            href=""
            className="no-underline projets text-slate-700 font-barlow font-bold"
          >
            contact
          </a>
        </div>
      </div>

      <div className="connecter self-stretch py-6 ">
        <button className="cursor-pointer font-barlow font-bold text-xl text-white py-2 w-40 bg-lawngreen rounded-lg hover:bg-limegreen-300">
          Connecter
        </button>
      </div>
    </header>
  );
};

export default Navbar;
