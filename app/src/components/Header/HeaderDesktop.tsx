import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/Лого исходник.svg";
import { Link } from "react-router-dom";

const HeaderDesktop: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Логотип — переход на главную страницу */}
      <Link to="/" className="flex items-center gap-3 group">
        <LogoIcon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-transform group-hover:scale-105" />
      </Link>

      {/* Навигация */}
      <nav className="flex gap-6 text-sm font-ruslan text-gray-800">
        <a href="/#concept" className="hover:text-testo transition">
          Концепция
        </a>
        <a href="/#catalog" className="hover:text-testo transition">
          Каталог
        </a>
        <a href="/#contacts" className="hover:text-testo transition">
          Контакты
        </a>

        <Link
          to="/thanks"
          className="text-myaso font-bold hover:underline transition"
        >
          Купить
        </Link>
      </nav>
    </div>
  );
};

export default HeaderDesktop;
