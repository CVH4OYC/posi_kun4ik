import React from "react";
import { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";

interface Props {
  products: Product[];
}

const CatalogMobile: React.FC<Props> = ({ products }) => {
  return (
    <section id="catalog" className="relative w-full py-16 px-4">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-4xl font-ruslan text-black mb-8 text-center">Каталог</h1>

        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogMobile;
