import { Product } from "../types/product";
import bagImg from "../assets/products/bag.png";
import kurtka from "../assets/products/Куртка.png";
import chehol from "../assets/products/Чехол.png";
import shapka1 from "../assets/products/Шапка1.png";
import shapka2 from "../assets/products/Шапка2.png";
import shapka3 from "../assets/products/Шапка3.png";
import remen1 from "../assets/products/Ремни.png";
import remen2 from "../assets/products/Ремень охра.png";
import remen3 from "../assets/products/Ремень коричневый.png";
import remen4 from "../assets/products/Ремень зелёный.png";
import remen5 from "../assets/products/Ремень градиент1.png";
import carabin1 from "../assets/products/Карабины взрослые.png";
import carabin2 from "../assets/products/Карабин детский.png";
import spichka from "../assets/products/Спичка.png";
import album from "../assets/products/album.png";



export const products: Product[] = [
  {
    id: "1",
    title: "Мембранная куртка",
    description: "Тёплая и лёгкая куртка для активного отдыха",
    image: bagImg,
    defaultVariantId: "1-standart",
    variants: [
      {
        id: "1-standart",
        image: kurtka,
      }
    ],
  },
  {
    id: "2",
    title: "Чехол для куртки",
    description: "Компактный и непромокаемый чехол с креплением к куртке",
    image: chehol,
    variants: [
      {
        id: "2-standart",
        image: chehol,
      },
    ],
  },
  {
    id: "3",
    title: "Шапка",
    description: "Тёплая и стильная шапка из натуральных материалов",
    image: shapka1,
    defaultVariantId: "3-1",
    variants: [
      {
        id: "3-1",
        image: shapka1,
      },
      {
        id: "3-2", 
        image: shapka2,
      },
      {
        id: "3-3", 
        image: shapka3,
      },
    ],
  },
  {
    id: "4",
    title: "Поясная сумка",
    description: "Лёгкая непромокаемая сумка для активного отдыха",
    image: bagImg,
    defaultVariantId: "4-1",
    variants: [
      {
        id: "4-1",
        image: bagImg,
      },
    ],
  },
  {
    id: "5",
    title: "Ремень для сумки",
    description: "Прочный ремень из кордуры",
    image: remen1,
    variants: [
      {
        id: "5-1",
        image: remen1,
      },
      {
        id: "5-2",
        image: remen2,
      },
      {
        id: "5-3",
        image: remen3,
      },
      {
        id: "5-4",
        image: remen4,
      },
      {
        id: "5-5",
        image: remen5,
      },
    ],
  },
  {
    id: "6",
    title: "Карабины",
    description: "Надёжные карабины с гравировкой посикунчика для снаряжения и аксессуаров",
    image: carabin1,
    defaultVariantId: "6-1",
    variants: [
      {
        id: "6-1",
        image: carabin1,
      },
      {
        id: "6-2", 
        image: carabin2,
      },
    ],
  },
  {
    id: "7",
    title: "Вечная спичка",
    description: "Не боится ветра и воды, всегда готова к использованию",
    image: spichka,
    defaultVariantId: "7-1",
    variants: [
      {
        id: "7-1",
        image: spichka,
      }
    ],
  },
  {
    id: "8",
    title: "Детский альбом-путеводитель",
    description: "Непромокаемый альбом для детских находок и воспоминаний",
    image: album,
    defaultVariantId: "8-1",
    variants: [
      {
        id: "8-1",
        image: album,
      }
    ],
  },
];