/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Roberto Giménez Fuentes
 * @since Mar 10 2025
 * @desc Main program to test decorators on enemies.
 */

import { SkeletonEnemy } from "./enemy/SkeletonEnemy";
import { ZombieEnemy } from "./enemy/ZombieEnemy";
import { EnemyChestplateDecorator } from "./decorators/EnemyChestplateDecorator";
import { EnemyHelmetDecorator } from "./decorators/EnemyHelmetDecorator";


function main() {
  let zombie = new ZombieEnemy();
  const originalDamage = 100;
  // Original zombie with no decorators
  console.log(`The ${zombie.name()} received ${zombie.receiveDamage(originalDamage)} points of damage`);

  zombie = new EnemyChestplateDecorator(zombie);
  // Zombie with chestplate
  console.log(`The ${zombie.name()} received ${zombie.receiveDamage(originalDamage)} points of damage`);

  zombie = new EnemyHelmetDecorator(zombie);
  // Zombie with chesplate and helmet
  console.log(`The ${zombie.name()} received ${zombie.receiveDamage(originalDamage)} points of damage`);

  const skeleton = new EnemyChestplateDecorator(new SkeletonEnemy());
  console.log(`The ${skeleton.name()} received ${skeleton.receiveDamage(originalDamage)} points of damage`);
}

if (require.main == module) {
  main();
}


