export default class Gaufrette {
  constructor(soin = 15, prix = 10) {
    this.name = "Gaufrette";
    this.soin = soin;
    this.prix = prix;
  }

  appliquer(cible) {
    cible.pv = Math.min(cible.pvMax, cible.pv + this.soin);
  }
}
