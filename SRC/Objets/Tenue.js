export default class Tenue {
  // Equipement defensif permanent
  constructor(bonusArmor = 3) {
    this.name = "Tenue infirmiere";
    this.bonusArmor = bonusArmor;
  }

  // Augmente l'armure de la cible
  appliquer(cible) {
    cible.armor += this.bonusArmor;
  }
}
