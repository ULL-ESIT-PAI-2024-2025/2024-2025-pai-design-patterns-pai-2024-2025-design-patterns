/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 11 2025
 * @desc BigHouseBuilder class is a builder that builds a big house.
 *
 * This class is an example of usage of the `Builder Pattern`.
 */

import { House } from './House';
import { Builder } from './BuilderInterface';

export class BigHouseBuilder implements Builder {
  private hasGarage = false;
  private hasGarden = false;
  private hasStatues = false;
  private static readonly windows = 15;
  private static readonly rooms = 6;
  private static readonly doors = 12;

  /**
   *  Resets to deafault all attributes.
   * */
  public reset(): void {
    this.hasGarage = false;
    this.hasGarden = false;
    this.hasStatues = false;
  }

  /**
   *  Sets the garage value to true.
   *  @returns A reference to the builder.
   * */
  public addGarage(): BigHouseBuilder {
    this.hasGarage = true;
    return this;
  }

  /**
   *  Sets the garden value to true.
   *  @returns A reference to the builder.
   * */
  public addGarden(): BigHouseBuilder {
    this.hasGarden = true;
    return this;
  }

  /**
   *  Sets the statues value to true.
   *  @returns A reference to the builder.
   * */
  public addStatues(): BigHouseBuilder {
    this.hasStatues = true;
    return this;
  }

  /**
   *  Builds the house using the setted values.
   *  @returns The built house.
   * */
  public build(): House {
    return new House(
      BigHouseBuilder.windows, 
      BigHouseBuilder.rooms, 
      BigHouseBuilder.doors, 
      this.hasGarage, 
      this.hasGarden, 
      this.hasStatues);
  }

}
