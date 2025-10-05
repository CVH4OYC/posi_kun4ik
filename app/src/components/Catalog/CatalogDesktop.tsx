import React from "react";
import { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";

interface Props {
  products: Product[];
}

const CatalogDesktop: React.FC<Props> = ({ products }) => {
  return (
    <section id="catalog" className="relative w-full py-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-6xl font-ruslan text-black mb-10">Каталог</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogDesktop;
