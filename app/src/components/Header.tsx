import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/Лого.svg'; 

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoIcon className="w-8 h-8" />
          <span className="text-xl font-ruslan text-orange-800">Посикунчик-трек</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#concept" className="hover:text-orange-700 transition">Концепция</a>
          <a href="#catalog" className="hover:text-orange-700 transition">Каталог</a>
          <a href="#ideas" className="hover:text-orange-700 transition">Идеи</a>
          <a href="#contacts" className="hover:text-orange-700 transition">Контакты</a>
          <a href="#buy" className="text-orange-800 font-bold hover:underline">Купить</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
