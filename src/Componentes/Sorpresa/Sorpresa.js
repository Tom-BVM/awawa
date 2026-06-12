import React, { useState, useEffect } from "react";
import "./Sorpresa.css";

const preguntas = [
  {
    texto: "¿Te acuerdas donde salimos la primera vez?",
    opciones: ["Mall Costanera Center", "Distrito de Lujo Mall Alto las Condes", "Mall Plaza Oeste"],
    correcta: 2
  },
  {
    texto: "¿Te acuerdas que comimos cuando salimos al Distrito de Lujo del Mall Alto las condes?",
    opciones: ["Una Burger", "Sushi", "Pollito del KFC"],
    correcta: 0
  },
  {
    texto: "Cuando fuimos al sur ¿Qué te gustaba hacer?",
    opciones: ["Salir al lago", "Ver gatos", "Bañarte en el lago con Lluvia"],
    correctasMultiples: [0,1,2]
  },
  {
    texto: "Cuando fuimos a Valpo ¿qué me pasó?",
    opciones: ["No pasó nada, todo salió bien", "Se me quedaron los pasajes :(", "Tomamos micro equivocada"],
    correcta: 1
  }
];

const Sorpresa = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [showGift, setShowGift] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const targetTime = new Date("2026-06-11T22:20:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetTime - now;
      if (diff <= 0) {
        setActive(true);
        setTimeLeft(null);
        clearInterval(interval);
      } else {
        const h = Math.floor(diff / 1000 / 60 / 60);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${h}h ${m}m ${s}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const preguntasAleatorias = React.useMemo(() => {
    return [...preguntas].sort(() => Math.random() - 0.5);
  }, []);

  const validarRespuesta = () => {
    const pregunta = preguntasAleatorias[currentIndex];
    if (pregunta.correctasMultiples) {
      const correctas = pregunta.correctasMultiples;
      const iguales = correctas.every((c) => selected.includes(c)) && selected.length === correctas.length;
      if (iguales) {
        avanzar();
      } else {
        fallo();
      }
    } else {
      if (selected[0] === pregunta.correcta) {
        avanzar();
      } else {
        fallo();
      }
    }
  };

  const avanzar = () => {
    if (currentIndex + 1 < preguntasAleatorias.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected([]);
    } else {
      setShowGift(true);
    }
  };

  const fallo = () => {
    setErrorModal(true);
    setCurrentIndex(0);
    setSelected([]);
  };

  return (
    <section className="sorpresa">
      <h2>🎁 Tu Sorpresa 🎁</h2>

      {!active && <p>Disponible en: <strong>{timeLeft}</strong></p>}

      {active && !showGift && (
        <div className="quiz">
          <h3>{preguntasAleatorias[currentIndex].texto}</h3>
          <div className="opciones">
            {preguntasAleatorias[currentIndex].opciones.map((op, idx) => (
              <label key={idx} className={selected.includes(idx) ? "seleccionada" : ""}>
                <input
                  type={preguntasAleatorias[currentIndex].correctasMultiples ? "checkbox" : "radio"}
                  name="opcion"
                  value={idx}
                  checked={selected.includes(idx)}
                  onChange={() => {
                    if (preguntasAleatorias[currentIndex].correctasMultiples) {
                      setSelected(
                        selected.includes(idx)
                          ? selected.filter((s) => s !== idx)
                          : [...selected, idx]
                      );
                    } else {
                      setSelected([idx]);
                    }
                  }}
                />
                {String.fromCharCode(65 + idx)}) {op}
              </label>
            ))}
          </div>
          <button onClick={validarRespuesta}>Confirmar</button>
        </div>
      )}

      {showGift && (
        <div className="overlay">
          <div className="modal abrir">
            <button className="cerrar" onClick={() => setShowGift(false)}>✖</button>
            <h3>🎉 ¡Sorpresa! 🎉</h3>
            <img src={`${process.env.PUBLIC_URL}/img/EntradasBTS.jpeg`} alt="Entradas BTS" className="gift-img" />
            <p>
              Este es tu regalo sorpresa mi awawa 💖, no encontré otra forma más divertida de dártelo que de esta manera,  
              y quería que fuera sorpresa para hacerte el día más feliz aún.  
              Qué mejor que terminar el día con esta sorpresa: unas entradas para ir a ver a los chinos coreanos jiji (BTS)  
              en la primera fecha que tienen aquí, el día <strong>Miércoles 14 de Octubre</strong>.  
              Todo porque usted se lo merece mi amor 💖.  
              Espero que lo hayamos pasado bien durante todo el día, y quiero recordarte lo mucho que te amo mi amor 💖.
            </p>
          </div>
        </div>
      )}

      {errorModal && (
        <div className="overlay">
          <div className="modal abrir shake">
            <button className="cerrar" onClick={() => setErrorModal(false)}>✖</button>
            <h3>💔 Respuesta incorrecta 😢</h3>
            <p>Vuelves a la primera pregunta.</p>
            <button className="btn-restart" onClick={() => setErrorModal(false)}>
              Empecemos de nuevo
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sorpresa;
