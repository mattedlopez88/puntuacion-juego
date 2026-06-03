// Sistema de puntuacion de un juego.
// Esta clase es la unica responsable de gestionar los puntos de los jugadores (SRP).
export class GestorPuntuacion {
  private puntuaciones = new Map<string, number>();

  // Suma puntos al jugador (parte de cero si es nuevo) y devuelve el total.
  sumarPuntos(jugador: string, puntos: number): number {
    const total = (this.puntuaciones.get(jugador) ?? 0) + puntos;
    this.puntuaciones.set(jugador, total);
    return total;
  }
}
