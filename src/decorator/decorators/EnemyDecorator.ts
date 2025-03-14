/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Roberto Giménez Fuentes
 * @since Mar 10 2025
 * @desc EnemyDecorator abstract class is the base class for all 
 *  decorators that modifies an enemy.
 * 
 * This class is an example of usage of the `Decorator Pattern`.
 */

import { Enemy } from "../enemy/Enemy";

/**
 * @class
 */
export abstract class EnemyDecorator implements Enemy {
  protected enemy: Enemy;

  constructor(enemy: Enemy) {
    this.enemy = enemy;
  }

  /**
   * @returns The name of the enemy.
   */
  public name(): string {
    return this.enemy.name();
  }

  /**
   * Calculates the damage that the enemy received from
   * the original damage.
   * @param damage The original damage
   * @returns The damage after applying decorators
   */
  public abstract receiveDamage(damage: number): number;
}
