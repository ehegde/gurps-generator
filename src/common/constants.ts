import { Character } from "./types";

export const APP_NAME = "GURPS 3E Homebrew Character Generator";
export const USE_BROWSER_ROUTER = true;

export const DEFAULT_CHARACTER: Character = {
  bio: {
    name: "",
    player: "",
    notes: "",
    appearance: "",
    height: "",
    weight: "",
    age: "",
    unspentPoints: 0
  },
  atts: {
    st: 10,
    dx: 10,
    iq: 10,
    ht: 10
  },
  attMods: {
    dmgMod: 0,
    hpMod: 0,
    willMod: 0,
    perMod: 0,
    speedMod: 0,
    moveMod: 0,
    sizeMod: 0,
    magicalAptitude: 0
  },
  advantages: [],
  reactions: [],
  armors: [],
  items: [],
  meleeWeapons: [],
  skills: []
};
