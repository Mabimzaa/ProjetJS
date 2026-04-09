import Weapon from "./weapon.js";

export default class Taser extends Weapon {
  constructor() {
    super("Taser", 2);
    // 50%: l'adversaire perd son tour / 50%: retour de choc sur l'attaquant
    this.chance = 0.5;
  }

  // Effet special du taser, a declencher pendant l'attaque
  effetSpecial(attaquant, cible) {
    const jet = Math.random();
    if (jet < this.chance) {
      cible.skipTurn = true;
      return `${attaquant.nom} electrocute ${cible.nom}, qui perd son tour.`;
    }
    attaquant.skipTurn = true;
    return `${attaquant.nom} se prend son propre taser et perd son tour.`;
  }
}