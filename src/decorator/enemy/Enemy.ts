/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 10 2025
 * @desc Enemy interface to explain decorator pattern
 * 
 *
 * The Enemy interface is an interface to work with any kind of enemy.
 * We will only care about 'receiveDamage()', but it could implement any
 * method that is common to every enemy.
 */

/**
 *  Interface for Enemy. 
 *  It has basic methods to ilustrate the decorator pattern.
 * */
export interface Enemy {
  /**
   * @returns The name of the enemy
   */
  name(): string;

  /**
   * This function computes the real damage the enemy receives.
   * @param damage The original damage.
   * @returns The actual damage.
   */
  receiveDamage(damage: number): number;
}


