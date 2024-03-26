import { FunctionComponent } from "react";

const BloomFilter: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[210px] pr-10 pl-5 box-border max-w-full text-center text-31xl text-black font-montserrat">
      <div className="w-[1198px] flex flex-col items-end justify-start gap-[24.90000000000009px] max-w-full">
        <div className="w-[1178px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
          <div className="w-[790px] flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
            <div className="w-[155px] flex flex-col items-start justify-start pt-[22.90000000000009px] pb-0 pr-[5px] pl-0 box-border">
              <div className="self-stretch h-[20.9px] flex flex-col items-end justify-start gap-[19.40000000000009px]">
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
            <h1 className="m-0 h-[51px] flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[261px] max-w-full mq450:text-11xl mq750:text-21xl">
              <span>{`Nos `}</span>
              <span className="text-lawngreen">Services</span>
            </h1>
            <div className="w-[150px] flex flex-col items-start justify-start pt-[22.90000000000009px] px-0 pb-0 box-border">
              <div className="self-stretch h-[20.9px] flex flex-col items-start justify-start gap-[19.40000000000009px]">
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
        <div className="self-stretch h-[37px] relative text-xl font-medium inline-block shrink-0 z-[1] mq450:text-base">
          Optez pour l'excellence technologique avec notre gamme complète de
          services informatiques sur mesure.
        </div>
      </div>
    </section>
  );
};

export default BloomFilter;
