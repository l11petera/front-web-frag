import { FunctionComponent } from "react";
import NetworkInterface from "./NetworkInterface";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className="w-[1362px] flex flex-row items-start justify-center pt-0 px-5 pb-[113px] box-border relative max-w-full text-center text-51xl text-black font-montserrat mq750:pb-[73px] mq750:box-border">
      <div className="w-[1200px] flex flex-col items-start justify-start gap-[28px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[56px] max-w-full mq750:gap-[28px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[372px] max-w-full mq450:min-w-full mq750:gap-[23px_46px]">
            <div className="flex flex-row items-start justify-start py-0 px-[29px]">
              <img
                className="h-[150px] w-[150px] relative object-cover"
                loading="lazy"
                alt=""
                src="/numberblocks-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <b className="h-[172px] w-[373px] absolute !m-[0] top-[-129px] right-[-16px] leading-[28px] inline-block mq450:text-23xl mq450:leading-[17px] mq750:text-37xl mq750:leading-[22px]">{`{100 000}`}</b>
              <div className="h-[121px] flex-1 relative text-xl font-medium font-barlow whitespace-pre-wrap inline-block max-w-full z-[1] mq450:text-base">{`Merci à nos {100 000} visiteurs ! Votre engagement envers VividMind nous pousse à innover.  Restez connectés pour plus de nouveautés !`}</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border min-w-[371px] max-w-full text-xl font-barlow mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq450:gap-[18px_72px] mq750:gap-[36px_72px]">
              <div className="w-[518px] flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
                <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full mq450:flex-wrap">
                  <div className="flex-1 flex flex-row items-start justify-center gap-[12.333333333333334px] min-w-[190px] mq450:flex-wrap">
                    <img
                      className="self-stretch flex-1 relative max-w-[64px] overflow-hidden max-h-full object-cover min-w-[59px] min-h-[80px]"
                      loading="lazy"
                      alt=""
                      src="/star-1@2x.png"
                    />
                    <img
                      className="self-stretch flex-1 relative max-w-[64px] overflow-hidden max-h-full object-cover min-w-[59px] min-h-[80px]"
                      loading="lazy"
                      alt=""
                      src="/star-1@2x.png"
                    />
                    <img
                      className="self-stretch flex-1 relative max-w-[64px] overflow-hidden max-h-full object-cover min-w-[59px] min-h-[80px]"
                      loading="lazy"
                      alt=""
                      src="/star-1@2x.png"
                    />
                    <img
                      className="self-stretch flex-1 relative max-w-[64px] overflow-hidden max-h-full object-cover min-w-[59px] min-h-[80px]"
                      alt=""
                      src="/star-1@2x.png"
                    />
                  </div>
                  <img
                    className="h-20 w-20 relative object-cover min-h-[80px]"
                    loading="lazy"
                    alt=""
                    src="/star5@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch h-[66px] relative font-medium inline-block shrink-0 mq450:text-base">
                Votre avis compte pour nous ! Prenez un moment pour noter votre
                expérience sur VividMind. Chaque étoile nous aide à mieux vous
                servir. Merci !
              </div>
            </div>
          </div>
        </div>
        <NetworkInterface
          hTTPClient="pending_53:398"
          tCPServer="pending_53:399"
          propos="À propos "
          deNous="de nous"
          line3="pending_53:400"
          line4="pending_53:401"
        />
      </div>
      <div className="h-[58px] w-[1345px] absolute !m-[0] bottom-[55px] left-[-17px] text-lg leading-[27px] font-medium font-barlow inline-block z-[1]">
        <p className="m-0">
          Bienvenue chez VividMind, votre partenaire innovant en solutions
          technologiques. Née de la passion pour la technologie et l'innovation,
          VividMind s'est donnée pour mission de concrétiser les idées
          innovantes en réalités tangibles à travers des solutions
          technologiques sur mesure. Nous nous spécialisons dans le
          développement de solutions web et mobile de pointe, le déploiement de
          solutions personnalisées, et bien plus, pour répondre aux besoins
          évolutifs de nos clients.
        </p>
      </div>
    </section>
  );
};

export default FrameComponent4;
