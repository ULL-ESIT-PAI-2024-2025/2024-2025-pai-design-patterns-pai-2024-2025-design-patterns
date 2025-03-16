/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 10 2025
 * @desc ZombieEnemy is a concrete implementation of an Enemy
 * 
 */

import { Enemy } from './Enemy'

/**
 * @class
 */
export class ZombieEnemy implements Enemy {
  /**
   * This function calculates the damage that the enemy receives from the 
   * original damage.
   * @param damage The original damage
   * @returns The received damage
   */
  public receiveDamage(damage: number): number {
    return damage;
  }

  /**
   * @returns The name of the enemy. In this case, is a 'Zombie'.
   */
  public name(): string {
    return 'Zombie';
  }
}
