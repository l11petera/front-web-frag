import React from "react";
import "./styles.scss";

function AboutPage() {
  return (
    <div className="">
      <div className="items-center">
        <img src="../../../assets/images/Line 1.png" alt="" className="w-96" />
        <h1 className="text-[40px] text-center">
          À propos <span className="text-lawngreen">de nous</span>
        </h1>
      </div>
      <div className=" text-lg  font-light font-barlow inline-block px-5">
        <p className="text-center">
          Votre partenaire innovant en solutions technologiques. Née de la
          passion pour la technologie et l'innovation, VividMind s'est donnée
          pour mission de concrétiser les idées innovantes en réalités tangibles
          à travers des solutions technologiques sur mesure. Nous nous
          spécialisons dans le développement de solutions web et mobile de
          pointe, le déploiement de solutions personnalisées, et bien plus, pour
          répondre aux besoins évolutifs de nos clients.
        </p>
      </div>
      <section className="mt-5 about w-full">
        <div className=" grid w-[490px]  mb-4 card1 pl-4">
          <div className="text-white">
            <h2 className="text-lawngreen ">Notre équipe</h2>
            <p className="mb-2.5 pr-4 text-justify text-[14px]">
              Chez VividMind, nous croyons que notre force réside dans notre
              équipe. Composée de penseurs créatifs, de développeurs talentueux,
              de designers ingénieux et de stratèges avisés, notre équipe
              travaille en harmonie pour livrer des solutions qui dépassent les
              attentes.
            </p>
            <button className="cursor-pointer pt-3 mb-2 text-white text-lg font-barlow font-bold px-[14px] py-2 bg-[transparent] rounded-lg  border-[4px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[4px] hover:border-solid hover:border-forestgreen-100">
              Voir plus
            </button>
          </div>
        </div>
        <div className=" grid w-[490px]  mb-4 card2 pl-4">
          <div className="text-white">
            <h2 className="text-lawngreen ">Notre philosophie</h2>
            <p className="mb-2.5 pr-4 text-justify text-[14px]">
              Notre philosophie est simple : mettre l'innovation au service de
              nos clients. Nous nous engageons à rester à la pointe de la
              technologie, en explorant de nouvelles avenues et en adoptant les
              dernières tendances pour fournir des solutions avant-gardistes.
            </p>
            <button className="cursor-pointer pt-3 mb-2 text-white text-lg font-barlow font-bold px-[14px] py-2 bg-[transparent] rounded-lg  border-[4px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[4px] hover:border-solid hover:border-forestgreen-100">
              Voir plus
            </button>
          </div>
        </div>
        <div className=" grid w-[490px]  mb-4 card3 pl-4">
          <div className="text-white">
            <h2 className="text-lawngreen ">Notre engagement</h2>
            <p className="mb-2.5 pr-4 text-justify text-[14px]">
              Nous nous engageons à fournir des solutions de qualité,
              personnalisées pour répondre aux défis uniques de votre
              entreprise. Notre processus transparent et notre communication
              ouverte assurent une collaboration fluide et des résultats
              exceptionnels. Chez VividMind, votre vision devient notre mission.
            </p>
            <button className="cursor-pointer pt-3 mb-2 text-white text-lg font-barlow font-bold px-[14px] py-2 bg-[transparent] rounded-lg  border-[4px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[4px] hover:border-solid hover:border-forestgreen-100">
              Voir plus
            </button>
          </div>
        </div>
        <div className=" grid w-[490px]  mb-4 card4 pl-4">
          <div className="text-white">
            <h2 className="text-lawngreen ">
              Rejoignez-nous dans notre Voyage
            </h2>
            <p className="mb-2.5 pr-4 text-justify text-[14px]">
              Nous invitons clients, collaborateurs et passionnés de technologie
              à nous rejoindre dans notre voyage passionnant. Ensemble,
              explorons les possibilités illimitées que la technologie peut
              offrir et créons un avenir numérique brillant.
            </p>
            <button className="cursor-pointer pt-3 mb-2 text-white text-lg font-barlow font-bold px-[14px] py-2 bg-[transparent] rounded-lg  border-[4px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[4px] hover:border-solid hover:border-forestgreen-100">
              Voir plus
            </button>
          </div>
        </div>

        <img className="cercle  z-[3]" alt="" src="/cercle.svg" />
      </section>
    </div>
  );
}

export default AboutPage;
