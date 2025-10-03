import React from 'react';
import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

const Catalog: React.FC<Props> = ({ products }) => {
  return (
    <section id="catalog" className="relative w-full py-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Заголовок */}
        <h1 className="text-6xl font-ruslan text-black mb-6">Каталог</h1>

        {/* Сетка продуктов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
