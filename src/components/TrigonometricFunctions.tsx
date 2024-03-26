import { FunctionComponent } from "react";
import Philo from "./Philo";

const TrigonometricFunctions: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[97.09999999999992px] pr-[22px] pl-[18px] box-border max-w-full text-left text-16xl text-lawngreen font-barlow mq450:pb-[63px] mq450:box-border">
      <div className="flex-1 flex flex-row items-start justify-start gap-[60px] max-w-full mq750:gap-[60px_30px] mq1275:flex-wrap">
        <Philo
          prop="/moritzkindlerg66k-erzrhmunsplash-1@2x.png"
          notrePhilosophie="Notre Engagement"
          notrePhilosophieEstSimple="Nous nous engageons à fournir des solutions de qualité, personnalisées pour répondre aux défis uniques de votre entreprise. Notre processus transparent et notre communication ouverte assurent une collaboration fluide et des résultats exceptionnels. Chez VividMind, votre vision devient notre mission."
          propGap="52px"
          propWidth="100%"
          propRight="0px"
          propOverflow="hidden"
          propWidth1="362px"
          propHeight="100px"
          propMinWidth="86px"
        />
        <div className="flex-1 rounded-xl bg-gray flex flex-col items-start justify-start pt-4 px-[11px] pb-[58px] box-border relative gap-[5.5px] max-w-full">
          <div className="w-[670px] h-[340px] relative rounded-xl bg-gray hidden max-w-full z-[0]" />
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/nasa1lfi7wkgwz4unsplash-1@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-5 box-border max-w-full">
            <h2 className="m-0 h-[81px] flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[2] mq450:text-2xl mq750:text-9xl">
              Rejoignez-nous dans notre Voyage
            </h2>
          </div>
          <div className="self-stretch h-[124px] relative text-lg font-semibold text-white text-justify inline-block shrink-0 z-[2]">
            Nous invitons clients, collaborateurs et passionnés de technologie à
            nous rejoindre dans notre voyage passionnant. Ensemble, explorons
            les possibilités illimitées que la technologie peut offrir et créons
            un avenir numérique brillant.
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-2">
            <button className="cursor-pointer pt-3 pb-1 pr-[34px] pl-[35px] bg-[transparent] rounded-lg flex flex-row items-start justify-start z-[2] border-[4px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[4px] hover:border-solid hover:border-forestgreen-100">
              <div className="h-[50px] w-[149px] relative rounded-lg box-border hidden border-[4px] border-solid border-lightgreen" />
              <b className="h-[34px] relative text-xl inline-block font-barlow text-white text-left min-w-[80px] z-[1] mq450:text-base">
                Voir plus
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrigonometricFunctions;
