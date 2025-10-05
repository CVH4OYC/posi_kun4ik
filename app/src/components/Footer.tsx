import React from 'react';
import memeMax from '../assets/memes/max.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-myaso/40 backdrop-blur-sm mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Лого/название */}
        <h2 className="text-2xl font-ruslan text-myaso text-center md:text-left">
          Посикунчик-трек
        </h2>

        {/* Соцсети */}
        <div className="flex gap-6 text-gray-700 justify-center">
          <a
            href={memeMax}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-myaso transition"
          >
            VK
          </a>
          <a
            href={memeMax}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-myaso transition"
          >
            Telegram
          </a>
        </div>
      </div>

      {/* Подвал */}
      <div className="py-4">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Посикунчик-трек. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
