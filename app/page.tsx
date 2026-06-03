"use client";

import { useState } from "react";
import { GestorPuntuacion } from "@/lib/GestorPuntuacion";

// La logica de puntuacion vive en GestorPuntuacion (SRP).
// Esta pagina solo gestiona la interaccion con el usuario.
// Instancia a nivel de modulo para conservar los puntos entre renders.
const gestor = new GestorPuntuacion();

export default function Home() {
  const [jugador, setJugador] = useState("");
  const [puntos, setPuntos] = useState("0");
  const [resultado, setResultado] = useState("");

  const cantidad = Number(puntos);

  return (
    <main>
      <h1>Sistema de puntuacion</h1>

      <div>
        <label htmlFor="jugador">Jugador</label>
        <input
          id="jugador"
          type="text"
          value={jugador}
          onChange={(e) => setJugador(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="puntos">Puntos</label>
        <input
          id="puntos"
          type="number"
          value={puntos}
          onChange={(e) => setPuntos(e.target.value)}
        />
      </div>

      <div>
        <button
          onClick={() =>
            setResultado(
              `${jugador} tiene ${gestor.sumarPuntos(jugador, cantidad)} puntos`,
            )
          }
        >
          Sumar puntos
        </button>
        <button
          onClick={() =>
            setResultado(
              `${jugador} tiene ${gestor.restarPuntos(jugador, cantidad)} puntos`,
            )
          }
        >
          Restar puntos
        </button>
      </div>

      <p>Resultado: {resultado}</p>
    </main>
  );
}
