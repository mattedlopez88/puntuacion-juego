import { describe, it, expect } from "vitest";
import { GestorPuntuacion } from "@/lib/GestorPuntuacion";

describe("sumarPuntos", () => {
  it("suma puntos a un jugador nuevo partiendo de cero", () => {
    const gestor = new GestorPuntuacion();
    expect(gestor.sumarPuntos("ana", 5)).toBe(5);
  });

  it("acumula puntos en sumas sucesivas", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 5);
    expect(gestor.sumarPuntos("ana", 3)).toBe(8);
  });

  it("mantiene puntuaciones independientes por jugador", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 5);
    expect(gestor.sumarPuntos("luis", 2)).toBe(2);
  });
});

describe("restarPuntos", () => {
  it("resta puntos a un jugador con puntuacion previa", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 10);
    expect(gestor.restarPuntos("ana", 3)).toBe(7);
  });

  it("permite que la puntuacion quede en negativo", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 2);
    expect(gestor.restarPuntos("ana", 5)).toBe(-3);
  });

  it("resta partiendo de cero para un jugador nuevo", () => {
    const gestor = new GestorPuntuacion();
    expect(gestor.restarPuntos("luis", 4)).toBe(-4);
  });
});

describe("obtenerPuntos", () => {
  it("devuelve la puntuacion actual del jugador", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 7);
    expect(gestor.obtenerPuntos("ana")).toBe(7);
  });

  it("devuelve cero para un jugador desconocido", () => {
    const gestor = new GestorPuntuacion();
    expect(gestor.obtenerPuntos("desconocido")).toBe(0);
  });

  it("no modifica la puntuacion al consultarla", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 4);
    gestor.obtenerPuntos("ana");
    expect(gestor.obtenerPuntos("ana")).toBe(4);
  });
});

describe("reiniciarPuntos", () => {
  it("deja en cero la puntuacion del jugador", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 9);
    gestor.reiniciarPuntos("ana");
    expect(gestor.obtenerPuntos("ana")).toBe(0);
  });

  it("solo reinicia al jugador indicado", () => {
    const gestor = new GestorPuntuacion();
    gestor.sumarPuntos("ana", 9);
    gestor.sumarPuntos("luis", 4);
    gestor.reiniciarPuntos("ana");
    expect(gestor.obtenerPuntos("luis")).toBe(4);
  });
});
