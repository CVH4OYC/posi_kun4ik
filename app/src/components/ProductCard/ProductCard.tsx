import React from "react";
import { Product } from "../../types/product";
import { useIsMobile } from "../../hooks/useIsMobile";
import ProductCardDesktop from "./ProductCardDesktop";
import ProductCardMobile from "./ProductCardMobile";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <ProductCardMobile product={product} />
  ) : (
    <ProductCardDesktop product={product} />
  );
};

export default ProductCard;
