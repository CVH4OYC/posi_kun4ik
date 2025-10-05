// src/components/ProductCard/ProductImageCarousel.tsx
import React from "react";
import { ProductVariant } from "../../types/product"; // Добавьте этот импорт

interface Props {
  variants: ProductVariant[];
  currentVariantIndex: number;
  onNext: () => void;
  onPrev: () => void;
  alt: string;
}

const ProductImageCarousel: React.FC<Props> = ({
  variants,
  currentVariantIndex,
  onNext,
  onPrev,
  alt,
}) => {
  const hasMultipleVariants = variants.length > 1;
  const currentVariant = variants[currentVariantIndex];

  return (
    <div className="relative group">
      <img
        src={currentVariant.image}
        alt={alt}
        className="w-full h-48 object-cover"
      />
      
      {/* Стрелки для переключения */}
      {hasMultipleVariants && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            ›
          </button>
        </>
      )}
      
      {/* Индикатор текущей вариации */}
      {hasMultipleVariants && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {variants.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentVariantIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;