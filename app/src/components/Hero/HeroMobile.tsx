import React from "react";
import HeroImage from "../../assets/images/Фото 1 экран.png";

const HeroMobile: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-16 text-center">
      {/* Полупрозрачный фон */}
      <div className="absolute inset-0 top-10 bottom-10 rounded-xl z-0" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-ruslan text-black mb-6">
          Посикунчик-трек
        </h1>
        <p className="text-base font-normal text-black leading-relaxed mb-6 max-w-md">
          Концепция проекта основана на идее функциональных сувениров, которые
          становятся настоящими спутниками для людей, ищущих смысл, вызов и связь
          с природой Пермского края. Каждый предмет — от мембранной куртки до
          карабинов и зажигалки — выполнен с учетом потребностей активных
          путешественников и наполнен смыслом, основанным на культуре, истории и
          экологии региона.
        </p>
        <img
          src={HeroImage}
          alt="Пейзажи и турист"
          className="w-full max-w-md rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroMobile;
