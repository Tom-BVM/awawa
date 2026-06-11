import React from "react";
import "./Galeria.css";

const Galeria = () => {
  return (
    <section className="galeria">
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/abajoarriba.jpeg`} alt="foto1" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/abrazos.jpeg`} alt="foto2" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/besomicasa.jpeg`} alt="foto3" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/besonoche.jpeg`} alt="foto4" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/dunking.jpeg`} alt="foto5" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/enlossures.jpeg`} alt="foto6" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotococina.jpeg`} alt="foto7" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotolengua.jpeg`} alt="foto8" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotoawawa1.jpeg`} alt="foto9" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotoawawa2.jpeg`} alt="foto10" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotoawawa3.jpeg`} alt="foto11" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotorojo.jpeg`} alt="foto12" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/YioMimiendo.jpeg`} alt="foto13" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/vendia.jpeg`} alt="foto14" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/Rafting.jpeg`} alt="foto15" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/patasplaya.jpeg`} alt="foto16" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/NostrosIA.jpeg`} alt="foto17" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/patasañonuevo.jpeg`} alt="foto18" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/kustman.jpeg`} alt="foto19" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/gorrolentes.jpeg`} alt="foto20" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotoyioycaro.jpeg`} alt="foto21" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fototlabajo.jpeg`} alt="foto22" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotosuffle.jpeg`} alt="foto23" /></div>
      <div className="card"><img src={`${process.env.PUBLIC_URL}/img/fotoplayacomia.jpeg`} alt="foto24" /></div>
    </section>
  );
};

export default Galeria;
