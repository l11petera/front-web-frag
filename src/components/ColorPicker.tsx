import { FunctionComponent } from "react";

const ColorPicker: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6 box-border max-w-full text-center text-31xl text-lawngreen font-montserrat">
      <div className="w-[790px] flex flex-col items-end justify-start gap-[62px] max-w-full mq450:gap-[15px_62px] mq1100:gap-[31px_62px]">
        <div className="w-[732px] h-3 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-3 w-[132px] relative"
            loading="lazy"
            alt=""
            src="/pointill.svg"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[12px] max-w-full">
          <div className="w-[155px] flex flex-col items-start justify-start pt-[26px] pb-0 pr-[5px] pl-0 box-border">
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
          <h1 className="m-0 h-[86px] flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[300px] max-w-full mq450:text-11xl mq750:text-21xl">
            <span>contacter</span>
            <span className="text-black"> nous</span>
          </h1>
          <div className="w-[150px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
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
    </div>
  );
};

export default ColorPicker;
