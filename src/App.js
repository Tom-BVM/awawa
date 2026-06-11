import React, { useEffect } from "react";
import Header from "./Componentes/Header/Header";
import Galeria from "./Componentes/Galeria/Galeria";
import Carta from "./Componentes/Carta/Carta";
import Sorpresa from "./Componentes/Sorpresa/Sorpresa";
import Footer from "./Componentes/Footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const emojis = ["💖", "💗", "💓", "💞", "❤️"]; // lista de corazones

    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";

      // elige un emoji aleatorio
      heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      // posición horizontal aleatoria
      heart.style.left = Math.random() * 100 + "vw";
      // tamaño aleatorio
      heart.style.fontSize = Math.random() * 2 + 1 + "rem";
      // duración aleatoria
      heart.style.animationDuration = Math.random() * 3 + 3 + "s";

      document.body.appendChild(heart);

      // eliminar corazón después de la animación
      setTimeout(() => {
        heart.remove();
      }, 6000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <Galeria />
      <Carta />
      <Sorpresa />
      <Footer />
    </div>
  );
}

export default App;
