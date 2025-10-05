// src/data/products.ts
import { Product } from "../types/product";
import bagImg from "../assets/products/bag.png";
import kurtka from "../assets/products/Куртка и чехол.png";

export const products: Product[] = [
  {
    id: "1",
    title: "Мембранная куртка",
    description: "Тёплая и лёгкая куртка для активного отдыха.",
    image: bagImg,
    defaultVariantId: "1-green",
    variants: [
      {
        id: "1-green",
        image: bagImg,
      },
      {
        id: "1-orange",
        image: kurtka,
      },
    ],
  },
  {
    id: "2",
    title: "Сумка-посикунчик",
    description: "Функциональная поясная сумка в стиле посикунчика.",
    image: bagImg,
    variants: [
      {
        id: "2-default",
        image: bagImg,
      },
    ],
  },
  {
    id: "3",
    title: "Термокружка",
    description: "Сохраняет напитки горячими до 6 часов.",
    image: bagImg,
    defaultVariantId: "3-blue",
    variants: [
      {
        id: "3-blue",
        image: bagImg,
      },
      {
        id: "3-red", 
        image: bagImg,
      },
    ],
  },
  {
    id: "4",
    title: "Мембранная куртка",
    description: "Тёплая и лёгкая куртка для активного отдыха.",
    image: bagImg,
    defaultVariantId: "1-green",
    variants: [
      {
        id: "1-green",
        image: bagImg,
      },
      {
        id: "1-orange",
        image: kurtka,
      },
    ],
  },
  {
    id: "5",
    title: "Сумка-посикунчик",
    description: "Функциональная поясная сумка в стиле посикунчика.",
    image: bagImg,
    variants: [
      {
        id: "2-default",
        image: bagImg,
      },
    ],
  },
  {
    id: "6",
    title: "Термокружка",
    description: "Сохраняет напитки горячими до 6 часов.",
    image: bagImg,
    defaultVariantId: "3-blue",
    variants: [
      {
        id: "3-blue",
        image: bagImg,
      },
      {
        id: "3-red", 
        image: bagImg,
      },
    ],
  },
];