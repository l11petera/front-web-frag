import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-darkslateblue flex flex-row items-start justify-between pt-[52px] pb-2.5 pr-[79px] pl-[85px] box-border max-w-full gap-[20px] text-justify text-xl text-white font-montserrat mq450:pl-5 mq450:box-border mq750:pt-[34px] mq750:pb-5 mq750:pr-[39px] mq750:pl-[42px] mq750:box-border mq1275:flex-wrap">
      <div className="h-[486px] w-[1440px] relative bg-darkslateblue hidden max-w-full" />
      <div className="w-[263px] flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border gap-[27px]">
        <b className="w-[182px] h-[30px] relative text-5xl leading-[45px] inline-block font-barlow shrink-0 z-[1] mq450:text-lgi mq450:leading-[36px]">
          Contacter nous
        </b>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[174px] h-[34px] relative leading-[45px] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]">
            +261 34 96 995 11
          </div>
          <a
            className="self-stretch h-[34px] relative [text-decoration:underline] leading-[45px] text-[inherit] inline-block shrink-0 whitespace-nowrap z-[1] mq450:text-base mq450:leading-[36px]"
            href="mailto:contact@vividmind.mg"
            target="_blank"
          >
            contact@vividmind.mg
          </a>
        </div>
        <div className="w-[157px] relative leading-[45px] inline-block z-[1] mq450:text-base mq450:leading-[36px]">
          VividMind MG
        </div>
      </div>
      <div className="w-[564px] flex flex-col items-start justify-start gap-[25px] max-w-full text-5xl font-barlow">
        <div className="self-stretch flex flex-row items-start justify-start gap-[56px] mq750:flex-wrap mq750:gap-[56px_28px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[165px]">
            <b className="w-[182px] h-[30px] relative leading-[45px] inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[36px]">
              Lien du site
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl font-montserrat">
              <div className="w-[174px] h-[34px] relative leading-[45px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[36px]">
                Accueil
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                <div className="self-stretch h-[34px] relative leading-[45px] inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[36px]">
                  À propos
                </div>
                <div className="w-[157px] flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch relative leading-[45px] z-[1] mq450:text-base mq450:leading-[36px]">
                    Team
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                    <div className="self-stretch relative leading-[45px] z-[1] mq450:text-base mq450:leading-[36px]">
                      Services
                    </div>
                    <div className="self-stretch relative leading-[45px] z-[1] mq450:text-base mq450:leading-[36px]">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[27px] min-w-[165px]">
            <b className="w-[182px] h-[30px] relative leading-[45px] inline-block shrink-0 z-[1] mq450:text-lgi mq450:leading-[36px]">
              Nos services
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-xl">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
                <div className="flex-1 relative leading-[34px] z-[1] mq450:text-base mq450:leading-[36px]">
                  Développement d’appliation
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3.5">
                <div className="flex-1 relative leading-[34px] z-[1] mq450:text-base mq450:leading-[36px]">
                  Sécurité Informatique
                </div>
              </div>
              <div className="w-[220px] flex flex-col items-start justify-start gap-[6px]">
                <div className="self-stretch relative leading-[45px] z-[1] mq450:text-base mq450:leading-[36px]">
                  Intelligence Artificielle
                </div>
                <div className="w-[157px] relative leading-[45px] inline-block z-[1] mq450:text-base mq450:leading-[36px]">
                  Data science
                </div>
              </div>
              <div className="w-[127px] relative leading-[45px] inline-block z-[1] mq450:text-base mq450:leading-[36px]">{`Déploiement `}</div>
            </div>
          </div>
        </div>
        <div className="w-[530px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl">
          <div className="w-[362px] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch h-10 relative inline-block shrink-0 z-[1] mq450:text-base">
              <span>{`copyright @ 2024. Let’s make `}</span>
              <span className="text-lawngreen">{`!t `}</span>
              <span>happen</span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[51px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-10 flex-1 relative inline-block z-[2] mq450:text-base">
                Privacy Police Utm of Barlow
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[150px] w-[235px] flex flex-row items-end justify-start gap-[52px]">
        <img
          className="h-[30px] w-[30px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/email-2@2x.png"
        />
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[45px]">
          <img
            className="w-[73px] h-[75px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/logo-v-sans-fond-2@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6">
            <div className="h-[30px] flex-1 flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
                loading="lazy"
                alt=""
                src="/whatsapp-2@2x.png"
              />
              <img
                className="h-[30px] w-[30px] relative object-cover min-h-[30px] z-[1]"
                loading="lazy"
                alt=""
                src="/social-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
