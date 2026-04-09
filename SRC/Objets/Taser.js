// herite de weapom + c'est attribue 
import Weapon from "./weapon.js";

export default class Taser extends Weapon {
  constructor() {
    super("Taser", 2);
    this.chance = 0.5;
  }

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