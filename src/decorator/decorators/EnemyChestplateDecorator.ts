/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Roberto Giménez Fuentes
 * @since Mar 10 2025
 * @desc EnemyChestplatetDecorator class is a decorator that adds a chestplate
 * to an enemy.
 * 
 * This class is an example of usage of the `Decorator Pattern`.
 */

import { EnemyDecorator } from "./EnemyDecorator";

export class EnemyChestplateDecorator extends EnemyDecorator {
  /**
   * This function calculates the damage that the enemy receives from the 
   * original damage.
   * @param damage The original damage
   * @returns The received damage minus 10, because the enemy has a chestplate
   */
  public receiveDamage(damage: number): number {
    return this.enemy.receiveDamage(damage) - 10;
  }

}
