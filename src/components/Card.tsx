import { FunctionComponent } from "react";

export type CardType = {
  christopherGowerMHRfLhgAB?: string;
};

const Card: FunctionComponent<CardType> = ({ christopherGowerMHRfLhgAB }) => {
  return (
    <div className="rounded-xl bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[70px] box-border gap-[28.84999999999991px] max-w-full text-center text-6xl text-black font-montserrat mq750:pb-[45px] mq750:box-border">
      <div className="self-stretch h-[536px] relative rounded-xl bg-white hidden" />
      <img
        className="self-stretch h-[266.3px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={christopherGowerMHRfLhgAB}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-3.5 box-border max-w-full">
        <b className="h-[54px] flex-1 relative inline-block max-w-full z-[1] mq450:text-xl">
          Dernières nouvelles de l’entreprise
        </b>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-1.5 box-border max-w-full text-lg">
        <div className="flex-1 relative whitespace-pre-wrap inline-block max-w-full z-[1]">
          Explorez notre blog pour découvrir des articles captivants et
          informatifs sur les dernières tendances technologiques, des conseils
        </div>
      </div>
    </div>
  );
};

export default Card;
