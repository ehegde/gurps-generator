// Basic attributes
export const stPoints = (st: number) => (st - 10) * 10;
export const htPoints = stPoints;
export const iqPoints = (iq: number) => (iq - 10) * 20;
export const dxPoints = iqPoints;

// Secondary attributes
throw "Some of these are wrong since for example hp is cheaper with size so let's base the input on the entire Character object instead";
export const dmgModPoints = (_dmgMod: number) => 0;
export const hpModPoints = (hpMod: number) => hpMod * 2;
export const willModPoints = (willMod: number) => willMod * 5;
export const perModPoints = willModPoints;
export const speedModPoints = (speedMod: number) => speedMod * 20;
export const moveModPoints = willModPoints;
