import React, { useState } from "react";
import "./Carta.css";

const Carta = () => {
  const [mostrarCarta, setMostrarCarta] = useState(false);

  return (
    <section className="carta">
      <h2>💌 Mi Carta para ti 💌</h2>

      <button className="btn-carta" onClick={() => setMostrarCarta(true)}>
        Descubrir Carta
      </button>

      {mostrarCarta && (
        <div className="overlay">
          <div className="modal abrir">
            <button className="cerrar" onClick={() => setMostrarCarta(false)}>
              ✖
            </button>
            <h3>Para mi Awawa 💖</h3>
            <p>
              Oa awawa,
              Como esta mi awawa, la verdad espero que bien, te quiero escribir esta carta de una manera
              distinta, y puede que te guste o no, pero espero que si mi awawa, la verdad es que le escribo 
              esto para que sepas lo mucho que yo te amo, pero demaciado asi de manera infinita, se que te
              falle un cumpleaños y quiero pedirte otra vez perdon mi awawa, por eso este cumpleaños te quiero
              hacer algo distinto, y espero que te guste muto, este puede que sea el primer regalo, y al final 
              del dia obtendras el mejor regalo, y se que ese no te lo esperas para nada, y se desbloqueara aqui
              a las <strong>22:00 11/06/26</strong>, espero que le guste a mi awawa, y que lo disfrute mucho, y que sepa lo mucho que la amo💖
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carta;
