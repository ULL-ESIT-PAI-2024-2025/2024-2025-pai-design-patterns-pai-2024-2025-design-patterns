/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 11 2025
 * @desc House class is a class that takes too many parameters,
 * and some of them are optional.
 *
 * This class is an example of usage of the `Builder Pattern`
 */


export class House {
  constructor(
    private windows: number,
    private rooms: number, 
    private doors: number, 
    private hasGarage: boolean, 
    private hasGarden: boolean, 
    private hasStatues: boolean) {}

  public description(): object {
    return {
      windows: this.windows,
      rooms: this.rooms,
      doors: this.doors,
      garage: this.hasGarage,
      garden: this.hasGarden,
      statues: this.hasStatues,
    };
  }

}

