/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 11 2025
 * @desc SmallHouseBuilder class is a builder that builds a small house.
 *
 * This class is an example of usage of the `Builder Pattern`.
 */

import { House } from './House';
import { Builder } from './BuilderInterface';

export class SmallHouseBuilder implements Builder {
  private hasGarage = false;
  private hasGarden = false;
  private hasStatues = false;
  private static readonly windows = 4;
  private static readonly rooms = 2;
  private static readonly doors = 4;

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
  public addGarage(): SmallHouseBuilder {
    this.hasGarage = true;
    return this;
  }

  /**
   *  Sets the garden value to true.
   *  @returns A reference to the builder.
   * */
  public addGarden(): SmallHouseBuilder {
    this.hasGarden = true;
    return this;
  }

  /**
   *  Sets the statues value to true.
   *  @returns A reference to the builder.
   * */
  public addStatues(): SmallHouseBuilder {
    this.hasStatues = true;
    return this;
  }

  /**
   *  Builds the house using the setted values.
   *  @returns The built house.
   * */
  public build(): House {
    return new House(
      SmallHouseBuilder.windows, 
      SmallHouseBuilder.rooms, 
      SmallHouseBuilder.doors, 
      this.hasGarage, 
      this.hasGarden, 
      this.hasStatues);
  }

}
