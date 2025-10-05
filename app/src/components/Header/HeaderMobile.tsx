import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/Лого исходник.svg";
import meme from "../../assets/memes/lev.png";

const HeaderMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-3 group">
        <LogoIcon className="w-12 h-12 transition-transform group-hover:scale-105" />
      </a>

      {/* Бургер */}
      <button
        className="text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Меню */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-sok/60 backdrop-blur-sm flex flex-col gap-4 p-6 text-lg font-ruslan">
          <a href="#concept" onClick={() => setIsOpen(false)}>Концепция</a>
          <a href="#catalog" onClick={() => setIsOpen(false)}>Каталог</a>
          <a href="#contacts" onClick={() => setIsOpen(false)}>Контакты</a>
          <a
            href={meme}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Купить
          </a>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
