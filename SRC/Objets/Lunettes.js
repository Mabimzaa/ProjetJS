export default class Lunettes {
  constructor() {
    this.name = "Lunettes";
    this.style = "100% style, 0% bonus";
  }

  appliquer(cible) {
    cible.ajouterObjet(this);
  }
}
