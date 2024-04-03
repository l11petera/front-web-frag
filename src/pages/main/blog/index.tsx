import { FunctionComponent } from "react";
import Card from "../../../components/Card";

const BlogPage: FunctionComponent = () => {
  return (
    <section>
      <div className="items-center relative">
        <div>
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-2 left-[430px]"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-8 left-[367px]"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-2 right-[430px]"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-8 right-[367px]"
          />
        </div>
        <h1 className="text-[40px] text-center">
          Notre <span className="text-lawngreen">blog</span>
        </h1>
      </div>
      <div className="text-center px-10">
        <p>
          Explorez notre blog pour découvrir des articles captivants et
          informatifs sur les dernières tendances technologiques, des conseils
          pratiques pour votre présence en ligne, ainsi que des analyses
          approfondies sur les défis et opportunités du monde numérique
          d'aujourd'hui.
        </p>
      </div>
      <div className="flex gap-10 mt-10 mx-36">
        <div className="w-80 rounded shadow-sm ">
          <div>
            <img
              className="w-full"
              src="/christopher.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-lg text-center mb-2">
                The Coldest Sunset
              </div>
              <p className="text-gray-700 text-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 rounded shadow-sm ">
          <div>
            <img
              className="w-full"
              src="/girl.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-lg text-center mb-2">
                The Coldest Sunset
              </div>
              <p className="text-gray-700 text-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 rounded shadow-sm ">
          <div>
            <img
              className="w-full"
              src="/coffee.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-lg text-center mb-2">
                The Coldest Sunset
              </div>
              <p className="text-gray-700 text-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
