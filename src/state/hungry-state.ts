/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Hungry state of the cat.
 *
 */

import { Cat } from './cat';
import { CatState } from './cat-state';

export class HungryState implements CatState {
  private cat: Cat;

  /**
   * Creates an instance of the HungryState.
   * @param {Cat} cat - The cat instance that is in this state.
   */
  constructor(cat: Cat) {
    this.cat = cat;
  }

  /**
   * Handles the nudge action when the cat is in a hungry state.
   * The cat meows softly indicating it is already awake and hungry.
   * @returns {void}
   */
  nudge(): void {
    console.log('The cat meows softly. It\'s already awake and hungry.');
  }

  /**
   * Handles the feed action when the cat is in a hungry state.
   * The cat eats happily and transitions to the playful state.
   * @returns {void}
   */
  feed(): void {
    console.log('Yum! The cat eats happily and becomes playful.');
    this.cat.setState(this.cat.getPlayfulState());
  }

  /**
   * Handles the pet action when the cat is in a hungry state.
   * The cat sniffs you but remains focused on its hunger.
   * @returns {void}
   */
  pet(): void {
    console.log('The cat sniffs you but remains focused on its hunger.');
  }

  /**
   * Handles the play action when the cat is in a hungry state.
   * The cat is too hungry to play and ignores you.
   * @returns {void}
   */
  play(): void {
    console.log('The cat is too hungry to play right now and ignores you.');
  }

  /**
   * Provides a description of the cat's current state.
   * @returns {string} A description of the cat's state.
   */
  stateDescription(): string {
    return 'The cat is hungry and looking for food.';
  }
}