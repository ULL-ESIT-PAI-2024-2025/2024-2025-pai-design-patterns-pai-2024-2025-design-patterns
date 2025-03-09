/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo
 * @since Mar 09 2025
 * @desc Chain of Responsibility pattern example
 * 
 * The Chain of Responsibility pattern is implemented to handle game events dynamically.
 * Each handler in the chain decides whether to process the request or pass it to the next handler.
 */

/**
 * @description Interface for handling game events
 * @method setNextHandler: Sets the next handler in the chain
 * @method handle: Processes the event or passes it to the next handler
 */
interface GameEventHandler {
  setNextHandler(handler: GameEventHandler): GameEventHandler;
  handle(event: string): void;
}

/**
 * @description Base class for handling game events
 */
abstract class BaseHandler implements GameEventHandler {
  protected nextHandler: GameEventHandler | null = null;

  /**
   * @description Sets the next handler in the chain
   * @param {GameEventHandler} handler - The next handler in the chain
   * @returns {GameEventHandler} The next handler
   */
  setNextHandler(handler: GameEventHandler): GameEventHandler {
    this.nextHandler = handler;
    return handler;
  }

  /**
   * @description Handles the event or passes it to the next handler
   * @param {string} event - The event to be handled
   */
  handle(event: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(event);
    } else {
      console.log(`No handler found for event: ${event}`);
    }
  }
}

/**
 * @description Handles player attack events
 */
class AttackHandler extends BaseHandler {
  handle(event: string): void {
    if (event === "attack") {
      console.log("Player attacks the enemy!");
    } else {
      super.handle(event);
    }
  }
}

/**
 * @description Handles player defense events
 */
class DefenseHandler extends BaseHandler {
  handle(event: string): void {
    if (event === "defend") {
      console.log("Player blocks the attack!");
    } else {
      super.handle(event);
    }
  }
}

/**
 * @description Handles player healing events
 */
class HealHandler extends BaseHandler {
  handle(event: string): void {
    if (event === "heal") {
      console.log("Player uses a potion to restore health!");
    } else {
      super.handle(event);
    }
  }
}

// Example usage: Creating the chain of responsibility
const attackHandler = new AttackHandler();
const defenseHandler = new DefenseHandler();
const healHandler = new HealHandler();

// Linking the chain: Attack -> Defense -> Heal
attackHandler.setNextHandler(defenseHandler).setNextHandler(healHandler);

// Testing the chain with different events
attackHandler.handle("attack"); // Output: Player attacks the enemy!
attackHandler.handle("defend"); // Output: Player blocks the attack!
attackHandler.handle("heal");   // Output: Player uses a potion to restore health!
attackHandler.handle("jump");   // Output: No handler found for event: jump
