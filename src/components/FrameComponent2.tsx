import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-end justify-start gap-[2px] text-center text-xl text-black font-montserrat mq450:flex-wrap">
      <div className="h-[146px] w-[88px] flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/closeupportraithandsomesmilingyoungmanwhitetshirtblurryoutdoornature-1@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[203px]">
        <b className="self-stretch h-[35px] relative inline-block shrink-0 mq450:text-base">
          Marc Yowan Ratsimbazafy
        </b>
        <div className="w-64 flex flex-row items-start justify-start py-0 px-[13px] box-border text-dimgray-100 font-roboto">
          <div className="h-9 flex-1 relative font-semibold inline-block mq450:text-base">
            Chief Technology Officer
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
