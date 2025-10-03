import React from "react";
import { Product } from "../../types/product";
import meme from "../../assets/memes/lev.png";

interface Props {
  product: Product;
}

const ProductCardMobile: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-testo/80 backdrop-blur-sm shadow-md rounded-md overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-ruslan text-myaso mb-2">{product.title}</h3>
        <p className="text-sm text-black flex-1">{product.description}</p>
        <a
          href={meme}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-sok text-myaso px-4 py-2 rounded-md font-ruslan hover:bg-myaso hover:text-sok transition text-center text-base"
        >
          Купить
        </a>
      </div>
    </div>
  );
};

export default ProductCardMobile;
