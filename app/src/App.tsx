import React from 'react';
import Header from './components/Header';
// Подключим позже:
// import Hero from './components/Hero';
// import Concept from './components/Concept';
// import Catalog from './components/Catalog';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />

      <main className="pt-20">
        {/* Это место под секции ниже: */}

        {/* <Hero /> */}
        {/* <Concept /> */}
        {/* <Catalog /> */}
        {/* <Footer /> */}
        
        <section className="h-screen flex items-center justify-center bg-gray-100 text-gray-700">
          <p className="text-xl">Здесь скоро будет лендинг «Посикунчик-трек» 🥟</p>
        </section>
      </main>
    </div>
  );
}

export default App;
