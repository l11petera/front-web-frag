import { FunctionComponent } from "react";

const QuestionPage: FunctionComponent = () => {
  return (
    <section>
      <div className="items-center relative">
        <div>
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-2 left-96"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-8 left-80"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-28 h-1 absolute top-2 right-96"
          />
          <img
            src="/Line 1.png"
            alt=""
            className="w-44 h-1 absolute top-8 right-80"
          />
        </div>
        <h1 className="text-[40px] text-center">
          Vos <span className="text-lawngreen">questions</span>
        </h1>
      </div>
      <div className="w-1/2 px-12">
        <div className="">
          <h1 className="font-barlow font-bold text-[45px]">
            <span>{`Réponses à vos questions`}</span>
            <span className="text-lawngreen"></span>
          </h1>
        </div>
        <div className="text-justify ">
          Sécurisez votre investissement ! Notre équipe dédiée travaille à
          maximiser votre retour sur investissement grâce à une attention aux
          détails.
        </div>
        <div className="flex my-5">
          <img
            className="h-[25px] w-[25px] mr-3"
            alt=""
            src="/gmail-2@2x.png"
          />
          <div className="mr-3">
            <img
              className="w-[25px] h-[25px]"
              alt=""
              src="/whatsapp1-2@2x.png"
            />
          </div>
          <img className="h-[25px] w-[25px]" alt="" src="/pngegg4-1@2x.png" />
        </div>
        <div className="flex">
          <button className="mr-3 cursor-pointer rounded-lg  px-10 py-2.5 font-barlow font-bold text-xl text-white bg-lawngreen hover:bg-limegreen-300 ">
            En savoir plus
          </button>
          <button className="cursor-pointer px-10 py-2.5 font-barlow font-bold text-xl bg-[transparent] rounded-lg box-border  border-[2px] border-solid border-lightgreen hover:bg-forestgreen-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-forestgreen-100">
            À propos de nous
          </button>
        </div>
      </div>
      <div className="relative h-[500px] w-full mt-10">
        <div className="h-80 w-80 my-3 mx-3 py-3 px-3 bg-[#EBF2F3] items-center">
          <div className="flex justify-center">
            <img
              className="h-[101.4px] w-[92.1px] "
              loading="lazy"
              alt=""
              src="/healthcare@2x.png"
            />
          </div>

          <h4 className="font-barlow text-center">
            Qu'est-ce qui distingue votre entreprise des autres dans le secteur
            ?
          </h4>

          <p className="font-barlow text-center">
            Notre entreprise se distingue par son engagement envers l'innovation
            technologique et son approche centrée sur le client. Nous offrons
            des solutions sur mesure et un service client exceptionnel qui
            répondent aux besoins uniques de chaque client.
          </p>
        </div>

        <div className="absolute top-16 left-72  h-56 w-60 bg-limegreen-100 ">
          <div className="flex justify-center">
            <img
              className="h-20 w-20"
              loading="lazy"
              alt=""
              src="/loop@2x.png"
            />
          </div>

          <h4 className="text-center font-barlow">
            Quels sont les avantages de travailler avec votre entreprise ?
          </h4>
        </div>

        <div className="absolute -top-4 left-[500px]  h-56 w-60 bg-limegreen-100 ">
          <div className="flex justify-center">
            <img
              className="h-16 w-20 py-2"
              loading="lazy"
              alt=""
              src="/letters1@2x.png"
            />
          </div>

          <h4 className="text-center font-barlow">
            Comment votre entreprise garantit-elle la sécurité des données et de
            l'infrastructure de ses clients ?
          </h4>
        </div>
        <div className="absolute -top-12 left-[700px]  h-56 w-60 bg-limegreen-100 ">
          <div className="flex justify-center">
            <img
              className="h-16 w-20 py-2"
              loading="lazy"
              alt=""
              src="/letters@2x.png"
            />
          </div>

          <h4 className="text-center font-barlow">
            Quels sont les principaux domaines d'expertise de votre entreprise ?
          </h4>
        </div>
        <div className="absolute -top-44 left-[900px]  h-56 w-60 bg-limegreen-100 ">
          <div className="flex justify-center">
            <img
              className="h-16 w-20 py-2"
              loading="lazy"
              alt=""
              src="/letters2@2x.png"
            />
          </div>

          <h4 className="text-center font-barlow">
            Quels sont les succès récents ou les réalisations notables de votre
            entreprise ?
          </h4>
        </div>
        <div>
          <div className="absolute top-20 right-0 ">
            <img className="w-[600px] h-96" src="/Ellipse 43.png" alt="" />
          </div>
          <div className="absolute top-28 right-10">
            <img className="h-80 w-96" src="/Ellipse 42.png" alt="" />
          </div>
          <div className="absolute top-16 right-12">
            <img className="w-24" src="s s.png" alt="" />
          </div>
          <div className="absolute top-28 right-64">
            <img className="w-24" src="s.png" alt="" />
          </div>
          <div className="absolute top-64 right-96">
            <img className="w-24" src="loop.png" alt="" />
          </div>
          <div className="absolute top-96 right-52">
            <img className="w-24" src="health.png" alt="" />
          </div>
          <div className="absolute top-72 right-4">
            <img className="w-24" src="s c.png" alt="" />
          </div>
          <div className="absolute top-52 right-40">
            <img className="w-24" src="center.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionPage;
