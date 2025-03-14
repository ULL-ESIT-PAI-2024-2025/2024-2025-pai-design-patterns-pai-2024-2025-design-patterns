/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Roberto Giménez Fuentes
 * @since Mar 11 2025
 * @desc LuxuryHouseDirector class is a director that builds a luxury houses.
 * A luxury house is a house that has Garage, Garden and Statues
 *
 * This class is an example of usage of the `Builder Pattern`.
 */

import { House } from './House';
import { Builder } from './BuilderInterface';

export class LuxuryHouseDirector {
  public constructor(private builder: Builder) {}

  /**
   *  Calls the builder using predefined values
   * */
  public build() {
    this.builder.addGarage().addGarden().addStatues();
    return this.builder.build();
  }
}
