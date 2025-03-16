/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc GameStateManager class to explain Singleton pattern
 * 
 * The GameStateManager class is implemented as a Singleton to ensure that only one instance
 * of the class exists throughout the application lifecycle. This is useful for managing
 * the state of the game in a centralized manner.
 */

export class GameManager {
  // Holds the single instance of GameStateManager
  private static instance: GameManager;

  private level: number;
  private inventory: string[];
  private points: number;

  /**
   * @description Returns the single instance of GameStateManager. If the instance does not exist,
   * it creates a new one.
   * 
   * @returns {GameManager} The single instance of GameStateManager.
   */
  public static getInstance(): GameManager {
    return GameManager.instance || (GameManager.instance = new GameManager());
  }

  /**
   * @description Private constructor to prevent direct instantiation.
   * Initializes the game state with default values.
   */
  private constructor() {
    this.level = 1;
    this.inventory = ['Sword', 'Potion'];
    this.points = 0;
  }

  /**
   * @description Resets the GameState to its default values
   * Used for new game, for example
   */
  resetGame(): void {
    this.level = 1;
    this.inventory = ['Sword', 'Potion'];
    this.points = 0;
  }

  /**
   * @description Advances to the next level.
   */
  advanceLevel(): void {
    this.level++;
  }

  /**
   * @description Gets the current level of the game.
   * 
   * @returns {number} The current level.
   */
  getLevel(): number {
    return this.level;
  }

  /**
   * @description Gets the current inventory of the player.
   * 
   * @returns {string[]} The current inventory.
   */
  getInventory(): string[] {
    return this.inventory;
  }

  /**
   * @description Adds points to the current score.
   * 
   * @param {number} addedPoints - The points to add.
   */
  addPoints(addedPoints: number): void {
    this.points += addedPoints;
  }

  /**
   * @description Gets the current points of the player.
   * 
   * @returns {number} The current points.
   */
  getPoints(): number {
    return this.points;
  }
}