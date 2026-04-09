export default class Gaufrette {
  // Consommable de soin achetable au distributeur
  constructor(soin = 15, prix = 10) {
    this.name = "Gaufrette";
    this.soin = soin;
    this.prix = prix;
  }

  // Soigne sans depasser les PV max
  appliquer(cible) {
    cible.pv = Math.min(cible.pvMax, cible.pv + this.soin);
  }
}
