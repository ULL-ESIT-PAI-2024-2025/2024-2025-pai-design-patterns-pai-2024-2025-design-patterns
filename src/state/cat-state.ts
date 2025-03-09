/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Interface for cat states.
 *
 */

export interface CatState {
  nudge(): void;
  feed(): void;
  pet(): void;
  play(): void;
  stateDescription(): string;
}
