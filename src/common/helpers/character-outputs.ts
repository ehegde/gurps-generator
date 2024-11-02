import { DAMAGE_TABLE } from "../constants";
import { Character } from "../types";

export const calcDmg = (char: Character) => {
  const st = char.atts.st + char.attMods.dmgMod;
  const dmg = DAMAGE_TABLE[st] ?? { th: "NA", sw: "NA" };

  return `${dmg.th} / ${dmg.sw}`;
}

export const calcHp = (char: Character) => {
  const hp = char.atts.st
}
