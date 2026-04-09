export default class Seringue {
  constructor(bonusForce = 4, duree = 3) {
    this.name = "Seringue";
    this.bonusForce = bonusForce;
    this.duree = duree;
  }

  appliquer(cible) {
    cible.ajouterEffet(
      "Boost Seringue",
      this.duree,
      (personnage) => {
        personnage.force += this.bonusForce;
      },
      (personnage) => {
        personnage.force -= this.bonusForce;
      }
    );
  }
}
