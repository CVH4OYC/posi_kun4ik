import React, { useEffect, useState } from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/Лого исходник.svg';


const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false); // скрыть
        } else {
          setIsVisible(true); // показать
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
  
    return (
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <LogoIcon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transition-transform group-hover:scale-105" />
          </a>
  
          <nav className="flex gap-6 text-sm font-ruslan text-gray-800">
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
  
