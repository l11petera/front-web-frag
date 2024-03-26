import { FunctionComponent } from "react";
import Philo from "./Philo";

const ArrayTraversal: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[50px] pr-[22px] pl-[18px] box-border max-w-full text-center text-16xl text-lawngreen font-barlow mq450:pb-8 mq450:box-border">
      <div className="flex-1 flex flex-row items-start justify-center gap-[60px] max-w-full mq750:gap-[60px_30px] mq1275:flex-wrap">
        <div className="flex-1 rounded-xl bg-gray flex flex-col items-start justify-start pt-4 pb-[58px] pr-[21px] pl-0 box-border relative gap-[64px] max-w-full mq450:gap-[16px_64px] mq750:gap-[32px_64px]">
          <div className="w-[670px] h-[340px] relative rounded-xl bg-gray hidden max-w-full z-[0]" />
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/aitechnologymicrochipbackgrounddigitaltransformationconcept-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
            <h2 className="m-0 w-64 h-[51px] relative text-inherit font-bold font-inherit inline-block shrink-0 z-[2] mq450:text-2xl mq750:text-9xl">
              Notre équipe
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full text-justify text-lg text-white">
              <div className="flex-1 relative font-semibold whitespace-pre-wrap inline-block max-w-full z-[2]">{`Chez VividMind, nous croyons que notre force réside dans notre équipe.  Composée de penseurs créatifs, de développeurs talentueux, de designers  ingénieux et de stratèges avisés, notre équipe travaille en harmonie  pour livrer des solutions qui dépassent les attentes. `}</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[19px]">
            <button className="cursor-pointer pt-3 px-[34px] pb-1 bg-[transparent] rounded-lg flex flex-row items-start justify-start z-[2] border-[4px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[4px] hover:border-solid hover:border-forestgreen-100">
              <div className="h-[50px] w-[149px] relative rounded-lg box-border hidden border-[4px] border-solid border-lightgreen" />
              <b className="h-[34px] relative text-xl inline-block font-barlow text-white text-left min-w-[80px] z-[1] mq450:text-base">
                Voir plus
              </b>
            </button>
          </div>
          <img
            className="w-[189px] h-[189px] absolute !m-[0] right-[-122px] bottom-[-117px] z-[3]"
            alt=""
            src="/cercle.svg"
          />
        </div>
        <Philo
          prop="/5055401-1@2x.png"
          notrePhilosophie="Notre Philosophie"
          notrePhilosophieEstSimple="Notre philosophie est simple : mettre l'innovation au service de nos  clients. Nous nous engageons à rester à la pointe de la technologie, en  explorant de nouvelles avenues et en adoptant les dernières tendances  pour fournir des solutions avant-gardistes."
        />
      </div>
    </section>
  );
};

export default ArrayTraversal;
