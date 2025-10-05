import React from "react";

const ThankYou: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-40">
      <h1 className="text-4xl md:text-6xl font-ruslan text-myaso mb-6">
        Спасибо за покупку!
      </h1>
      <p className="text-lg text-black/80 font-sans">
        Ваш заказ обрабатывается. Мы свяжемся с вами в ближайшее время ❤️
      </p>
    </section>
  );
};

export default ThankYou;
