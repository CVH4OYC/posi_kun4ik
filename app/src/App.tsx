import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Concept from "./components/Concept/Concept";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer";
import ThankYou from "./pages/ThankYou";
import { Product } from "./types/product";
import { useScrollToHash } from "./hooks/useScrollToHash";

import bagImg from "./assets/products/bag.png";

const products: Product[] = [
  {
    id: "1",
    title: "Мембранная куртка",
    description: "Тёплая и лёгкая куртка для активного отдыха.",
    image: bagImg,
  },
  {
    id: "2",
    title: "Сумка-посикунчик",
    description: "Функциональная поясная сумка в стиле посикунчика.",
    image: bagImg,
  },
  {
    id: "3",
    title: "Термокружка",
    description: "Сохраняет напитки горячими до 6 часов.",
    image: bagImg,
  },
  {
    id: "4",
    title: "Мембранная куртка",
    description: "Тёплая и лёгкая куртка для активного отдыха.",
    image: bagImg,
  },
  {
    id: "5",
    title: "Сумка-посикунчик",
    description: "Функциональная поясная сумка в стиле посикунчика.",
    image: bagImg,
  },
  {
    id: "6",
    title: "Термокружка",
    description: "Сохраняет напитки горячими до 6 часов.",
    image: bagImg,
  },
];

function App() {
  return (
    <Router>
      <ScrollWrapper />
    </Router>
  );
}

function ScrollWrapper() {
  useScrollToHash();

  return (
    <div className="font-sans relative min-h-screen flex flex-col">
      {/* Общий фон с блюром */}
      <div className="fixed inset-0 bg-sok/40 backdrop-blur-md -z-50" />

      {/* Хедер */}
      <Header />

      <main className="flex-1 pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="top">
                  <Hero />
                </section>

                <section id="concept">
                  <Concept />
                </section>

                <section id="catalog" className="relative z-10 bg-transparent">
                  <Catalog products={products} />
                </section>
              </>
            }
          />

          {/* Страница "Спасибо за покупку" */}
          <Route path="/thanks" element={<ThankYou />} />
        </Routes>
      </main>

      {/* Footer */}
      <section id="contacts">
        <Footer />
      </section>
    </div>
  );
}

export default App;
