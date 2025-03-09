/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo
 * @since Mar 09 2025
 * @desc Adapter class to explain Adapter pattern
 * 
 * The InventorySystemAdapter class is implemented as an Adapter to convert
 * the interface of an existing Inventory System into a format that the game can use.
 */

/**
 * @description Interface for the external inventory system
 */
interface ExternalInventorySystem {
  /**
   * @description Fetches items from the external inventory system
   * @returns {string[]} The adapted items for the new system
   */
  fetchItems(): string[];
}

/**
 * @description Legacy Inventory System class (existing system)
 */
class LegacyInventorySystem {
  /**
   * @description Retrieves items from the legacy system
   * @returns {string[]} The items retrieved from the legacy system
   */
  retrieveItems(): string[] {
    return ['Gun', 'Ammo'];
  }
}

/**
 * @description Adapter class to integrate the legacy inventory system with the new interface
 */
export class InventorySystemAdapter implements ExternalInventorySystem {
  private legacySystem: LegacyInventorySystem;
  private itemMapping: Record<string, string>;

  /**
   * @description Constructor initializes the legacy system and defines item mappings
   */
  constructor() {
    this.legacySystem = new LegacyInventorySystem();
    this.itemMapping = {
      'Gun': 'Sword',
      'Ammo': 'Potion'
    };
  }

  /**
   * @description Fetches and converts items from the legacy system to the new format
   * @returns {string[]} The adapted items for the game
   */
  fetchItems(): string[] {
    return this.legacySystem.retrieveItems().map(item => this.itemMapping[item] || item);
  }
}

// Example usage
const adapter = new InventorySystemAdapter();
console.log(adapter.fetchItems()); // Output: ['Sword', 'Potion']
