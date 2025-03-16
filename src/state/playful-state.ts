/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Playful state of the cat.
 *
 */

import { Cat } from './cat';
import { CatState } from './cat-state';

export class PlayfulState implements CatState {
  private cat: Cat;

  /**
   * Creates an instance of the PlayfulState.
   * @param {Cat} cat - The cat instance that is in this state.
   */
  constructor(cat: Cat) {
    this.cat = cat;
  }

  /**
   * Handles the nudge action when the cat is in a playful state.
   * The cat gets startled and decides it's time to sleep.
   * @returns {void}
   */
  nudge(): void {
    console.log("The cat gets startled and decides it's time to sleep.");
    this.cat.setState(this.cat.getSleepingState());
  }

  /**
   * Handles the feed action when the cat is in a playful state.
   * The cat is too busy playing to eat.
   * @returns {void}
   */
  feed(): void {
    console.log("The cat is too busy playing to eat.");
  }

  /**
   * Handles the pet action when the cat is in a playful state.
   * The cat enjoys the petting and then curls up for a nap.
   * @returns {void}
   */
  pet(): void {
    console.log("Purr... The cat enjoys the petting and then curls up for a nap.");
    this.cat.setState(this.cat.getSleepingState());
  }

  /**
   * Handles the play action when the cat is in a playful state.
   * The cat happily plays with you.
   * @returns {void}
   */
  play(): void {
    console.log("The cat happily plays with you!");
  }

  /**
   * Provides a description of the cat's current state.
   * @returns {string} A description of the cat's state.
   */
  stateDescription(): string {
    return "The cat is playful and full of energy.";
  }
}