// src/components/ProductCard/ProductCard.tsx
import React, { useState } from "react";
import { Product } from "../../types/product";
import { useIsMobile } from "../../hooks/useIsMobile";
import ProductCardDesktop from "./ProductCardDesktop";
import ProductCardMobile from "./ProductCardMobile";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const isMobile = useIsMobile();
  
  // Находим индекс вариации по умолчанию
  const defaultVariantIndex = product.defaultVariantId 
    ? product.variants.findIndex(v => v.id === product.defaultVariantId)
    : 0;
  
  const [currentVariantIndex, setCurrentVariantIndex] = useState(defaultVariantIndex);

  const nextVariant = () => {
    setCurrentVariantIndex((prev) => 
      prev === product.variants.length - 1 ? 0 : prev + 1
    );
  };

  const prevVariant = () => {
    setCurrentVariantIndex((prev) => 
      prev === 0 ? product.variants.length - 1 : prev - 1
    );
  };

  const currentVariant = product.variants[currentVariantIndex];

  const productWithVariant = {
    ...product,
    image: currentVariant.image,
    currentVariant
  };

  return isMobile ? (
    <ProductCardMobile 
      product={productWithVariant}
      currentVariantIndex={currentVariantIndex}
      onNext={nextVariant}
      onPrev={prevVariant}
    />
  ) : (
    <ProductCardDesktop 
      product={productWithVariant}
      currentVariantIndex={currentVariantIndex}
      onNext={nextVariant}
      onPrev={prevVariant}
    />
  );
};

export default ProductCard;