/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Sleeping state of the cat.
 *
 */

import { Cat } from './cat';
import { CatState } from './cat-state';

export class SleepingState implements CatState {
  private cat: Cat;

  constructor(cat: Cat) {
    this.cat = cat;
  }

  /**
   * @description The cat wakes up when nudged.
   */
  nudge(): void {
    console.log('The cat wakes up with a stretch and looks hungry.');
    this.cat.setState(this.cat.getHungryState());
  }

  /**
   * @description The cat is sleeping and can't eat right now.
   */
  feed(): void {
    console.log('The cat is sleeping; it can\'t eat right now.');
  }

  /**
   * @description The cat wakes up when petted.
   */
  pet(): void {
    console.log('The cat wakes up with a stretch and looks hungry.');
    this.cat.setState(this.cat.getHungryState());
  }

  /**
   * @description The cat is sleeping and can't play right now.
   */
  play(): void {
    console.log('The cat is sleeping and ignores your attempts to play.');
  }

  /**
   * @description Returns a description of the cat's state.
   * @returns {string} Description of the cat's state.
   */
  stateDescription(): string {
    return 'The cat is sleeping peacefully.';
  }
}