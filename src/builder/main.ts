/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Darío Fajardo, Roberto Giménez Fuentes, Eric Ríos Hamilton
 * @since Mar 10 2025
 * @desc Main program to test the HouseBuilder.
 */

import { House } from './src/House'
import { SmallHouseBuilder } from './src/SmallHouseBuilder'
import { BigHouseBuilder } from './src/BigHouseBuilder'
import { LuxuryHouseDirector } from './src/LuxuryHouseDirector'

function main() {
  const smallNormalHouse = new SmallHouseBuilder().build();
  console.log(JSON.stringify(smallNormalHouse.description(), null, 2));

  const bigGarageHouse = new BigHouseBuilder().addGarage().build(); 
  console.log(JSON.stringify(bigGarageHouse.description(), null, 2));

  const luxuryBigHouse = new LuxuryHouseDirector(new BigHouseBuilder()).build();
  console.log(JSON.stringify(luxuryBigHouse.description(), null, 2));z

}

main();

