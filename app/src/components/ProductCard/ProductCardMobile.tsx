// src/components/ProductCard/ProductCardMobile.tsx
import React from "react";
import { Product, ProductVariant } from "../../types/product";
import { Link } from "react-router-dom";
import ProductImageCarousel from "./ProductImageCarousel";

interface Props {
  product: Product & { currentVariant: ProductVariant };
  currentVariantIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const ProductCardMobile: React.FC<Props> = ({
  product,
  currentVariantIndex,
  onNext,
  onPrev,
}) => {
  return (
    <div className="bg-testo/80 backdrop-blur-sm shadow-md rounded-md overflow-hidden flex flex-col">
      <ProductImageCarousel
        variants={product.variants}
        currentVariantIndex={currentVariantIndex}
        onNext={onNext}
        onPrev={onPrev}
        alt={product.title}
      />
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-ruslan text-myaso mb-2">{product.title}</h3>
        <p className="text-sm text-black flex-1">{product.description}</p>

        <Link
          to="/thanks"
          className="mt-4 w-full bg-sok text-myaso px-4 py-2 rounded-md font-ruslan hover:bg-myaso hover:text-sok transition text-center text-base"
        >
          Купить
        </Link>
      </div>
    </div>
  );
};

export default ProductCardMobile;