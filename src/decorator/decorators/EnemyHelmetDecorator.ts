/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Roberto Giménez Fuentes
 * @since Mar 10 2025
 * @desc EnemyHelmetDecorator class is a decorator that adds a helmet
 * to an enemy.
 * 
 */

import { EnemyDecorator } from "./EnemyDecorator";

/**
 * @class
 */
export class EnemyHelmetDecorator extends EnemyDecorator {
  /**
   * Calculates the real damage  
   * @param damage The original damage
   * @returns The original damage minus 5, because the enemy has a helmet
   */
  public receiveDamage(damage: number): number {
    return this.enemy.receiveDamage(damage) - 5;
  }
}