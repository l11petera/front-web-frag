import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NetworkInterfaceType = {
  hTTPClient?: string;
  tCPServer?: string;
  propos?: string;
  deNous?: string;
  line3?: string;
  line4?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
};

const NetworkInterface: FunctionComponent<NetworkInterfaceType> = ({
  hTTPClient,
  tCPServer,
  propos,
  deNous,
  line3,
  line4,
  propWidth,
  propAlignSelf,
  propMinWidth,
}) => {
  const networkInterfaceStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const proposDeNousContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-[1116px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-31xl text-black font-montserrat"
      style={networkInterfaceStyle}
    >
      <div className="w-[790px] flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
        <div className="w-[155px] flex flex-col items-start justify-start pt-[26px] pb-0 pr-[5px] pl-0 box-border">
          <div className="self-stretch h-[20.9px] flex flex-col items-end justify-start gap-[19.40000000000009px]">
            <div className="h-[0.6px] flex flex-row items-start justify-end py-0 px-px box-border">
              <img
                className="h-[0.6px] w-[100px] relative object-contain"
                alt=""
                src={hTTPClient}
              />
            </div>
            <img
              className="self-stretch h-[0.9px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src={tCPServer}
            />
          </div>
        </div>
        <h1
          className="m-0 h-[86px] flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[300px] mq450:text-11xl mq750:text-21xl"
          style={proposDeNousContainerStyle}
        >
          <span>{propos}</span>
          <span className="text-lawngreen">{deNous}</span>
        </h1>
        <div className="w-[150px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
          <div className="self-stretch h-[20.9px] flex flex-col items-start justify-start gap-[19.40000000000009px]">
            <div className="h-[0.6px] flex flex-row items-start justify-start py-0 px-px box-border">
              <img
                className="h-[0.6px] w-[100px] relative object-contain"
                alt=""
                src={line3}
              />
            </div>
            <img
              className="self-stretch h-[0.9px] relative max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src={line4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkInterface;
