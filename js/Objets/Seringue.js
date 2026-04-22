export default class Seringue {
  // Boost offensif temporaire (3 tours par defaut)
  constructor(bonusForce = 4, duree = 3) {
    this.name = "Seringue";
    this.bonusForce = bonusForce;
    this.duree = duree;
  }

  // Applique un effet qui monte la force puis l'enleve a expiration
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
