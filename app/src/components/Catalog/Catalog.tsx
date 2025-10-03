import React from "react";
import { Product } from "../../types/product";
import { useIsMobile } from "../../hooks/useIsMobile";
import CatalogDesktop from "./CatalogDesktop";
import CatalogMobile from "./CatalogMobile";

interface Props {
  products: Product[];
}

const Catalog: React.FC<Props> = ({ products }) => {
  const isMobile = useIsMobile();
  return isMobile ? <CatalogMobile products={products} /> : <CatalogDesktop products={products} />;
};

export default Catalog;
