/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Simple game class to demonstrate the Singleton pattern.
 *
 */

import { Enemy } from './enemy';
import { GameManager } from './game-manager';
import * as readline from 'readline-sync';

class Game {
  // Access the GameManager singleton instance. If it doesn't exist, it will be created.
  private gameManager = GameManager.getInstance();
  private monster: Enemy;
  private monsterNames: string[] = [
    'Giant Werefrog',
    'Vampire Bat',
    'Zombie',
    'Mummy',
    'Ghost',
    'Skeleton',
  ];

  /**
   * @constructor Initializes a new game instance with a random monster.
   */
  constructor() {
    let randomName: string = this.monsterNames[Math.floor(Math.random() * this.monsterNames.length)];
    this.monster = new Enemy(30, 100, randomName);
  }

  /**
   * @description Displays the player's inventory.
   * @returns {void}
   */
  displayInventory(): void {
    console.log('Your inventory:');
    this.gameManager.getInventory().forEach((item) => {
      console.log(item);
    });
  }

  /**
   * @description Prompts the player to choose an item from the inventory.
   * @returns {void}
   */
  chooseItem(): void {
    let choice: string = readline.question(
      'Choose an item to use...\n'
    );
    // inventory can be accessed through the GameManager singleton
    if (this.gameManager.getInventory().map(item => item.toLowerCase()).includes(choice.toLowerCase())) {
      this.useItem(choice);
    }
    else {
      console.log('Invalid choice. Please try again.');
      this.chooseItem();
    }
  }

  /**
   * @description Uses the specified item.
   * @param {string} item - The item to use.
   * @returns {void}
   */
  useItem(item: string): void {
    if (item === 'Sword') {
      console.log('You swing at the monster with your sword!')
      this.monster.takeDamage(10);
    } else if (item === 'Potion') {
      console.log('You drink the potion and feel refreshed!');
    } else {
      console.log('Unknown item.');
    }
  }

  /**
   * @description Starts the game loop.
   * @returns {void}
   */
  start(): void {
    do {
      console.log(this.monster.encounterText());
      while (this.monster.isAlive()) {
        this.displayInventory();
        this.chooseItem();
        console.log('\n');
      }
      console.log('The monster is defeated! You win!');
      this.monster.defeat();
      console.log(`You have ${this.gameManager.getPoints()} points.`);
      console.log('You beat level ' + this.gameManager.getLevel());
      let choice: string = readline.question(
        'Do you want to continue or reset the game? (reset/continue/any other key to exit)\n'
      );      
      if (choice.toLowerCase() === 'reset') {
        this.gameManager.resetGame();
        console.log('Game reset.');
      }
      else if (choice.toLowerCase() === 'continue') {
        console.log('You delve deeper into the dungeon...');
        this.gameManager.advanceLevel();
        console.log('You are now on level ' + this.gameManager.getLevel());
      }
      else {
        console.log('Exiting game.');
        break;
      }   
      console.log('\n\n');
      let randomName: string = this.monsterNames[Math.floor(Math.random() * this.monsterNames.length)];
      this.monster = new Enemy(30, 100, randomName);
    } while (true);
  }
}

if (require.main === module) {
  const game = new Game();
  game.start();
}