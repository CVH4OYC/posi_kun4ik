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
              <span className="font-semibold">🌲 Связь с природой:</span> Посикунчик-трек — это сувенир, вдохновлённый уральскими ландшафтами, местной кухней и духом похода.
            </li>
            <li>
              <span className="font-semibold">🎒 Функциональность:</span> Это не просто сувенир, а полезная вещь — поясная сумка для путешествий, походов и города.
            </li>
            <li>
              <span className="font-semibold">🥟 Ироничность и культурность:</span> Улыбка, посикунчик и гордость за Урал — всё это в одном предмете.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Concept;
