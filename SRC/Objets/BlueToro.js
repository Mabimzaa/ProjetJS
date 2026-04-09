export default class BlueToro {
  constructor(bonusForce = 3, bonusArmor = 1, duree = 3, prix = 15) {
    this.name = "Blue Toro";
    this.bonusForce = bonusForce;
    this.bonusArmor = bonusArmor;
    this.duree = duree;
    this.prix = prix;
  }

  appliquer(cible) {
    cible.ajouterEffet(
      "Boost Blue Toro",
      this.duree,
      (personnage) => {
        personnage.force += this.bonusForce;
        personnage.armor += this.bonusArmor;
      },
      (personnage) => {
        personnage.force -= this.bonusForce;
        personnage.armor -= this.bonusArmor;
      }
    );
  }
}
