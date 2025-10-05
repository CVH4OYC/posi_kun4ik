// src/types/product.ts
export interface ProductVariant {
  id: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string; // основное изображение (для обратной совместимости)
  variants: ProductVariant[]; // массив вариаций
  defaultVariantId?: string; // ID вариации по умолчанию
}