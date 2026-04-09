export default class Cash {
  // Monnaie pour acheter des boosts au distributeur
  constructor(montant = 10) {
    this.name = "Cash";
    this.montant = montant;
  }

  // Ajoute directement le cash au joueur
  appliquer(cible) {
    cible.ajouterCash(this.montant);
  }
}
