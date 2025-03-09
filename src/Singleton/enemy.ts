/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Simple Enemy class to represent an enemy in the game.
 * 
 * It accesses the GameManager singleton to manage game state. 
 * (Not the best idea, but good for showing the pattern off)
 */

import { GameManager } from "./game-manager";

export class Enemy {
  private health: number;
  private name: string;
  private pointValue: number;

  /**
   * @description Creates an instance of an Enemy.
   * @param {number} health - The health of the enemy.
   * @param {number} pointValue - The point value of the enemy.
   * @param {string} [name='Tough Exam'] - The name of the enemy.
   */
  constructor(health: number, pointValue: number, name: string = 'Tough Exam') {
    this.health = health;
    this.name = name;
    this.pointValue = pointValue;
  }

  /**
   * @description Returns the encounter text for the enemy.
   * @returns {string} The encounter text.
   */
  encounterText(): string {
    return `You encounter a ${this.name}!`
  }

  /**
   * @description Reduces the enemy's health by the specified amount.
   * @param {number} amount - The amount of damage to take.
   */
  takeDamage(amount: number): void {
    this.health -= amount;
    console.log(`${this.name} takes ${amount} of damage`);
  }

  /**
   * @description Checks if the enemy is still alive.
   * @returns {boolean} True if the enemy is alive, false otherwise.
   */
  isAlive(): boolean {
    return this.health > 0;
  }

  /**
   * @description Defeats the enemy and adds points to the game state.
   */
  defeat(): void {
    // The gameManager is accessed here. If it 
    // was previously created, no new instance is created.
    let gameManager = GameManager.getInstance();
    gameManager.addPoints(this.pointValue);
  }
}