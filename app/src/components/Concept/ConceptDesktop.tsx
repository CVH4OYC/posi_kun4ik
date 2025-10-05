import React from "react";
import ConceptImage from "../../assets/images/Фото сувениров второй экран.jpg";
import PosikDecor from "../../assets/bg/Посикунчики 2 экран.png";

const ConceptDesktop: React.FC = () => {
  return (
    <section id="concept" className="relative w-full py-24 px-6">
      <div className="relative max-w-screen-xl mx-auto flex flex-row items-center gap-12">
        {/* Полупрозрачный фон */}
        <div className="absolute inset-0 bg-sok/60 backdrop-blur-sm rounded-xl z-0" />

        {/* Левая часть — картинка */}
        <div className="flex-1 z-20">
          <img
            src={ConceptImage}
            alt="Концепция — сумка и природа"
            className="w-full max-w-lg mx-auto rounded-2xl"
          />
        </div>

        {/* Правая часть — текст */}
        <div className="flex-1 relative z-10">
          <h1 className="text-6xl font-ruslan text-black mb-6 relative z-20">Концепция</h1>

          <ul className="flex flex-col gap-20 relative z-20">
            <li>
              <span className="text-lg font-semibold block mb-2">Связь с природой и историей:</span>
              <p className="text-lg text-black leading-relaxed">
                Посикунчик — символ города, вплетенный в дизайн и форму сувениров, как напоминание о корнях и уникальности Пермского края.
              </p>
            </li>
            <li className="ml-auto w-11/12 md:w-5/6">
              <span className="text-lg font-semibold block mb-2">Функциональность и стиль:</span>
              <p className="text-lg text-black leading-relaxed">
                Сувениры выполнены в качественной outdoor-эстетике, гармонично вписываются в городской и туристический образ.
              </p>
            </li>
            <li>
              <span className="text-lg font-semibold block mb-2">Осознанность и экология:</span>
              <p className="text-lg text-black leading-relaxed">
                Материалы и производство выбираются с учетом экологичности и поддержки локальных производителей.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConceptDesktop;
