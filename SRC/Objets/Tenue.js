export default class Tenue {
  constructor(bonusArmor = 3) {
    this.name = "Tenue infirmiere";
    this.bonusArmor = bonusArmor;
  }

  appliquer(cible) {
    cible.armor += this.bonusArmor;
  }
}
