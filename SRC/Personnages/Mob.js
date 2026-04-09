import Personnage from "./Perso.js";

export default class Mob extends Personnage {
  constructor(nom, age, sexe, pv, armor, force, etage, loot = []) {
    super(nom, age, sexe, pv, armor, force);
    this.etage = etage;
    this.loot = loot;
    this.battu = false;
  }

  vaincre() {
    this.battu = true;
    return this.loot;
  }
}
