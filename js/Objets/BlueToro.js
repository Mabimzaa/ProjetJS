export default class BlueToro {
  // Boost temporaire mixte (attaque + defense) achetable
  constructor(bonusForce = 3, bonusArmor = 1, duree = 3, prix = 15) {
    this.name = "Blue Toro";
    this.bonusForce = bonusForce;
    this.bonusArmor = bonusArmor;
    this.duree = duree;
    this.prix = prix;
  }

  // Applique puis retire les bonus apres la duree prevue
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
