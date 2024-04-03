import { FunctionComponent } from "react";
import NetworkInterface from "../about";

const TeamPage: FunctionComponent = () => {
  return (
    <section className="mx-6 relative">
      <div className="items-center ">
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
          Notre <span className="text-lawngreen">Teams</span>
        </h1>
      </div>
      <div className="flex">
        <div className="w-1/2 px-12">
          <div className="">
            <h1 className="font-barlow font-bold text-[45px]">
              <span>{`Finacement `}</span>
              <span className="text-lawngreen">certain</span>
            </h1>
            <h1 className="font-barlow font-bold text-[35px]">
              “Let’s make !t happen”
            </h1>
          </div>
          <div className="text-justify ">
            Sécurisez votre investissement ! Notre équipe dédiée travaille à
            maximiser votre retour sur investissement grâce à une attention aux
            détails.
          </div>
          <div className="flex my-5">
            <img
              className="h-[25px] w-[25px] mr-3"
              alt=""
              src="/gmail-2@2x.png"
            />
            <div className="mr-3">
              <img
                className="w-[25px] h-[25px]"
                alt=""
                src="/whatsapp1-2@2x.png"
              />
            </div>
            <img className="h-[25px] w-[25px]" alt="" src="/pngegg4-1@2x.png" />
          </div>
          <div className="flex">
            <button className="mr-3 cursor-pointer rounded-lg  px-10 py-2.5 font-barlow font-bold text-xl text-white bg-lawngreen hover:bg-limegreen-300 ">
              En savoir plus
            </button>
            <button className="cursor-pointer px-10 py-2.5 font-barlow font-bold text-xl bg-[transparent] rounded-lg box-border  border-[2px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-forestgreen-100">
              À propos de nous
            </button>
          </div>
        </div>
        <div className="px-12">
          <div className="bg-[#EBF2F3] flex w-full my-3 rounded-xl">
            <div className="px-3 py-3 rou">
              <h4 className="font-barlow">
                RASOLONJATOVOARINORO Justinien Mariot
              </h4>
              <b className="font-barlow">Chief Executive officier</b>
              <p className="w-96 font-barlow text-[#5F6867]">
                Chez VividMind, nous ne nous contentons pas de suivre le futur ;
                nous le construisons ensemble.
              </p>
            </div>
            <div>
              <img
                className="h-[193px] w-[152px] "
                loading="lazy"
                alt=""
                src="/Mario.png"
              />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img className="h-20" loading="lazy" alt="" src="/bandy.png" />
            </div>
            <div>
              <h3 className="font-barlow">Marc Yowan Ratsimbazafy</h3>
              <b className="font-barlow font-medium text-[#6B767B]">
                Chief Technology Officer
              </b>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <img className="h-20" loading="lazy" alt="" src="/bandy.png" />
            </div>
            <div>
              <h3 className="font-barlow">Marc Yowan Ratsimbazafy</h3>
              <b className="font-barlow font-medium text-[#6B767B]">
                Chief Technology Officer
              </b>
            </div>
          </div>

          <div className="w-[564px] h-3 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-3 w-[132px] relative"
              alt=""
              src="/pointill.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
