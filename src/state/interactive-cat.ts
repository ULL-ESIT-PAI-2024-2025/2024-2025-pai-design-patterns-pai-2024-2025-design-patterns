/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Eric Ríos Hamilton
 * @since Mar 09 2025
 * @desc Main program to interact with the cat.
 *
 */

import { Cat } from './cat';
import * as readline from 'readline-sync';


function main() {
  const cat = new Cat();
  let command: string;
  console.log('This program intricately simulates the behaviour of a cat.');
  console.log('Commands: nudge, feed, pet, exit');
  do {
    console.log(cat.stateDescription());
    command = readline.question('Enter a command: ').toLowerCase();
    switch (command) {
      case 'nudge':
        cat.nudge();
        break;
      case 'feed':
        cat.feed();
        break;
      case 'pet':
        cat.pet();
        break;
      case 'play':
        cat.play();
        break;
      case 'exit':
        console.log('Exiting the Cat Simulator. Goodbye!');
        break;
      default:
        console.log('Unknown command. Please try again.');
    }
    console.log('\n');
  }
  while (command !== 'exit');
  console.log('Thank you for playing with the cat!');
  console.log(cat.stateDescription());
}

if (require.main === module) {
  main();
}