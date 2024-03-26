import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  dploiementDeSolution?: string;
  dveloppementFrontEnd?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propMarginTop?: CSSProperties["marginTop"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  dploiementDeSolution,
  dveloppementFrontEnd,
  propGap,
  propPadding,
  propHeight,
  propMarginTop,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const dploiementDeSolutionStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[10px] text-justify text-lg text-black font-montserrat"
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[25px] mq450:flex-wrap">
        <img
          className="h-[27px] w-[27px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/checked-1@2x.png"
        />
        <div
          className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[162px]"
          style={frameDiv1Style}
        >
          <div
            className="self-stretch relative font-medium z-[1]"
            style={dploiementDeSolutionStyle}
          >
            {dploiementDeSolution}
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start gap-[25px] mq450:flex-wrap"
        style={frameDiv2Style}
      >
        <img
          className="h-[27px] w-[27px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/checked-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[162px]">
          <div className="self-stretch h-[39px] relative font-medium inline-block shrink-0 z-[1]">
            {dveloppementFrontEnd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
