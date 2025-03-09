/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Cat class that represents a cat and its states. 
 *        It's a simple state machine.
 *
 */

import { CatState } from './cat-state';
import { SleepingState } from './sleeping-state';
import { HungryState } from './hungry-state';
import { PlayfulState } from './playful-state';

export class Cat {
  private sleepingState: CatState;
  private hungryState: CatState;
  private playfulState: CatState;
  private currentState: CatState;

  constructor() {
    this.sleepingState = new SleepingState(this);
    this.hungryState = new HungryState(this);
    this.playfulState = new PlayfulState(this);
    // Cat starts off sleeping
    this.currentState = this.sleepingState;
  }

  /**
   * @description Sets the current state of the cat.
   * @param {CatState} state - The new state to set.
   */
  setState(state: CatState): void {
    this.currentState = state;
  }

  /**
   * @description Returns the sleeping state of the cat.
   * @returns {CatState} The sleeping state.
   */
  getSleepingState(): CatState {
    return this.sleepingState;
  }

  /**
   * @description Returns the hungry state of the cat.
   * @returns {CatState} The hungry state.
   */
  getHungryState(): CatState {
    return this.hungryState;
  }

  /**
   * @description Returns the playful state of the cat.
   * @returns {CatState} The playful state.
   */
  getPlayfulState(): CatState {
    return this.playfulState;
  }

  // Delegating methods to the current state
  // This is the key part of the State pattern
  /**
   * @description Nudges the cat
   */
  nudge(): void {
    this.currentState.nudge();
  }

  /**
   * @description Feeds the cat
   */
  feed(): void {
    this.currentState.feed();
  }

  /**
   * @description Pets the cat
   */
  pet(): void {
    this.currentState.pet();
  }

  /**
   * @description Plays with the cat
   */
  play(): void {
    this.currentState.play();
  }

  /**
   * @description Returns a description of the cat's state.
   * @returns {string} Description of the cat's state.
   */
  stateDescription(): string {
    return this.currentState.stateDescription();
  }
}