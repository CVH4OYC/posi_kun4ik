import React from 'react';
import ConceptImage from '../assets/images/Фото сувениров второй экран.jpg';
import PosikDecor from '../assets/bg/Посикунчики 2 экран.png';

const Concept: React.FC = () => {
    return (
        <section id="concept" className="relative w-full py-24 px-6">
            {/* Обёртка для позиционирования */}
            <div className="relative max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Белый полупрозрачный фон */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl z-0" />

                {/* Левая часть — изображение */}
                <div className="flex-1 z-20">
                    <img
                        src={ConceptImage}
                        alt="Концепция — сумка и природа"
                        className="w-full max-w-lg mx-auto rounded-xl"
                    />
                </div>

                {/* Правая часть — текст */}
                <div className="flex-1 relative z-10">
                    {/* Посикунчики — внутри текстового блока, под текстом */}
                    <img
                        src={PosikDecor}
                        alt="посикунчик"
                        className="
    absolute
    left-1/3 top-[55%]
    -translate-x-1/2 -translate-y-1/2
    w-[1200px] max-w-[100%]
    rotate-[5deg]
    z-10 opacity-90 pointer-events-none
  "
                    />


                    <h2 className="text-4xl font-ruslan text-orange-800 mb-10 relative z-20">Концепция</h2>

                    <ul className="flex flex-col gap-20 relative z-20">
                        <li>
                            <span className="font-semibold block mb-2">Связь с природой и историей:</span>
                            <p className="text-gray-800 text-lg leading-relaxed">
                                Посикунчик — символ города, вплетенный в дизайн и форму сувениров, как напоминание о корнях и уникальности Пермского края.
                            </p>
                        </li>

                        <li className="ml-auto w-11/12 md:w-5/6">
                            <span className="font-semibold block mb-2">Функциональность и стиль:</span>
                            <p className="text-gray-800 text-lg leading-relaxed">
                                Сувениры выполнены в качественной outdoor-эстетике, гармонично вписываются в городской и туристический образ. Это не просто сувениры — это вещи, которые можно использовать каждый день.
                            </p>
                        </li>

                        <li>
                            <span className="font-semibold block mb-2">Осознанность и экология:</span>
                            <p className="text-gray-800 text-lg leading-relaxed">
                                Материалы и производство выбираются с учетом экологичности и поддержки локальных производителей — это отражает ценности целевой аудитории.
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Concept;
