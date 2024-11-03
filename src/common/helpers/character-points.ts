import { Advantage, Character } from "../types";

// Basic attributes
export const stPoints = (char: Character) => (char.atts.st - 10) * 10;
export const htPoints = (char: Character) => (char.atts.ht - 10) * 10;
export const iqPoints = (char: Character) => (char.atts.iq - 10) * 20;
export const dxPoints = (char: Character) => (char.atts.dx - 10) * 20;

// Secondary attributes
export const dmgModPoints = (_char: Character) => 0;
export const hpModPoints = (char: Character) => {
  const hpMod = char.attMods.hpMod;
  const sizeMod = char.attMods.sizeMod;

  let discount = 0;
  if (sizeMod >= 1 && sizeMod <= 8) {
    discount = 0.1 * sizeMod;
  } else if (sizeMod > 8) {
    discount = 0.8;
  }

  return Math.floor((1.0 - discount) * (hpMod * 2));
}
export const willModPoints = (char: Character) => char.attMods.willMod * 5;
export const perModPoints = (char: Character) => char.attMods.perMod * 5;
export const speedModPoints = (char: Character) => char.attMods.speedMod * 20;
export const moveModPoints = (char: Character) => char.attMods.moveMod * 5;

// Advantages, disadvantages, quirks, perks, adjusters
export const advantagesTotalPoints = (char: Character) => char.advantages.reduce(
  (totalPoints, adv) => totalPoints + adv.cost, 0
);
