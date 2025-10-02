import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

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
        <Hero />        {/* Concept, Catalog и т.д. пойдут ниже */}
      </main>
    </div>
  );
}

export default App;
