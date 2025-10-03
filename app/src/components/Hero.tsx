import React from 'react';
import HeroImage from '../assets/images/Фото 1 экран.png';
import Posik1 from '../assets/bg/Посикунчики 1 экран.png';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
            {/* Контент Hero */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 flex items-center justify-between gap-10">
                {/* Левая часть — текст */}
                <div className="flex-1">
                    <h1 className="text-6xl font-ruslan text-black mb-6">Посикунчик-трек</h1>
                    <p className="text-lg text-gray-700 max-w-md leading-relaxed">
                        Концепция проекта основана на идее функциональных сувениров, которые становятся настоящими спутниками для людей, ищущих смысл, вызов и связь с природой Пермского края. Каждый предмет — от мембранной куртки до карабинов и зажигалки — выполнен с учетом потребностей активных путешественников и наполнен смыслом, основанным на культуре, истории и экологии региона.
                    </p>
                </div>

                {/* Правая часть — фото + посикунчики */}
                <div className="flex-1 relative">
                    {/* Фото */}
                    <img
                        src={HeroImage}
                        alt="Пейзажи и турист"
                        className="w-full h-auto rounded-xl"
                    />
                    <img
                        src={Posik1}
                        alt="посикунчик"
                        className="absolute bottom-0 left-0 w-[2000px] z-10 pointer-events-none translate-x-[-25%] translate-y-[20%]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
