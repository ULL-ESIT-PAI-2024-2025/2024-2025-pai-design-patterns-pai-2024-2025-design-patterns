/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Test suite for the GameManager singleton class.
 *
 */

import { GameManager } from '../src/singleton/game-manager';
import { describe, it, expect } from '@jest/globals';

describe('GameManager Singleton', () => {
  it('should return the same instance', () => {
    const instance1 = GameManager.getInstance();
    const instance2 = GameManager.getInstance();
    expect(instance1).toBe(instance2);
  });

  it('should initialize with default values', () => {
    const instance = GameManager.getInstance();
    expect(instance.getLevel()).toBe(1);
    expect(instance.getInventory()).toEqual(['Sword', 'Potion']);
    expect(instance.getPoints()).toBe(0);
  });

  it('should reset the game state', () => {
    const instance = GameManager.getInstance();
    instance.addPoints(10);
    expect(instance.getPoints()).toBe(10);
    instance.advanceLevel();
    expect(instance.getLevel()).toBe(2);
    instance.resetGame();
    expect(instance.getLevel()).toBe(1);
    expect(instance.getInventory()).toEqual(['Sword', 'Potion']);
    expect(instance.getPoints()).toBe(0);
  });

  it('should advance the level', () => {
    const instance = GameManager.getInstance();
    instance.resetGame();
    instance.advanceLevel();
    expect(instance.getLevel()).toBe(2);
  });

  it('should add points', () => {
    const instance = GameManager.getInstance();
    instance.resetGame();
    instance.addPoints(10);
    expect(instance.getPoints()).toBe(10);
  });
});