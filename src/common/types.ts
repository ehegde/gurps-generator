import { StatusIndicatorProps } from "@cloudscape-design/components";

export interface NavigationPanelState {
  collapsed?: boolean;
  collapsedSections?: Record<number, boolean>;
}

export interface Item {
  itemId: string;
  name: string;
  type: string;
  status: StatusIndicatorProps.Type;
  details: number;
}

export interface Factor {
  name: string;
  cost: number;
}

export enum ArmorPieces {
  ARMS,
  BODY,
  GROIN,
  HANDS,
  EYES,
  LEGS,
  TORSO,
  FACE,
  LIMBS,
  FEET,
  NECK,
  FULL_SUIT,
  SKULL
}

export interface Armor extends Factor {
  dr: number;
  pieces: ArmorPieces[];
}

export interface Character {
  bio: {
    name: string;
    player: string;
    description: string;
    appearance: string;
    height: string;
    weight: string;
    age: string;
    unspentPoints: number;
  },
  atts: {
    st: number;
    dx: number;
    iq: number;
    ht: number;
  },
  mods: {
    dmgMod: number;
    hpMod: number;
    willMod: number;
    perMod: number;
    speedMod: number;
    moveMod: number;
    sizeMod: number;
    magicalAptitude: number;
  },
  advantages: Factor[],
  disadvantages: Factor[],
  quirks: Factor[],
  armors: Armor[],
  "equipments": [
    {
      "name": "Gold",
      "qty": "50",
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Cigar - Heal",
      "qty": "2",
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Cigar - Knock Out",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Cigar - Damage",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Cigar - Reg Smokescreen",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Undergarments",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Basic Clothes",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Magical Lighter",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Trench Coat",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Boots",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Provisions - 1 day",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Briefcase",
      "qty": 1,
      "cost": 0,
      "weight": 0
    },
    {
      "name": "Warding Stone - Lvl 1",
      "qty": 1,
      "cost": 0,
      "weight": 0
    }
  ],
  "reactions": [],
  "skills": [
    {
      "id": "alchemy",
      "name": "Alchemy",
      "mod": "1",
      "miscMod": 0,
      "miscModSrc": "",
      "difficultyId": "very-hard",
      "attrId": "iq",
      "catId": "combat",
      "isWildcard": false,
      "defaultId": "",
      "defaultMod": 0
    },
    {
      "id": "fast-draw",
      "name": "Fast Draw",
      "mod": "3",
      "miscMod": 0,
      "miscModSrc": "",
      "difficultyId": "easy",
      "attrId": "dx",
      "catId": "combat",
      "isWildcard": false,
      "defaultId": "",
      "defaultMod": 0
    },
    {
      "id": "poison",
      "name": "Poison (Adjusted to 3E Hard)",
      "mod": "2",
      "miscMod": "-6",
      "miscModSrc": "",
      "difficultyId": "average",
      "attrId": "iq",
      "catId": "other",
      "isWildcard": false,
      "defaultId": "",
      "defaultMod": 0
    },
    {
      "id": "stealth",
      "name": "Stealth",
      "mod": "2",
      "miscMod": "-5",
      "miscModSrc": "",
      "difficultyId": "easy",
      "attrId": "iq",
      "catId": "combat",
      "isWildcard": false,
      "defaultId": "",
      "defaultMod": 0
    }
  ],
  "spells": [
    {
      "name": "Purify Air",
      "mod": "0",
      "miscMod": "0",
      "miscModSrc": "",
      "difficultyId": "hard",
      "attrId": "iq",
      "schoolId": "air"
    },
    {
      "name": "Shape Smoke (Adjust to 3E Hard)",
      "mod": "1",
      "miscMod": 0,
      "miscModSrc": "",
      "difficultyId": "hard",
      "attrId": "iq",
      "schoolId": "air"
    },
    {
      "name": "Breathe Smoke (Adjust to 3E Hard)",
      "mod": "1",
      "miscMod": 0,
      "miscModSrc": "",
      "difficultyId": "hard",
      "attrId": "iq",
      "schoolId": "air"
    },
    {
      "name": "Walk on Smoke",
      "mod": "-1",
      "miscMod": 0,
      "miscModSrc": "",
      "difficultyId": "hard",
      "attrId": "iq",
      "schoolId": "air"
    }
  ]
}