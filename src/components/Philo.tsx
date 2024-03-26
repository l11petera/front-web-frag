import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type PhiloType = {
  prop?: string;
  notrePhilosophie?: string;
  notrePhilosophieEstSimple?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
  propOverflow?: CSSProperties["overflow"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Philo: FunctionComponent<PhiloType> = ({
  prop,
  notrePhilosophie,
  notrePhilosophieEstSimple,
  propGap,
  propWidth,
  propRight,
  propOverflow,
  propWidth1,
  propHeight,
  propMinWidth,
}) => {
  const philoStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
      overflow: propOverflow,
    };
  }, [propWidth, propRight, propOverflow]);

  const notrePhilosophieStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const notrePhilosophieEstStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const voirPlusStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="flex-1 rounded-xl bg-gray flex flex-col items-start justify-start pt-4 pb-[58px] pr-[21px] pl-0 box-border relative gap-[25px] max-w-full text-center text-16xl text-lawngreen font-barlow"
      style={philoStyle}
    >
      <div className="w-[670px] h-[340px] relative rounded-xl bg-gray hidden max-w-full z-[0]" />
      <img
        className="w-[668px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-xl max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={prop}
        style={iconStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
        <h2
          className="m-0 w-[347px] h-[51px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full z-[2] mq450:text-2xl mq750:text-9xl"
          style={notrePhilosophieStyle}
        >
          {notrePhilosophie}
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full text-justify text-lg text-white">
          <div
            className="h-[127px] flex-1 relative font-semibold whitespace-pre-wrap inline-block max-w-full z-[2]"
            style={notrePhilosophieEstStyle}
          >
            {notrePhilosophieEstSimple}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[19px]">
        <button className="cursor-pointer pt-3 pb-1 pr-[35px] pl-9 bg-[transparent] rounded-lg flex flex-row items-start justify-start z-[2] border-[4px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[4px] hover:border-solid hover:border-forestgreen-100">
          <div className="h-[50px] w-[149px] relative rounded-lg box-border hidden border-[4px] border-solid border-lightgreen" />
          <b
            className="h-[34px] relative text-xl inline-block font-barlow text-white text-left min-w-[78px] z-[1] mq450:text-base"
            style={voirPlusStyle}
          >
            Voir plus
          </b>
        </button>
      </div>
    </div>
  );
};

export default Philo;
