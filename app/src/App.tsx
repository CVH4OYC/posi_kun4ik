import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Concept from './components/Concept/Concept';
import Catalog from './components/Catalog/Catalog';
import { Product } from './types/product';
import Footer from './components/Footer';

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
        <Hero />
        <Concept />
        <Catalog products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
