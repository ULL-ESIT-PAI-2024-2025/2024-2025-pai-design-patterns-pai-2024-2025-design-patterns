import { Cat } from '../src/state/cat';

import { describe, it, expect, beforeEach, jest } from '@jest/globals';

describe('Cat State Machine', () => {
  let cat: Cat;

  beforeEach(() => {
    cat = new Cat();
  });

  it('should start in the sleeping state', () => {
    expect(cat.stateDescription()).toBe('The cat is sleeping peacefully.');
  });

  it('should transition to hungry state when nudged from sleeping state', () => {
    cat.nudge();
    expect(cat.stateDescription()).toBe('The cat is hungry and looking for food.');
  });

  it('should not eat when in sleeping state', () => {
    console.log = jest.fn();
    cat.feed();
    expect(console.log).toHaveBeenCalledWith("The cat is sleeping; it can't eat right now.");
  });

  it('should not play when in sleeping state', () => {
    console.log = jest.fn();
    cat.play();
    expect(console.log).toHaveBeenCalledWith('The cat is sleeping and ignores your attempts to play.');
  });

  it('should transition to playful state when fed from hungry state', () => {
    cat.nudge(); // Transition to hungry state
    cat.feed();
    expect(cat.stateDescription()).toBe('The cat is playful and full of energy.');
  });

  it('should not eat when in playful state', () => {
    cat.nudge(); // Transition to hungry state
    cat.feed(); // Transition to playful state
    console.log = jest.fn();
    cat.feed();
    expect(console.log).toHaveBeenCalledWith('The cat is too busy playing to eat.');
  });

  it('should transition to sleeping state when nudged from playful state', () => {
    cat.nudge(); // Transition to hungry state
    cat.feed(); // Transition to playful state
    cat.nudge();
    expect(cat.stateDescription()).toBe('The cat is sleeping peacefully.');
  });

  it('should transition to sleeping state when petted from playful state', () => {
    cat.nudge(); // Transition to hungry state
    cat.feed(); // Transition to playful state
    cat.pet();
    expect(cat.stateDescription()).toBe('The cat is sleeping peacefully.');
  });

  it('should not play when in hungry state', () => {
    cat.nudge(); // Transition to hungry state
    console.log = jest.fn();
    cat.play();
    expect(console.log).toHaveBeenCalledWith('The cat is too hungry to play right now and ignores you.');
  });

  it('should wake up when petted from sleeping state', () => {
    cat.pet();
    expect(cat.stateDescription()).toBe('The cat is hungry and looking for food.');
  });
});