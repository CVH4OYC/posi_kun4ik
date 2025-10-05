import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Concept from './components/Concept/Concept';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer';
import { Product } from './types/product';

import bagImg from './assets/products/bag.png';

const products: Product[] = [
  {
    id: '1',
    title: 'Мембранная куртка',
    description: 'Тёплая и лёгкая куртка для активного отдыха.',
    image: bagImg,
  },
  {
    id: '2',
    title: 'Сумка-посикунчик',
    description: 'Функциональная поясная сумка в стиле посикунчика.',
    image: bagImg,
  },
  {
    id: '3',
    title: 'Термокружка',
    description: 'Сохраняет напитки горячими до 6 часов.',
    image: bagImg,
  },
  {
    id: '4',
    title: 'Мембранная куртка',
    description: 'Тёплая и лёгкая куртка для активного отдыха.',
    image: bagImg,
  },
  {
    id: '5',
    title: 'Сумка-посикунчик',
    description: 'Функциональная поясная сумка в стиле посикунчика.',
    image: bagImg,
  },
  {
    id: '6',
    title: 'Термокружка',
    description: 'Сохраняет напитки горячими до 6 часов.',
    image: bagImg,
  },
];

function App() {
  return (
    <div className="font-sans">
      <Header />

      <main className="pt-20">
        {/* Все секции с общим фоном */}
        <div className="relative">
          <div className="absolute inset-0 bg-sok/40 backdrop-blur-md -z-10" />
          
          <section className="relative z-10">
            <Hero />
          </section>
          
          <section className="relative z-10">
            <Concept />
          </section>
        </div>

        {/* Catalog без фона */}
        <section>
          <Catalog products={products} />
        </section>

        {/* Footer с фоном */}
        <section className="bg-sok/40 backdrop-blur-md">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
