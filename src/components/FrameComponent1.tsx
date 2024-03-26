import { FunctionComponent } from "react";
import Card from "./Card";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full text-center text-31xl text-black font-montserrat mq750:gap-[19px_39px]">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[22.50000000000091px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6 box-border max-w-full">
            <div className="w-[790px] flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
              <div className="w-[155px] flex flex-col items-start justify-start pt-[20.600000000000364px] pb-0 pr-[5px] pl-0 box-border">
                <div className="self-stretch h-[20.9px] flex flex-col items-end justify-start gap-[19.399999999999636px]">
                  <div className="h-[0.6px] flex flex-row items-start justify-end py-0 px-px box-border">
                    <img
                      className="h-[0.6px] w-[100px] relative object-contain"
                      alt=""
                    />
                  </div>
                  <img
                    className="self-stretch h-[0.9px] relative max-w-full overflow-hidden shrink-0 object-contain"
                    alt=""
                  />
                </div>
              </div>
              <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[220px] max-w-full mq450:text-11xl mq750:text-21xl">
                <span>{`Notre `}</span>
                <span className="text-lawngreen">Blog</span>
              </h1>
              <div className="w-[150px] flex flex-col items-start justify-start pt-[20.600000000000364px] px-0 pb-0 box-border">
                <div className="self-stretch h-[20.9px] flex flex-col items-start justify-start gap-[19.399999999999636px]">
                  <div className="h-[0.6px] flex flex-row items-start justify-start py-0 px-px box-border">
                    <img
                      className="h-[0.6px] w-[100px] relative object-contain"
                      alt=""
                    />
                  </div>
                  <img
                    className="self-stretch h-[0.9px] relative max-w-full overflow-hidden shrink-0 object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-xl whitespace-pre-wrap z-[1] mq450:text-base">
            Explorez notre blog pour découvrir des articles captivants et
            informatifs sur les dernières tendances technologiques, des conseils
            pratiques pour votre présence en ligne, ainsi que des analyses
            approfondies sur les défis et opportunités du monde numérique
            d'aujourd'hui.
          </div>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start gap-[58px] max-w-full grid-cols-[repeat(3,_minmax(300px,_1fr))] text-6xl mq750:gap-[58px_29px] mq750:grid-cols-[minmax(300px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(300px,_520px))]">
        <Card christopherGowerMHRfLhgAB="/christophergowerm-hrflhgabounsplash-1@2x.png" />
        <Card christopherGowerMHRfLhgAB="/htmlcsscollageconceptwithperson-1@2x.png" />
        <Card christopherGowerMHRfLhgAB="/htmlcsscollageconceptwithperson1-1@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent1;
