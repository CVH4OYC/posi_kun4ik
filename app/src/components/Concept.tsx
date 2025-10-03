import React from 'react';
import ConceptImage from '../assets/images/Фото сувениров второй экран.jpg'; // замени на актуальное имя

const Concept: React.FC = () => {
  return (
    <section id="concept" className="relative w-full bg-white py-24 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Левая часть — изображение */}
        <div className="flex-1">
          <img
            src={ConceptImage}
            alt="Концепция — сумка и природа"
            className="w-full max-w-lg mx-auto rounded-xl"
          />
        </div>

        {/* Правая часть — текст */}
        <div className="flex-1">
          <h2 className="text-4xl font-ruslan text-orange-800 mb-6">Концепция</h2>
          <ul className="space-y-6 text-gray-800 text-lg leading-relaxed">
            <li>
              <span className="font-semibold">Связь с природой и историей:</span> Посикунчик — символ города, вплетенный в дизайн и форму сувениров, как напоминание о корнях и уникальности Пермского края.
            </li>
            <li>
              <span className="font-semibold">Функциональность и стиль:</span> Сувениры выполнены в качественной outdoor-эстетике, гармонично вписываются в городской и туристический образ. Это не просто сувениры — это вещи, которые можно использовать каждый день.
            </li>
            <li>
              <span className="font-semibold">Осознанность и экология:</span> Материалы и производство выбираются с учетом экологичности и поддержки локальных производителей — это отражает ценности целевой аудитории.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Concept;
