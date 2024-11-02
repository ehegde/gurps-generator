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

export enum ArmorPieces {
  ALL = 'All',
  HEAD = 'Head',
  BODY = 'Body',
  ARMS = 'Arms',
  LEGS = 'Legs',
  HANDS = 'Hands',
  FEET = 'Feet'
}

export interface Factor {
  name: string;
  cost: number;
  notes?: string;
}

// Includes shields in this homebrew as a straight DR item
export interface Armor extends Factor {
  dr: number;
  locations: ArmorPieces[];
}

export interface Item extends Factor {
  qty: number;
}

export interface Advantage extends Factor {
  type: AdvantageType;
}

export interface MeleeWeapon extends Factor {
  dmgType: string;
  dmgAmt: string;
  reach: string;
  lvl: number;
  qty: number;
  parry: string;
}

export enum AdvantageType {
  ADVANTAGE = 'Advantage',
  PERK = 'Perk',
  QUIRK = 'Quirk',
  DISADVANTAGE = 'Disadvantage'
}

export enum SkillType {
  SKILL = 'Skill',
  SPELL = 'Spell'
}

export interface Character {
  bio: {
    name: string;
    player: string;
    notes: string;
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
  attMods: {
    dmgMod: number;
    hpMod: number;
    willMod: number;
    perMod: number;
    speedMod: number;
    moveMod: number;
    sizeMod: number;
    magicalAptitude: number;
  },
  advantages: Advantage[],
  reactions: Factor[],
  armors: Armor[],
  items: Item[],
  meleeWeapons: MeleeWeapon[],
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