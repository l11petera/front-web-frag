import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="self-stretch h-[1095px] relative max-w-full text-justify text-xl text-black font-montserrat mq750:h-auto mq750:min-h-[1095]">
      <div className="absolute top-[0px] left-[0px] bg-olivedrab w-full flex flex-col items-start justify-start pt-[103px] px-[23px] pb-[129px] box-border max-w-full">
        <div className="w-[1440px] h-[362px] relative bg-olivedrab hidden max-w-full z-[1]" />
        <h1 className="m-0 w-[333px] h-[60px] relative text-21xl leading-[45px] font-semibold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-5xl mq450:leading-[27px] mq750:text-13xl mq750:leading-[36px]">{`Contacter nous `}</h1>
        <div className="w-[512px] flex flex-row items-start justify-start pt-0 px-2.5 pb-2.5 box-border max-w-full mt-[-6px]">
          <div className="flex-1 relative leading-[36px] font-medium inline-block max-w-full z-[1] mq450:text-base mq450:leading-[36px]">
            À la recherche d'un partenaire numérique ?
          </div>
        </div>
        <div className="w-[244px] flex flex-row items-start justify-start py-0 px-2.5 box-border mt-[-6px]">
          <div className="flex-1 relative leading-[36px] font-medium z-[1] mq450:text-base mq450:leading-[36px]">
            Vous avez trouvé un
          </div>
        </div>
      </div>
      <h1 className="m-0 absolute top-[425px] left-[52px] text-21xl leading-[45px] font-semibold font-inherit inline-block w-[422px] h-[63px] mq450:text-5xl mq450:leading-[27px] mq750:text-13xl mq750:leading-[36px]">
        Autres moyens pour nous contacter
      </h1>
      <img
        className="absolute top-[549px] left-[40px] w-[70px] h-[70px] object-cover"
        loading="lazy"
        alt=""
        src="/gps-1@2x.png"
      />
      <div className="absolute top-[541px] left-[144px] leading-[45px] inline-block w-[202px] h-[66px] mq450:text-base mq450:leading-[36px]">
        <p className="m-0">Madagascar</p>
        <p className="m-0">101 - Antananarivo</p>
      </div>
      <img
        className="absolute top-[644px] left-[40px] w-[70px] h-[70px] object-cover"
        loading="lazy"
        alt=""
        src="/email-1@2x.png"
      />
      <div className="absolute top-[658px] left-[144px] leading-[45px] inline-block w-[254px] h-11 whitespace-nowrap mq450:text-base mq450:leading-[36px]">
        contact@vividmind.mg
      </div>
      <img
        className="absolute top-[742px] left-[40px] w-[70px] h-[70px] object-cover"
        loading="lazy"
        alt=""
        src="/whatsapp-1@2x.png"
      />
      <div className="absolute top-[755px] left-[144px] leading-[45px] inline-block w-[174px] h-[34px] whitespace-nowrap mq450:text-base mq450:leading-[36px]">
        +261 34 96 995 11
      </div>
      <img
        className="absolute top-[829px] left-[40px] w-[70px] h-[70px] object-cover"
        loading="lazy"
        alt=""
        src="/social-1@2x.png"
      />
      <div className="absolute top-[841px] left-[144px] leading-[45px] inline-block w-[152px] h-11 mq450:text-base mq450:leading-[36px]">
        VividMind MG
      </div>
      <div className="absolute top-[205px] left-[525px] bg-white w-[830px] flex flex-col items-end justify-start pt-0 px-0 pb-[49px] box-border gap-[33px] max-w-full z-[2] text-lg">
        <div className="self-stretch h-[852px] relative bg-white hidden" />
        <div className="self-stretch bg-gainsboro flex flex-row items-start justify-start pt-[18px] px-[37px] pb-[19px] box-border gap-[50px] max-w-full z-[1] mq750:flex-wrap">
          <div className="h-[157px] w-[830px] relative bg-gainsboro hidden max-w-full" />
          <img
            className="h-[120px] w-[120px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/prison-1@2x.png"
          />
          <div className="w-[536px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch h-[58px] relative leading-[27px] inline-block shrink-0 z-[2]">
              Ecrivez-nous quelques mots sur votre projet et nous vous
              préparerons une proposition dans quelques délais
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-6 pl-[26px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
              <input
                className="w-full [border:none] [outline:none] bg-gainsboro h-[65px] flex-1 rounded-10xs flex flex-row items-start justify-start py-[19px] px-4 box-border font-montserrat font-semibold text-xl text-dimgray-200 min-w-[247px] max-w-full z-[1]"
                placeholder="Nom"
                type="text"
              />
              <input
                className="w-full [border:none] [outline:none] bg-gainsboro h-[65px] flex-1 rounded-10xs flex flex-row items-start justify-start py-[19px] px-4 box-border font-montserrat font-semibold text-xl text-dimgray-200 min-w-[247px] max-w-full z-[1]"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[45.5px] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                <input
                  className="w-full [border:none] [outline:none] bg-gainsboro h-[65px] flex-1 rounded-10xs flex flex-row items-start justify-start py-[19px] px-4 box-border font-montserrat font-semibold text-xl text-dimgray-200 min-w-[247px] max-w-full z-[1]"
                  placeholder="Sujet"
                  type="text"
                />
                <input
                  className="w-full [border:none] [outline:none] bg-gainsboro h-[65px] flex-1 rounded-10xs flex flex-row items-start justify-start py-[19px] px-4 box-border font-montserrat font-semibold text-xl text-dimgray-200 min-w-[247px] max-w-full z-[1]"
                  placeholder="Autre"
                  type="text"
                />
              </div>
              <textarea
                className="[border:none] bg-gainsboro h-[274px] w-auto [outline:none] self-stretch rounded-10xs flex flex-row items-start justify-start py-[15px] px-3 box-border font-montserrat font-semibold text-xl text-dimgray-200 z-[1]"
                placeholder="Message"
                rows={14}
                cols={39}
              />
              <button className="cursor-pointer [border:none] py-[19px] px-5 bg-lawngreen self-stretch rounded-10xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-limegreen-300">
                <div className="h-[65px] w-[780px] relative rounded-10xs bg-lawngreen hidden max-w-full" />
                <b className="relative text-3xl leading-[27px] inline-block font-montserrat text-dimgray-200 text-justify min-w-[98px] z-[1] mq450:text-lg mq450:leading-[22px]">
                  Envoyer
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
