export default class Cash {
  constructor(montant = 10) {
    this.name = "Cash";
    this.montant = montant;
  }

  appliquer(cible) {
    cible.ajouterCash(this.montant);
  }
}
