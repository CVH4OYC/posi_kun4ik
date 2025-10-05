import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/Лого исходник.svg";
import { Link } from "react-router-dom";

const HeaderMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between relative">
      {/* Логотип — возвращает на главную */}
      <Link
        to="/"
        className="flex items-center gap-3 group"
        onClick={() => setIsOpen(false)}
      >
        <LogoIcon className="w-12 h-12 transition-transform group-hover:scale-105" />
      </Link>

      {/* Бургер */}
      <button
        className="text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Меню */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-sok backdrop-blur-sm flex flex-col gap-4 p-6 text-lg font-ruslan">
          <a href="/#concept" onClick={() => setIsOpen(false)}>
            Концепция
          </a>
          <a href="/#catalog" onClick={() => setIsOpen(false)}>
            Каталог
          </a>
          <a href="/#contacts" onClick={() => setIsOpen(false)}>
            Контакты
          </a>
          <Link to="/thanks" onClick={() => setIsOpen(false)}>
            Купить
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
