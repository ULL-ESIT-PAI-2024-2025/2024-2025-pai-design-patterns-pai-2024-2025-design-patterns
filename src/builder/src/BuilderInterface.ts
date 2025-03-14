/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Roberto Giménez Fuentes
 * @since Mar 11 2025
 * @desc BuilderInterface interface is a generic interface for House builders
 *
 * This interface is an example of usage of the `Builder Pattern`.
 */

import { House } from './House';

export interface Builder {
  reset(): void;
  build(): House;
  addGarage(): Builder;
  addGarden(): Builder;
  addStatues(): Builder;
}
