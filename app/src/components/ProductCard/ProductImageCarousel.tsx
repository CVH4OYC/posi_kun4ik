// src/components/ProductCard/ProductImageCarousel.tsx
import React from "react";
import { ProductVariant } from "../../types/product";

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
    <div className="relative group flex items-center justify-center bg-[#fef6ee] rounded-t-md h-48"> {/* Фиксированная высота */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <img
          src={currentVariant.image}
          alt={alt}
          className="max-w-full max-h-full object-contain" /* object-contain сохраняет пропорции */
        />
        
        {/* Стрелки для переключения */}
        {hasMultipleVariants && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex items-center justify-center"
            >
              ›
            </button>
          </>
        )}
      </div>
      
      {/* Индикатор текущей вариации */}
      {hasMultipleVariants && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {variants.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentVariantIndex ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;