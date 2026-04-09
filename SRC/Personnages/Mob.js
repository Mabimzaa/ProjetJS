import Personnage from "./Perso.js";

export default class Mob extends Personnage {
  // Classe de base pour tous les ennemis d'etage
  constructor(nom, age, sexe, pv, armor, force, etage, loot = []) {
    super(nom, age, sexe, pv, armor, force);
    this.etage = etage;
    this.loot = loot;
    this.battu = false;
  }

  // Appelée quand le mob est vaincu: marque l'etat et renvoie le loot
  vaincre() {
    this.battu = true;
    return this.loot;
  }
}
