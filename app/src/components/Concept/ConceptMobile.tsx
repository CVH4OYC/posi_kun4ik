import React from "react";
import ConceptImage from "../../assets/images/Фото сувениров второй экран.jpg";

const ConceptMobile: React.FC = () => {
  return (
    <section id="concept" className="relative w-full py-16 px-6 text-center">
      {/* Полупрозрачный фон */}
      <div className="absolute inset-0 bg-sok/60 backdrop-blur-sm rounded-xl z-0" />

      <h1 className="text-4xl font-ruslan text-black mb-8 relative z-10">Концепция</h1>

      <ul className="flex flex-col gap-12 relative z-10">
        <li>
          <span className="text-base font-semibold block mb-2">Связь с природой и историей:</span>
          <p className="text-base text-black leading-relaxed">
            Посикунчик — символ города, вплетенный в дизайн и форму сувениров.
          </p>
        </li>
        <li>
          <span className="text-base font-semibold block mb-2">Функциональность и стиль:</span>
          <p className="text-base text-black leading-relaxed">
            Сувениры выполнены в качественной outdoor-эстетике, подходят для города и путешествий.
          </p>
        </li>
        <li>
          <span className="text-base font-semibold block mb-2">Осознанность и экология:</span>
          <p className="text-base text-black leading-relaxed">
            Материалы выбираются с учетом экологичности и поддержки локальных производителей.
          </p>
        </li>
      </ul>

      {/* Картинка снизу */}
      <div className="mt-10 relative z-10">
        <img
          src={ConceptImage}
          alt="Концепция — сумка и природа"
          className="w-full max-w-md mx-auto rounded-xl"
        />
      </div>
    </section>
  );
};

export default ConceptMobile;
